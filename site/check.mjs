/* ==========================================================================
   IASDS Build Integrity & HTML/Link/Search Validator (npm run check)
   ========================================================================== */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const IGNORED_DIRS = new Set(['site', 'dist', 'node_modules', '.git', '.github', '.vscode']);

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

function walkFiles(dir, extFilter = null) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full, extFilter));
    } else if (!extFilter || extFilter.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('FAIL: dist/ does not exist. Run "npm run build" first.');
  process.exit(1);
}

/* 1. Count all source HTML lessons across original course folders */
const sourceCourseDirs = fs
  .readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !IGNORED_DIRS.has(d.name));

const sourceLessons = [];
for (const d of sourceCourseDirs) {
  const files = walkFiles(path.join(ROOT_DIR, d.name), /\.html?$/i);
  for (const f of files) {
    sourceLessons.push({
      folder: d.name,
      rel: path.relative(path.join(ROOT_DIR, d.name), f).replace(/\\/g, '/'),
    });
  }
}

/* 2. Validate manifest.json & search-index.json */
const manifestPath = path.join(DIST_DIR, 'data', 'manifest.json');
const searchIndexPath = path.join(DIST_DIR, 'data', 'search-index.json');

let manifest = null;
let searchIndex = null;

if (!fs.existsSync(manifestPath)) {
  fail('Missing dist/data/manifest.json');
} else {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {
    fail(`Invalid JSON in manifest.json: ${e.message}`);
  }
}

if (!fs.existsSync(searchIndexPath)) {
  fail('Missing dist/data/search-index.json');
} else {
  try {
    searchIndex = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
  } catch (e) {
    fail(`Invalid JSON in search-index.json: ${e.message}`);
  }
}

if (manifest) {
  const manifestLessons = manifest.courses.flatMap((c) => c.lessons);
  if (manifestLessons.length !== sourceLessons.length) {
    fail(`Lesson count mismatch: ${sourceLessons.length} in source folders vs ${manifestLessons.length} in manifest.json`);
  }
  for (const l of manifestLessons) {
    const outFile = path.join(DIST_DIR, l.url);
    if (!fs.existsSync(outFile)) {
      fail(`Missing generated lesson file in dist/: ${l.url}`);
    }
    if (![1, 2, 3].includes(l.stars)) {
      fail(`Invalid or missing star rating on ${l.id}: ${l.stars}`);
    }
    if (!Array.isArray(l.scopes) || l.scopes.length === 0) {
      fail(`Missing exam scopes on ${l.id}`);
    }
  }
}

if (!fs.existsSync(path.join(DIST_DIR, 'exam-prep', 'index.html'))) {
  fail('Missing generated Exam Prep page: dist/exam-prep/index.html');
}

if (searchIndex) {
  const docs = searchIndex.documents || [];
  if (docs.length !== sourceLessons.length) {
    fail(`Search index mismatch: expected ${sourceLessons.length} lessons, found ${docs.length}`);
  }
  const seenIds = new Set();
  for (const doc of docs) {
    if (!doc.id || seenIds.has(doc.id)) fail(`Duplicate or missing search doc id: ${doc.id}`);
    seenIds.add(doc.id);
    if (!doc.title || !doc.title.trim()) fail(`Empty title in search index for ${doc.id}`);
    if (!doc.text || doc.text.trim().length < 50) fail(`Suspiciously short search text for ${doc.id}`);
    if (!doc.url || !fs.existsSync(path.join(DIST_DIR, doc.url))) {
      fail(`Search index URL does not exist in dist/: ${doc.url}`);
    }
  }
}

/* 3. Validate every generated HTML page & check all internal links */
const distHtmlFiles = walkFiles(DIST_DIR, /\.html$/i);
let totalLinksChecked = 0;

for (const filePath of distHtmlFiles) {
  const relFile = path.relative(DIST_DIR, filePath).replace(/\\/g, '/');
  const html = fs.readFileSync(filePath, 'utf8');

  if (!/^<!DOCTYPE html>/i.test(html.trim())) fail(`[${relFile}] Missing <!DOCTYPE html>`);
  if (!/<html[^>]*\blang=["'][a-z-]+["']/i.test(html)) fail(`[${relFile}] Missing <html lang="...">`);
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(`[${relFile}] Missing or empty <title>`);
  if (!/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html)) {
    fail(`[${relFile}] Missing meta description`);
  }
  if (!/<meta\s+property=["']og:title["']/i.test(html)) fail(`[${relFile}] Missing Open Graph og:title`);
  if (!/<link\s+rel=["']icon["']/i.test(html)) fail(`[${relFile}] Missing favicon link`);
  if (!/<header[\s>]/i.test(html)) fail(`[${relFile}] Missing <header>`);
  if (!/<nav[\s>]/i.test(html)) fail(`[${relFile}] Missing <nav>`);
  if (!/<main[\s>]/i.test(html)) fail(`[${relFile}] Missing <main>`);
  if (!/<footer[\s>]/i.test(html)) fail(`[${relFile}] Missing <footer>`);
  if (!/class=["']skip-link["']/i.test(html)) fail(`[${relFile}] Missing skip-to-content link`);

  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    fail(`[${relFile}] Expected exactly 1 <h1>, found ${h1Matches.length}`);
  }

  const isLesson = /data-page=["']lesson["']/.test(html);
  if (isLesson) {
    if (!/<article[\s>]/i.test(html)) fail(`[${relFile}] Lesson page missing <article>`);
    if (!/<aside[\s>]/i.test(html)) fail(`[${relFile}] Lesson page missing <aside>`);
    if (!/data-exam-stars=["'][123]["']/.test(html)) {
      fail(`[${relFile}] Lesson page missing unit-level data-exam-stars ratings`);
    }
    if (/All 14 Lessons Built!|\uF393/.test(html)) {
      fail(`[${relFile}] Uncleaned builder artifact or broken entity found`);
    }
    if (/<button(?![^>]*\bhidden\b)[^>]*>\s*(?:[^<]*\b(?:Show|Toggle)\s+Hint\b|Hint)\s*<\/button>/i.test(html)) {
      fail(`[${relFile}] Unhidden Hint button found in lesson HTML`);
    }
    if (
      /class=["'][^"']*solution-stepper[^"']*["'][^>]*\bdata-step=["']0["']/i.test(html) ||
      /\bdata-step=["']0["'][^>]*class=["'][^"']*solution-stepper[^"']*["']/i.test(html)
    ) {
      fail(`[${relFile}] Locked solution-stepper (data-step="0") found in lesson HTML`);
    }
    if (/Model Solution Outline|Model Answer Outline|Past ISRT Exam Checklist|Theory Checklist/i.test(html)) {
      fail(`[${relFile}] Unexpanded outline or checklist heading found in lesson HTML`);
    }
    if (/[\x08\x0b\x0c]/.test(html)) {
      fail(`[${relFile}] Corrupted control character (unescaped \\b/\\v/\\f) found in lesson HTML`);
    }
    if (/<svg\b[^>]*\s+(?:width|height)=["']auto["']/i.test(html)) {
      fail(`[${relFile}] Invalid SVG width/height="auto" attribute found in lesson HTML`);
    }
    if ((/\$\$[\s\S]+?\$\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\]/.test(html)) && !/katex\.min\.css/.test(html)) {
      fail(`[${relFile}] Math delimiters present without KaTeX stylesheet loaded`);
    }
  }

  // Strip <script> and <style> before checking href/src attributes so JS string templates aren't mistaken for HTML links
  const htmlWithoutScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const attrRegex = /\b(?:href|src)=["']([^"']+)["']/gi;
  let m;
  while ((m = attrRegex.exec(htmlWithoutScripts)) !== null) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith('#') || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(raw)) {
      continue;
    }
    const cleanRef = raw.split('#')[0].split('?')[0];
    if (!cleanRef) continue;
    totalLinksChecked++;

    const resolved = cleanRef.startsWith('/')
      ? path.join(DIST_DIR, cleanRef)
      : path.resolve(path.dirname(filePath), cleanRef);

    if (!fs.existsSync(resolved)) {
      fail(`[${relFile}] Broken internal reference: "${raw}" -> ${path.relative(DIST_DIR, resolved)}`);
    }
  }
}

/* 3b. Validate extracted lesson scripts for leftover hint buttons */
const lessonScriptFiles = walkFiles(path.join(DIST_DIR, 'assets', 'lesson-scripts'), /\.js$/i);
for (const scriptPath of lessonScriptFiles) {
  const relScript = path.relative(DIST_DIR, scriptPath).replace(/\\/g, '/');
  const js = fs.readFileSync(scriptPath, 'utf8');
  if (/(?:Show|Toggle)\s+Hint\s*<\/button>|>\s*Hint\s*<\/button>/i.test(js)) {
    fail(`[${relScript}] Leftover Hint button template found in extracted lesson script`);
  }
}

/* 4. Verify core site JS payload size (< 100KB excluding KaTeX & lesson scripts) */
const coreJsFiles = walkFiles(path.join(DIST_DIR, 'js'), /\.js$/i);
const coreJsBytes = coreJsFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0);
if (coreJsBytes > 100 * 1024) {
  fail(`Core site JS exceeds 100KB budget: ${(coreJsBytes / 1024).toFixed(1)}KB`);
}

/* 5. Print Structured Report */
console.log('======================================================');
console.log('IASDS SITE INTEGRITY REPORT');
console.log('======================================================');
console.log(`Source courses scanned : ${sourceCourseDirs.length}`);
console.log(`Source lessons found   : ${sourceLessons.length}`);
console.log(`HTML pages validated   : ${distHtmlFiles.length}`);
console.log(`Internal links checked : ${totalLinksChecked}`);
console.log(`Search index entries   : ${searchIndex ? searchIndex.documents.length : 0}`);
console.log(`Core site JS total     : ${(coreJsBytes / 1024).toFixed(1)} KB (limit: 100 KB)`);
console.log(`Warnings               : ${warnings.length}`);
console.log(`Errors                 : ${errors.length}`);
console.log('======================================================');

if (warnings.length) {
  console.log('\nWARNINGS:');
  warnings.forEach((w) => console.log('  - ' + w));
}

if (errors.length) {
  console.error('\nFAILURES:');
  errors.slice(0, 40).forEach((e) => console.error('  ✗ ' + e));
  if (errors.length > 40) {
    console.error(`  ... and ${errors.length - 40} more errors.`);
  }
  process.exit(1);
}

console.log('\nALL CHECKS PASSED.');
