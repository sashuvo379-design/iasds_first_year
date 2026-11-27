/* ==========================================================================
   IASDS Global Study Timer + Daily Study Planner (localStorage + Web Audio)
   Timer stays alive across lesson navigations; Planner connects directly to it.
   ========================================================================== */

const TIMER_KEY = 'iasds_timer_v1';
const PLANNER_KEY = 'iasds_planner_v1';

const SOUNDS = {
  chime: { label: 'Soft Chime', play: playChime },
  beep: { label: 'Digital Beep', play: playBeep },
  bell: { label: 'Study Bell', play: playBell },
  gong: { label: 'Warm Gong', play: playGong },
  pulse: { label: 'Gentle Pulse', play: playPulse },
};

let audioCtx = null;
function getAudioCtx() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function tone(ctx, freq, startOffset, duration, type = 'sine', peak = 0.22) {
  const now = ctx.currentTime + startOffset;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function playChime() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  tone(ctx, 523.25, 0, 0.45, 'sine', 0.2);
  tone(ctx, 659.25, 0.16, 0.5, 'sine', 0.2);
  tone(ctx, 783.99, 0.32, 0.7, 'sine', 0.22);
}

function playBeep() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  tone(ctx, 880, 0, 0.14, 'square', 0.12);
  tone(ctx, 880, 0.22, 0.14, 'square', 0.12);
  tone(ctx, 1046.5, 0.44, 0.28, 'square', 0.14);
}

function playBell() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  tone(ctx, 660, 0, 0.9, 'triangle', 0.24);
  tone(ctx, 1320, 0.01, 0.5, 'sine', 0.09);
  tone(ctx, 660, 0.55, 0.95, 'triangle', 0.2);
}

function playGong() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  tone(ctx, 220, 0, 1.4, 'sine', 0.26);
  tone(ctx, 330, 0.02, 1.1, 'triangle', 0.12);
  tone(ctx, 440, 0.04, 0.9, 'sine', 0.08);
}

function playPulse() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  tone(ctx, 587.33, 0, 0.22, 'triangle', 0.2);
  tone(ctx, 587.33, 0.28, 0.22, 'triangle', 0.2);
  tone(ctx, 880, 0.56, 0.45, 'sine', 0.2);
}

export function playTimerSound(name) {
  const entry = SOUNDS[name] || SOUNDS.chime;
  try {
    entry.play();
  } catch {
    // Ignore autoplay blocks gracefully
  }
}

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function defaultTimerState() {
  return {
    status: 'idle', // 'idle' | 'running' | 'paused' | 'finished'
    durationSec: 25 * 60,
    remainingSec: 25 * 60,
    endTimeMs: 0,
    sound: 'chime',
    muted: false,
    taskId: '',
    taskTitle: '',
    lessonUrl: '',
  };
}

function readTimer() {
  try {
    const raw = window.localStorage.getItem(TIMER_KEY);
    if (!raw) return defaultTimerState();
    return { ...defaultTimerState(), ...JSON.parse(raw) };
  } catch {
    return defaultTimerState();
  }
}

function writeTimer(state) {
  try {
    window.localStorage.setItem(TIMER_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function readPlanner() {
  const today = todayKey();
  try {
    const raw = window.localStorage.getItem(PLANNER_KEY);
    if (!raw) return { date: today, focusedMinutes: 0, tasks: [] };
    const parsed = JSON.parse(raw);
    const tasks = Array.isArray(parsed.tasks) ? parsed.tasks : [];
    const focusedMinutes = parsed.date === today ? Number(parsed.focusedMinutes || 0) : 0;
    return { date: today, focusedMinutes, tasks };
  } catch {
    return { date: today, focusedMinutes: 0, tasks: [] };
  }
}

function writePlanner(data) {
  try {
    window.localStorage.setItem(PLANNER_KEY, JSON.stringify({ ...data, date: todayKey() }));
  } catch {
    // ignore
  }
}

function fmtClock(totalSec) {
  const s = Math.max(0, Math.ceil(totalSec));
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function logCompletedFocusSession(state) {
  const mins = Math.max(1, Math.round((state.durationSec || 60) / 60));
  const plan = readPlanner();
  plan.focusedMinutes = Number(plan.focusedMinutes || 0) + mins;
  if (state.taskId) {
    const task = plan.tasks.find((t) => t.id === state.taskId);
    if (task) {
      task.loggedMinutes = Number(task.loggedMinutes || 0) + mins;
    }
  }
  writePlanner(plan);
  window.dispatchEvent(new CustomEvent('iasds:plannerchange'));
}

/* ---------- Global Header Timer Controller ---------- */
export function initGlobalTimer(showToast) {
  const root = document.documentElement.dataset.root || './';
  const toggleBtn = document.getElementById('timerToggleBtn');
  const pillText = document.getElementById('timerPillText');
  const pillDot = document.getElementById('timerPillDot');
  const popover = document.getElementById('timerPopover');

  if (!toggleBtn || !popover) return;

  const baseTitle = document.title;
  let tickInterval = null;

  const renderSoundOptions = (selectEl, selected) => {
    if (!selectEl) return;
    selectEl.innerHTML = Object.entries(SOUNDS)
      .map(([k, v]) => `<option value="${k}"${k === selected ? ' selected' : ''}>${v.label}</option>`)
      .join('');
  };

  // Build popover DOM once
  popover.innerHTML = `
    <div class="timer-pop__head">
      <div>
        <span class="timer-pop__eyebrow">STUDY TIMER</span>
        <div id="timerActiveTask" class="timer-pop__task">Free Focus Session</div>
      </div>
      <a href="${root}planner/index.html" class="timer-pop__planner-link">Planner &rarr;</a>
    </div>
    <div id="timerBannerDone" class="timer-pop__done" hidden>
      <span>Time is up! Great focus session.</span>
      <button type="button" id="timerAckBtn" class="btn btn--primary btn--sm">Dismiss</button>
    </div>
    <div class="timer-pop__clock-wrap">
      <div id="timerBigDisplay" class="timer-pop__clock">25:00</div>
      <div id="timerLinkedLinkWrap" class="timer-pop__linked" hidden>
        <a id="timerLinkedLessonUrl" href="#">Open linked lesson &rarr;</a>
      </div>
    </div>
    <div class="progress-track" style="margin-bottom:var(--space-3)">
      <div id="timerProgressFill" class="progress-track__fill" style="width:100%"></div>
    </div>
    <div class="timer-pop__presets" role="group" aria-label="Quick duration presets">
      <button type="button" class="filter-chip" data-timer-preset="15">15m</button>
      <button type="button" class="filter-chip" data-timer-preset="25">25m</button>
      <button type="button" class="filter-chip" data-timer-preset="45">45m</button>
      <button type="button" class="filter-chip" data-timer-preset="60">60m</button>
      <label class="timer-pop__custom">
        <span class="sr-only">Custom minutes</span>
        <input type="number" id="timerCustomMins" min="1" max="180" value="25" aria-label="Minutes">
        <span>m</span>
      </label>
    </div>
    <div class="timer-pop__controls">
      <button type="button" id="timerStartPauseBtn" class="btn btn--primary">Start</button>
      <button type="button" id="timerResetBtn" class="btn btn--secondary">Reset</button>
      <button type="button" id="timerPlus5Btn" class="btn btn--ghost btn--sm" title="Add 5 minutes">+5m</button>
    </div>
    <div class="timer-pop__audio">
      <label for="timerSoundSelect" class="timer-pop__audio-label">Ending beep</label>
      <div class="timer-pop__audio-row">
        <select id="timerSoundSelect" class="timer-select"></select>
        <button type="button" id="timerPreviewSoundBtn" class="btn btn--secondary btn--sm" title="Preview ending sound">Test</button>
        <button type="button" id="timerMuteBtn" class="btn btn--ghost btn--sm" aria-pressed="false" title="Mute timer sound">Sound on</button>
      </div>
    </div>`;

  const displayEl = document.getElementById('timerBigDisplay');
  const progressFill = document.getElementById('timerProgressFill');
  const activeTaskEl = document.getElementById('timerActiveTask');
  const linkedWrap = document.getElementById('timerLinkedLinkWrap');
  const linkedUrlEl = document.getElementById('timerLinkedLessonUrl');
  const customInput = document.getElementById('timerCustomMins');
  const startPauseBtn = document.getElementById('timerStartPauseBtn');
  const resetBtn = document.getElementById('timerResetBtn');
  const plus5Btn = document.getElementById('timerPlus5Btn');
  const soundSelect = document.getElementById('timerSoundSelect');
  const previewBtn = document.getElementById('timerPreviewSoundBtn');
  const muteBtn = document.getElementById('timerMuteBtn');
  const doneBanner = document.getElementById('timerBannerDone');
  const ackBtn = document.getElementById('timerAckBtn');

  const computeRemaining = (st) => {
    if (st.status === 'running' && st.endTimeMs > 0) {
      return Math.max(0, Math.ceil((st.endTimeMs - Date.now()) / 1000));
    }
    return Math.max(0, Number(st.remainingSec ?? st.durationSec));
  };

  const syncUi = () => {
    let st = readTimer();
    let rem = computeRemaining(st);

    if (st.status === 'running' && rem <= 0) {
      st = { ...st, status: 'finished', remainingSec: 0, endTimeMs: 0 };
      writeTimer(st);
      logCompletedFocusSession(st);
      if (!st.muted) playTimerSound(st.sound);
      if (showToast) {
        showToast(st.taskTitle ? `Completed: ${st.taskTitle}` : 'Study timer finished!');
      }
      popover.hidden = false;
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    const formatted = fmtClock(rem);
    if (pillText) pillText.textContent = formatted;
    if (displayEl) displayEl.textContent = formatted;

    toggleBtn.dataset.timerState = st.status;
    if (pillDot) pillDot.hidden = st.status !== 'running' && st.status !== 'finished';

    if (st.status === 'running') {
      document.title = `${formatted} · ${baseTitle}`;
    } else if (st.status === 'finished') {
      document.title = `Time Up! · ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }

    const pct = st.durationSec > 0 ? Math.min(100, Math.max(0, (rem / st.durationSec) * 100)) : 0;
    if (progressFill) progressFill.style.width = `${pct.toFixed(1)}%`;

    if (activeTaskEl) {
      activeTaskEl.textContent = st.taskTitle ? st.taskTitle : 'Free Focus Session';
    }
    if (linkedWrap && linkedUrlEl) {
      if (st.lessonUrl) {
        linkedWrap.hidden = false;
        linkedUrlEl.href = `${root}${st.lessonUrl}`;
      } else {
        linkedWrap.hidden = true;
      }
    }

    if (doneBanner) doneBanner.hidden = st.status !== 'finished';

    if (startPauseBtn) {
      if (st.status === 'running') {
        startPauseBtn.textContent = 'Pause';
      } else if (st.status === 'paused') {
        startPauseBtn.textContent = 'Resume';
      } else {
        startPauseBtn.textContent = 'Start';
      }
    }

    if (customInput && document.activeElement !== customInput) {
      customInput.value = String(Math.max(1, Math.round(st.durationSec / 60)));
    }

    const minsVal = Math.round(st.durationSec / 60);
    popover.querySelectorAll('[data-timer-preset]').forEach((b) => {
      b.setAttribute('aria-pressed', Number(b.dataset.timerPreset) === minsVal ? 'true' : 'false');
    });

    renderSoundOptions(soundSelect, st.sound);
    if (muteBtn) {
      muteBtn.setAttribute('aria-pressed', st.muted ? 'true' : 'false');
      muteBtn.textContent = st.muted ? 'Muted' : 'Sound on';
    }

    if (st.status === 'running' && !tickInterval) {
      tickInterval = window.setInterval(syncUi, 400);
    } else if (st.status !== 'running' && tickInterval) {
      window.clearInterval(tickInterval);
      tickInterval = null;
    }
  };

  const setDurationMinutes = (mins, taskMeta = null) => {
    const cleanMins = Math.min(180, Math.max(1, Math.round(Number(mins) || 25)));
    const st = readTimer();
    const sec = cleanMins * 60;
    const next = {
      ...st,
      status: 'idle',
      durationSec: sec,
      remainingSec: sec,
      endTimeMs: 0,
      ...(taskMeta ? taskMeta : {}),
    };
    writeTimer(next);
    syncUi();
  };

  const startSession = (opts = {}) => {
    const st = readTimer();
    const mins = opts.minutes ? Math.min(180, Math.max(1, Math.round(Number(opts.minutes)))) : null;
    const sec = mins ? mins * 60 : (st.remainingSec > 0 && st.status === 'paused' ? st.remainingSec : st.durationSec);
    const totalSec = mins ? sec : st.durationSec;

    // Warm up AudioContext cleanly on user click
    getAudioCtx();

    const next = {
      ...st,
      status: 'running',
      durationSec: totalSec,
      remainingSec: sec,
      endTimeMs: Date.now() + sec * 1000,
      taskId: opts.taskId !== undefined ? opts.taskId : st.taskId,
      taskTitle: opts.taskTitle !== undefined ? opts.taskTitle : st.taskTitle,
      lessonUrl: opts.lessonUrl !== undefined ? opts.lessonUrl : st.lessonUrl,
    };
    writeTimer(next);
    syncUi();
    window.dispatchEvent(new CustomEvent('iasds:plannerchange'));
  };

  // Expose programmatic hook for Daily Planner page
  window.IASDS_TIMER = {
    startTaskSession({ id, title, minutes, lessonUrl }) {
      startSession({
        minutes: minutes || 25,
        taskId: id || '',
        taskTitle: title || '',
        lessonUrl: lessonUrl || '',
      });
      if (showToast) showToast(`Timer started: ${title || `${minutes}m session`}`);
    },
    getActiveTaskId() {
      const st = readTimer();
      return st.status === 'running' || st.status === 'paused' ? st.taskId : '';
    },
  };

  // Toggle popover
  toggleBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    const readingPopover = document.getElementById('readingPopover');
    if (readingPopover && !readingPopover.hidden) {
      readingPopover.hidden = true;
      document.getElementById('readingControlsBtn')?.setAttribute('aria-expanded', 'false');
    }
    const willOpen = popover.hidden;
    popover.hidden = !willOpen;
    toggleBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    syncUi();
  });

  document.addEventListener('click', (ev) => {
    if (!popover.hidden && !popover.contains(ev.target) && !toggleBtn.contains(ev.target)) {
      popover.hidden = true;
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  popover.querySelectorAll('[data-timer-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setDurationMinutes(btn.dataset.timerPreset);
    });
  });

  customInput?.addEventListener('change', () => {
    setDurationMinutes(customInput.value);
  });

  startPauseBtn?.addEventListener('click', () => {
    const st = readTimer();
    if (st.status === 'running') {
      const rem = computeRemaining(st);
      writeTimer({ ...st, status: 'paused', remainingSec: rem, endTimeMs: 0 });
      syncUi();
    } else {
      startSession();
    }
  });

  resetBtn?.addEventListener('click', () => {
    const st = readTimer();
    writeTimer({
      ...st,
      status: 'idle',
      remainingSec: st.durationSec,
      endTimeMs: 0,
      taskId: '',
      taskTitle: '',
      lessonUrl: '',
    });
    syncUi();
    window.dispatchEvent(new CustomEvent('iasds:plannerchange'));
  });

  plus5Btn?.addEventListener('click', () => {
    const st = readTimer();
    const addSec = 5 * 60;
    const curRem = computeRemaining(st);
    const nextRem = curRem + addSec;
    const nextDur = Math.max(st.durationSec, nextRem);
    writeTimer({
      ...st,
      durationSec: nextDur,
      remainingSec: nextRem,
      endTimeMs: st.status === 'running' ? Date.now() + nextRem * 1000 : 0,
    });
    syncUi();
  });

  soundSelect?.addEventListener('change', () => {
    const st = readTimer();
    writeTimer({ ...st, sound: soundSelect.value });
    playTimerSound(soundSelect.value);
  });

  previewBtn?.addEventListener('click', () => {
    const st = readTimer();
    playTimerSound(soundSelect ? soundSelect.value : st.sound);
  });

  muteBtn?.addEventListener('click', () => {
    const st = readTimer();
    writeTimer({ ...st, muted: !st.muted });
    syncUi();
  });

  ackBtn?.addEventListener('click', () => {
    const st = readTimer();
    writeTimer({ ...st, status: 'idle', remainingSec: st.durationSec, endTimeMs: 0 });
    syncUi();
  });

  window.addEventListener('storage', (ev) => {
    if (ev.key === TIMER_KEY) syncUi();
  });

  syncUi();
}

/* ---------- Daily Study Planner Page Hydration ---------- */
export async function initPlannerPage(showToast) {
  const root = document.documentElement.dataset.root || '../';
  const dateBadge = document.getElementById('plannerDateBadge');
  const statsDoneEl = document.getElementById('plannerStatsDone');
  const statsPlannedEl = document.getElementById('plannerStatsPlanned');
  const statsFocusedEl = document.getElementById('plannerStatsFocused');
  const form = document.getElementById('plannerAddForm');
  const titleInput = document.getElementById('plannerTaskTitle');
  const lessonSelect = document.getElementById('plannerLessonSelect');
  const minsInput = document.getElementById('plannerTaskMins');
  const prioritySelect = document.getElementById('plannerTaskPriority');
  const taskListEl = document.getElementById('plannerTaskList');
  const emptyEl = document.getElementById('plannerEmptyState');
  const filterGroup = document.getElementById('plannerFilterGroup');
  const clearDoneBtn = document.getElementById('plannerClearDoneBtn');

  if (!form || !taskListEl) return;

  if (dateBadge) {
    try {
      dateBadge.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      dateBadge.textContent = todayKey();
    }
  }

  // Load lesson catalog for quick picking
  const lessonMap = new Map();
  if (lessonSelect) {
    try {
      const resp = await fetch(`${root}data/search-index.json`);
      if (resp.ok) {
        const data = await resp.json();
        const docs = data.documents || [];
        const byCourse = new Map();
        for (const d of docs) {
          lessonMap.set(d.id, d);
          if (!byCourse.has(d.courseCode)) byCourse.set(d.courseCode, []);
          byCourse.get(d.courseCode).push(d);
        }
        for (const [code, list] of byCourse.entries()) {
          const og = document.createElement('optgroup');
          og.label = code;
          for (const l of list) {
            const opt = document.createElement('option');
            opt.value = l.id;
            opt.textContent = `${code} L${l.lessonNumber}: ${l.title}`;
            og.appendChild(opt);
          }
          lessonSelect.appendChild(og);
        }
      }
    } catch {
      // Optional enrichment
    }

    lessonSelect.addEventListener('change', () => {
      const doc = lessonMap.get(lessonSelect.value);
      if (doc && !titleInput.value.trim()) {
        titleInput.value = `Study ${doc.courseCode} L${doc.lessonNumber}: ${doc.title}`;
      }
    });
  }

  let currentFilter = 'all';

  const render = () => {
    const plan = readPlanner();
    const tasks = plan.tasks;
    const activeTimerTaskId = window.IASDS_TIMER ? window.IASDS_TIMER.getActiveTaskId() : '';

    const doneCount = tasks.filter((t) => t.done).length;
    const plannedMins = tasks.reduce((s, t) => s + Number(t.minutes || 0), 0);
    if (statsDoneEl) statsDoneEl.textContent = `${doneCount} / ${tasks.length}`;
    if (statsPlannedEl) statsPlannedEl.textContent = `${plannedMins}m`;
    if (statsFocusedEl) statsFocusedEl.textContent = `${plan.focusedMinutes || 0}m`;

    const visibleTasks = tasks.filter((t) => {
      if (currentFilter === 'pending') return !t.done;
      if (currentFilter === 'done') return t.done;
      return true;
    });

    if (clearDoneBtn) clearDoneBtn.hidden = doneCount === 0;

    if (!visibleTasks.length) {
      taskListEl.hidden = true;
      taskListEl.innerHTML = '';
      if (emptyEl) emptyEl.hidden = false;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;
    taskListEl.hidden = false;
    taskListEl.innerHTML = visibleTasks
      .map((t) => {
        const isRunning = activeTimerTaskId && activeTimerTaskId === t.id;
        const starsText = t.priority === '3' ? '★★★ High' : t.priority === '1' ? '★ Light' : '★★ Core';
        return `
        <li class="planner-item${t.done ? ' is-done' : ''}${isRunning ? ' is-active' : ''}" data-task-id="${escapeHtml(t.id)}">
          <label class="planner-check">
            <input type="checkbox" data-toggle-task="${escapeHtml(t.id)}"${t.done ? ' checked' : ''} aria-label="Mark ${escapeHtml(t.title)} complete">
            <span class="planner-check__box" aria-hidden="true"></span>
          </label>
          <div class="planner-item__body">
            <div class="planner-item__title-row">
              <span class="planner-item__title">${escapeHtml(t.title)}</span>
              ${isRunning ? '<span class="scope-pill scope-pill--group">Running in Timer</span>' : ''}
            </div>
            <div class="planner-item__meta">
              <span class="star-badge star-badge--${escapeHtml(t.priority || '2')}">${starsText}</span>
              <span class="scope-pill">${Number(t.minutes || 25)}m goal &middot; ${Number(t.loggedMinutes || 0)}m focused</span>
              ${t.lessonUrl ? `<a class="planner-lesson-link" href="${root}${escapeHtml(t.lessonUrl)}">${escapeHtml(t.courseCode || 'Open Lesson')} &rarr;</a>` : ''}
            </div>
          </div>
          <div class="planner-item__actions">
            <button type="button" class="btn btn--primary btn--sm" data-start-task="${escapeHtml(t.id)}">
              ${isRunning ? 'Restart Timer' : '▶ Start Timer'}
            </button>
            <button type="button" class="btn btn--ghost btn--icon" data-delete-task="${escapeHtml(t.id)}" aria-label="Delete task" title="Remove task">
              &times;
            </button>
          </div>
        </li>`;
      })
      .join('');
  };

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const rawTitle = titleInput.value.trim();
    const doc = lessonSelect ? lessonMap.get(lessonSelect.value) : null;
    const finalTitle = rawTitle || (doc ? `${doc.courseCode} L${doc.lessonNumber}: ${doc.title}` : '');
    if (!finalTitle) {
      titleInput.focus();
      return;
    }

    const mins = Math.min(180, Math.max(5, Number(minsInput?.value || 25)));
    const plan = readPlanner();
    plan.tasks.unshift({
      id: `task_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      title: finalTitle,
      minutes: mins,
      loggedMinutes: 0,
      priority: prioritySelect?.value || '2',
      lessonId: doc ? doc.id : '',
      courseCode: doc ? doc.courseCode : '',
      lessonUrl: doc ? doc.url : '',
      done: false,
      createdAt: Date.now(),
    });
    writePlanner(plan);
    titleInput.value = '';
    if (lessonSelect) lessonSelect.value = '';
    render();
    if (showToast) showToast('Added to today’s study plan');
  });

  // Quick preset chips
  document.querySelectorAll('[data-plan-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mins = Number(btn.dataset.mins || 25);
      if (minsInput) minsInput.value = String(mins);
      if (!titleInput.value.trim()) {
        titleInput.value = btn.dataset.planPreset || '';
      }
      titleInput.focus();
    });
  });

  taskListEl.addEventListener('change', (ev) => {
    const cb = ev.target.closest('[data-toggle-task]');
    if (!cb) return;
    const plan = readPlanner();
    const task = plan.tasks.find((t) => t.id === cb.dataset.toggleTask);
    if (task) {
      task.done = cb.checked;
      writePlanner(plan);
      render();
    }
  });

  taskListEl.addEventListener('click', (ev) => {
    const startBtn = ev.target.closest('[data-start-task]');
    if (startBtn) {
      const plan = readPlanner();
      const task = plan.tasks.find((t) => t.id === startBtn.dataset.startTask);
      if (task && window.IASDS_TIMER) {
        window.IASDS_TIMER.startTaskSession({
          id: task.id,
          title: task.title,
          minutes: task.minutes,
          lessonUrl: task.lessonUrl,
        });
        render();
      }
      return;
    }

    const delBtn = ev.target.closest('[data-delete-task]');
    if (delBtn) {
      const plan = readPlanner();
      plan.tasks = plan.tasks.filter((t) => t.id !== delBtn.dataset.deleteTask);
      writePlanner(plan);
      render();
      if (showToast) showToast('Task removed from daily plan');
    }
  });

  filterGroup?.addEventListener('click', (ev) => {
    const chip = ev.target.closest('.filter-chip');
    if (!chip) return;
    currentFilter = chip.dataset.filter || 'all';
    filterGroup.querySelectorAll('.filter-chip').forEach((c) => {
      c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
    });
    render();
  });

  clearDoneBtn?.addEventListener('click', () => {
    const plan = readPlanner();
    plan.tasks = plan.tasks.filter((t) => !t.done);
    writePlanner(plan);
    render();
    if (showToast) showToast('Completed tasks cleared');
  });

  window.addEventListener('iasds:plannerchange', render);
  window.addEventListener('storage', (ev) => {
    if (ev.key === PLANNER_KEY || ev.key === TIMER_KEY) render();
  });

  render();
}
