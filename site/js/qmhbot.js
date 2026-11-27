/* ==========================================================================
   QMHBot — In-Lesson Academic Assistant (Bangla, Banglish, English, Image, Voice)
   Zero sign-in required; grounded directly in the active opened lesson.
   ========================================================================== */

const KATEX_CDN = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist';
const CLIENT_ID_KEY = 'iasds_qmh_cid_v1';
const QUOTA_KEY = 'iasds_qmh_quota_v1';
const MAX_PER_10_MIN = 6;
const MAX_PER_DAY = 20;

function getClientId() {
  try {
    let cid = window.localStorage.getItem(CLIENT_ID_KEY);
    if (!cid) {
      cid = (window.crypto?.randomUUID ? window.crypto.randomUUID() : `qmh_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
      window.localStorage.setItem(CLIENT_ID_KEY, cid);
    }
    return cid;
  } catch {
    return `sess_${Math.random().toString(36).slice(2, 10)}`;
  }
}

function readLocalQuota() {
  const today = new Date().toISOString().slice(0, 10);
  const now = Date.now();
  try {
    const raw = JSON.parse(window.localStorage.getItem(QUOTA_KEY) || '{}');
    const dayCount = raw.day === today ? Number(raw.dayCount || 0) : 0;
    const recent = Array.isArray(raw.recent)
      ? raw.recent.filter((ts) => typeof ts === 'number' && now - ts < 10 * 60 * 1000)
      : [];
    return { day: today, dayCount, recent };
  } catch {
    return { day: today, dayCount: 0, recent: [] };
  }
}

function writeLocalQuota(q) {
  try {
    window.localStorage.setItem(QUOTA_KEY, JSON.stringify(q));
  } catch {
    // ignore
  }
}

function checkLocalQuota() {
  const q = readLocalQuota();
  if (q.dayCount >= MAX_PER_DAY) {
    return {
      ok: false,
      remainingDay: 0,
      message: `Daily limit reached (${MAX_PER_DAY}/${MAX_PER_DAY} questions today, shared fairly across classmates). আজকের কোটা পূর্ণ হয়েছে — আগামীকাল আবার ব্যবহার করতে পারবে।`,
    };
  }
  if (q.recent.length >= MAX_PER_10_MIN) {
    const waitMin = Math.max(1, Math.ceil((q.recent[0] + 10 * 60 * 1000 - Date.now()) / 60000));
    return {
      ok: false,
      remainingDay: MAX_PER_DAY - q.dayCount,
      message: `Short cooldown (${MAX_PER_10_MIN} questions / 10 min) for shared fair use. অনুগ্রহ করে প্রায় ${waitMin} মিনিট পর আবার চেষ্টা করো।`,
    };
  }
  return { ok: true, remainingDay: MAX_PER_DAY - q.dayCount };
}

function recordLocalUsage(serverQuota) {
  const q = readLocalQuota();
  q.recent.push(Date.now());
  if (serverQuota && typeof serverQuota.remainingToday === 'number') {
    q.dayCount = Math.max(q.dayCount + 1, MAX_PER_DAY - serverQuota.remainingToday);
  } else {
    q.dayCount += 1;
  }
  writeLocalQuota(q);
}

const BOT_ICON =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>';
const IMG_ICON =
  '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
const MIC_ICON =
  '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>';
const STOP_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
const SEND_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
const TRASH_ICON =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>';

let katexReadyPromise = null;
function ensureKatexLoaded() {
  if (window.katex && typeof window.katex.renderToString === 'function') {
    return Promise.resolve(true);
  }
  if (katexReadyPromise) return katexReadyPromise;

  katexReadyPromise = new Promise((resolve) => {
    if (!document.querySelector('link[href*="katex.min.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${KATEX_CDN}/katex.min.css`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
    const existingScript = document.querySelector('script[src*="katex.min.js"]');
    if (existingScript) {
      const check = window.setInterval(() => {
        if (window.katex) {
          window.clearInterval(check);
          resolve(true);
        }
      }, 60);
      window.setTimeout(() => {
        window.clearInterval(check);
        resolve(Boolean(window.katex));
      }, 4000);
      return;
    }
    const s = document.createElement('script');
    s.src = `${KATEX_CDN}/katex.min.js`;
    s.crossOrigin = 'anonymous';
    s.onload = () => resolve(Boolean(window.katex));
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });

  return katexReadyPromise;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderRichMessage(rawText) {
  const mathTokens = [];
  const stashMath = (expr, displayMode) => {
    const idx = mathTokens.length;
    mathTokens.push({ expr: expr.trim(), displayMode });
    return `@@MATH_${idx}@@`;
  };

  let text = String(rawText || '');
  // Extract display & inline math before escaping HTML
  text = text
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => stashMath(m, true))
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => stashMath(m, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => stashMath(m, false))
    .replace(/(^|[^\\$])\$([^\n$]{1,240}?)\$/g, (_, pre, m) => `${pre}${stashMath(m, false)}`);

  // Code blocks
  const codeTokens = [];
  text = text.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const idx = codeTokens.length;
    codeTokens.push(
      `<pre class="qmhbot-pre"><code>${escapeHtml(code.trimEnd())}</code></pre>`
    );
    return `@@CODE_${idx}@@`;
  });

  let safe = escapeHtml(text);
  safe = safe
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/^###\s+(.+)$/gm, '<h4 class="qmhbot-h">$1</h4>')
    .replace(/^##\s+(.+)$/gm, '<h4 class="qmhbot-h">$1</h4>');

  // Group consecutive list lines cleanly
  const lines = safe.split('\n');
  const out = [];
  let inUl = false;
  let inOl = false;
  const closeLists = () => {
    if (inUl) { out.push('</ul>'); inUl = false; }
    if (inOl) { out.push('</ol>'); inOl = false; }
  };

  for (const line of lines) {
    const ulM = line.match(/^\s*[-*]\s+(.+)$/);
    const olM = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (ulM) {
      if (inOl) { out.push('</ol>'); inOl = false; }
      if (!inUl) { out.push('<ul class="qmhbot-list">'); inUl = true; }
      out.push(`<li>${ulM[1]}</li>`);
    } else if (olM) {
      if (inUl) { out.push('</ul>'); inUl = false; }
      if (!inOl) { out.push('<ol class="qmhbot-list">'); inOl = true; }
      out.push(`<li>${olM[1]}</li>`);
    } else {
      closeLists();
      const trimmed = line.trim();
      if (!trimmed) {
        out.push('<div class="qmhbot-spacer"></div>');
      } else if (/^<(?:h4|@@CODE_)/i.test(trimmed) || /^@@CODE_\d+@@$/.test(trimmed)) {
        out.push(trimmed);
      } else {
        out.push(`<p>${trimmed}</p>`);
      }
    }
  }
  closeLists();

  let html = out.join('\n');
  html = html.replace(/@@CODE_(\d+)@@/g, (_, idx) => codeTokens[Number(idx)] || '');
  html = html.replace(/@@MATH_(\d+)@@/g, (_, idx) => {
    const item = mathTokens[Number(idx)];
    if (!item) return '';
    if (window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(item.expr, {
          displayMode: item.displayMode,
          throwOnError: false,
        });
      } catch {
        // fallback below
      }
    }
    return `<code>${escapeHtml(item.expr)}</code>`;
  });

  return html;
}

function extractLessonContext(lessonMeta) {
  const article = document.querySelector('.lesson-content');
  const examNote = document.querySelector('.lesson-exam-note')?.textContent?.trim() || '';
  const headings = Array.from(document.querySelectorAll('.lesson-content h2, .lesson-content h3'))
    .map((h) => {
      const clone = h.cloneNode(true);
      clone.querySelectorAll('.heading-bookmark-btn, .katex-mathml').forEach((n) => n.remove());
      return (clone.textContent || '').replace(/\s+/g, ' ').trim();
    })
    .filter(Boolean)
    .slice(0, 35);

  let contentText = '';
  if (article) {
    const clone = article.cloneNode(true);
    // Keep clean TeX annotations if KaTeX rendered, strip redundant visual HTML spans
    clone.querySelectorAll('script, style, .katex-html, svg').forEach((n) => n.remove());
    contentText = (clone.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 8500);
  }

  return {
    lessonId: lessonMeta.id,
    courseCode: lessonMeta.courseCode,
    courseName: lessonMeta.courseName,
    lessonTitle: lessonMeta.title,
    examNote,
    headings,
    contentText,
  };
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read image'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Unsupported image format'));
      img.onload = () => {
        const maxDim = 1150;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          const ratio = Math.min(maxDim / width, maxDim / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const outUrl = canvas.toDataURL('image/jpeg', 0.78);
        resolve({
          kind: 'image',
          mimeType: 'image/jpeg',
          dataUrl: outUrl,
          data: outUrl.split(',')[1],
          name: file.name || 'photo.jpg',
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Audio encoding failed'));
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      resolve({
        dataUrl,
        base64: dataUrl.split(',')[1] || '',
      });
    };
    reader.readAsDataURL(blob);
  });
}

export function initQmhBot(lessonMeta, showToast) {
  if (!lessonMeta || document.body?.dataset.page !== 'lesson') return;

  // Floating quick launch button
  const fab = document.createElement('button');
  fab.type = 'button';
  fab.id = 'qmhbotFab';
  fab.className = 'qmhbot-fab';
  fab.setAttribute('aria-label', 'Ask QMHBot about this lesson');
  fab.setAttribute('aria-controls', 'qmhbotDrawer');
  fab.setAttribute('aria-expanded', 'false');
  fab.innerHTML = `${BOT_ICON}<span>Ask QMHBot</span>`;
  document.body.appendChild(fab);

  const headerBtn = document.getElementById('qmhbotHeaderBtn');

  // Slide-over drawer
  const backdrop = document.createElement('div');
  backdrop.id = 'qmhbotBackdrop';
  backdrop.className = 'qmhbot-backdrop';
  backdrop.hidden = true;

  const drawer = document.createElement('aside');
  drawer.id = 'qmhbotDrawer';
  drawer.className = 'qmhbot-drawer';
  drawer.setAttribute('aria-label', 'QMHBot Academic Assistant');
  drawer.hidden = true;
  drawer.innerHTML = `
    <div class="qmhbot-drawer__head">
      <div class="qmhbot-drawer__title-group">
        <span class="qmhbot-avatar">${BOT_ICON}</span>
        <div>
          <h2 class="qmhbot-title">QMHBot</h2>
          <div class="qmhbot-sub">${escapeHtml(lessonMeta.courseCode)}: ${escapeHtml(lessonMeta.title)}</div>
        </div>
      </div>
      <div class="qmhbot-drawer__head-actions">
        <button type="button" id="qmhbotClearBtn" class="btn btn--ghost btn--icon" title="Start fresh chat" aria-label="Clear chat">${TRASH_ICON}</button>
        <button type="button" id="qmhbotCloseBtn" class="btn btn--ghost btn--icon" title="Close QMHBot" aria-label="Close QMHBot">&times;</button>
      </div>
    </div>

    <div id="qmhbotMessages" class="qmhbot-messages" role="log" aria-live="polite"></div>

    <div class="qmhbot-composer">
      <div id="qmhbotQuotaNote" class="qmhbot-quota-note"></div>
      <div id="qmhbotAttachBar" class="qmhbot-attach-bar" hidden></div>
      <div id="qmhbotRecordingBar" class="qmhbot-rec-bar" hidden>
        <span class="qmhbot-rec-dot"></span>
        <span id="qmhbotRecTimer">Recording 0:00</span>
        <button type="button" id="qmhbotRecCancelBtn" class="btn btn--ghost btn--sm">Cancel</button>
        <button type="button" id="qmhbotRecStopBtn" class="btn btn--danger btn--sm">${STOP_ICON} Done</button>
      </div>
      <form id="qmhbotForm" class="qmhbot-form">
        <input type="file" id="qmhbotFileInput" accept="image/*" hidden>
        <button type="button" id="qmhbotImgBtn" class="btn btn--ghost btn--icon" title="Upload photo or screenshot" aria-label="Upload image">${IMG_ICON}</button>
        <button type="button" id="qmhbotMicBtn" class="btn btn--ghost btn--icon" title="Record voice question (Bangla / Banglish / English)" aria-label="Record voice">${MIC_ICON}</button>
        <label class="sr-only" for="qmhbotInput">Ask QMHBot</label>
        <textarea id="qmhbotInput" class="qmhbot-input" rows="1" placeholder="Ask English, বাংলা, Banglish…"></textarea>
        <button type="submit" id="qmhbotSendBtn" class="btn btn--primary btn--icon" aria-label="Send message" disabled>${SEND_ICON}</button>
      </form>
    </div>`;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  const msgContainer = document.getElementById('qmhbotMessages');
  const form = document.getElementById('qmhbotForm');
  const input = document.getElementById('qmhbotInput');
  const sendBtn = document.getElementById('qmhbotSendBtn');
  const imgBtn = document.getElementById('qmhbotImgBtn');
  const fileInput = document.getElementById('qmhbotFileInput');
  const micBtn = document.getElementById('qmhbotMicBtn');
  const recBar = document.getElementById('qmhbotRecordingBar');
  const recTimerEl = document.getElementById('qmhbotRecTimer');
  const recStopBtn = document.getElementById('qmhbotRecStopBtn');
  const recCancelBtn = document.getElementById('qmhbotRecCancelBtn');
  const attachBar = document.getElementById('qmhbotAttachBar');
  const quotaNote = document.getElementById('qmhbotQuotaNote');
  const clearBtn = document.getElementById('qmhbotClearBtn');
  const closeBtn = document.getElementById('qmhbotCloseBtn');

  const updateQuotaBadge = () => {
    if (!quotaNote) return;
    const status = checkLocalQuota();
    quotaNote.textContent = `Today: ${status.remainingDay}/${MAX_PER_DAY} questions left (6 / 10 min) · Shared fairly · Don’t send personal info`;
  };
  updateQuotaBadge();

  const history = []; // { role: 'user'|'model', text }
  let pendingImage = null;
  let pendingAudio = null;
  let isBusy = false;
  let mediaRecorder = null;
  let audioStream = null;
  let audioChunks = [];
  let recInterval = null;
  let recCancelFlag = false;

  const updateSendState = () => {
    const hasContent = Boolean(input.value.trim() || pendingImage || pendingAudio);
    sendBtn.disabled = isBusy || !hasContent;
  };

  const renderAttachBar = () => {
    if (!pendingImage && !pendingAudio) {
      attachBar.hidden = true;
      attachBar.innerHTML = '';
      updateSendState();
      return;
    }
    attachBar.hidden = false;
    attachBar.innerHTML = '';
    if (pendingImage) {
      const chip = document.createElement('div');
      chip.className = 'qmhbot-attach-chip';
      chip.innerHTML = `<img src="${pendingImage.dataUrl}" alt="Attached preview"><span>${escapeHtml(pendingImage.name)}</span>`;
      const rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'qmhbot-attach-rm';
      rm.innerHTML = '&times;';
      rm.ariaLabel = 'Remove image';
      rm.onclick = () => { pendingImage = null; renderAttachBar(); };
      chip.appendChild(rm);
      attachBar.appendChild(chip);
    }
    if (pendingAudio) {
      const chip = document.createElement('div');
      chip.className = 'qmhbot-attach-chip qmhbot-attach-chip--audio';
      chip.innerHTML = `<span>Voice clip (${pendingAudio.durationSec}s)</span><audio controls src="${pendingAudio.dataUrl}"></audio>`;
      const rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'qmhbot-attach-rm';
      rm.innerHTML = '&times;';
      rm.ariaLabel = 'Remove voice clip';
      rm.onclick = () => { pendingAudio = null; renderAttachBar(); };
      chip.appendChild(rm);
      attachBar.appendChild(chip);
    }
    updateSendState();
  };

  const renderWelcome = () => {
    msgContainer.innerHTML = `
      <div class="qmhbot-welcome">
        <div class="qmhbot-welcome__badge">${BOT_ICON} QMHBot &middot; Ready (No Sign-in)</div>
        <p class="qmhbot-welcome__text">
          Assalamu Alaikum! I’m <strong>QMHBot</strong>. I already read <strong>${escapeHtml(lessonMeta.courseCode)}: ${escapeHtml(lessonMeta.title)}</strong>. Ask anything in <strong>English</strong>, <strong>বাংলা</strong>, or <strong>Banglish</strong> &mdash; you can also snap/paste a question photo or send voice!
        </p>
        <div class="qmhbot-chips">
          <button type="button" class="qmhbot-chip" data-quick="Summarize this lesson in easy Bangla with key formulas.">বাংলায় সহজ সারসংক্ষেপ</button>
          <button type="button" class="qmhbot-chip" data-quick="What are the highest-yield exam formulas & proofs in this lesson?">Key ★★★ formulas</button>
          <button type="button" class="qmhbot-chip" data-quick="Ei lesson er main concept ta banglish e example shoho bujhai dao.">Banglish-এ বুঝিয়ে দাও</button>
          <button type="button" class="qmhbot-chip" data-quick="What classic exam traps or mistakes should I avoid here?">Common exam traps</button>
        </div>
      </div>`;
  };

  const appendBubble = (role, { text, imageUrl, hasAudio }) => {
    const welcome = msgContainer.querySelector('.qmhbot-welcome');
    if (welcome) welcome.remove();

    const row = document.createElement('div');
    row.className = `qmhbot-msg qmhbot-msg--${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'qmhbot-bubble';

    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Student uploaded question';
      img.className = 'qmhbot-bubble__img';
      bubble.appendChild(img);
    }
    if (hasAudio) {
      const tag = document.createElement('div');
      tag.className = 'qmhbot-bubble__audio-tag';
      tag.textContent = '🎤 Voice question attached';
      bubble.appendChild(tag);
    }

    if (role === 'model') {
      const body = document.createElement('div');
      body.className = 'qmhbot-bubble__md';
      body.innerHTML = renderRichMessage(text);
      bubble.appendChild(body);
    } else if (text) {
      const p = document.createElement('div');
      p.textContent = text;
      bubble.appendChild(p);
    }

    row.appendChild(bubble);
    msgContainer.appendChild(row);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return row;
  };

  const openDrawer = () => {
    ensureKatexLoaded();
    drawer.hidden = false;
    backdrop.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
    headerBtn?.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => input.focus(), 60);
  };

  const closeDrawer = () => {
    drawer.hidden = true;
    backdrop.hidden = true;
    fab.setAttribute('aria-expanded', 'false');
    headerBtn?.setAttribute('aria-expanded', 'false');
  };

  fab.addEventListener('click', () => (drawer.hidden ? openDrawer() : closeDrawer()));
  headerBtn?.addEventListener('click', () => (drawer.hidden ? openDrawer() : closeDrawer()));
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && !drawer.hidden) closeDrawer();
  });

  clearBtn?.addEventListener('click', () => {
    history.length = 0;
    pendingImage = null;
    pendingAudio = null;
    renderAttachBar();
    renderWelcome();
    if (showToast) showToast('QMHBot conversation cleared');
  });

  msgContainer.addEventListener('click', (ev) => {
    const chip = ev.target.closest('[data-quick]');
    if (!chip) return;
    input.value = chip.dataset.quick || '';
    updateSendState();
    form.requestSubmit();
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(120, input.scrollHeight)}px`;
    input.style.overflowY = input.scrollHeight > 120 ? 'auto' : 'hidden';
    updateSendState();
  });

  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault();
      if (!sendBtn.disabled) form.requestSubmit();
    }
  });

  // Paste screenshot / image directly into chat input
  input.addEventListener('paste', async (ev) => {
    const items = ev.clipboardData?.items || [];
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        ev.preventDefault();
        const file = item.getAsFile();
        if (file) {
          try {
            pendingImage = await compressImageFile(file);
            renderAttachBar();
          } catch (err) {
            if (showToast) showToast(err.message);
          }
        }
        break;
      }
    }
  });

  imgBtn?.addEventListener('click', () => fileInput?.click());
  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    fileInput.value = '';
    if (!file) return;
    try {
      pendingImage = await compressImageFile(file);
      renderAttachBar();
    } catch (err) {
      if (showToast) showToast(err.message);
    }
  });

  // Voice recording
  const cleanupRecording = () => {
    window.clearInterval(recInterval);
    recBar.hidden = true;
    micBtn.classList.remove('is-recording');
    if (audioStream) {
      audioStream.getTracks().forEach((t) => t.stop());
      audioStream = null;
    }
  };

  micBtn?.addEventListener('click', async () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      recCancelFlag = false;
      mediaRecorder.stop();
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      if (showToast) showToast('Voice recording is not supported in this browser.');
      return;
    }
    try {
      audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const preferred = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg']
        .find((m) => MediaRecorder.isTypeSupported(m));
      mediaRecorder = preferred ? new MediaRecorder(audioStream, { mimeType: preferred }) : new MediaRecorder(audioStream);
      audioChunks = [];
      recCancelFlag = false;
      const startTs = Date.now();

      mediaRecorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) audioChunks.push(ev.data);
      };
      mediaRecorder.onstop = async () => {
        const durSec = Math.max(1, Math.round((Date.now() - startTs) / 1000));
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        cleanupRecording();
        if (recCancelFlag || !audioChunks.length) return;
        const blob = new Blob(audioChunks, { type: mimeType });
        const { dataUrl, base64 } = await blobToBase64(blob);
        pendingAudio = {
          kind: 'audio',
          mimeType,
          dataUrl,
          data: base64,
          durationSec: durSec,
        };
        renderAttachBar();
      };

      mediaRecorder.start();
      recBar.hidden = false;
      micBtn.classList.add('is-recording');
      recTimerEl.textContent = 'Recording 0:00';
      recInterval = window.setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTs) / 1000);
        const mins = Math.floor(elapsed / 60);
        const secs = String(elapsed % 60).padStart(2, '0');
        recTimerEl.textContent = `Recording ${mins}:${secs}`;
        if (elapsed >= 90 && mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
        }
      }, 250);
    } catch {
      cleanupRecording();
      if (showToast) showToast('Microphone permission denied or unavailable.');
    }
  });

  recStopBtn?.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      recCancelFlag = false;
      mediaRecorder.stop();
    }
  });

  recCancelBtn?.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      recCancelFlag = true;
      mediaRecorder.stop();
    } else {
      cleanupRecording();
    }
  });

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (isBusy) return;

    const text = input.value.trim();
    const attachments = [];
    const previewImg = pendingImage ? pendingImage.dataUrl : '';
    const hasAudio = Boolean(pendingAudio);

    if (pendingImage) {
      attachments.push({ kind: 'image', mimeType: pendingImage.mimeType, data: pendingImage.data });
    }
    if (pendingAudio) {
      attachments.push({ kind: 'audio', mimeType: pendingAudio.mimeType, data: pendingAudio.data });
    }
    if (!text && !attachments.length) return;

    const localGate = checkLocalQuota();
    if (!localGate.ok) {
      appendBubble('model', { text: localGate.message });
      updateQuotaBadge();
      return;
    }

    appendBubble('user', { text, imageUrl: previewImg, hasAudio });
    input.value = '';
    input.style.height = 'auto';
    pendingImage = null;
    pendingAudio = null;
    renderAttachBar();

    isBusy = true;
    updateSendState();

    const typingRow = appendBubble('model', { text: 'Thinking…' });
    typingRow.classList.add('is-typing');

    try {
      await ensureKatexLoaded();
      const root = document.documentElement.dataset.root || '../../';
      const apiUrl = root.startsWith('/') ? '/api/chat' : `${window.location.origin}/api/chat`;
      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-qmh-client': getClientId(),
        },
        body: JSON.stringify({
          message: text,
          attachments,
          history: history.slice(-6),
          lessonContext: extractLessonContext(lessonMeta),
        }),
      });

      const data = await resp.json().catch(() => null);
      typingRow.remove();

      if (!resp.ok || !data || !data.reply) {
        const errMsg =
          data?.error ||
          'QMHBot service is currently unreachable. Please check your connection or try again shortly.';
        appendBubble('model', { text: errMsg });
        return;
      }

      recordLocalUsage(data.quota);
      updateQuotaBadge();

      if (text) history.push({ role: 'user', text });
      else if (hasAudio) history.push({ role: 'user', text: '[Voice question]' });
      else history.push({ role: 'user', text: '[Image question]' });
      history.push({ role: 'model', text: data.reply });

      appendBubble('model', { text: data.reply });
    } catch {
      typingRow.remove();
      appendBubble('model', {
        text: 'Could not reach QMHBot right now. Make sure the site is running on Vercel or local dev server.',
      });
    } finally {
      isBusy = false;
      updateSendState();
    }
  });

  renderWelcome();
}
