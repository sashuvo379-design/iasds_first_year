/* ==========================================================================
   IASDS Table of Contents, Scrollspy, Reading Bar & Section Bookmarks
   ========================================================================== */

import { isBookmarked, toggleBookmark } from './progress.js';

const BOOKMARK_SVG =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 64) || 'section';
}

function readableMathText(str) {
  return str
    .replace(/\$([^$]+)\$/g, (_, expr) =>
      expr
        .replace(/\\mathbb\{R\}\^n/g, 'ℝⁿ')
        .replace(/\\mathbb\{R\}\^3/g, 'ℝ³')
        .replace(/\\mathbb\{R\}\^2/g, 'ℝ²')
        .replace(/\\mathbb\{R\}/g, 'ℝ')
        .replace(/\\(?:text|mathrm|mathbf|operatorname|mathcal)\{([^}]+)\}/g, '$1')
        .replace(/\\varepsilon|\\epsilon/g, 'ε')
        .replace(/\\delta/g, 'δ')
        .replace(/\\sigma/g, 'σ')
        .replace(/\\mu/g, 'μ')
        .replace(/\\Omega/g, 'Ω')
        .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}|\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1$3)/($2$4)')
        .replace(/[{}]/g, '')
        .trim()
    )
    .replace(/\s+/g, ' ')
    .trim();
}

function getCleanHeadingText(el) {
  const clone = el.cloneNode(true);
  clone.querySelectorAll('.heading-bookmark-btn, .katex-mathml').forEach((n) => n.remove());
  return readableMathText(clone.textContent || '');
}

export function initReadingProgressBar() {
  const fill = document.getElementById('siteReadingProgressFill');
  if (!fill) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) {
      fill.style.width = '0%';
      return;
    }
    const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    fill.style.width = `${pct.toFixed(1)}%`;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  window.addEventListener('resize', update, { passive: true });
  update();
}

export function initLessonToc(lessonMeta, onNotify) {
  const container = document.querySelector('.lesson-content');
  const desktopList = document.getElementById('desktopTocList');
  const mobileList = document.getElementById('mobileTocList');
  const mobileTocWrap = document.getElementById('mobileTocWrap');
  const tocAside = document.getElementById('tocAside');

  if (!container) return;

  const rawHeadings = Array.from(container.querySelectorAll('h2, h3')).filter((h) => {
    if (h.classList.contains('lesson-dup-heading') || h.classList.contains('sr-only')) return false;
    // Skip hidden headings inside non-active tabs only if completely empty
    const text = getCleanHeadingText(h);
    return text.length > 0;
  });

  if (rawHeadings.length === 0) {
    if (tocAside) tocAside.hidden = true;
    if (mobileTocWrap) mobileTocWrap.hidden = true;
    return;
  }

  const usedIds = new Set(
    Array.from(document.querySelectorAll('[id]'))
      .filter((el) => !rawHeadings.includes(el))
      .map((el) => el.id)
  );

  const items = [];
  for (const h of rawHeadings) {
    const text = getCleanHeadingText(h);
    let id = h.id && !usedIds.has(h.id) ? h.id : slugify(text);
    let suffix = 2;
    while (usedIds.has(id)) {
      id = `${slugify(text)}-${suffix++}`;
    }
    usedIds.add(id);
    h.id = id;

    const level = h.tagName.toLowerCase(); // 'h2' or 'h3'
    items.push({ el: h, id, text, level });

    // Attach bookmark button to every section heading
    if (!h.querySelector('.heading-bookmark-btn')) {
      const bookmarkId = `${lessonMeta.id}#${id}`;
      const saved = isBookmarked(bookmarkId);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'heading-bookmark-btn';
      btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
      btn.setAttribute('aria-label', saved ? `Remove bookmark for ${text}` : `Bookmark section: ${text}`);
      btn.title = saved ? 'Remove bookmark' : 'Bookmark this section';
      btn.innerHTML = BOOKMARK_SVG;
      btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const nowSaved = toggleBookmark({
          id: bookmarkId,
          lessonId: lessonMeta.id,
          courseCode: lessonMeta.courseCode,
          lessonTitle: lessonMeta.title,
          headingText: text,
          url: `${lessonMeta.url}#${id}`,
        });
        btn.setAttribute('aria-pressed', nowSaved ? 'true' : 'false');
        btn.setAttribute(
          'aria-label',
          nowSaved ? `Remove bookmark for ${text}` : `Bookmark section: ${text}`
        );
        btn.title = nowSaved ? 'Remove bookmark' : 'Bookmark this section';
        if (onNotify) {
          onNotify(nowSaved ? 'Section saved to bookmarks' : 'Bookmark removed');
        }
      });
      h.appendChild(btn);
    }
  }

  const buildList = (targetUl, closeMobileDetails) => {
    if (!targetUl) return [];
    targetUl.innerHTML = '';
    const links = [];
    for (const item of items) {
      const li = document.createElement('li');
      li.className = `toc-item toc-item--${item.level}`;
      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = `#${item.id}`;
      a.textContent = item.text;
      a.dataset.tocId = item.id;
      a.addEventListener('click', () => {
        if (closeMobileDetails && mobileTocWrap) {
          mobileTocWrap.open = false;
        }
      });
      li.appendChild(a);
      targetUl.appendChild(li);
      links.push(a);
    }
    return links;
  };

  const desktopLinks = buildList(desktopList, false);
  const mobileLinks = buildList(mobileList, true);
  const allLinks = [...desktopLinks, ...mobileLinks];

  const setActive = (id) => {
    for (const link of allLinks) {
      const active = link.dataset.tocId === id;
      link.classList.toggle('is-active', active);
      if (active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  };

  // Scrollspy via IntersectionObserver with scroll fallback
  const visibleMap = new Map();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleMap.set(entry.target.id, entry.isIntersecting);
        }
        const firstVisible = items.find((it) => visibleMap.get(it.id));
        if (firstVisible) {
          setActive(firstVisible.id);
        } else {
          // Pick the last heading above the top fold
          const threshold = window.scrollY + 120;
          let current = items[0].id;
          for (const it of items) {
            const top = it.el.getBoundingClientRect().top + window.scrollY;
            if (top <= threshold) current = it.id;
          }
          setActive(current);
        }
      },
      { rootMargin: '-72px 0px -70% 0px', threshold: 0 }
    );

    for (const it of items) {
      observer.observe(it.el);
    }
  }

  setActive(items[0].id);
}
