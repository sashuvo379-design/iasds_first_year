/* ==========================================================================
   IASDS Exam-Script Upgrade Orchestrator
   Ensures every past-exam and practice question across all 98 lessons opens
   directly to a self-contained, step-by-step ISRT exam-paper answer with
   zero hint-only gates, zero locked steppers, and zero cross-ref deflections.
   ========================================================================== */

import { AST_UPGRADES } from './upgrades-ast.mjs';
import { ECON_UPGRADES } from './upgrades-econ.mjs';
import { ECON_REST_UPGRADES } from './upgrades-econ-rest.mjs';
import { MATH_UPGRADES } from './upgrades-math.mjs';

function mergeUpgradeMaps(...maps) {
  const merged = {};
  for (const m of maps) {
    for (const [k, rules] of Object.entries(m)) {
      merged[k] = [...(merged[k] || []), ...rules];
    }
  }
  return merged;
}

const ALL_HTML_UPGRADES = mergeUpgradeMaps(
  AST_UPGRADES,
  ECON_UPGRADES,
  ECON_REST_UPGRADES,
  MATH_UPGRADES
);

function applyReplacements(lessonId, html, rules) {
  let out = html;
  for (const rule of rules) {
    // Pass a function () => rule.replace so $&, $1, etc. inside LaTeX / currency are NEVER interpreted by JS regex replace!
    const next = out.replace(rule.find, () => rule.replace);
    if (next === out) {
      throw new Error(`[exam-script-upgrades] Replacement did not match in ${lessonId}: "${rule.label}"`);
    }
    out = next;
  }
  return out;
}

/* ---------- Strip Non-Exam Lab/Sandbox Chatter From Answers ---------- */
const LAB_CHATTER_PATTERNS = [
  /\s*\*\((?:Verify|Inspect|Explore|Try|You can inspect)[^)*]{0,120}(?:Lab|Sandbox|Tab\s*\d|Preset)[^)*]*\)\*/gi,
  /\s*\((?:Try the preset in the Wave Lab above!|verify this live in Interactive Lab \d+ above!|You can also test a 5-row split in Interactive Lab \d+ above!|load the Final[^)]*preset in Lab \d+ above to view it!|verify in Lab above!|You can verify this in the Algebraic Solver above!|matching Lab 2 Preset 1)\)/gi,
  /\s*<em>\s*\(?(?:Try the "Salon" preset|Check the Cake 2025 preset|Test this live in the Section \d+ Bridge Lab|Verify both peaks live in the Section \d+ Cubic Cost Lab|Verify live in the Section \d+ Lab)[^<]*<\/em>/gi,
];

export function upgradeExamAnswersHtml(lessonId, courseCode, contentHtml) {
  let html = contentHtml;

  // 1. Apply targeted verbatim exam-script replacements first
  const rules = ALL_HTML_UPGRADES[lessonId];
  if (rules && rules.length) {
    html = applyReplacements(lessonId, html, rules);
  }

  // 2. Strip non-exam Sandbox/Lab chatter inside lessons
  for (const re of LAB_CHATTER_PATTERNS) {
    html = html.replace(re, '');
  }

  // 3. Course-specific Hint Removal, Stepper Unlocking & Direct Exam-Answer Button Labels
  if (courseCode === 'MATH103') {
    // Remove "Show Hint" buttons and hint boxes from all 84 Vault cards
    html = html.replace(
      /\s*<button[^>]*onclick=["']toggleVault\(['"]v\d+-hint['"]\)["'][^>]*>[\s\S]*?<\/button>/gi,
      ''
    );
    html = html.replace(
      /\s*<div[^>]*\bid=["']v\d+-hint["'][^>]*>[\s\S]*?<\/div>/gi,
      ''
    );
    html = html.replace(/📝\s*Show Full Solution/g, 'Show Step-by-Step Exam Answer');
    html = html.replace(/then reveal the Hint or Full Step-by-Step Solution independently\./gi, 'then open the Full Step-by-Step Exam Answer independently.');
  }

  if (courseCode === 'MATH104') {
    // Remove "Toggle Hint" buttons and hint boxes from Exam Vault cards (handles both exm1-hint and exam1-hint)
    html = html.replace(
      /\s*<button[^>]*onclick=["']toggleBox\(['"]exa?m\d+-hint['"]\)["'][^>]*>[\s\S]*?<\/button>/gi,
      ''
    );
    html = html.replace(
      /\s*<div[^>]*\bid=["']exa?m\d+-hint["'][^>]*>[\s\S]*?<\/div>/gi,
      ''
    );
    // Unlock Guided Worked Examples so all steps render immediately like a worked exam manual
    html = html.replace(/<div class="step-item">/g, '<div class="step-item visible">');
    // Standardize Exam Vault button text
    html = html.replace(
      />\s*Toggle (?:Full (?:6-Step )?Solution|Model Answer|Solutions?|Full Proof|Complete Exam (?:Proof|Derivation)|Complete Breakdown|Step-by-Step Elimination)\s*</g,
      '>Show Step-by-Step Exam Answer<'
    );
  }

  if (courseCode === 'MATH105') {
    // Hide .hint-toggle in DOM (preserving node so L1-L9 JS addEventListener never hits null)
    html = html.replace(
      /<button([^>]*\bhint-toggle\b[^>]*)>/gi,
      '<button$1 hidden aria-hidden="true">'
    );
    // Pre-unlock .solution-stepper steps
    html = html.replace(/class="solution-stepper"\s+data-step="0"/g, 'class="solution-stepper" data-step="99"');
    html = html.replace(/<div class="step-item">/g, '<div class="step-item visible">');
    html = html.replace(
      />\s*(?:Reveal Step-by-Step Solution|Show Full Step-by-Step Solution|Show Step-by-Step Solution|Show Full Solution)\s*</g,
      '>Show Step-by-Step Exam Answer<'
    );
  }

  if (courseCode === 'MATH106') {
    // Remove standalone Toggle Hint buttons & hint reveal boxes
    html = html.replace(
      /\s*<button[^>]*onclick=["']toggleBox\(['"]hint\d+['"]\)["'][^>]*>[\s\S]*?<\/button>/gi,
      ''
    );
    html = html.replace(
      /\s*<div class="reveal-box" id="hint\d+">[\s\S]*?<\/div>/gi,
      ''
    );
    html = html.replace(
      /Part B:\s*Written Exam Problems\s*\([^)]*Hints[^)]*\)/gi,
      'Part B: Past Exam Questions &amp; Step-by-Step Exam Answers'
    );
    // Promote Show Full Solution to primary button style & clear exam label
    html = html.replace(
      /<button class="btn-outline"\s+onclick="toggleBox\('(sol\d+)'\)">\s*Show Full Solution\s*<\/button>/gi,
      '<button class="btn-primary" onclick="toggleBox(\'$1\')">Show Step-by-Step Exam Answer</button>'
    );
  }

  if (courseCode === 'AST102') {
    html = html.replace(
      />\s*(?:Toggle Model Solution|Show Model Solution|Toggle Step-by-Step Solution)\s*</g,
      '>Show Step-by-Step Exam Answer<'
    );
  }

  return html;
}

/* ---------- MATH105 L10 Structured Step-by-Step Vault Upgrades ---------- */
const MATH105_L10_SOL_REPLACEMENTS = [
  [
    'sol: `$$y\' = \\\\frac{3}{2}x^{1/2}',
    'sol: `<strong>Step 1 (Derivative &amp; Arc-Length Differential):</strong> Given $y = x^{3/2}$ on $[1, 2]$:$$y\' = \\\\frac{3}{2}x^{1/2}',
  ],
  [
    'sol: `$$\\\\frac{dx}{dt} = e^t(\\\\cos t - \\\\sin t)',
    'sol: `<strong>Step 1 (Parametric Derivatives &amp; Speed Squared):</strong> Differentiate $x(t)$ and $y(t)$ via the product rule:$$\\\\frac{dx}{dt} = e^t(\\\\cos t - \\\\sin t)',
  ],
  [
    'sol: `$$y\' = \\\\frac{3}{2}(4 - x^{2/3})^{1/2}',
    'sol: `<strong>Step 1 (Differentiate &amp; Simplify $1 + (y\')^2$):</strong> Applying the chain rule on $(0, 2]$:$$y\' = \\\\frac{3}{2}(4 - x^{2/3})^{1/2}',
  ],
  [
    'sol: `$$y\' = 2x \\\\implies \\\\sqrt{1 + (y\')^2}',
    'sol: `<strong>Step 1 (Surface Area Formula About the $y$-Axis, $r = x$):</strong> Using $S = \\\\int_1^2 2\\\\pi x\\\\sqrt{1+(y\')^2}\\\\,dx$:$$y\' = 2x \\\\implies \\\\sqrt{1 + (y\')^2}',
  ],
  [
    'sol: `$$\\\\frac{dx}{dy} = \\\\frac{-y}{\\\\sqrt{9-y^2}}',
    'sol: `<strong>Step 1 (Integrate w.r.t. $y$ Using $S = \\\\int_{-2}^2 2\\\\pi x\\\\sqrt{1 + (dx/dy)^2}\\\\,dy$):</strong>$$\\\\frac{dx}{dy} = \\\\frac{-y}{\\\\sqrt{9-y^2}}',
  ],
  [
    'sol: `Intersections: $x^2 = x+2',
    'sol: `<strong>Step 1 (Points of Intersection &amp; Area $A$):</strong> Solve $x^2 = x+2',
  ],
  [
    'sol: `Intersections: $x^2 = x+6',
    'sol: `<strong>Step 1 (Points of Intersection, Area $A$ &amp; Moments $M_y, M_x$):</strong> Solve $x^2 = x+6',
  ],
];

export function upgradeExamAnswersJs(jsCode, lessonId, courseCode) {
  let code = jsCode;

  if (courseCode === 'MATH105') {
    // 1. Unlock L1 stepper so clicking the solution button opens ALL steps immediately
    code = code.replace(/setStepCount\(1\)/g, 'setStepCount(steps.length)');

    // 2. Update toggle label strings in L1-L9 JS
    code = code.replace(
      /(['"])(?:Reveal Step-by-Step Solution|Show Full Step-by-Step Solution|Show Step-by-Step Solution|Show Full Solution)\1/g,
      "'Show Step-by-Step Exam Answer'"
    );
    code = code.replace(/(['"])Hide Solution\1/g, "'Hide Exam Answer'");

    // 3. Remove Hint buttons & hint-boxes in L10-L17 dynamic vaultData renderVault() templates
    code = code.replace(
      /\s*<button[^>]*onclick="toggleBox\('\$\{v\.id\}-hint'\)"[^>]*>Hint<\/button>/g,
      ''
    );
    code = code.replace(
      /\s*<button[^>]*data-toggle="\$\{v\.id\}-hint"[^>]*>Show Hint<\/button>/g,
      ''
    );
    code = code.replace(
      /\s*<div class="reveal-box(?:\s+hint-box)?" id="\$\{v\.id\}-hint">[\s\S]*?<\/div>/g,
      ''
    );
    code = code.replace(
      /<button class="btn" onclick="toggleBox\('\$\{v\.id\}-sol'\)">Full Solution<\/button>/g,
      '<button class="btn btn-primary" onclick="toggleBox(\'${v.id}-sol\')">Show Step-by-Step Exam Answer</button>'
    );
    code = code.replace(
      />Step-by-Step Solution<\/button>/g,
      '>Show Step-by-Step Exam Answer</button>'
    );

    // 4. Add structured step headers to L10 vaultData solutions (pass callback so $$ is never reduced to $)
    if (lessonId === 'math105-l10') {
      for (const [target, rep] of MATH105_L10_SOL_REPLACEMENTS) {
        code = code.replace(target, () => rep);
      }
    }
  }

  if (courseCode === 'AST102') {
    code = code.replace(/Show Model Solution/g, 'Show Step-by-Step Exam Answer');
    code = code.replace(/Hide Model Solution/g, 'Hide Exam Answer');
  }

  return code;
}
