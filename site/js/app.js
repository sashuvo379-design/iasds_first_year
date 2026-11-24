/* ==========================================================================
   IASDS Learning Portal — Main Application ES Module
   ========================================================================== */

import {
  getBookmarks,
  getCompletedSet,
  getLastOpened,
  getLessonStatus,
  getPreferredTheme,
  getReadingPrefs,
  isCompleted,
  markVisited,
  removeBookmark,
  resetAllProgress,
  saveReadingPref,
  saveTheme,
  toggleCompleted,
} from './progress.js';
import { initLessonToc, initReadingProgressBar } from './toc.js';
import { initSearchPage } from './search.js';

const ICONS = {
  sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  checkCircle: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>',
  clock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  circle: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>',
  trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>',
};

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('siteToast');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

/* ---------- Theme Management ---------- */
function applyTheme(theme, persist = false) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  document.documentElement.classList.toggle('dark', next === 'dark');
  if (document.body) {
    document.body.classList.toggle('dark', next === 'dark');
  }
  if (persist) saveTheme(next);

  const btn = document.getElementById('siteThemeToggle');
  if (btn) {
    btn.innerHTML = next === 'dark' ? ICONS.sun : ICONS.moon;
    btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    btn.title = next === 'dark' ? 'Switch to light theme (t)' : 'Switch to dark theme (t)';
  }

  window.dispatchEvent(new CustomEvent('iasds:themechange', { detail: { theme: next } }));
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next, true);
  showToast(next === 'dark' ? 'Dark theme enabled' : 'Light theme enabled');
}

/* ---------- Reading Controls & Focus Mode ---------- */
function applyReadingPrefs() {
  const prefs = getReadingPrefs();
  document.documentElement.dataset.fontSize = prefs.fontSize;
  document.documentElement.dataset.lineHeight = prefs.lineHeight;
  document.documentElement.dataset.focusMode = prefs.focusMode ? 'true' : 'false';
  document.documentElement.dataset.sidebarCollapsed = prefs.sidebarCollapsed ? 'true' : 'false';
  document.documentElement.dataset.tocCollapsed = prefs.tocCollapsed ? 'true' : 'false';

  const tocToggleBtn = document.getElementById('tocToggleBtn');
  if (tocToggleBtn) {
    const tocVisible = !prefs.focusMode && !prefs.tocCollapsed;
    tocToggleBtn.setAttribute('aria-expanded', tocVisible ? 'true' : 'false');
    tocToggleBtn.title = tocVisible ? 'Collapse On This Page' : 'Show On This Page';
  }

  document.querySelectorAll('[data-set-font]').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.dataset.setFont === prefs.fontSize ? 'true' : 'false');
  });
  document.querySelectorAll('[data-set-lh]').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.dataset.setLh === prefs.lineHeight ? 'true' : 'false');
  });
  const focusBtn = document.getElementById('focusModeToggle');
  if (focusBtn) {
    focusBtn.setAttribute('aria-pressed', prefs.focusMode ? 'true' : 'false');
    focusBtn.textContent = prefs.focusMode ? 'Exit focus mode' : 'Enter focus mode';
  }
}

function initReadingControls() {
  applyReadingPrefs();

  const menuBtn = document.getElementById('readingControlsBtn');
  const popover = document.getElementById('readingPopover');

  if (menuBtn && popover) {
    menuBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const willOpen = popover.hidden;
      popover.hidden = !willOpen;
      menuBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (ev) => {
      if (!popover.hidden && !popover.contains(ev.target) && !menuBtn.contains(ev.target)) {
        popover.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !popover.hidden) {
        popover.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
  }

  document.querySelectorAll('[data-set-font]').forEach((btn) => {
    btn.addEventListener('click', () => {
      saveReadingPref('fontSize', btn.dataset.setFont);
      applyReadingPrefs();
    });
  });

  document.querySelectorAll('[data-set-lh]').forEach((btn) => {
    btn.addEventListener('click', () => {
      saveReadingPref('lineHeight', btn.dataset.setLh);
      applyReadingPrefs();
    });
  });

  const focusBtn = document.getElementById('focusModeToggle');
  if (focusBtn) {
    focusBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.focusMode !== 'true';
      saveReadingPref('focusMode', next);
      applyReadingPrefs();
      window.dispatchEvent(new Event('resize'));
      showToast(next ? 'Focus mode enabled' : 'Focus mode off');
    });
  }
}

/* ---------- Sidebar Drawer & Collapse ---------- */
function initSidebar() {
  const sidebar = document.getElementById('courseSidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (!sidebar || !toggleBtn) return;

  const isMobile = () => window.innerWidth < 1024;

  const closeDrawer = () => {
    sidebar.dataset.open = 'false';
    if (backdrop) backdrop.hidden = true;
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', () => {
    if (isMobile()) {
      const willOpen = sidebar.dataset.open !== 'true';
      sidebar.dataset.open = willOpen ? 'true' : 'false';
      if (backdrop) backdrop.hidden = !willOpen;
      toggleBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    } else {
      // Desktop collapse toggle
      if (document.documentElement.dataset.focusMode === 'true') {
        saveReadingPref('focusMode', false);
        saveReadingPref('sidebarCollapsed', false);
      } else {
        const nextCollapsed = document.documentElement.dataset.sidebarCollapsed !== 'true';
        saveReadingPref('sidebarCollapsed', nextCollapsed);
      }
      applyReadingPrefs();
      window.dispatchEvent(new Event('resize'));
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && sidebar.dataset.open === 'true') {
      closeDrawer();
    }
  });

  // Right "On This Page" TOC collapse / expand buttons (desktop)
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocCollapseBtn = document.getElementById('tocCollapseBtn');

  const setTocCollapsed = (collapsed) => {
    if (!collapsed && document.documentElement.dataset.focusMode === 'true') {
      saveReadingPref('focusMode', false);
    }
    saveReadingPref('tocCollapsed', collapsed);
    applyReadingPrefs();
    window.dispatchEvent(new Event('resize'));
  };

  if (tocCollapseBtn) {
    tocCollapseBtn.addEventListener('click', () => setTocCollapsed(true));
  }

  if (tocToggleBtn) {
    tocToggleBtn.addEventListener('click', () => {
      const currentlyHidden =
        document.documentElement.dataset.focusMode === 'true' ||
        document.documentElement.dataset.tocCollapsed === 'true';
      setTocCollapsed(!currentlyHidden);
    });
  }
}

/* ---------- Dialog Helpers ---------- */
function initDialogs() {
  document.querySelectorAll('dialog.site-dialog').forEach((dialog) => {
    dialog.addEventListener('click', (ev) => {
      if (ev.target === dialog) dialog.close();
    });
    dialog.querySelectorAll('[data-close-dialog]').forEach((btn) => {
      btn.addEventListener('click', () => dialog.close());
    });
  });

  const helpBtn = document.getElementById('shortcutsHelpBtn');
  const helpDialog = document.getElementById('shortcutsDialog');
  if (helpBtn && helpDialog) {
    helpBtn.addEventListener('click', () => {
      if (helpDialog.open) helpDialog.close();
      else helpDialog.showModal();
    });
  }

  // Reset progress trigger + confirmation dialog
  const resetDialog = document.getElementById('resetProgressDialog');
  const confirmResetBtn = document.getElementById('confirmResetBtn');
  document.querySelectorAll('[data-open-reset-dialog]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (resetDialog) resetDialog.showModal();
    });
  });

  if (confirmResetBtn && resetDialog) {
    confirmResetBtn.addEventListener('click', () => {
      resetAllProgress();
      resetDialog.close();
      showToast('All study progress and bookmarks cleared');
      window.setTimeout(() => window.location.reload(), 350);
    });
  }
}

/* ---------- Home Page Hydration ---------- */
function initHomePage() {
  const completed = getCompletedSet();
  const root = document.documentElement.dataset.root || './';

  // Per-course cards
  const cards = Array.from(document.querySelectorAll('[data-course-card]'));
  let totalLessons = 0;
  let totalDone = 0;

  for (const card of cards) {
    const lessonIds = (card.dataset.lessonIds || '').split(',').filter(Boolean);
    const done = lessonIds.filter((id) => completed.has(id)).length;
    totalLessons += lessonIds.length;
    totalDone += done;
    const pct = lessonIds.length ? Math.round((done / lessonIds.length) * 100) : 0;

    const textEl = card.querySelector('[data-course-progress-text]');
    const pctEl = card.querySelector('[data-course-progress-pct]');
    const fillEl = card.querySelector('[data-course-progress-fill]');
    if (textEl) textEl.textContent = `${done} of ${lessonIds.length} completed`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  }

  // Overall progress bar
  const overallDoneEl = document.getElementById('overallCompletedCount');
  const overallPctEl = document.getElementById('overallProgressPct');
  const overallFillEl = document.getElementById('overallProgressFill');
  const overallPct = totalLessons ? Math.round((totalDone / totalLessons) * 100) : 0;
  if (overallDoneEl) overallDoneEl.textContent = `${totalDone} / ${totalLessons}`;
  if (overallPctEl) overallPctEl.textContent = `${overallPct}%`;
  if (overallFillEl) overallFillEl.style.width = `${overallPct}%`;

  // Continue where you left off + Saved Bookmarks
  const utilityGrid = document.getElementById('homeUtilityGrid');
  const continueCard = document.getElementById('continueCard');
  const savedCard = document.getElementById('savedBookmarksCard');
  const last = getLastOpened();
  let visiblePanels = 0;

  if (continueCard && last && last.url) {
    continueCard.hidden = false;
    visiblePanels++;
    const titleEl = document.getElementById('continueTitle');
    const metaEl = document.getElementById('continueMeta');
    const linkEl = document.getElementById('continueLink');
    if (titleEl) titleEl.textContent = last.title;
    if (metaEl) {
      const when = last.timestamp ? new Date(last.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '';
      metaEl.textContent = `${last.courseCode} · ${last.courseName}${when ? ` · Last opened ${when}` : ''}`;
    }
    if (linkEl) linkEl.href = `${root}${last.url}`;
  }

  const renderSavedBookmarks = () => {
    const bookmarks = getBookmarks();
    const listEl = document.getElementById('savedBookmarksList');
    if (!savedCard || !listEl) return;

    if (!bookmarks.length) {
      savedCard.hidden = true;
      if (utilityGrid) {
        const hasContinue = continueCard && !continueCard.hidden;
        utilityGrid.hidden = !hasContinue;
        utilityGrid.classList.remove('home-utility-grid--both');
      }
      return;
    }

    savedCard.hidden = false;
    listEl.innerHTML = '';
    for (const bm of bookmarks) {
      const li = document.createElement('li');
      li.className = 'saved-list__item';

      const link = document.createElement('a');
      link.className = 'saved-list__link';
      link.href = `${root}${bm.url}`;
      const titleSpan = document.createElement('span');
      titleSpan.textContent = bm.headingText;
      const subSpan = document.createElement('span');
      subSpan.className = 'saved-list__sub';
      subSpan.textContent = `${bm.courseCode} · ${bm.lessonTitle}`;
      link.appendChild(titleSpan);
      link.appendChild(subSpan);

      const delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'btn btn--ghost btn--icon';
      delBtn.setAttribute('aria-label', `Remove saved section ${bm.headingText}`);
      delBtn.title = 'Remove bookmark';
      delBtn.innerHTML = ICONS.trash;
      delBtn.addEventListener('click', () => {
        removeBookmark(bm.id);
        renderSavedBookmarks();
        showToast('Bookmark removed');
      });

      li.appendChild(link);
      li.appendChild(delBtn);
      listEl.appendChild(li);
    }

    if (utilityGrid) {
      utilityGrid.hidden = false;
      const hasContinue = continueCard && !continueCard.hidden;
      utilityGrid.classList.toggle('home-utility-grid--both', Boolean(hasContinue));
    }
  };

  renderSavedBookmarks();

  if (utilityGrid) {
    const hasSaved = savedCard && !savedCard.hidden;
    utilityGrid.hidden = visiblePanels === 0 && !hasSaved;
    utilityGrid.classList.toggle('home-utility-grid--both', visiblePanels > 0 && hasSaved);
  }
}

/* ---------- Course Page Hydration ---------- */
function initCoursePage() {
  const rows = Array.from(document.querySelectorAll('[data-lesson-row]'));
  const total = rows.length;
  let completedCount = 0;

  for (const row of rows) {
    const id = row.dataset.lessonId;
    const status = getLessonStatus(id);
    if (status === 'completed') completedCount++;
    row.dataset.status = status;

    const badge = row.querySelector('[data-status-badge]');
    if (badge) {
      badge.dataset.status = status;
      if (status === 'completed') {
        badge.innerHTML = `${ICONS.checkCircle}<span>Completed</span>`;
      } else if (status === 'in-progress') {
        badge.innerHTML = `${ICONS.clock}<span>In progress</span>`;
      } else {
        badge.innerHTML = `${ICONS.circle}<span>Not started</span>`;
      }
    }
  }

  const pct = total ? Math.round((completedCount / total) * 100) : 0;
  const countEl = document.getElementById('courseCompletedText');
  const pctEl = document.getElementById('courseProgressPct');
  const fillEl = document.getElementById('courseProgressFill');
  if (countEl) countEl.textContent = `${completedCount} of ${total} lessons completed`;
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (fillEl) fillEl.style.width = `${pct}%`;

  // Filter chips
  const filters = document.getElementById('courseFilterBar');
  const emptyMsg = document.getElementById('courseFilterEmpty');
  if (filters) {
    filters.addEventListener('click', (ev) => {
      const chip = ev.target.closest('.filter-chip');
      if (!chip) return;
      const filter = chip.dataset.filter || 'all';
      filters.querySelectorAll('.filter-chip').forEach((c) => {
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      let visible = 0;
      for (const row of rows) {
        const show = filter === 'all' || row.dataset.status === filter;
        row.hidden = !show;
        if (show) visible++;
      }
      if (emptyMsg) emptyMsg.hidden = visible > 0;
    });
  }
}

/* ---------- Lesson Page Hydration ---------- */
function initLessonPage() {
  const metaEl = document.getElementById('lessonMetaData');
  if (!metaEl) return;

  const lessonMeta = {
    id: metaEl.dataset.lessonId,
    title: metaEl.dataset.lessonTitle,
    courseCode: metaEl.dataset.courseCode,
    courseName: metaEl.dataset.courseName,
    url: metaEl.dataset.lessonUrl,
  };

  // Mark visited & update "Continue where you left off"
  markVisited(lessonMeta);

  // Sync sidebar completion icons & progress bar
  const syncSidebarAndButton = () => {
    const done = isCompleted(lessonMeta.id);
    const btn = document.getElementById('markCompleteBtn');
    if (btn) {
      btn.setAttribute('aria-pressed', done ? 'true' : 'false');
      btn.classList.toggle('btn--success', done);
      btn.classList.toggle('btn--secondary', !done);
      btn.innerHTML = done
        ? `${ICONS.checkCircle}<span>Completed</span>`
        : `${ICONS.circle}<span>Mark as complete</span>`;
    }

    const completedSet = getCompletedSet();
    const sidebarLinks = Array.from(document.querySelectorAll('.sidebar-nav-link[data-lesson-id]'));
    let courseDone = 0;
    for (const link of sidebarLinks) {
      const isDone = completedSet.has(link.dataset.lessonId);
      if (isDone) courseDone++;
      link.dataset.completed = isDone ? 'true' : 'false';
      const iconSlot = link.querySelector('.sidebar-nav-link__icon');
      if (iconSlot) {
        iconSlot.innerHTML = isDone ? ICONS.checkCircle : ICONS.circle;
      }
    }

    const pct = sidebarLinks.length ? Math.round((courseDone / sidebarLinks.length) * 100) : 0;
    const textEl = document.getElementById('sidebarProgressText');
    const fillEl = document.getElementById('sidebarProgressFill');
    if (textEl) textEl.textContent = `${courseDone}/${sidebarLinks.length} done`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  };

  syncSidebarAndButton();

  const toggleLessonComplete = () => {
    const nowDone = toggleCompleted(lessonMeta.id);
    syncSidebarAndButton();
    showToast(nowDone ? 'Lesson marked as complete' : 'Lesson marked as incomplete');
  };

  const completeBtn = document.getElementById('markCompleteBtn');
  if (completeBtn) {
    completeBtn.addEventListener('click', toggleLessonComplete);
  }

  initReadingProgressBar();
  initLessonToc(lessonMeta, showToast);

  return { toggleLessonComplete };
}

/* ---------- Global Keyboard Shortcuts ---------- */
function initKeyboardShortcuts(lessonActions) {
  const root = document.documentElement.dataset.root || './';
  let isNavigating = false;

  const isTyping = (target) => {
    if (!target) return false;
    const tag = (target.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable;
  };

  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.metaKey || ev.altKey || ev.repeat) return;
    if (isTyping(ev.target)) return;

    if (ev.key === '/') {
      ev.preventDefault();
      ev.stopPropagation();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      } else if (!isNavigating) {
        isNavigating = true;
        window.location.href = `${root}search/index.html`;
      }
      return;
    }

    if (ev.key === 't' || ev.key === 'T') {
      ev.preventDefault();
      toggleTheme();
      return;
    }

    if (ev.key === '?') {
      ev.preventDefault();
      const dialog = document.getElementById('shortcutsDialog');
      if (dialog) {
        if (dialog.open) dialog.close();
        else dialog.showModal();
      }
      return;
    }

    if (ev.key === 'm' || ev.key === 'M') {
      if (lessonActions && lessonActions.toggleLessonComplete) {
        ev.preventDefault();
        lessonActions.toggleLessonComplete();
      }
      return;
    }

    if (ev.key === 'ArrowLeft') {
      const prev = document.getElementById('prevLessonLink');
      if (prev && prev.href && !isNavigating) {
        ev.preventDefault();
        isNavigating = true;
        window.location.href = prev.href;
      }
      return;
    }

    if (ev.key === 'ArrowRight') {
      const next = document.getElementById('nextLessonLink');
      if (next && next.href && !isNavigating) {
        ev.preventDefault();
        isNavigating = true;
        window.location.href = next.href;
      }
    }
  });
}

/* ---------- Boot ---------- */
function boot() {
  // Apply saved or system theme
  applyTheme(getPreferredTheme(), false);

  const themeBtn = document.getElementById('siteThemeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Respect system preference changes if the user has not set a manual preference
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (ev) => {
      try {
        if (!window.localStorage.getItem('iasds_theme_v1')) {
          applyTheme(ev.matches ? 'dark' : 'light', false);
        }
      } catch {
        // ignore
      }
    });
  }

  initReadingControls();
  initSidebar();
  initDialogs();

  const pageType = document.body ? document.body.dataset.page : '';
  let lessonActions = null;

  if (pageType === 'home') {
    initHomePage();
  } else if (pageType === 'course') {
    initCoursePage();
  } else if (pageType === 'lesson') {
    lessonActions = initLessonPage();
  } else if (pageType === 'search') {
    initSearchPage();
  }

  initKeyboardShortcuts(lessonActions);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
