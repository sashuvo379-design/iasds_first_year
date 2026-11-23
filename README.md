# IASDS First-Year Study Archive

A self-contained, zero-dependency academic learning website for first-year students of **Applied Statistics and Data Science** (ISRT, University of Dhaka). It unifies all 7 core courses (98 interactive lessons) into a calm, distraction-free study portal while preserving 100% of every lesson's interactive labs, canvases, calculators, proofs, past-exam vaults, and mastery quizzes.

## Quick Start

Requires **Node.js 18+** (zero `npm install` packages required).

```bash
# 1. Build the static site into dist/
npm run build

# 2. Start local dev server with live rebuild on file changes (http://localhost:4173)
npm run dev

# 3. Validate HTML structure, internal links, lesson coverage, and search index
npm run check
```

> **Windows PowerShell note:** If PowerShell execution policy restricts `npm.ps1`, run `npm.cmd run build`, `npm.cmd run dev`, and `npm.cmd run check` (or call `node site/build.mjs`, `node site/dev.mjs`, `node site/check.mjs` directly).

## Project Structure

```text
.
├── AST101 Introduction to Applied Statistics and Data Science/   # Original source (read-only)
├── AST102 Elements of Probability/                               # Original source (read-only)
├── MATH103 Foundations of Mathematics/                           # Original source (read-only)
├── MATH104 Differential Calculus/                                # Original source (read-only)
├── MATH105 Integral Calculus/                                    # Original source (read-only)
├── MATH106 Linear Algebra/                                       # Original source (read-only)
├── ECON107 Economics/                                            # Original source (read-only)
├── site/                                                         # Portal source & generator
│   ├── build.mjs                 # Static site generator & search indexer
│   ├── dev.mjs                   # Local HTTP server + file watcher + live reload
│   ├── check.mjs                 # HTML, link, manifest & search index validator
│   ├── assets/favicon.svg        # Site SVG emblem
│   ├── css/
│   │   ├── themes.css            # Light (Warm Paper) & Dark (Charcoal-Slate) tokens
│   │   ├── base.css              # Typography, focus rings, skip link, accessibility
│   │   ├── components.css        # Layout shell, cards, TOC, modals, search, buttons
│   │   ├── lesson-bridge.css     # Harmonizes all 7 source styles with site theme
│   │   └── print.css             # Clean paper print stylesheet
│   └── js/
│       ├── theme-init.js         # Flash-free theme & reading-preference boot script
│       ├── tw-config.js          # Tailwind preflight-off config for Tailwind lessons
│       ├── progress.js           # localStorage progress, bookmarks & preferences
│       ├── toc.js                # Auto TOC, scrollspy, reading bar & heading bookmarks
│       ├── search.js             # Client-side full-text search with highlighted snippets
│       ├── lesson-compat.js      # Legacy DOM shim, table scroll, code copy, lightbox
│       └── app.js                # Main ES module (theme, shortcuts, UI hydration)
├── dist/                         # Generated deploy-ready static website
├── DESIGN.md                     # Visual design system, contrast audit & layout rules
├── README.md                     # This guide
└── package.json
```

The original 7 course folders are never modified by the build script.

## Adding a New Course or Lesson

1. **Add a new lesson to an existing course:**
   - Drop a new `.html` file inside the course folder (for example, `AST101_Lesson13_Topic_Name.html` or `lesson_15_topic.html`). Include `lesson` + number in the filename so it sorts automatically in numerical order.
   - Run `npm run build` (or keep `npm run dev` running for automatic rebuild).
   - Run `npm run check` to verify links and search index integrity.
2. **Add a new course:**
   - Create a new folder at the workspace root named `<CODE><NUMBER> <Course Title>` (for example, `STAT108 Statistical Computing`).
   - Drop your lesson HTML files inside (and any supporting images or PDFs—non-HTML assets are automatically copied and linked on the course page).
   - Run `npm run build` and `npm run check`.

## Deploying the Site (`dist/`)

All links inside `dist/` use relative paths (`./`, `../`, `../../`), so the generated site works at both a root domain and a subpath (such as GitHub Pages project sites).

### GitHub Pages
1. Push your repository to GitHub (after reviewing and confirming).
2. Either:
   - **GitHub Actions (recommended):** Configure a workflow that runs `npm run build` and uploads `dist/` with `actions/upload-pages-artifact` + `actions/deploy-pages`, or
   - **Branch deploy:** Publish the contents of `dist/` to a `gh-pages` branch and set **Settings → Pages → Source** to `gh-pages / (root)`.
   - `dist/.nojekyll` is generated automatically so files and folders are served verbatim.

### Netlify
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Or drag and drop the `dist/` folder directly into Netlify Drop.

## How Study Progress & Data Are Stored

All user state is saved privately in the browser via `localStorage` (no account, backend, or tracking):

| Key | Purpose |
| --- | --- |
| `iasds_completed_lessons_v1` | JSON array of completed lesson IDs (e.g. `["ast101-l01"]`) |
| `iasds_visited_lessons_v1` | Map of opened lesson IDs to last-visited timestamps (`in-progress` state) |
| `iasds_last_opened_v1` | Most recently opened lesson metadata for "Continue where you left off" |
| `iasds_bookmarks_v1` | Saved section headings pinned from lesson pages |
| `iasds_theme_v1` | Manual `"light"` or `"dark"` theme override (defaults to system preference) |
| `iasds_font_size_v1` | Reading font size (`"sm"`, `"md"`, `"lg"`) |
| `iasds_line_height_v1` | Reading line spacing (`"compact"`, `"normal"`, `"relaxed"`) |
| `iasds_focus_mode_v1` | Boolean for distraction-free Focus Mode |
| `iasds_sidebar_collapsed_v1` | Boolean for desktop sidebar collapse state |

To clear study history and bookmarks, open **About & Guide** and click **Reset all progress** (requires confirmation).
