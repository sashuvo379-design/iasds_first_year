/* ==========================================================================
   IASDS Full-Text Client-Side Search
   Loads build-time data/search-index.json, scores matches, highlights terms,
   and groups results by course.
   ========================================================================== */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text, terms) {
  const safe = escapeHtml(text);
  if (!terms.length) return safe;
  const pattern = new RegExp(`(${terms.map(escapeRegex).join('|')})`, 'gi');
  return safe.replace(pattern, '<mark>$1</mark>');
}

function buildSnippet(content, terms) {
  if (!content) return '';
  const lower = content.toLowerCase();
  let bestIdx = -1;
  for (const t of terms) {
    const idx = lower.indexOf(t);
    if (idx >= 0 && (bestIdx === -1 || idx < bestIdx)) {
      bestIdx = idx;
    }
  }
  const start = bestIdx > 60 ? bestIdx - 60 : 0;
  const end = Math.min(content.length, start + 210);
  let slice = content.slice(start, end).trim();
  if (start > 0) slice = '…' + slice;
  if (end < content.length) slice = slice + '…';
  return highlightText(slice, terms);
}

export async function initSearchPage() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const statusEl = document.getElementById('searchStatus');
  const resultsEl = document.getElementById('searchResults');
  const filterWrap = document.getElementById('searchCourseFilters');

  if (!input || !resultsEl) return;

  const root = document.documentElement.dataset.root || '../';
  let indexData = null;
  let activeCourse = 'all';

  try {
    const resp = await fetch(`${root}data/search-index.json`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    indexData = await resp.json();
  } catch (err) {
    if (statusEl) {
      statusEl.textContent = 'Could not load the search index. Please make sure the site is served over HTTP.';
    }
    return;
  }

  const docs = indexData.documents || [];
  const courses = indexData.courses || [];

  // Render course filter chips
  if (filterWrap) {
    const allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = 'filter-chip';
    allChip.dataset.course = 'all';
    allChip.setAttribute('aria-pressed', 'true');
    allChip.textContent = `All courses (${docs.length})`;
    filterWrap.appendChild(allChip);

    for (const c of courses) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-chip';
      btn.dataset.course = c.code;
      btn.setAttribute('aria-pressed', 'false');
      btn.textContent = c.code;
      filterWrap.appendChild(btn);
    }

    filterWrap.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.filter-chip');
      if (!btn) return;
      activeCourse = btn.dataset.course || 'all';
      filterWrap.querySelectorAll('.filter-chip').forEach((chip) => {
        chip.setAttribute('aria-pressed', chip === btn ? 'true' : 'false');
      });
      runSearch();
    });
  }

  const runSearch = () => {
    const rawQuery = input.value.trim();
    if (clearBtn) clearBtn.hidden = rawQuery.length === 0;

    // Update URL query string cleanly without adding history clutter
    try {
      const url = new URL(window.location.href);
      if (rawQuery) url.searchParams.set('q', rawQuery);
      else url.searchParams.delete('q');
      window.history.replaceState(null, '', url.toString());
    } catch {
      // ignore on file://
    }

    const pool = activeCourse === 'all' ? docs : docs.filter((d) => d.courseCode === activeCourse);

    if (!rawQuery) {
      statusEl.textContent = `Type a keyword, theorem, formula name, or topic to search across ${pool.length} lessons.`;
      resultsEl.innerHTML = '';
      return;
    }

    const terms = rawQuery
      .toLowerCase()
      .split(/\s+/)
      .filter((t) => t.length >= 2);

    if (!terms.length) {
      statusEl.textContent = 'Enter at least 2 characters to search.';
      resultsEl.innerHTML = '';
      return;
    }

    const scored = [];
    for (const doc of pool) {
      const titleLower = doc.title.toLowerCase();
      const headingsLower = (doc.headings || []).join(' ').toLowerCase();
      const bodyLower = (doc.text || '').toLowerCase();
      const codeLower = doc.courseCode.toLowerCase();

      let score = 0;
      let matchedTerms = 0;

      for (const term of terms) {
        let termHit = false;
        if (titleLower.includes(term)) {
          score += 24;
          termHit = true;
        }
        if (codeLower.includes(term)) {
          score += 12;
          termHit = true;
        }
        if (headingsLower.includes(term)) {
          score += 10;
          termHit = true;
        }
        const bodyIdx = bodyLower.indexOf(term);
        if (bodyIdx >= 0) {
          score += 4;
          // Small boost for repeated mentions
          const occurrences = bodyLower.split(term).length - 1;
          score += Math.min(occurrences, 8);
          termHit = true;
        }
        if (termHit) matchedTerms++;
      }

      // Require all search terms to match somewhere in the document
      if (matchedTerms === terms.length && score > 0) {
        scored.push({ doc, score });
      }
    }

    scored.sort((a, b) => b.score - a.score || a.doc.order - b.doc.order);

    if (!scored.length) {
      statusEl.textContent = `No matches found for “${rawQuery}”. Try a broader term or switch course filters.`;
      resultsEl.innerHTML = '';
      return;
    }

    // Group by course in canonical curriculum order
    const courseOrder = new Map(courses.map((c, i) => [c.code, i]));
    const groups = new Map();
    for (const item of scored) {
      const code = item.doc.courseCode;
      if (!groups.has(code)) {
        groups.set(code, {
          courseCode: code,
          courseName: item.doc.courseName,
          items: [],
        });
      }
      groups.get(code).items.push(item);
    }

    const sortedGroups = [...groups.values()].sort(
      (a, b) => (courseOrder.get(a.courseCode) ?? 99) - (courseOrder.get(b.courseCode) ?? 99)
    );

    statusEl.textContent = `Found ${scored.length} matching ${scored.length === 1 ? 'lesson' : 'lessons'} across ${sortedGroups.length} ${sortedGroups.length === 1 ? 'course' : 'courses'}.`;

    const fragment = document.createDocumentFragment();
    for (const group of sortedGroups) {
      const section = document.createElement('section');
      section.className = 'search-group';

      const heading = document.createElement('h2');
      heading.className = 'search-group__title';
      heading.innerHTML = `<span class="course-code">${escapeHtml(group.courseCode)}</span> <span>${escapeHtml(group.courseName)}</span>`;
      section.appendChild(heading);

      const ul = document.createElement('ul');
      ul.className = 'search-result-list';

      for (const { doc } of group.items) {
        const li = document.createElement('li');
        li.className = 'search-result';

        const link = document.createElement('a');
        link.className = 'search-result__title';
        link.href = `${root}${doc.url}`;
        link.innerHTML = `Lesson ${doc.lessonNumber}: ${highlightText(doc.title, terms)}`;
        li.appendChild(link);

        if (doc.stars) {
          const badgeWrap = document.createElement('div');
          badgeWrap.className = 'lesson-row__badges';
          const sb = document.createElement('span');
          sb.className = `star-badge star-badge--${doc.stars}`;
          sb.textContent = `${'★'.repeat(doc.stars)} ${doc.stars === 3 ? 'High-yield' : doc.stars === 2 ? 'Regular' : 'Low-yield'}`;
          badgeWrap.appendChild(sb);
          if (doc.frequencyTag) {
            const pill = document.createElement('span');
            pill.className = 'scope-pill';
            pill.textContent = doc.frequencyTag;
            badgeWrap.appendChild(pill);
          }
          li.appendChild(badgeWrap);
        }

        const snippet = document.createElement('p');
        snippet.className = 'search-result__snippet';
        snippet.innerHTML = buildSnippet(doc.text, terms);
        li.appendChild(snippet);

        ul.appendChild(li);
      }

      section.appendChild(ul);
      fragment.appendChild(section);
    }

    resultsEl.innerHTML = '';
    resultsEl.appendChild(fragment);
  };

  // Pre-fill from URL ?q=
  const params = new URLSearchParams(window.location.search);
  const initialQ = params.get('q') || '';
  if (initialQ) {
    input.value = initialQ;
  }

  let debounceTimer = null;
  input.addEventListener('input', () => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(runSearch, 90);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      runSearch();
    });
  }

  runSearch();
}
