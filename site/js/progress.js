/* ==========================================================================
   IASDS Progress, Bookmarks & Preferences Storage (localStorage)
   ========================================================================== */

const STORAGE_KEYS = {
  completed: 'iasds_completed_lessons_v1',
  visited: 'iasds_visited_lessons_v1',
  lastOpened: 'iasds_last_opened_v1',
  bookmarks: 'iasds_bookmarks_v1',
  theme: 'iasds_theme_v1',
  fontSize: 'iasds_font_size_v1',
  lineHeight: 'iasds_line_height_v1',
  focusMode: 'iasds_focus_mode_v1',
  sidebarCollapsed: 'iasds_sidebar_collapsed_v1',
};

function safeRead(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private browsing or quota full)
  }
}

export function getCompletedSet() {
  const arr = safeRead(STORAGE_KEYS.completed, []);
  return new Set(Array.isArray(arr) ? arr : []);
}

export function getVisitedMap() {
  const obj = safeRead(STORAGE_KEYS.visited, {});
  return obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
}

export function isCompleted(lessonId) {
  return getCompletedSet().has(lessonId);
}

export function getLessonStatus(lessonId) {
  if (getCompletedSet().has(lessonId)) return 'completed';
  const visited = getVisitedMap();
  if (visited[lessonId]) return 'in-progress';
  return 'not-started';
}

export function toggleCompleted(lessonId) {
  const set = getCompletedSet();
  let completed;
  if (set.has(lessonId)) {
    set.delete(lessonId);
    completed = false;
  } else {
    set.add(lessonId);
    completed = true;
  }
  safeWrite(STORAGE_KEYS.completed, [...set]);
  return completed;
}

export function markVisited(lessonMeta) {
  if (!lessonMeta || !lessonMeta.id) return;
  const visited = getVisitedMap();
  visited[lessonMeta.id] = Date.now();
  safeWrite(STORAGE_KEYS.visited, visited);
  safeWrite(STORAGE_KEYS.lastOpened, {
    id: lessonMeta.id,
    title: lessonMeta.title,
    courseCode: lessonMeta.courseCode,
    courseName: lessonMeta.courseName,
    url: lessonMeta.url,
    timestamp: Date.now(),
  });
}

export function getLastOpened() {
  return safeRead(STORAGE_KEYS.lastOpened, null);
}

/* ---------- Section Bookmarks ---------- */
export function getBookmarks() {
  const list = safeRead(STORAGE_KEYS.bookmarks, []);
  return Array.isArray(list) ? list : [];
}

export function isBookmarked(bookmarkId) {
  return getBookmarks().some((b) => b.id === bookmarkId);
}

export function toggleBookmark(item) {
  const list = getBookmarks();
  const idx = list.findIndex((b) => b.id === item.id);
  let saved;
  if (idx >= 0) {
    list.splice(idx, 1);
    saved = false;
  } else {
    list.unshift({
      id: item.id,
      lessonId: item.lessonId,
      courseCode: item.courseCode,
      lessonTitle: item.lessonTitle,
      headingText: item.headingText,
      url: item.url,
      savedAt: Date.now(),
    });
    saved = true;
  }
  safeWrite(STORAGE_KEYS.bookmarks, list);
  return saved;
}

export function removeBookmark(bookmarkId) {
  const list = getBookmarks().filter((b) => b.id !== bookmarkId);
  safeWrite(STORAGE_KEYS.bookmarks, list);
  return list;
}

/* ---------- Preferences ---------- */
export function getPreferredTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEYS.theme);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // ignore
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function saveTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.theme, theme);
  } catch {
    // ignore
  }
}

export function getReadingPrefs() {
  return {
    fontSize: safeRead(STORAGE_KEYS.fontSize, 'md'),
    lineHeight: safeRead(STORAGE_KEYS.lineHeight, 'normal'),
    focusMode: Boolean(safeRead(STORAGE_KEYS.focusMode, false)),
    sidebarCollapsed: Boolean(safeRead(STORAGE_KEYS.sidebarCollapsed, false)),
  };
}

export function saveReadingPref(name, value) {
  if (name in STORAGE_KEYS) {
    safeWrite(STORAGE_KEYS[name], value);
  }
}

/* ---------- Reset Progress ---------- */
export function resetAllProgress() {
  try {
    window.localStorage.removeItem(STORAGE_KEYS.completed);
    window.localStorage.removeItem(STORAGE_KEYS.visited);
    window.localStorage.removeItem(STORAGE_KEYS.lastOpened);
    window.localStorage.removeItem(STORAGE_KEYS.bookmarks);
  } catch {
    // ignore
  }
}
