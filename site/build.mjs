/* ==========================================================================
   IASDS First Year Learning Portal — Zero-Dependency Static Site Builder
   Reads the 7 original course folders (read-only), generates dist/ pages,
   scoped per-lesson styles & scripts, search index JSON, and manifest JSON.
   ========================================================================== */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  COURSE_BLUEPRINTS,
  EXAM_ARCHITECTURE,
  LESSON_RATINGS,
  SCOPE_LABELS,
  STAR_META,
  enhanceLessonContent,
  rateUnitHeading,
} from './data/exam-intelligence.mjs';
import {
  upgradeExamAnswersHtml,
  upgradeExamAnswersJs,
} from './data/exam-script-upgrades.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SITE_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const IGNORED_DIRS = new Set(['site', 'dist', 'api', 'node_modules', '.git', '.github', '.vscode', '.vercel']);
const KATEX_VERSION = '0.16.11';
const SITE_NAME = 'IASDS First-Year Study Archive';
const SITE_TAGLINE = 'Applied Statistics & Data Science — ISRT, University of Dhaka';

/* ---------- Lucide Inline SVG Icons (single consistent line icon set) ---------- */
const SVG = {
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  menu: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
  sidebar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
  panelRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>',
  panelRightClose: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>',
  type: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  help: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  bookOpen: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  bookmark: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  circle: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  printer: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>',
  layers: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  target: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  sliders: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>',
  calendarCheck: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  bot: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
};

/* ---------- Utilities ---------- */
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function decodeEntities(str) {
  return String(str || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&bull;|&middot;/g, '·')
    .replace(/&nbsp;/g, ' ')
    .replace(/&times;/g, '×')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
}

function slugify(str) {
  return decodeEntities(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72) || 'item';
}

function stripTags(html) {
  return decodeEntities(
    String(html || '')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirRecursive(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/* ---------- Brace-Aware CSS Scoper ---------- */
const SKIP_CHROME_SELECTORS = [
  /^\.sidebar\b/i,
  /^\.app-shell\b/i,
  /^\.topbar\b/i,
  /^\.top-header\b/i,
  /^\.mobile-bar\b/i,
  /^\.sidebar-overlay\b/i,
  /^#reading-progress\b/i,
  /^aside(\.|\b)/i,
  /^header\.(topbar|top-header)\b/i,
  /^nav\.sidebar\b/i,
];

function splitSelectors(selText) {
  const parts = [];
  let cur = '';
  let depth = 0;
  for (let i = 0; i < selText.length; i++) {
    const ch = selText[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
    if (ch === ',' && depth === 0) {
      parts.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

function rewriteSelector(sel) {
  const s = sel.trim();
  if (!s) return null;
  if (SKIP_CHROME_SELECTORS.some((re) => re.test(s))) return null;

  // Dark theme root selectors
  if (/^(?::root|html|body)?\[data-theme=["']dark["']\]$/i.test(s) || /^body\.dark$/i.test(s) || /^\.dark$/i.test(s)) {
    return 'html[data-theme="dark"] .lesson-content';
  }
  if (/^(?::root|html|body)?\[data-theme=["']dark["']\]\s+(.+)$/i.test(s)) {
    const rest = s.replace(/^(?::root|html|body)?\[data-theme=["']dark["']\]\s+/i, '');
    return `html[data-theme="dark"] .lesson-content ${rest}`;
  }
  if (/^(?:html|body)\.dark\s+(.+)$/i.test(s)) {
    const rest = s.replace(/^(?:html|body)\.dark\s+/i, '');
    return `html[data-theme="dark"] .lesson-content ${rest}`;
  }

  // Root / html / body / main
  if (/^(?::root|html|body|main|\.main|\.main-content)$/i.test(s)) {
    return '.lesson-content';
  }
  if (/^(?:html|body|main|\.main|\.main-content)\s+(.+)$/i.test(s)) {
    const rest = s.replace(/^(?:html|body|main|\.main|\.main-content)\s+/i, '');
    return `.lesson-content ${rest}`;
  }
  if (s === '*' || s === '*::before' || s === '*::after') {
    return `.lesson-content ${s}`;
  }
  if (s.startsWith('.lesson-content')) return s;
  return `.lesson-content ${s}`;
}

function sanitizeDeclarations(selList, decls) {
  const isRootTarget = selList.some((s) => s === '.lesson-content' || s.startsWith('.lesson-content *'));
  if (!isRootTarget) return decls;
  // Strip fixed-layout chrome properties that belong to old full-page shells
  return decls
    .replace(/\b(?:margin-left|padding-top|min-height|height|overflow-x)\s*:[^;]+;?/gi, '')
    .replace(/\b(?:margin|padding)\s*:\s*0\s*;?/gi, '');
}

function scopeCssBlock(css) {
  const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, '');
  let out = '';
  let i = 0;
  const len = cleaned.length;

  while (i < len) {
    while (i < len && /\s/.test(cleaned[i])) i++;
    if (i >= len) break;

    // Find next '{' or ';'
    let start = i;
    let bracePos = -1;
    let semiPos = -1;
    for (let j = i; j < len; j++) {
      if (cleaned[j] === '{') {
        bracePos = j;
        break;
      }
      if (cleaned[j] === ';') {
        semiPos = j;
        break;
      }
    }

    if (semiPos !== -1 && (bracePos === -1 || semiPos < bracePos)) {
      // At-rule statement like @import or @charset — skip @import google fonts to avoid duplicates
      const stmt = cleaned.slice(start, semiPos + 1).trim();
      if (!/^@import/i.test(stmt)) out += stmt + '\n';
      i = semiPos + 1;
      continue;
    }

    if (bracePos === -1) break;

    const prelude = cleaned.slice(start, bracePos).trim();
    // Match balanced closing brace
    let depth = 1;
    let k = bracePos + 1;
    while (k < len && depth > 0) {
      if (cleaned[k] === '{') depth++;
      else if (cleaned[k] === '}') depth--;
      k++;
    }
    const inner = cleaned.slice(bracePos + 1, k - 1);
    i = k;

    if (/^@(?:keyframes|-webkit-keyframes|font-face|property)/i.test(prelude)) {
      out += `${prelude} {${inner}}\n`;
    } else if (/^@(?:media|supports|layer|container)/i.test(prelude)) {
      if (/print/i.test(prelude)) continue; // Our dedicated print.css handles printing cleanly
      const scopedInner = scopeCssBlock(inner);
      if (scopedInner.trim()) {
        out += `${prelude} {\n${scopedInner}}\n`;
      }
    } else if (prelude.startsWith('@')) {
      continue;
    } else {
      const selectors = splitSelectors(prelude)
        .map(rewriteSelector)
        .filter(Boolean);
      if (!selectors.length) continue;
      const safeDecls = sanitizeDeclarations(selectors, inner).trim();
      if (!safeDecls) continue;
      out += `${selectors.join(', ')} { ${safeDecls} }\n`;
    }
  }
  return out;
}

/* ---------- ECON107 Safe LaTeX Converter ----------
   Converts genuine inline LaTeX $...$ inside ECON107 HTML text nodes to \(...\)
   while preserving currency figures like $10, $45B, $5.50 untouched.
   ------------------------------------------------------------------------- */
function convertEconLatex(html) {
  // Process only text outside of HTML tags and <script>/<style> blocks
  return html.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, text) => {
    if (tag) return tag;
    // Match $...$ where the opening $ is NOT immediately followed by a digit (currency)
    // and content contains letters, LaTeX commands, operators, or subscripts/superscripts
    return text.replace(/\$([^$\n]{1,120})\$/g, (full, expr) => {
      const trimmed = expr.trim();
      if (!trimmed) return full;
      // Skip obvious currency ranges like "$45B, NDP = $" or "$10 to $"
      if (/^\d/.test(trimmed)) return full;
      if (/,\s+[A-Z]{2,}/.test(trimmed) || /\)\s+/.test(trimmed)) return full;
      // Accept if it looks like a math variable/expression (starts with letter, \, (, -, or single uppercase symbol)
      if (/^[A-Za-z\\(\[]/.test(trimmed) && !/\s{2,}/.test(trimmed)) {
        return `\\(${trimmed}\\)`;
      }
      return full;
    });
  });
}

/* ---------- Readable Plain-Text LaTeX Conversion (for titles, nav & cards) ---------- */
function latexToReadableUnicode(str) {
  const cleanExpr = (expr) =>
    expr
      .replace(/\\mathbb\{R\}\^n/g, 'ℝⁿ')
      .replace(/\\mathbb\{R\}\^3/g, 'ℝ³')
      .replace(/\\mathbb\{R\}\^2/g, 'ℝ²')
      .replace(/\\mathbb\{R\}/g, 'ℝ')
      .replace(/\\(?:text|mathrm|mathbf|operatorname|mathcal)\{([^}]+)\}/g, '$1')
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\varepsilon/g, 'ε')
      .replace(/\\epsilon/g, 'ε')
      .replace(/\\Delta/g, 'Δ')
      .replace(/\\delta/g, 'δ')
      .replace(/\\sigma/g, 'σ')
      .replace(/\\mu/g, 'μ')
      .replace(/\\Omega/g, 'Ω')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\chi/g, 'χ')
      .replace(/\\lambda/g, 'λ')
      .replace(/\\pi/g, 'π')
      .replace(/\\theta/g, 'θ')
      .replace(/\\infty/g, '∞')
      .replace(/\\times/g, '×')
      .replace(/\\cdot/g, '·')
      .replace(/\\to/g, '→')
      .replace(/\\le\b/g, '≤')
      .replace(/\\ge\b/g, '≥')
      .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
      .replace(/\\([a-zA-Z]+)/g, '$1')
      .replace(/[{}]/g, '')
      .trim();

  return String(str || '')
    .replace(/\$([^$]+)\$/g, (_, expr) => cleanExpr(expr))
    .replace(/\\\(([\s\S]*?)\\\)/g, (_, expr) => cleanExpr(expr))
    .replace(/R\^n\b/g, 'ℝⁿ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ---------- Clean Lesson Title Extraction ---------- */
function cleanLessonTitle(rawH1, rawTitle, filename, lessonNumber) {
  let candidate = decodeEntities(rawH1 || rawTitle || filename.replace(/\.html?$/i, ''));
  // If H1 is just the generic course name (e.g. MATH103 Lesson 1 H1 is "Foundations of Mathematics"), prefer <title>
  if (/^foundations of mathematics$/i.test(candidate.trim()) && rawTitle) {
    candidate = decodeEntities(rawTitle);
  }
  candidate = candidate
    .replace(/\s*\|\s*(?:AST|MATH|ECON)\s*\d+.*$/i, '')
    .replace(/\s*[—–-]\s*(?:AST|MATH|ECON)\s*\d+.*$/i, '')
    .replace(/^(?:AST|MATH|ECON)\s*\d+\s*[—–•·:-]\s*/i, '')
    .replace(/^Lesson\s*\d+\s*[:—–-]\s*/i, '')
    .replace(/\s*\(ISRT.*?\)\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
  return latexToReadableUnicode(candidate) || `Lesson ${lessonNumber}`;
}

/* ---------- Infer Concise Course Summary From Its Lessons ---------- */
function inferCourseSummary(courseCode, lessons) {
  const cleanTopics = lessons.map((l) =>
    latexToReadableUnicode(l.title)
      .replace(/\([^)]*\)/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  );
  const first = cleanTopics[0] || '';
  const mid = cleanTopics[Math.floor(cleanTopics.length / 2)] || '';
  const last = cleanTopics[cleanTopics.length - 1] || '';
  const samples = [...new Set([first, mid, last].filter(Boolean))];
  if (samples.length >= 3) {
    return `Covers ${samples[0]}, progressing through ${samples[1]} to ${samples[2]}.`;
  }
  if (samples.length > 0) {
    return `Covers ${samples.join(', ')}.`;
  }
  return `First-year ${courseCode} course lectures and interactive study labs.`;
}

/* ---------- Neutralize Legacy Initial Theme Overrides in Extracted Lesson Scripts ---------- */
function sanitizeLessonScript(jsCode) {
  let code = jsCode;
  // Prevent standalone lesson scripts from overwriting our site's authoritative light/dark theme on load
  code = code.replace(
    /document\.documentElement\.setAttribute\(\s*['"]data-theme['"]\s*,[^)]+\)/g,
    'void 0 /* managed by IASDS shell */'
  );
  code = code.replace(
    /document\.body\.classList\.(?:add|remove|toggle)\(\s*['"]dark['"]\s*\)/g,
    'void 0 /* managed by IASDS shell */'
  );
  code = code.replace(
    /document\.documentElement\.classList\.(?:add|remove|toggle)\(\s*['"]dark['"]\s*\)/g,
    'void 0 /* managed by IASDS shell */'
  );
  // Guard removed standalone sidebar milestone links (e.g. MATH105 L1-L9 [data-section="..."])
  code = code.replace(
    /document\.querySelector\((\s*['"]\[data-section=[^)]+)\)\.classList/g,
    'document.querySelector($1)?.classList'
  );
  return code;
}

/* ---------- Scan Root Workspace ---------- */
function scanWorkspace() {
  const dirEntries = fs
    .readdirSync(ROOT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !IGNORED_DIRS.has(d.name));

  const courses = [];
  const sourceIssues = [];

  for (const dir of dirEntries) {
    const folderPath = path.join(ROOT_DIR, dir.name);
    const codeMatch = dir.name.match(/^([A-Z]+)(\d+)\s+(.+)$/);
    const code = codeMatch ? `${codeMatch[1]}${codeMatch[2]}` : slugify(dir.name).toUpperCase();
    const courseNum = codeMatch ? parseInt(codeMatch[2], 10) : 999;
    const courseName = codeMatch ? codeMatch[3].trim() : dir.name;
    const courseSlug = slugify(code);

    const htmlFiles = [];
    const nonHtmlAssets = [];

    function walk(d, relPrefix) {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, entry.name);
        const rel = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
        if (entry.isDirectory()) {
          walk(full, rel);
        } else if (/\.html?$/i.test(entry.name)) {
          htmlFiles.push({ full, rel, name: entry.name });
        } else {
          nonHtmlAssets.push({ full, rel, name: entry.name });
        }
      }
    }
    walk(folderPath, '');

    if (!htmlFiles.length) continue;

    // Sort lessons numerically by extracted lesson number
    const parsedLessons = htmlFiles.map((file) => {
      const numMatch = file.name.match(/lesson[_\s]*(\d+)/i);
      const lessonNumber = numMatch ? parseInt(numMatch[1], 10) : 999;
      if (!numMatch) {
        sourceIssues.push({
          type: 'missing-number',
          course: code,
          file: file.rel,
          detail: 'Filename does not contain an explicit lesson number',
        });
      }
      if (/[\s,&]/.test(file.name)) {
        sourceIssues.push({
          type: 'odd-filename',
          course: code,
          file: file.rel,
          detail: 'Filename contains spaces or special characters; normalized cleanly in dist/',
        });
      }
      const rawHtml = fs.readFileSync(file.full, 'utf8');
      const titleM = rawHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const h1M = rawHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const langM = rawHtml.match(/<html[^>]*lang=["']([^"']+)["']/i);
      const rawTitle = titleM ? titleM[1].replace(/\s+/g, ' ').trim() : '';
      const rawH1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
      const title = cleanLessonTitle(rawH1, rawTitle, file.name, lessonNumber);
      const paddedNum = String(lessonNumber).padStart(2, '0');
      const lessonSlug = `lesson-${paddedNum}-${slugify(title)}`;

      return {
        courseCode: code,
        courseName,
        courseSlug,
        lessonNumber,
        id: `${courseSlug}-l${paddedNum}`,
        slug: lessonSlug,
        url: `courses/${courseSlug}/${lessonSlug}.html`,
        sourceFile: file.rel,
        sourcePath: file.full,
        lang: langM ? langM[1] : 'en',
        rawHtml,
        title,
      };
    });

    parsedLessons.sort((a, b) => a.lessonNumber - b.lessonNumber || a.sourceFile.localeCompare(b.sourceFile));

    courses.push({
      code,
      courseNum,
      name: courseName,
      slug: courseSlug,
      folderName: dir.name,
      folderPath,
      url: `courses/${courseSlug}/index.html`,
      lessons: parsedLessons,
      nonHtmlAssets,
      summary: inferCourseSummary(code, parsedLessons),
    });
  }

  // Canonical curriculum order by course number (101 -> 107)
  courses.sort((a, b) => a.courseNum - b.courseNum || a.code.localeCompare(b.code));
  return { courses, sourceIssues };
}

/* ---------- Shared HTML Layout Chrome ---------- */
function renderHeader({ root, activeNav, isLesson }) {
  return `
  <header class="site-header">
    <div class="site-header__inner">
      <div class="site-header__left">
        ${
          isLesson
            ? `<button type="button" id="sidebarToggleBtn" class="btn btn--ghost btn--icon" aria-label="Toggle course navigation sidebar" aria-expanded="false" title="Toggle sidebar">${SVG.sidebar}</button>`
            : ''
        }
        <a class="site-brand" href="${root}index.html">
          <img class="site-brand__mark" src="${root}assets/favicon.svg" alt="" width="26" height="26">
          <span>IASDS Archive</span>
          <span class="site-brand__sub">First-Year Curriculum</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a class="site-nav__link" href="${root}index.html"${activeNav === 'home' ? ' aria-current="page"' : ''}>Courses</a>
          <a class="site-nav__link" href="${root}exam-prep/index.html"${activeNav === 'exam-prep' ? ' aria-current="page"' : ''}>Exam Prep</a>
          <a class="site-nav__link" href="${root}planner/index.html"${activeNav === 'planner' ? ' aria-current="page"' : ''}>Planner</a>
          <a class="site-nav__link" href="${root}bookmarks/index.html"${activeNav === 'bookmarks' ? ' aria-current="page"' : ''}>Bookmarks</a>
          <a class="site-nav__link" href="${root}about/index.html"${activeNav === 'about' ? ' aria-current="page"' : ''}>About &amp; Guide</a>
        </nav>
      </div>
      <div class="site-header__right">
        <a class="header-search-btn" href="${root}search/index.html" aria-label="Search all lessons (shortcut /)">
          ${SVG.search}
          <span class="header-search-btn__label">Search</span>
          <kbd>/</kbd>
        </a>
        <div class="timer-menu">
          <button type="button" id="timerToggleBtn" class="timer-pill" aria-label="Study timer and alert settings" aria-expanded="false" aria-controls="timerPopover" title="Study Timer" data-timer-state="idle">
            ${SVG.clock}
            <span id="timerPillText" class="timer-pill__time">25:00</span>
            <span id="timerPillDot" class="timer-pill__dot" hidden></span>
          </button>
          <div id="timerPopover" class="reading-popover timer-popover" role="region" aria-label="Study Timer" hidden></div>
        </div>
        ${
          isLesson
            ? `<div class="reading-menu">
                <button type="button" id="readingControlsBtn" class="btn btn--ghost btn--icon" aria-label="Reading display settings" aria-expanded="false" aria-controls="readingPopover" title="Reading controls">${SVG.type}</button>
                <div id="readingPopover" class="reading-popover" role="region" aria-label="Reading display settings" hidden>
                  <div class="reading-popover__group">
                    <span class="reading-popover__label">Font size</span>
                    <div class="segmented" role="group" aria-label="Font size">
                      <button type="button" class="segmented__btn" data-set-font="sm" aria-pressed="false">A&minus;</button>
                      <button type="button" class="segmented__btn" data-set-font="md" aria-pressed="true">A</button>
                      <button type="button" class="segmented__btn" data-set-font="lg" aria-pressed="false">A+</button>
                    </div>
                  </div>
                  <div class="reading-popover__group">
                    <span class="reading-popover__label">Line spacing</span>
                    <div class="segmented" role="group" aria-label="Line spacing">
                      <button type="button" class="segmented__btn" data-set-lh="compact" aria-pressed="false">Tight</button>
                      <button type="button" class="segmented__btn" data-set-lh="normal" aria-pressed="true">Standard</button>
                      <button type="button" class="segmented__btn" data-set-lh="relaxed" aria-pressed="false">Relaxed</button>
                    </div>
                  </div>
                  <div class="reading-popover__group">
                    <button type="button" id="focusModeToggle" class="btn btn--secondary" aria-pressed="false">Enter focus mode</button>
                  </div>
                </div>
              </div>`
            : ''
        }
        <button type="button" id="siteThemeToggle" class="btn btn--ghost btn--icon" aria-label="Toggle color theme" title="Toggle theme (t)">${SVG.moon}</button>
        <button type="button" id="shortcutsHelpBtn" class="btn btn--ghost btn--icon" aria-label="Keyboard shortcuts" title="Keyboard shortcuts (?)">${SVG.help}</button>
        ${
          isLesson
            ? `<button type="button" id="tocToggleBtn" class="btn btn--ghost btn--icon toc-toggle-btn" aria-label="Toggle On This Page sidebar" aria-expanded="true" title="Toggle On This Page">${SVG.panelRight}</button>`
            : ''
        }
      </div>
    </div>
  </header>`;
}

function renderDialogs(includeReset = false, includeLightbox = false) {
  return `
  <dialog id="shortcutsDialog" class="site-dialog" aria-labelledby="shortcutsDialogTitle">
    <div class="site-dialog__header">
      <h2 id="shortcutsDialogTitle" class="site-dialog__title">Keyboard Shortcuts</h2>
      <button type="button" class="btn btn--ghost btn--icon" data-close-dialog aria-label="Close shortcuts help">${SVG.close}</button>
    </div>
    <div class="site-dialog__body">
      <table class="info-table">
        <thead>
          <tr><th>Key</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td><kbd>/</kbd></td><td>Open or focus full-text search</td></tr>
          <tr><td><kbd>&larr;</kbd> / <kbd>&rarr;</kbd></td><td>Previous / Next lesson</td></tr>
          <tr><td><kbd>t</kbd></td><td>Toggle light and dark theme</td></tr>
          <tr><td><kbd>m</kbd></td><td>Mark current lesson as complete / incomplete</td></tr>
          <tr><td><kbd>?</kbd></td><td>Show or close this shortcut guide</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close open drawer or modal dialog</td></tr>
        </tbody>
      </table>
    </div>
    <div class="site-dialog__footer">
      <button type="button" class="btn btn--primary" data-close-dialog>Done</button>
    </div>
  </dialog>
  ${
    includeReset
      ? `<dialog id="resetProgressDialog" class="site-dialog" aria-labelledby="resetDialogTitle">
          <div class="site-dialog__header">
            <h2 id="resetDialogTitle" class="site-dialog__title">Reset Study Progress?</h2>
            <button type="button" class="btn btn--ghost btn--icon" data-close-dialog aria-label="Cancel reset">${SVG.close}</button>
          </div>
          <div class="site-dialog__body">
            <p>This will permanently clear all completed lessons, last-opened history, and saved section bookmarks stored in this browser. Your theme preference will remain unchanged.</p>
          </div>
          <div class="site-dialog__footer">
            <button type="button" class="btn btn--secondary" data-close-dialog>Cancel</button>
            <button type="button" id="confirmResetBtn" class="btn btn--danger">Yes, reset progress</button>
          </div>
        </dialog>`
      : ''
  }
  ${
    includeLightbox
      ? `<dialog id="lightboxDialog" class="site-dialog lightbox-dialog" aria-label="Zoomed figure view">
          <div class="site-dialog__header">
            <h2 class="site-dialog__title">Figure Inspection</h2>
            <button type="button" class="btn btn--ghost btn--icon" data-close-dialog aria-label="Close zoomed figure">${SVG.close}</button>
          </div>
          <div class="site-dialog__body">
            <div id="lightboxStage" class="lightbox-dialog__stage"></div>
            <p id="lightboxCaption" class="panel-card__meta" hidden></p>
          </div>
        </dialog>`
      : ''
  }
  <div id="siteToast" class="site-toast" role="status" aria-live="polite" hidden></div>`;
}

function renderFooter(root) {
  return `
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div>${SITE_NAME} &middot; ${SITE_TAGLINE} &middot; <span class="site-footer__credit">Developed by Saad</span></div>
      <nav class="site-footer__links" aria-label="Footer">
        <a href="${root}index.html">Courses</a>
        <a href="${root}exam-prep/index.html">Exam Prep</a>
        <a href="${root}planner/index.html">Planner</a>
        <a href="${root}bookmarks/index.html">Bookmarks</a>
        <a href="${root}search/index.html">Search</a>
        <a href="${root}about/index.html">About &amp; Shortcuts</a>
      </nav>
    </div>
  </footer>`;
}

function renderPageShell({
  lang = 'en',
  root,
  pageType,
  title,
  description,
  activeNav = '',
  isLesson = false,
  katexMode = '',
  extraHead = '',
  bodyContent,
  extraBodyEnd = '',
  includeReset = false,
  includeLightbox = false,
}) {
  return `<!DOCTYPE html>
<html lang="${escapeHtml(lang)}" data-root="${root}"${katexMode ? ` data-katex-mode="${katexMode}"` : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/svg+xml" href="${root}assets/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <script src="${root}js/theme-init.js"></script>
  <link rel="stylesheet" href="${root}css/themes.css">
  <link rel="stylesheet" href="${root}css/base.css">
  <link rel="stylesheet" href="${root}css/components.css">
  ${extraHead}
  <link rel="stylesheet" href="${root}css/print.css" media="print">
</head>
<body data-page="${pageType}">
  <a class="skip-link" href="#main-content">Skip to main content</a>
  ${isLesson ? '<div class="reading-progress" aria-hidden="true"><div id="siteReadingProgressFill" class="reading-progress__fill"></div></div>' : ''}
  ${renderHeader({ root, activeNav, isLesson })}
  ${bodyContent}
  ${renderFooter(root)}
  ${renderDialogs(includeReset, includeLightbox)}
  ${extraBodyEnd}
  <script type="module" src="${root}js/app.js"></script>
</body>
</html>
`;
}

/* ---------- Process Individual Lesson ---------- */
function processLesson(lesson, course, allCourses, flatIndex, flatLessons, sourceIssues) {
  const html = lesson.rawHtml;
  const usesTailwind = /cdn\.tailwindcss\.com/i.test(html);
  const hasSourceKatex = /katex/i.test(html);
  const isEcon = course.code === 'ECON107';

  // Extract <main> content
  const bodyM = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyM ? bodyM[1] : html;
  const mainM = bodyHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let contentHtml = mainM ? mainM[1].trim() : bodyHtml.trim();

  // For AST102, also preserve the hero / learning-objectives <section> right before <main>
  if (course.code === 'AST102' && mainM) {
    const mainIdx = bodyHtml.indexOf(mainM[0]);
    const beforeMain = bodyHtml.slice(0, mainIdx);
    const afterTopHeader = beforeMain.replace(/<header[\s\S]*?<\/header>/i, '').trim();
    if (afterTopHeader && /<section[\s>]/i.test(afterTopHeader)) {
      contentHtml = `${afterTopHeader}\n${contentHtml}`;
    }
  }

  // Ensure strictly ONE <h1> on the page (demote extracted <h1> inside lesson content without duplicate class attributes)
  contentHtml = contentHtml.replace(/<h1(\s[^>]*)?>([\s\S]*?)<\/h1>/gi, (_, attrs = '', inner) => {
    if (/\bclass=["']([^"']*)["']/i.test(attrs)) {
      const merged = attrs.replace(/\bclass=(["'])([^"']*)\1/i, 'class=$1lesson-dup-heading $2$1');
      return `<h2${merged}>${inner}</h2>`;
    }
    return `<h2 class="lesson-dup-heading"${attrs}>${inner}</h2>`;
  });

  // Fix MATH103 broken relative lesson links (e.g. math103_lesson10.html -> actual built filename)
  if (course.code === 'MATH103') {
    const lessonByNum = new Map(course.lessons.map((l) => [l.lessonNumber, l]));
    contentHtml = contentHtml.replace(/href=["']math103_lesson(\d+)\.html["']/gi, (full, numStr) => {
      const target = lessonByNum.get(parseInt(numStr, 10));
      sourceIssues.push({
        type: 'broken-relative-link-fixed',
        course: course.code,
        file: lesson.sourceFile,
        detail: `Repaired broken source link "${full}" -> "${target ? `${target.slug}.html` : '#'}"`,
      });
      return target ? `href="${target.slug}.html"` : 'href="index.html"';
    });
  }

  // Apply empirical exam cleanups (remove AI completion banners, strip heading emojis, inject 2025 supplements)
  const examInfo = LESSON_RATINGS[lesson.id] || {
    stars: 2,
    scopes: ['final'],
    frequencyTag: 'Core Curriculum',
    examSummary: 'Core first-year topic.',
  };
  const starMeta = STAR_META[examInfo.stars] || STAR_META[2];
  contentHtml = enhanceLessonContent(lesson.id, course.code, contentHtml);
  contentHtml = upgradeExamAnswersHtml(lesson.id, course.code, contentHtml);

  // Handle ECON107 raw LaTeX while protecting currency $ amounts, and auto-enable KaTeX whenever math delimiters exist
  let needsKatex = hasSourceKatex;
  let katexMode = hasSourceKatex ? 'standard' : '';
  if (isEcon) {
    const converted = convertEconLatex(contentHtml);
    if (converted !== contentHtml || /\\\(|\\\[|\$\$/.test(contentHtml)) {
      contentHtml = converted;
      needsKatex = true;
      katexMode = 'econ';
    }
  } else if (!needsKatex && /\$[^$\n]+\$|\\\(|\\\[|\$\$/.test(contentHtml)) {
    needsKatex = true;
    katexMode = 'standard';
  }

  // Strip invalid SVG width="auto" / height="auto" attributes (valid in CSS, invalid SVG length attribute)
  contentHtml = contentHtml.replace(/<svg\b[^>]*>/gi, (svgTag) =>
    svgTag.replace(/\s+(?:width|height)=["']auto["']/gi, '')
  );

  // Ensure lazy-loading on any <img>
  contentHtml = contentHtml.replace(/<img(?![^>]*\bloading=)/gi, '<img loading="lazy"');

  // Extract & scope inline <style> blocks
  const styleBlocks = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
  let lessonCssUrl = '';
  if (styleBlocks.length) {
    const scopedCss = scopeCssBlock(styleBlocks.join('\n\n'));
    if (scopedCss.trim()) {
      const cssFile = `${course.slug}-${lesson.slug}.css`;
      const cssOutPath = path.join(DIST_DIR, 'assets', 'lesson-styles', cssFile);
      ensureDir(path.dirname(cssOutPath));
      fs.writeFileSync(cssOutPath, scopedCss, 'utf8');
      lessonCssUrl = `assets/lesson-styles/${cssFile}`;
    }
  }

  // Extract inline interactive <script> blocks (skip tiny tailwind.config or head dark-mode init scripts)
  const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1].trim())
    .filter((code) => {
      if (!code) return false;
      if (/^\s*tailwind\.config\s*=/.test(code)) return false;
      if (code.length < 450 && /math103[_-]theme/i.test(code)) return false;
      return true;
    });

  let lessonJsUrl = '';
  if (inlineScripts.length) {
    const combinedJs = upgradeExamAnswersJs(
      sanitizeLessonScript(inlineScripts.join('\n;\n')),
      lesson.id,
      course.code
    );
    const jsFile = `${course.slug}-${lesson.slug}.js`;
    const jsOutPath = path.join(DIST_DIR, 'assets', 'lesson-scripts', jsFile);
    ensureDir(path.dirname(jsOutPath));
    fs.writeFileSync(jsOutPath, combinedJs, 'utf8');
    lessonJsUrl = `assets/lesson-scripts/${jsFile}`;
  }

  // Extract plain text BEFORE injecting unit star badges so search snippets stay clean
  const plainText = stripTags(`${contentHtml} ${examInfo.examSummary || ''}`);
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  const readingMinutes = Math.max(4, Math.round(wordCount / 200));

  // Rate every visible <h2> / <h3> unit and inject unit-level ★ / ★★ / ★★★ badges + TOC data attributes
  const headings = [];
  let highYieldUnits = 0;
  contentHtml = contentHtml.replace(/<(h[23])(\s[^>]*)?>([\s\S]*?)<\/\1>/gi, (full, tag, attrs = '', inner) => {
    if (/\b(?:lesson-dup-heading|sr-only)\b/i.test(attrs)) return full;
    const cleanText = latexToReadableUnicode(stripTags(inner));
    if (!cleanText || /^on this page$/i.test(cleanText)) return full;
    headings.push(cleanText);
    const { stars: unitStars, reason: unitReason } = rateUnitHeading(
      lesson.id,
      course.code,
      cleanText,
      examInfo.stars
    );
    if (unitStars === 3) highYieldUnits++;
    const uMeta = STAR_META[unitStars] || STAR_META[2];
    const tooltip = `${uMeta.label} — ${unitReason}`;
    const badgeHtml = ` <span class="unit-star-badge unit-star-badge--${unitStars}" title="${escapeHtml(tooltip)}" aria-label="${unitStars} of 3 stars exam importance: ${escapeHtml(uMeta.shortLabel)}">${uMeta.glyph}${unitStars === 1 ? ' <span class="unit-star-badge__note">Low-yield</span>' : ''}</span>`;
    const dataAttrs = ` data-exam-stars="${unitStars}" data-exam-reason="${escapeHtml(tooltip)}"`;
    return `<${tag}${attrs}${dataAttrs}>${inner}${badgeHtml}</${tag}>`;
  });

  // Prev / Next across course boundaries
  const prevLesson = flatIndex > 0 ? flatLessons[flatIndex - 1] : null;
  const nextLesson = flatIndex < flatLessons.length - 1 ? flatLessons[flatIndex + 1] : null;

  const root = '../../';

  const sidebarCourseLinks = course.lessons
    .map((l) => {
      const current = l.id === lesson.id;
      const lExam = LESSON_RATINGS[l.id] || { stars: 2 };
      const lGlyph = '★'.repeat(lExam.stars);
      return `<li>
        <a class="sidebar-nav-link" href="${l.slug}.html" data-lesson-id="${l.id}" data-completed="false"${current ? ' aria-current="page"' : ''}>
          <span class="sidebar-nav-link__icon" aria-hidden="true">${SVG.circle}</span>
          <span class="sidebar-nav-link__body">
            <span><strong>${l.lessonNumber}.</strong> ${escapeHtml(l.title)}</span>
            <span class="sidebar-star sidebar-star--${lExam.stars}" title="${lExam.stars} of 3 stars exam importance" aria-label="${lExam.stars} stars">${lGlyph}</span>
          </span>
        </a>
      </li>`;
    })
    .join('\n');

  const courseSwitcherLinks = allCourses
    .map(
      (c) => `<li>
        <a class="course-switcher__link" href="../${c.slug}/index.html"${c.code === course.code ? ' aria-current="true"' : ''}>
          <span>${escapeHtml(c.code)}</span>
          <span>${c.lessons.length}</span>
        </a>
      </li>`
    )
    .join('\n');

  const pagerHtml = `
    <nav class="lesson-pager" aria-label="Lesson navigation">
      ${
        prevLesson
          ? `<a id="prevLessonLink" class="pager-link pager-link--prev" href="${root}${prevLesson.url}">
              <span class="pager-link__dir">${SVG.arrowLeft} Previous lesson</span>
              ${prevLesson.courseCode !== course.code ? `<span class="pager-link__course">Crosses to ${escapeHtml(prevLesson.courseCode)}</span>` : ''}
              <span class="pager-link__title">Lesson ${prevLesson.lessonNumber}: ${escapeHtml(prevLesson.title)}</span>
            </a>`
          : '<div></div>'
      }
      ${
        nextLesson
          ? `<a id="nextLessonLink" class="pager-link pager-link--next" href="${root}${nextLesson.url}">
              <span class="pager-link__dir">Next lesson ${SVG.arrowRight}</span>
              ${nextLesson.courseCode !== course.code ? `<span class="pager-link__course">Continues to ${escapeHtml(nextLesson.courseCode)}</span>` : ''}
              <span class="pager-link__title">Lesson ${nextLesson.lessonNumber}: ${escapeHtml(nextLesson.title)}</span>
            </a>`
          : ''
      }
    </nav>`;

  const bodyContent = `
  <div id="sidebarBackdrop" class="sidebar-backdrop" hidden></div>
  <div class="lesson-shell">
    <aside id="courseSidebar" class="course-sidebar" aria-label="Course lessons" data-open="false">
      <div class="course-sidebar__head">
        <div>
          <span class="course-code">${escapeHtml(course.code)}</span>
          <div><a class="course-sidebar__course-link" href="index.html">${escapeHtml(course.name)}</a></div>
        </div>
        <button type="button" id="sidebarCloseBtn" class="btn btn--ghost btn--icon course-sidebar__close" aria-label="Close navigation menu">${SVG.close}</button>
      </div>
      <div class="course-sidebar__progress">
        <div class="progress-meta">
          <span>Course progress</span>
          <span id="sidebarProgressText">0/${course.lessons.length} done</span>
        </div>
        <div class="progress-track">
          <div id="sidebarProgressFill" class="progress-track__fill"></div>
        </div>
      </div>
      <nav aria-label="${escapeHtml(course.code)} lessons">
        <ul class="sidebar-nav-list">
          ${sidebarCourseLinks}
        </ul>
      </nav>
      <div class="course-switcher">
        <span class="course-switcher__label">All First-Year Courses</span>
        <ul class="course-switcher__list">
          ${courseSwitcherLinks}
        </ul>
      </div>
    </aside>

    <main id="main-content" class="lesson-main">
      <article class="lesson-article" id="lessonMetaData"
        data-lesson-id="${escapeHtml(lesson.id)}"
        data-lesson-title="${escapeHtml(lesson.title)}"
        data-course-code="${escapeHtml(course.code)}"
        data-course-name="${escapeHtml(course.name)}"
        data-lesson-url="${escapeHtml(lesson.url)}">

        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${root}index.html">Home</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <a href="index.html">${escapeHtml(course.code)}</a>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span class="breadcrumb__current" aria-current="page">Lesson ${lesson.lessonNumber}</span>
        </nav>

        <header class="lesson-header">
          <div class="lesson-header__meta">
            <span class="course-code">${escapeHtml(course.code)}</span>
            <span>Lesson ${lesson.lessonNumber} of ${course.lessons.length}</span>
            <span>&middot;</span>
            <span>${readingMinutes} min read</span>
            <span class="star-badge star-badge--${examInfo.stars}" title="${escapeHtml(starMeta.description)}">${starMeta.glyph} ${escapeHtml(starMeta.shortLabel)}</span>
            ${examInfo.group ? `<span class="scope-pill scope-pill--group">${escapeHtml(examInfo.group)}</span>` : ''}
            ${(examInfo.scopes || []).map((s) => `<span class="scope-pill">${escapeHtml(SCOPE_LABELS[s] || s)}</span>`).join('')}
          </div>
          <h1>${escapeHtml(lesson.title)}</h1>
          ${
            examInfo.examSummary
              ? `<div class="lesson-exam-note"><strong>ISRT Exam Pattern (${escapeHtml(examInfo.frequencyTag)}):</strong> ${escapeHtml(examInfo.examSummary)}</div>`
              : ''
          }
          <div class="lesson-header__actions">
            <button type="button" id="markCompleteBtn" class="btn btn--secondary" aria-pressed="false">
              ${SVG.circle}<span>Mark as complete</span>
            </button>
            <button type="button" id="qmhbotHeaderBtn" class="btn btn--primary" aria-expanded="false" aria-controls="qmhbotDrawer">
              ${SVG.bot}<span>Ask QMHBot</span>
            </button>
            <button type="button" class="btn btn--ghost btn--sm" onclick="window.print()" aria-label="Print this lesson">
              ${SVG.printer}<span>Print lesson</span>
            </button>
          </div>
        </header>

        <details id="mobileTocWrap" class="mobile-toc">
          <summary class="mobile-toc__summary">
            <span>On this page (with ★ unit priority)</span>
            ${SVG.chevronDown}
          </summary>
          <div class="mobile-toc__body">
            <div class="toc-legend" aria-label="Unit exam importance key">
              <span class="toc-legend__item"><span class="toc-legend__stars--3">★★★</span> High-yield</span>
              <span class="toc-legend__item"><span class="toc-legend__stars--2">★★</span> Regular</span>
              <span class="toc-legend__item"><span class="toc-legend__stars--1">★</span> Low-yield</span>
            </div>
            <ul id="mobileTocList" class="toc-list"></ul>
          </div>
        </details>

        <div class="lesson-content">
          ${contentHtml}
        </div>

        ${pagerHtml}
      </article>
    </main>

    <aside id="tocAside" class="toc-aside" aria-label="Table of contents">
      <div class="toc-aside__head">
        <div class="toc-title">On This Page</div>
        <button type="button" id="tocCollapseBtn" class="btn btn--ghost btn--icon" aria-label="Collapse On This Page sidebar" title="Collapse On This Page">${SVG.panelRightClose}</button>
      </div>
      <div class="toc-legend" aria-label="Unit exam importance key">
        <span class="toc-legend__item"><span class="toc-legend__stars--3">★★★</span> High</span>
        <span class="toc-legend__item"><span class="toc-legend__stars--2">★★</span> Core</span>
        <span class="toc-legend__item"><span class="toc-legend__stars--1">★</span> Low</span>
      </div>
      <nav aria-label="Section headings">
        <ul id="desktopTocList" class="toc-list"></ul>
      </nav>
    </aside>
  </div>`;

  const headParts = [];
  if (usesTailwind) {
    headParts.push(`<script src="https://cdn.tailwindcss.com"></script>`);
    headParts.push(`<script src="${root}js/tw-config.js"></script>`);
  }
  if (needsKatex) {
    headParts.push(
      `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css" crossorigin="anonymous">`
    );
    headParts.push(
      `<script defer src="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js" crossorigin="anonymous"></script>`
    );
    headParts.push(
      `<script defer src="https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>`
    );
  }
  if (lessonCssUrl) {
    headParts.push(`<link rel="stylesheet" href="${root}${lessonCssUrl}">`);
  }
  headParts.push(`<link rel="stylesheet" href="${root}css/lesson-bridge.css">`);

  const bodyEndParts = [`<script defer src="${root}js/lesson-compat.js"></script>`];
  if (lessonJsUrl) {
    bodyEndParts.push(`<script defer src="${root}${lessonJsUrl}"></script>`);
  }

  const pageHtml = renderPageShell({
    lang: lesson.lang || 'en',
    root,
    pageType: 'lesson',
    title: `${course.code} Lesson ${lesson.lessonNumber}: ${lesson.title} — ${SITE_NAME}`,
    description: `${course.code} (${course.name}) — Lesson ${lesson.lessonNumber}: ${lesson.title}. Interactive first-year study notes and practice archive.`,
    activeNav: 'home',
    isLesson: true,
    katexMode,
    extraHead: headParts.join('\n  '),
    bodyContent,
    extraBodyEnd: bodyEndParts.join('\n  '),
    includeReset: false,
    includeLightbox: true,
  });

  const outPath = path.join(DIST_DIR, lesson.url);
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, pageHtml, 'utf8');

  lesson.readingMinutes = readingMinutes;
  lesson.headings = headings;
  lesson.wordCount = wordCount;
  lesson.usesKatex = needsKatex;
  lesson.usesTailwind = usesTailwind;
  lesson.stars = examInfo.stars;
  lesson.scopes = examInfo.scopes || ['final'];
  lesson.group = examInfo.group || '';
  lesson.frequencyTag = examInfo.frequencyTag || '';
  lesson.examSummary = examInfo.examSummary || '';
  lesson.highYieldUnits = highYieldUnits;
  lesson.searchText = plainText.slice(0, 12000); // Plenty for full-text search while keeping JSON fast
}

/* ---------- Render Home Page (Minimal Doorway Dashboard) ---------- */
function buildHomePage(courses, totalLessons) {
  const cardsHtml = courses
    .map((c) => {
      const lessonIds = c.lessons.map((l) => l.id).join(',');
      return `
      <a class="course-card" href="${c.url}" data-course-card data-lesson-ids="${lessonIds}">
        <div class="course-card__top">
          <span class="course-code">${escapeHtml(c.code)}</span>
          <span class="course-card__count">${c.lessons.length} lessons</span>
        </div>
        <h3 class="course-card__title">${escapeHtml(c.name)}</h3>
        <div class="course-card__footer">
          <div class="progress-meta">
            <span data-course-progress-text>0 / ${c.lessons.length}</span>
            <span data-course-progress-pct>0%</span>
          </div>
          <div class="progress-track">
            <div class="progress-track__fill" data-course-progress-fill></div>
          </div>
        </div>
      </a>`;
    })
    .join('\n');

  const bodyContent = `
  <main id="main-content" class="page-container">
    <header class="editorial-header editorial-header--dashboard">
      <span class="editorial-header__eyebrow">IASDS &middot; UNIVERSITY OF DHAKA &middot; YEAR 1</span>
      <h1>Applied Statistics &amp; Data Science</h1>

      <div class="progress-summary" aria-label="Archive summary and study progress">
        <div class="progress-summary__stats">
          <div>
            <span class="stat-item__value">${courses.length}</span>
            <span class="stat-item__label">Courses</span>
          </div>
          <div>
            <span class="stat-item__value">${totalLessons}</span>
            <span class="stat-item__label">Lessons</span>
          </div>
          <div>
            <span class="stat-item__value" id="overallCompletedCount">0 / ${totalLessons}</span>
            <span class="stat-item__label">Completed</span>
          </div>
        </div>
        <div class="progress-summary__bar-wrap">
          <div class="progress-meta">
            <span>Overall progress</span>
            <span id="overallProgressPct">0%</span>
          </div>
          <div class="progress-track">
            <div id="overallProgressFill" class="progress-track__fill"></div>
          </div>
        </div>
      </div>
    </header>

    <section id="continueBar" class="continue-bar" aria-label="Continue studying" hidden>
      <div class="continue-bar__left">
        <span class="continue-bar__icon" aria-hidden="true">${SVG.bookOpen}</span>
        <span class="continue-bar__label">Continue:</span>
        <span id="continueTitle" class="continue-bar__title"></span>
        <span id="continueCourse" class="course-code"></span>
      </div>
      <a id="continueLink" class="btn btn--primary btn--sm" href="index.html">Resume ${SVG.arrowRight}</a>
    </section>

    <section class="home-section" aria-labelledby="coursesHeading">
      <div class="section-heading">
        <h2 id="coursesHeading">Courses</h2>
      </div>
      <div class="course-grid">
        ${cardsHtml}
      </div>
    </section>

    <section class="home-section" aria-labelledby="sectionsHeading">
      <div class="section-heading">
        <h2 id="sectionsHeading">Study Tools</h2>
      </div>
      <nav class="portal-map-grid" aria-label="Study tools and pages">
        <a class="portal-tile" href="exam-prep/index.html">
          <span class="portal-tile__icon">${SVG.target}</span>
          <span class="portal-tile__title">Exam Prep &amp; Patterns</span>
          <span class="portal-tile__arrow" aria-hidden="true">${SVG.arrowRight}</span>
        </a>
        <a class="portal-tile" href="planner/index.html">
          <span class="portal-tile__icon">${SVG.calendarCheck}</span>
          <span class="portal-tile__title">Daily Study Planner</span>
          <span class="portal-tile__arrow" aria-hidden="true">${SVG.arrowRight}</span>
        </a>
        <a class="portal-tile" href="search/index.html">
          <span class="portal-tile__icon">${SVG.search}</span>
          <span class="portal-tile__title">Search Lessons</span>
          <kbd>/</kbd>
        </a>
        <a class="portal-tile" href="bookmarks/index.html">
          <span class="portal-tile__icon">${SVG.bookmark}</span>
          <span class="portal-tile__title">Saved Bookmarks</span>
          <span id="homeBookmarkCount" class="scope-pill">0</span>
        </a>
        <a class="portal-tile" href="about/index.html">
          <span class="portal-tile__icon">${SVG.sliders}</span>
          <span class="portal-tile__title">Guide &amp; Settings</span>
          <kbd>?</kbd>
        </a>
      </nav>
    </section>
  </main>`;

  const html = renderPageShell({
    root: './',
    pageType: 'home',
    title: `${SITE_NAME} — Applied Statistics & Data Science`,
    description: `First-year IASDS learning dashboard (${courses.length} courses, ${totalLessons} lessons).`,
    activeNav: 'home',
    bodyContent,
    includeReset: false,
  });

  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf8');
}

/* ---------- Render Dedicated Saved Bookmarks Page ---------- */
function buildBookmarksPage() {
  const root = '../';
  const bodyContent = `
  <main id="main-content" class="page-container page-container--narrow">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb__sep" aria-hidden="true">/</span>
      <span class="breadcrumb__current" aria-current="page">Saved Bookmarks</span>
    </nav>

    <header class="editorial-header editorial-header--dashboard">
      <span class="editorial-header__eyebrow">PINNED SECTIONS</span>
      <h1>Saved Bookmarks</h1>
    </header>

    <section aria-label="Bookmarked lesson sections">
      <div id="bookmarksEmptyState" class="panel-card">
        <div class="panel-card__title">No saved sections yet</div>
        <p class="panel-card__meta" style="margin-bottom:var(--space-3)">Click the bookmark icon beside any heading inside a lesson to pin key proofs, formulas, or exam problems here.</p>
        <a class="btn btn--primary btn--sm" href="${root}index.html">Browse Courses ${SVG.arrowRight}</a>
      </div>
      <ul id="savedBookmarksList" class="saved-list" hidden></ul>
    </section>
  </main>`;

  const html = renderPageShell({
    root,
    pageType: 'bookmarks',
    title: `Saved Bookmarks — ${SITE_NAME}`,
    description: 'Your pinned lesson sections, theorems, and formulas saved locally in this browser.',
    activeNav: 'bookmarks',
    bodyContent,
  });

  const outPath = path.join(DIST_DIR, 'bookmarks', 'index.html');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

/* ---------- Render Connected Daily Study Planner Page ---------- */
function buildPlannerPage() {
  const root = '../';
  const bodyContent = `
  <main id="main-content" class="page-container page-container--narrow">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb__sep" aria-hidden="true">/</span>
      <span class="breadcrumb__current" aria-current="page">Daily Study Planner</span>
    </nav>

    <header class="editorial-header">
      <span id="plannerDateBadge" class="editorial-header__eyebrow">TODAY&rsquo;S STUDY PLAN</span>
      <h1>Daily Study Planner &amp; Timer</h1>
      <p class="editorial-header__lead">
        Plan today&rsquo;s target topics cleanly, link any lesson, and click <strong>Start Timer</strong> to run the study countdown directly in the top bar while you read.
      </p>
    </header>

    <section class="planner-stats" aria-label="Today's study metrics">
      <div class="planner-stat-card">
        <span class="planner-stat-card__label">Tasks Done</span>
        <span id="plannerStatsDone" class="planner-stat-card__val">0 / 0</span>
      </div>
      <div class="planner-stat-card">
        <span class="planner-stat-card__label">Planned Target</span>
        <span id="plannerStatsPlanned" class="planner-stat-card__val">0m</span>
      </div>
      <div class="planner-stat-card">
        <span class="planner-stat-card__label">Focused Today</span>
        <span id="plannerStatsFocused" class="planner-stat-card__val">0m</span>
      </div>
    </section>

    <section class="panel-card planner-compose" aria-labelledby="plannerAddHeading">
      <h2 id="plannerAddHeading" class="planner-compose__title">Add to Today&rsquo;s Plan</h2>
      <div class="planner-presets" aria-label="Quick study templates">
        <button type="button" class="filter-chip" data-plan-preset="Revise High-Yield Formulas" data-mins="25">25m Formula Revision</button>
        <button type="button" class="filter-chip" data-plan-preset="Solve Past Exam Script Questions" data-mins="45">45m Exam Drill</button>
        <button type="button" class="filter-chip" data-plan-preset="Quick Concept Review" data-mins="15">15m Quick Review</button>
      </div>
      <form id="plannerAddForm" class="planner-form">
        <div class="planner-form__row">
          <div class="planner-field planner-field--grow">
            <label for="plannerTaskTitle">Study goal or topic</label>
            <input type="text" id="plannerTaskTitle" class="planner-input" placeholder="e.g. Master MGF proof + solve Exercise 2" required>
          </div>
        </div>
        <div class="planner-form__row">
          <div class="planner-field planner-field--grow">
            <label for="plannerLessonSelect">Link a lesson (optional)</label>
            <select id="plannerLessonSelect" class="planner-input">
              <option value="">General study task (no specific lesson)</option>
            </select>
          </div>
          <div class="planner-field planner-field--sm">
            <label for="plannerTaskMins">Minutes</label>
            <input type="number" id="plannerTaskMins" class="planner-input" min="5" max="180" value="25">
          </div>
          <div class="planner-field planner-field--sm">
            <label for="plannerTaskPriority">Priority</label>
            <select id="plannerTaskPriority" class="planner-input">
              <option value="3">★★★ High</option>
              <option value="2" selected>★★ Core</option>
              <option value="1">★ Light</option>
            </select>
          </div>
        </div>
        <div class="planner-form__actions">
          <button type="submit" class="btn btn--primary">Add Daily Task</button>
          <span class="panel-card__meta">Tip: Adjust timer beep sounds anytime using the header clock button.</span>
        </div>
      </form>
    </section>

    <section aria-labelledby="plannerListHeading" style="margin-top:var(--space-5)">
      <div class="section-heading">
        <h2 id="plannerListHeading">Today&rsquo;s Schedule</h2>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <div id="plannerFilterGroup" class="filter-bar" style="margin:0" role="group" aria-label="Filter daily tasks">
            <button type="button" class="filter-chip" data-filter="all" aria-pressed="true">All</button>
            <button type="button" class="filter-chip" data-filter="pending" aria-pressed="false">Pending</button>
            <button type="button" class="filter-chip" data-filter="done" aria-pressed="false">Completed</button>
          </div>
          <button type="button" id="plannerClearDoneBtn" class="btn btn--ghost btn--sm" hidden>Clear completed</button>
        </div>
      </div>

      <div id="plannerEmptyState" class="panel-card">
        <div class="panel-card__title">No daily study tasks yet</div>
        <p class="panel-card__meta" style="margin:0">Add a goal above, link a lesson if you like, and hit <strong>▶ Start Timer</strong> to study with focus alerts.</p>
      </div>
      <ul id="plannerTaskList" class="planner-list" hidden></ul>
    </section>
  </main>`;

  const html = renderPageShell({
    root,
    pageType: 'planner',
    title: `Daily Study Planner — ${SITE_NAME}`,
    description: 'Plan your daily IASDS study targets and launch synced countdown timers across every lesson.',
    activeNav: 'planner',
    bodyContent,
  });

  const outPath = path.join(DIST_DIR, 'planner', 'index.html');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

/* ---------- Render Course Pages ---------- */
function buildCoursePages(courses) {
  for (const course of courses) {
    const root = '../../';
    const bp = COURSE_BLUEPRINTS[course.code];
    const highYieldCount = course.lessons.filter((l) => l.stars === 3).length;

    const rowsHtml = course.lessons
      .map((l) => {
        const sMeta = STAR_META[l.stars] || STAR_META[2];
        const scopeCsv = (l.scopes || []).join(',');
        return `
        <li class="lesson-row" data-lesson-row data-lesson-id="${l.id}" data-status="not-started" data-stars="${l.stars}" data-scopes="${escapeHtml(scopeCsv)}">
          <a class="lesson-row__link" href="${l.slug}.html">
            <span class="lesson-row__num">${String(l.lessonNumber).padStart(2, '0')}</span>
            <span>
              <span class="lesson-row__title">${escapeHtml(l.title)}</span>
              <span class="lesson-row__badges">
                <span class="star-badge star-badge--${l.stars}" title="${escapeHtml(sMeta.description)}">${sMeta.glyph} ${escapeHtml(sMeta.shortLabel)}</span>
                ${l.group ? `<span class="scope-pill scope-pill--group">${escapeHtml(l.group)}</span>` : ''}
                ${(l.scopes || []).map((s) => `<span class="scope-pill">${escapeHtml(SCOPE_LABELS[s] || s)}</span>`).join('')}
                <span class="lesson-row__meta" style="display:inline;margin:0">${l.readingMinutes} min &middot; ${l.headings.length} units</span>
              </span>
            </span>
            <span class="lesson-row__status">
              <span class="status-badge" data-status-badge data-status="not-started">
                ${SVG.circle}<span>Not started</span>
              </span>
            </span>
          </a>
        </li>`;
      })
      .join('\n');

    const blueprintHtml = bp
      ? `<details class="course-blueprint">
          <summary class="course-blueprint__summary">
            <div class="course-blueprint__title-wrap">
              <span class="course-code">EXAM PATTERN</span>
              <span class="course-blueprint__title">ISRT Past-Paper Blueprint (2019–2025)</span>
              <span class="scope-pill">${escapeHtml(bp.credits)} Credits &middot; Final: ${escapeHtml(bp.finalMarks)}m / ${escapeHtml(bp.finalDuration)}</span>
            </div>
            <span class="course-blueprint__chevron" aria-hidden="true">${SVG.chevronDown}</span>
          </summary>
          <div class="course-blueprint__body">
            <p style="margin:var(--space-3) 0 0;color:var(--color-text-secondary)">
              <strong>Year Final Format:</strong> ${escapeHtml(bp.finalFormat)}<br>
              <strong>Incourse Format:</strong> ${escapeHtml(bp.incourseFormat)}
            </p>
            <div class="blueprint-scope-grid">
              <div class="blueprint-scope-box">
                <span class="blueprint-scope-box__label">1st Incourse (25m)</span>
                <span class="blueprint-scope-box__val">${escapeHtml(bp.incourse1Scope)}</span>
              </div>
              <div class="blueprint-scope-box">
                <span class="blueprint-scope-box__label">2nd Incourse (25m)</span>
                <span class="blueprint-scope-box__val">${escapeHtml(bp.incourse2Scope)}</span>
              </div>
              <div class="blueprint-scope-box">
                <span class="blueprint-scope-box__label">Year Final (70m)</span>
                <span class="blueprint-scope-box__val">${escapeHtml(bp.finalScope)}</span>
              </div>
            </div>
            <div class="blueprint-columns">
              <div>
                <h3 class="blueprint-subhead">Recurring High-Yield Archetypes (★★★)</h3>
                <ul class="blueprint-list">
                  ${bp.signaturePatterns.map((p) => `<li>${escapeHtml(p)}</li>`).join('\n')}
                </ul>
              </div>
              <div>
                <h3 class="blueprint-subhead">Classic ISRT Exam Traps to Avoid</h3>
                <ul class="blueprint-list">
                  ${bp.classicTraps.map((t) => `<li>${escapeHtml(t)}</li>`).join('\n')}
                </ul>
              </div>
            </div>
            <div class="blueprint-timesaver">
              <strong>Smart Revision Priority:</strong> ${escapeHtml(bp.timeSavers)}
            </div>
          </div>
        </details>`
      : '';

    const assetsBlock = course.nonHtmlAssets.length
      ? `<section aria-labelledby="courseAssetsHeading">
          <h2 id="courseAssetsHeading">Course Resources &amp; Files</h2>
          <ul class="lesson-list">
            ${course.nonHtmlAssets
              .map(
                (a) =>
                  `<li class="lesson-row"><a class="lesson-row__link" href="assets/${encodeURI(a.rel)}"><span>File</span><span>${escapeHtml(a.name)}</span></a></li>`
              )
              .join('\n')}
          </ul>
        </section>`
      : '';

    const bodyContent = `
    <main id="main-content" class="page-container page-container--narrow">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="${root}index.html">Home</a>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span class="breadcrumb__current" aria-current="page">${escapeHtml(course.code)}</span>
      </nav>

      <header class="editorial-header">
        <span class="editorial-header__eyebrow">${escapeHtml(course.code)} &middot; ${course.lessons.length} LESSONS &middot; ${highYieldCount} ★★★ HIGH-YIELD</span>
        <h1>${escapeHtml(course.name)}</h1>

        <div class="progress-summary">
          <div class="progress-summary__bar-wrap">
            <div class="progress-meta">
              <span id="courseCompletedText">0 of ${course.lessons.length} lessons completed</span>
              <span id="courseProgressPct">0%</span>
            </div>
            <div class="progress-track">
              <div id="courseProgressFill" class="progress-track__fill"></div>
            </div>
          </div>
          <a class="btn btn--primary" href="${course.lessons[0].slug}.html">Start Lesson 1 ${SVG.arrowRight}</a>
        </div>
      </header>

      ${blueprintHtml}

      <section aria-labelledby="syllabusHeading">
        <div class="section-heading">
          <h2 id="syllabusHeading">Lessons &amp; Exam Importance</h2>
          <span class="section-heading__meta">Each lesson &amp; unit rated ★ to ★★★</span>
        </div>

        <div id="courseFilterBar" class="filter-bar" role="group" aria-label="Filter lessons by exam priority, exam scope, or status">
          <button type="button" class="filter-chip" data-filter="all" aria-pressed="true">All (${course.lessons.length})</button>
          <button type="button" class="filter-chip" data-filter="stars-3" aria-pressed="false">★★★ High-yield (${highYieldCount})</button>
          <button type="button" class="filter-chip" data-filter="scope-inc1" aria-pressed="false">1st Incourse</button>
          <button type="button" class="filter-chip" data-filter="scope-inc2" aria-pressed="false">2nd Incourse</button>
          <button type="button" class="filter-chip" data-filter="not-started" aria-pressed="false">Not started</button>
          <button type="button" class="filter-chip" data-filter="in-progress" aria-pressed="false">In progress</button>
          <button type="button" class="filter-chip" data-filter="completed" aria-pressed="false">Completed</button>
        </div>

        <ol class="lesson-list">
          ${rowsHtml}
        </ol>
        <p id="courseFilterEmpty" class="panel-card__meta" hidden>No lessons match the selected filter.</p>
      </section>
      ${assetsBlock}
    </main>`;

    const html = renderPageShell({
      root,
      pageType: 'course',
      title: `${course.code}: ${course.name} — ${SITE_NAME}`,
      description: `${course.code} (${course.name}): ${course.summary}`,
      activeNav: 'home',
      bodyContent,
    });

    const outPath = path.join(DIST_DIR, course.url);
    ensureDir(path.dirname(outPath));
    fs.writeFileSync(outPath, html, 'utf8');
  }
}

/* ---------- Render Dedicated Exam Prep Hub Page ---------- */
function buildExamPrepPage(courses, flatLessons) {
  const root = '../';
  const count3 = flatLessons.filter((l) => l.stars === 3).length;
  const count2 = flatLessons.filter((l) => l.stars === 2).length;
  const count1 = flatLessons.filter((l) => l.stars === 1).length;

  const courseChips = courses
    .map(
      (c) =>
        `<button type="button" class="filter-chip" data-val="${escapeHtml(c.code)}" aria-pressed="false">${escapeHtml(c.code)}</button>`
    )
    .join('\n            ');

  const masterRowsHtml = flatLessons
    .map((l) => {
      const sMeta = STAR_META[l.stars] || STAR_META[2];
      const scopeCsv = (l.scopes || []).join(',');
      return `
      <li class="lesson-row" data-exam-lesson-row data-lesson-id="${escapeHtml(l.id)}" data-course="${escapeHtml(l.courseCode)}" data-stars="${l.stars}" data-scopes="${escapeHtml(scopeCsv)}" data-status="not-started">
        <a class="lesson-row__link" href="${root}${l.url}">
          <span class="lesson-row__num">${escapeHtml(l.courseCode)}<br>L${String(l.lessonNumber).padStart(2, '0')}</span>
          <span>
            <span class="lesson-row__title">${escapeHtml(l.title)}</span>
            <span class="lesson-row__badges">
              <span class="star-badge star-badge--${l.stars}">${sMeta.glyph} ${escapeHtml(sMeta.shortLabel)}</span>
              ${l.group ? `<span class="scope-pill scope-pill--group">${escapeHtml(l.group)}</span>` : ''}
              ${(l.scopes || []).map((s) => `<span class="scope-pill">${escapeHtml(SCOPE_LABELS[s] || s)}</span>`).join('')}
              <span class="scope-pill">${escapeHtml(l.frequencyTag)}</span>
            </span>
            <span class="lesson-row__exam-note">${escapeHtml(l.examSummary)}</span>
          </span>
          <span class="lesson-row__status">
            <span class="status-badge" data-status-badge data-status="not-started">
              ${SVG.circle}<span>Not started</span>
            </span>
          </span>
        </a>
      </li>`;
    })
    .join('\n');

  const blueprintsAccordionHtml = courses
    .map((c, idx) => {
      const bp = COURSE_BLUEPRINTS[c.code];
      if (!bp) return '';
      return `
      <details class="course-blueprint"${idx === 0 ? ' open' : ''}>
        <summary class="course-blueprint__summary">
          <div class="course-blueprint__title-wrap">
            <span class="course-code">${escapeHtml(c.code)}</span>
            <span class="course-blueprint__title">${escapeHtml(c.name)}</span>
            <span class="scope-pill">${escapeHtml(bp.credits)} Credits &middot; ${escapeHtml(bp.finalDuration)}</span>
          </div>
          <span class="course-blueprint__chevron" aria-hidden="true">${SVG.chevronDown}</span>
        </summary>
        <div class="course-blueprint__body">
          <p style="margin:var(--space-3) 0 0;color:var(--color-text-secondary)">
            <strong>Year Final:</strong> ${escapeHtml(bp.finalFormat)}<br>
            <strong>Incourse:</strong> ${escapeHtml(bp.incourseFormat)}
          </p>
          <div class="blueprint-scope-grid">
            <div class="blueprint-scope-box">
              <span class="blueprint-scope-box__label">1st Incourse</span>
              <span class="blueprint-scope-box__val">${escapeHtml(bp.incourse1Scope)}</span>
            </div>
            <div class="blueprint-scope-box">
              <span class="blueprint-scope-box__label">2nd Incourse</span>
              <span class="blueprint-scope-box__val">${escapeHtml(bp.incourse2Scope)}</span>
            </div>
            <div class="blueprint-scope-box">
              <span class="blueprint-scope-box__label">Year Final</span>
              <span class="blueprint-scope-box__val">${escapeHtml(bp.finalScope)}</span>
            </div>
          </div>
          <div class="blueprint-columns">
            <div>
              <h3 class="blueprint-subhead">Signature Exam Archetypes (★★★)</h3>
              <ul class="blueprint-list">
                ${bp.signaturePatterns.map((p) => `<li>${escapeHtml(p)}</li>`).join('\n')}
              </ul>
            </div>
            <div>
              <h3 class="blueprint-subhead">Classic ISRT Traps</h3>
              <ul class="blueprint-list">
                ${bp.classicTraps.map((t) => `<li>${escapeHtml(t)}</li>`).join('\n')}
              </ul>
            </div>
          </div>
          <div class="blueprint-timesaver">
            <strong>Time-Saver Note:</strong> ${escapeHtml(bp.timeSavers)} &mdash; <a href="${root}${c.url}">Open ${escapeHtml(c.code)} syllabus &rarr;</a>
          </div>
        </div>
      </details>`;
    })
    .join('\n');

  const bodyContent = `
  <main id="main-content" class="page-container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb__sep" aria-hidden="true">/</span>
      <span class="breadcrumb__current" aria-current="page">Exam Prep</span>
    </nav>

    <header class="editorial-header">
      <span class="editorial-header__eyebrow">EMPIRICAL PAST-PAPER ANALYSIS &middot; 2017–2025</span>
      <h1>ISRT Exam Pattern &amp; Priority Guide</h1>
      <p class="editorial-header__lead">
        Synthesized directly from ISRT 1st Incourse, 2nd Incourse, and Year Final examination papers alongside Batch-32 course materials. Every lesson and every section unit across the archive carries an empirical <strong>★</strong>, <strong>★★</strong>, or <strong>★★★</strong> importance rating.
      </p>
    </header>

    <section class="exam-arch-grid" aria-label="Official ISRT exam structure">
      <div class="exam-arch-card">
        <div class="exam-arch-card__kicker">INCOURSE EXAMS (2 &times; 25 MARKS)</div>
        <h2 class="exam-arch-card__title">1st &amp; 2nd Incourses</h2>
        <p>${escapeHtml(EXAM_ARCHITECTURE.incourse.summary)}</p>
      </div>
      <div class="exam-arch-card">
        <div class="exam-arch-card__kicker">YEAR FINAL (70 MARKS &middot; 3–4 HRS)</div>
        <h2 class="exam-arch-card__title">Compulsory Q1 + Any 5 of 7</h2>
        <p>${escapeHtml(EXAM_ARCHITECTURE.yearFinal.summary)}</p>
      </div>
      <div class="exam-arch-card">
        <div class="exam-arch-card__kicker">EMPIRICAL UNIT RATING KEY</div>
        <h2 class="exam-arch-card__title">How to Read ★ Badges</h2>
        <p>
          <strong style="color:var(--color-ochre-text)">★★★ High-yield (${count3} lessons):</strong> Tested almost every year; master all proofs &amp; drills.<br>
          <strong style="color:var(--color-accent)">★★ Regular (${count2} lessons):</strong> Rotated core topics.<br>
          <strong>★ Low-yield (${count1} lessons + 78 sub-units):</strong> Rarely or never asked on written Finals; study last.
        </p>
      </div>
    </section>

    <div class="callout callout--note" style="margin-top:0;margin-bottom:var(--space-6)">
      <div class="callout__title">Note on Lab &amp; Programming Finals (CSE130 &amp; CSE131)</div>
      <p style="margin:0">${escapeHtml(EXAM_ARCHITECTURE.ancillaryNote)}</p>
    </div>

    <section aria-labelledby="blueprintsHeading" style="margin-bottom:var(--space-7)">
      <div class="section-heading">
        <h2 id="blueprintsHeading">Course-by-Course Exam Blueprints &amp; Trap Checklists</h2>
        <span class="section-heading__meta">Click any course to expand</span>
      </div>
      ${blueprintsAccordionHtml}
    </section>

    <section aria-labelledby="matrixHeading">
      <div class="section-heading">
        <h2 id="matrixHeading">Interactive Priority &amp; Exam-Scope Planner</h2>
        <span class="section-heading__meta">Tracks your live completion status</span>
      </div>

      <div class="exam-controls-panel" role="region" aria-label="Filter lessons for exam revision">
        <div class="exam-filter-row" id="examScopeFilters" role="group" aria-label="Filter by exam">
          <span class="exam-filter-row__label">Target Exam:</span>
          <button type="button" class="filter-chip" data-val="all" aria-pressed="true">All Exams</button>
          <button type="button" class="filter-chip" data-val="inc1" aria-pressed="false">1st Incourse</button>
          <button type="button" class="filter-chip" data-val="inc2" aria-pressed="false">2nd Incourse</button>
          <button type="button" class="filter-chip" data-val="final" aria-pressed="false">Year Final</button>
        </div>
        <div class="exam-filter-row" id="examStarFilters" role="group" aria-label="Filter by star importance">
          <span class="exam-filter-row__label">Importance:</span>
          <button type="button" class="filter-chip" data-val="all" aria-pressed="true">All Ratings (${flatLessons.length})</button>
          <button type="button" class="filter-chip" data-val="3" aria-pressed="false">★★★ High-yield (${count3})</button>
          <button type="button" class="filter-chip" data-val="2" aria-pressed="false">★★ Regular (${count2})</button>
          <button type="button" class="filter-chip" data-val="1" aria-pressed="false">★ Low-yield (${count1})</button>
        </div>
        <div class="exam-filter-row" id="examCourseFilters" role="group" aria-label="Filter by course">
          <span class="exam-filter-row__label">Course:</span>
          <button type="button" class="filter-chip" data-val="all" aria-pressed="true">All 7 Courses</button>
          ${courseChips}
        </div>
      </div>

      <p id="examResultsCount" class="exam-results-count" role="status" aria-live="polite">Showing ${flatLessons.length} of ${flatLessons.length} lessons</p>
      <ol class="lesson-list">
        ${masterRowsHtml}
      </ol>
      <p id="examFilterEmpty" class="panel-card__meta" hidden>No lessons match this combination of exam, rating, and course filters.</p>
    </section>
  </main>`;

  const html = renderPageShell({
    root,
    pageType: 'exam-prep',
    title: `Exam Prep & Question Patterns — ${SITE_NAME}`,
    description:
      'Empirical ISRT 1st Incourse, 2nd Incourse, and Year Final question patterns (2017–2025) with ★ / ★★ / ★★★ priority filters across all 7 IASDS courses.',
    activeNav: 'exam-prep',
    bodyContent,
  });

  const outPath = path.join(DIST_DIR, 'exam-prep', 'index.html');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

/* ---------- Render Search Page ---------- */
function buildSearchPage(courses, totalLessons) {
  const root = '../';
  const bodyContent = `
  <main id="main-content" class="page-container page-container--narrow">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb__sep" aria-hidden="true">/</span>
      <span class="breadcrumb__current" aria-current="page">Search</span>
    </nav>

    <header class="editorial-header">
      <span class="editorial-header__eyebrow">FULL-TEXT INDEX &middot; ${totalLessons} LESSONS</span>
      <h1>Search All Lessons</h1>
      <p class="editorial-header__lead">
        Search instantly across every lecture, theorem, formula name, and worked example in all ${courses.length} first-year courses. No external services are used.
      </p>
    </header>

    <div class="search-box">
      <span class="search-box__icon" aria-hidden="true">${SVG.search}</span>
      <label class="sr-only" for="searchInput">Search lessons</label>
      <input type="text" role="searchbox" id="searchInput" class="search-input" placeholder="Search e.g. Bayes theorem, Taylor series, eigenvalues, elasticity…" autocomplete="off" autofocus>
      <button type="button" id="searchClearBtn" class="btn btn--ghost btn--icon search-clear-btn" aria-label="Clear search query" hidden>${SVG.close}</button>
    </div>

    <div id="searchCourseFilters" class="filter-bar" role="group" aria-label="Filter results by course"></div>
    <p id="searchStatus" class="search-status" role="status" aria-live="polite">Loading search index…</p>
    <div id="searchResults"></div>
  </main>`;

  const html = renderPageShell({
    root,
    pageType: 'search',
    title: `Search — ${SITE_NAME}`,
    description: `Instant client-side full-text search across all ${totalLessons} IASDS first-year lessons.`,
    activeNav: 'search',
    bodyContent,
  });

  const outPath = path.join(DIST_DIR, 'search', 'index.html');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

/* ---------- Render About / How to Use Page ---------- */
function buildAboutPage(courses, totalLessons) {
  const root = '../';
  const bodyContent = `
  <main id="main-content" class="page-container page-container--narrow">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${root}index.html">Home</a>
      <span class="breadcrumb__sep" aria-hidden="true">/</span>
      <span class="breadcrumb__current" aria-current="page">About &amp; Guide</span>
    </nav>

    <header class="editorial-header">
      <span class="editorial-header__eyebrow">STUDY GUIDE &amp; SETTINGS</span>
      <h1>How to Use This Archive</h1>
      <p class="editorial-header__lead">
        This self-contained academic portal brings together all ${courses.length} first-year courses (${totalLessons} interactive lessons) of Applied Statistics and Data Science in a distraction-free reading environment.
      </p>
    </header>

    <section aria-labelledby="navGuideHeading">
      <h2 id="navGuideHeading">Navigation &amp; Reading Tools</h2>
      <ul>
        <li><strong>Three-column study layout:</strong> Browse lessons in the collapsible left sidebar, read and run interactive laboratories in the center column, and jump between sections using the sticky right-hand table of contents.</li>
        <li><strong>Empirical ★ exam importance badges:</strong> Every lesson and every section heading is rated <strong>★★★</strong> (high-yield exam staple), <strong>★★</strong> (regular core topic), or <strong>★</strong> (low-yield supplementary unit) based on 2017–2025 ISRT Incourse and Year Final papers. Visit the <a href="${root}exam-prep/index.html">Exam Prep Hub</a> to filter topics by exam.</li>
        <li><strong>Reading controls:</strong> Click the typography button in the top bar on any lesson to adjust font size (3 steps), line spacing, or enter <em>Focus mode</em> to hide both sidebars.</li>
        <li><strong>Section bookmarks:</strong> Click the bookmark icon beside any lesson heading to pin key proofs, formulas, or exam questions to your <em>Saved sections</em> list on the Home page.</li>
        <li><strong>Study Timer &amp; Daily Planner:</strong> Build your daily revision list in the <a href="${root}planner/index.html">Daily Planner</a> and start a persistent countdown timer right from the top header. Choose your preferred ending alert tone inside the header clock popover.</li>
        <li><strong>QMHBot AI Study Assistant:</strong> Open any lesson and click <em>Ask QMHBot</em> to ask questions in English, Bangla (বাংলা), or Banglish, upload or paste math screenshots, or send a voice recording &mdash; no login required.</li>
        <li><strong>Print-ready lessons:</strong> Use your browser’s Print dialog or the <em>Print lesson</em> button; navigation bars drop out automatically for clean paper notes.</li>
      </ul>
    </section>

    <section aria-labelledby="developerHeading">
      <h2 id="developerHeading">Archive Development</h2>
      <p>This study portal was developed by <strong>Saad</strong> to bring together first-year Applied Statistics and Data Science coursework, examination guidance, and interactive study tools in one unified learning environment.</p>
    </section>

    <section aria-labelledby="shortcutsGuideHeading">
      <h2 id="shortcutsGuideHeading">Keyboard Shortcuts</h2>
      <table class="info-table">
        <thead>
          <tr><th>Shortcut</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td><kbd>/</kbd></td><td>Jump to Search (or focus the search field)</td></tr>
          <tr><td><kbd>&larr;</kbd> / <kbd>&rarr;</kbd></td><td>Navigate to Previous / Next lesson (crosses course boundaries)</td></tr>
          <tr><td><kbd>t</kbd></td><td>Toggle between Warm Paper Light and Charcoal-Slate Dark theme</td></tr>
          <tr><td><kbd>m</kbd></td><td>Toggle “Mark as complete” on the current lesson</td></tr>
          <tr><td><kbd>?</kbd></td><td>Open the quick keyboard shortcut dialog from any page</td></tr>
        </tbody>
      </table>
    </section>

    <section aria-labelledby="storageHeading">
      <h2 id="storageHeading">How Your Progress Is Saved</h2>
      <div class="callout callout--note">
        <div class="callout__title">Private, local-only storage</div>
        <p>Your completed lessons, last-opened lesson, saved section bookmarks, theme choice, and reading preferences are stored exclusively in your browser’s <code>localStorage</code>. Nothing is transmitted to any external server. Clearing browser site data will erase progress.</p>
      </div>
      <p>Need a fresh start before exam revision? You can clear your completion history and saved bookmarks below.</p>
      <p>
        <button type="button" class="btn btn--danger" data-open-reset-dialog>Reset all progress</button>
      </p>
    </section>
  </main>`;

  const html = renderPageShell({
    root,
    pageType: 'about',
    title: `About & Study Guide — ${SITE_NAME}`,
    description: 'How to navigate the IASDS First-Year Study Archive, keyboard shortcuts, and how local progress tracking works.',
    activeNav: 'about',
    bodyContent,
    includeReset: true,
  });

  const outPath = path.join(DIST_DIR, 'about', 'index.html');
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

/* ---------- Render 404 Page ---------- */
function build404Page() {
  const html = renderPageShell({
    root: './',
    pageType: 'error',
    title: `Page Not Found — ${SITE_NAME}`,
    description: 'The requested lesson or page could not be found.',
    bodyContent: `
    <main id="main-content" class="page-container page-container--narrow">
      <header class="editorial-header">
        <span class="editorial-header__eyebrow">ERROR 404</span>
        <h1>Page Not Found</h1>
        <p class="editorial-header__lead">The lesson or resource you requested does not exist at this address.</p>
      </header>
      <p>
        <a class="btn btn--primary" href="index.html">Return to Courses</a>
        <a class="btn btn--secondary" href="search/index.html">Search Archive</a>
      </p>
    </main>`,
  });
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html, 'utf8');
}

/* ---------- Main Build Pipeline ---------- */
export function buildSite() {
  const startMs = Date.now();
  const { courses, sourceIssues } = scanWorkspace();
  const flatLessons = courses.flatMap((c) => c.lessons);

  // Recreate clean dist/
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  ensureDir(DIST_DIR);

  // Copy static assets, CSS, and JS
  copyDirRecursive(path.join(SITE_DIR, 'css'), path.join(DIST_DIR, 'css'));
  copyDirRecursive(path.join(SITE_DIR, 'js'), path.join(DIST_DIR, 'js'));
  copyDirRecursive(path.join(SITE_DIR, 'assets'), path.join(DIST_DIR, 'assets'));

  // Copy any non-HTML assets from course folders gracefully
  for (const course of courses) {
    for (const asset of course.nonHtmlAssets) {
      const dest = path.join(DIST_DIR, 'courses', course.slug, 'assets', asset.rel);
      ensureDir(path.dirname(dest));
      fs.copyFileSync(asset.full, dest);
    }
  }

  // Build every lesson page
  let flatIdx = 0;
  for (const course of courses) {
    for (const lesson of course.lessons) {
      processLesson(lesson, course, courses, flatIdx, flatLessons, sourceIssues);
      flatIdx++;
    }
  }

  // Build Home, Course, Exam Prep, Planner, Bookmarks, Search, About, and 404 pages
  buildHomePage(courses, flatLessons.length);
  buildCoursePages(courses);
  buildExamPrepPage(courses, flatLessons);
  buildPlannerPage();
  buildBookmarksPage();
  buildSearchPage(courses, flatLessons.length);
  buildAboutPage(courses, flatLessons.length);
  build404Page();

  // Build search-index.json
  const searchIndex = {
    generatedAt: new Date().toISOString(),
    totalLessons: flatLessons.length,
    courses: courses.map((c) => ({
      code: c.code,
      name: c.name,
      slug: c.slug,
      url: c.url,
      lessonCount: c.lessons.length,
    })),
    documents: flatLessons.map((l, idx) => ({
      id: l.id,
      order: idx,
      courseCode: l.courseCode,
      courseName: l.courseName,
      lessonNumber: l.lessonNumber,
      title: l.title,
      url: l.url,
      stars: l.stars,
      scopes: l.scopes,
      frequencyTag: l.frequencyTag,
      headings: l.headings,
      text: l.searchText,
    })),
  };

  ensureDir(path.join(DIST_DIR, 'data'));
  fs.writeFileSync(path.join(DIST_DIR, 'data', 'search-index.json'), JSON.stringify(searchIndex), 'utf8');

  // Build manifest.json (inventory & diagnostics)
  const manifest = {
    generatedAt: new Date().toISOString(),
    courseCount: courses.length,
    lessonCount: flatLessons.length,
    sourceIssues,
    courses: courses.map((c) => ({
      code: c.code,
      name: c.name,
      folderName: c.folderName,
      slug: c.slug,
      url: c.url,
      summary: c.summary,
      lessons: c.lessons.map((l) => ({
        id: l.id,
        lessonNumber: l.lessonNumber,
        title: l.title,
        slug: l.slug,
        url: l.url,
        sourceFile: l.sourceFile,
        readingMinutes: l.readingMinutes,
        stars: l.stars,
        scopes: l.scopes,
        frequencyTag: l.frequencyTag,
        highYieldUnits: l.highYieldUnits,
        usesKatex: l.usesKatex,
        usesTailwind: l.usesTailwind,
      })),
    })),
  };

  fs.writeFileSync(path.join(DIST_DIR, 'data', 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  // Add .nojekyll for GitHub Pages compatibility
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '', 'utf8');

  const elapsed = Date.now() - startMs;
  console.log(
    `Built IASDS site in ${elapsed}ms: ${courses.length} courses, ${flatLessons.length} lessons -> dist/`
  );
  if (sourceIssues.length) {
    console.log(`Handled ${sourceIssues.length} source note(s)/fix(es) gracefully (see dist/data/manifest.json).`);
  }

  return { courses, flatLessons, sourceIssues };
}

// Run when executed directly
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildSite();
}
