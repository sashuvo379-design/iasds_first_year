/* ==========================================================================
   IASDS Lesson Compatibility & Content Enhancement Layer
   Guarantees zero runtime errors in extracted interactive lesson scripts,
   bridges light/dark theme to canvases, adds table scroll wrappers,
   code-block copy buttons, and image/diagram click-to-zoom lightbox.
   ========================================================================== */

(function () {
  'use strict';

  // 1. Inert compatibility stubs for removed standalone lesson chrome IDs
  const LEGACY_CHROME_IDS = [
    'sidebar',
    'sidebarOverlay',
    'sidebar-backdrop',
    'mobile-menu-btn',
    'close-sidebar-btn',
    'menuToggle',
    'themeToggle',
    'themeBtn',
    'theme-toggle',
    'themeIcon',
    'themeText',
    'reading-progress',
    'readingProgressBar',
    'scrollFill',
    'progress-text',
    'progress-fill',
    'progressText',
    'progressBar',
    'progressFill',
    'progressPct',
    'progressDetail',
    'progressCaption',
    'progText',
    'progFill',
    'header-progress-text',
    'sidebar-progress-pct',
    'sidebar-progress-bar',
    'sidebar-progress-detail',
    'roadmap-list',
    'roadmap-chevron',
    'mobilePct',
    'toastBox',
    'prevBtn',
    'nextBtn',
    'prevLessonBtn',
    'nextLessonBtn',
    'moduleJumpBtn',
    'objCounter',
  ];

  function mountCompatStubs() {
    if (!document.body || document.getElementById('iasdsCompatStubs')) return;
    const holder = document.createElement('div');
    holder.id = 'iasdsCompatStubs';
    holder.hidden = true;
    holder.setAttribute('aria-hidden', 'true');
    for (const id of LEGACY_CHROME_IDS) {
      if (!document.getElementById(id)) {
        const el = document.createElement('span');
        el.id = id;
        holder.appendChild(el);
      }
    }
    document.body.appendChild(holder);
  }

  // Mount stubs immediately before deferred lesson script runs
  mountCompatStubs();

  // 2. Enhance lesson content after DOM is parsed
  function enhanceLessonContent() {
    const content = document.querySelector('.lesson-content');
    if (!content) return;

    // 2a. Wrap tables in horizontal scroll containers
    content.querySelectorAll('table').forEach((table) => {
      const parent = table.parentElement;
      if (
        parent &&
        (parent.classList.contains('table-scroll') ||
          parent.classList.contains('overflow-x-auto') ||
          parent.classList.contains('table-wrap'))
      ) {
        return;
      }
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    // 2b. Add copy button to <pre> code blocks
    content.querySelectorAll('pre').forEach((pre) => {
      if (pre.parentElement && pre.parentElement.classList.contains('code-block-wrap')) return;
      const wrap = document.createElement('div');
      wrap.className = 'code-block-wrap';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.addEventListener('click', async () => {
        const text = pre.innerText || pre.textContent || '';
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = 'Copied';
        } catch {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          ta.remove();
          btn.textContent = 'Copied';
        }
        window.setTimeout(() => {
          btn.textContent = 'Copy';
        }, 1600);
      });
      wrap.appendChild(btn);
    });

    // 2c. Lazy-load images & enable click-to-zoom lightbox on images and large diagram SVGs
    const dialog = document.getElementById('lightboxDialog');
    const stage = document.getElementById('lightboxStage');
    const captionEl = document.getElementById('lightboxCaption');

    const openLightbox = (node, captionText) => {
      if (!dialog || !stage) return;
      stage.innerHTML = '';
      stage.appendChild(node);
      if (captionEl) {
        captionEl.textContent = captionText || '';
        captionEl.hidden = !captionText;
      }
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    };

    content.querySelectorAll('img').forEach((img) => {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      img.dataset.zoomable = 'true';
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      const figure = img.closest('figure');
      const figcaption = figure ? figure.querySelector('figcaption') : null;
      const caption = (figcaption && figcaption.textContent.trim()) || img.alt || 'Zoomed figure';
      const trigger = () => {
        const clone = img.cloneNode(true);
        clone.removeAttribute('data-zoomable');
        clone.removeAttribute('tabindex');
        openLightbox(clone, caption);
      };
      img.addEventListener('click', trigger);
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger();
        }
      });
    });

    content.querySelectorAll('svg').forEach((svg) => {
      if (svg.closest('button, a, .heading-bookmark-btn')) return;
      const rect = svg.getBoundingClientRect();
      const vb = svg.getAttribute('viewBox');
      const vbWidth = vb ? parseFloat(vb.split(/[\s,]+/)[2] || '0') : 0;
      if (Math.max(rect.width, vbWidth) < 180) return;
      svg.dataset.zoomable = 'true';
      svg.setAttribute('title', 'Click to zoom diagram');
      svg.addEventListener('click', () => {
        const clone = svg.cloneNode(true);
        clone.removeAttribute('data-zoomable');
        clone.style.width = 'min(820px, 100%)';
        clone.style.height = 'auto';
        const fig = svg.closest('figure');
        const cap = fig && fig.querySelector('figcaption') ? fig.querySelector('figcaption').textContent.trim() : '';
        openLightbox(clone, cap);
      });
    });
  }

  // 3. Safe KaTeX rendering fallback (handles ECON107 paren-only mode + standard mode)
  function renderLessonMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    const content = document.querySelector('.lesson-content');
    if (!content) return;
    const mode = document.documentElement.dataset.katexMode || 'standard';
    const delimiters =
      mode === 'econ'
        ? [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
          ]
        : [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false },
          ];
    try {
      window.renderMathInElement(content, {
        delimiters,
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      });
      // Also render any math in the page H1 title (e.g. MATH106 R^n, MATH104 epsilon-delta)
      const h1 = document.querySelector('.lesson-header h1');
      if (h1) {
        window.renderMathInElement(h1, {
          delimiters,
          throwOnError: false,
        });
      }
    } catch {
      // ignore render issues
    }
  }

  // 4. Synchronize theme changes to canvases & legacy dark classes
  window.addEventListener('iasds:themechange', (ev) => {
    const isDark = ev.detail && ev.detail.theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    if (document.body) {
      document.body.classList.toggle('dark', isDark);
    }
    // Notify canvas charts that listen for resize/redraw
    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 30);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      enhanceLessonContent();
      window.setTimeout(renderLessonMath, 120);
    });
  } else {
    enhanceLessonContent();
    window.setTimeout(renderLessonMath, 120);
  }

  window.addEventListener('load', () => {
    renderLessonMath();
  });
})();
