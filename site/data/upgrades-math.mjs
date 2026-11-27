/* ==========================================================================
   MATH103, MATH104, MATH105 & MATH106 — Exam-Script Answer Upgrades
   Fills in every skipped definition, truth table, Wronskian, partial-fraction
   step, row-reduction step, determinant expansion, and inline diagram.
   ========================================================================== */

export const MATH_UPGRADES = {
  'math103-l01': [
    {
      label: 'MATH103 L1 v2 & v3 Step-by-Step Prime Factorization & Euclidean Algorithm',
      find: /<div id="v2-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v2-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Method (Successive Prime Division by Smallest Primes):</strong></p>
              <p>&bull; Divide repeatedly by $2$: $756 = 2 \\times 378 = 2 \\times (2 \\times 189) = 2^2 \\times 189$ ($189$ is odd).</p>
              <p>&bull; Divide repeatedly by $3$ (digit sum $1+8+9=18$ is divisible by $3$): $189 = 3 \\times 63 = 3^2 \\times 21 = 3^3 \\times 7$.</p>
              <p>&bull; Since $7$ is prime, the factorization terminates uniquely by the Fundamental Theorem of Arithmetic.</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $756 = 2^2 \\times 3^3 \\times 7$.</p>
            </div>`,
    },
    {
      label: 'MATH103 L1 v3 Euclidean Algorithm',
      find: /<div id="v3-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v3-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-1.5">
              <p><strong>Applying the Euclidean Division Algorithm $a = bq + r$ ($0 \\le r &lt; b$) repeatedly:</strong></p>
              <p>&bull; <strong>Step 1:</strong> $1479 = 272 \\times 5 + 119 \\implies \\gcd(1479, 272) = \\gcd(272, 119)$.</p>
              <p>&bull; <strong>Step 2:</strong> $272 = 119 \\times 2 + 34 \\implies \\gcd(272, 119) = \\gcd(119, 34)$.</p>
              <p>&bull; <strong>Step 3:</strong> $119 = 34 \\times 3 + 17 \\implies \\gcd(119, 34) = \\gcd(34, 17)$.</p>
              <p>&bull; <strong>Step 4:</strong> $34 = 17 \\times 2 + 0$ (zero remainder reached; the last non-zero remainder is $17$).</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400 pt-1">Final Answer: $\\gcd(272, 1479) = 17$.</p>
            </div>`,
    },
  ],

  'math103-l05': [
    {
      label: 'MATH103 L5 v5 Add Missing Definition of Synthetic Division',
      find: /<div id="v5-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v5-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Part 1 — Definition of Synthetic Division:</strong> Synthetic division (Horner's method) is a streamlined tabular algorithm for dividing a polynomial $P(x) = a_n x^n + a_{n-1}x^{n-1} + \\dots + a_0$ by a linear binomial $(x - c)$ using only the detached coefficients $(a_n, a_{n-1}, \\dots, a_0)$: bring down $b_{n-1} = a_n$, then compute $b_{k-1} = a_k + c\\,b_k$ iteratively, yielding quotient $Q(x) = b_{n-1}x^{n-1} + \\dots + b_0$ and remainder $R = P(c)$.</p>
              <p><strong>Part 2 — Evaluating $(b+c)(c+a)(a+b)$:</strong> For $x^3 + px^2 + qx + r = 0$, Vieta's relations give $a + b + c = -p$, $ab + bc + ca = q$, and $abc = -r$.</p>
              <p>&bull; <strong>Method 1 (Factor Identity):</strong> Since $f(x) = x^3 + px^2 + qx + r = (x-a)(x-b)(x-c)$ and $b+c = -p-a$, $c+a = -p-b$, $a+b = -p-c$:
              $$(b+c)(c+a)(a+b) = (-p-a)(-p-b)(-p-c) = f(-p) = (-p)^3 + p(-p)^2 + q(-p) + r = \\mathbf{r - pq}.$$</p>
              <p>&bull; <strong>Method 2 (Symmetric Expansion):</strong> $(b+c)(c+a)(a+b) = (a+b+c)(ab+bc+ca) - abc = (-p)(q) - (-r) = \\mathbf{r - pq}$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l09': [
    {
      label: 'MATH103 L9 v5 Add Missing Definition of Bernoulli Equation',
      find: /<div id="v5-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v5-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Definition of Bernoulli's Equation:</strong> A first-order nonlinear differential equation of the form $\\dfrac{dy}{dx} + P(x)y = Q(x)y^n$ (where $P(x), Q(x)$ are continuous functions of $x$ alone and $n \\ne 0, 1$ is a real constant) is called <em>Bernoulli's equation</em>; dividing by $y^n$ and substituting $v = y^{1-n}$ reduces it to a first-order linear ODE.</p>
              <p><strong>Step 1 (Identify $n = 1/2$ &amp; Divide by $y^{1/2}$):</strong> Here $P(x) = \\frac{x}{1-x^2}$, $Q(x) = x$, and $n = \\frac{1}{2}$. Dividing through by $\\sqrt{y}$ gives $y^{-1/2}\\dfrac{dy}{dx} + \\dfrac{x}{1-x^2}y^{1/2} = x$.</p>
              <p><strong>Step 2 (Substitute $v = y^{1 - 1/2} = y^{1/2}$):</strong> Since $\\dfrac{dv}{dx} = \\dfrac{1}{2}y^{-1/2}\\dfrac{dy}{dx}$, multiplying by $\\frac{1}{2}$ yields the linear ODE $\\dfrac{dv}{dx} + \\dfrac{x}{2(1-x^2)}v = \\dfrac{x}{2}$.</p>
              <p><strong>Step 3 (Integrating Factor):</strong> $\\mu(x) = \\exp\\!\\left(\\int \\dfrac{x}{2(1-x^2)}\\,dx\\right) = \\exp\\!\\left(-\\dfrac{1}{4}\\ln|1 - x^2|\\right) = |1 - x^2|^{-1/4}$.</p>
              <p><strong>Step 4 (Integrate &amp; Back-Substitute):</strong> Multiplying by $(1-x^2)^{-1/4}$ gives $\\dfrac{d}{dx}\\big[v(1-x^2)^{-1/4}\\big] = \\dfrac{x}{2}(1-x^2)^{-1/4}$. Letting $u = 1 - x^2$ ($\\frac{x}{2}dx = -\\frac{du}{4}$):
              $$v(1-x^2)^{-1/4} = -\\frac{1}{4}\\int u^{-1/4}\\,du = -\\frac{1}{4}\\cdot\\frac{4}{3}u^{3/4} + C = -\\frac{1}{3}(1-x^2)^{3/4} + C.$$</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer ($v = \\sqrt{y}$): $\\sqrt{y} = -\\dfrac{1}{3}(1 - x^2) + C(1 - x^2)^{1/4}$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l10': [
    {
      label: 'MATH103 L10 v6 Explicit 3x3 Wronskian & Determinants for Variation of Parameters',
      find: /<div id="v6-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v6-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Auxiliary Equation &amp; Complementary Function):</strong> $m^3 - 6m^2 + 11m - 6 = (m-1)(m-2)(m-3) = 0 \\implies m = 1, 2, 3$. Thus $y_c = C_1 e^x + C_2 e^{2x} + C_3 e^{3x}$, with basis $y_1 = e^x,\\; y_2 = e^{2x},\\; y_3 = e^{3x}$ and RHS $R(x) = e^x$.</p>
              <p><strong>Step 2 (Compute $3 \\times 3$ Wronskian $W$):</strong>
              $$W = \\begin{vmatrix} e^x & e^{2x} & e^{3x} \\\\ e^x & 2e^{2x} & 3e^{3x} \\\\ e^x & 4e^{2x} & 9e^{3x} \\end{vmatrix} = e^{6x}\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 4 & 9 \\end{vmatrix} = e^{6x}\\big[1(18-12) - 1(9-3) + 1(4-2)\\big] = 2e^{6x} \\ne 0.$$</p>
              <p><strong>Step 3 (Cramer Sub-Determinants $W_1, W_2, W_3$ &amp; Parameter Derivatives $u_k' = R(x)W_k / W$):</strong> Replacing column $k$ of $W$ by $[0, 0, 1]^T$:
              $$W_1 = +\\begin{vmatrix} e^{2x} & e^{3x} \\\\ 2e^{2x} & 3e^{3x} \\end{vmatrix} = e^{5x}, \\quad W_2 = -\\begin{vmatrix} e^x & e^{3x} \\\\ e^x & 3e^{3x} \\end{vmatrix} = -2e^{4x}, \\quad W_3 = +\\begin{vmatrix} e^x & e^{2x} \\\\ e^x & 2e^{2x} \\end{vmatrix} = e^{3x}.$$
              Integrating $u_k' = \\dfrac{e^x W_k}{2e^{6x}}$:
              $$u_1' = \\frac{1}{2} \\implies u_1 = \\frac{1}{2}x; \\qquad u_2' = -e^{-x} \\implies u_2 = e^{-x}; \\qquad u_3' = \\frac{1}{2}e^{-2x} \\implies u_3 = -\\frac{1}{4}e^{-2x}.$$</p>
              <p><strong>Step 4 (Assemble $y_p = u_1 y_1 + u_2 y_2 + u_3 y_3$):</strong> $y_p = \\frac{1}{2}x e^x + e^{-x}e^{2x} - \\frac{1}{4}e^{-2x}e^{3x} = \\frac{1}{2}x e^x + \\frac{3}{4}e^x$. Absorbing $\\frac{3}{4}e^x$ into $C_1 e^x$ leaves $y_p = \\frac{1}{2}x e^x$.</p>
              <p><strong>Step 5 (Inverse $D$-Operator Check):</strong> $f(D) = D^3 - 6D^2 + 11D - 6 \\implies f(1) = 0$ and $f'(1) = 3(1)^2 - 12(1) + 11 = 2 \\ne 0$, so $y_p = x\\dfrac{1}{f'(1)}e^x = \\dfrac{1}{2}x e^x$ &#10003;.</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">General Solution: $y = C_1 e^x + C_2 e^{2x} + C_3 e^{3x} + \\dfrac{1}{2}x e^x$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l11': [
    {
      label: 'MATH103 L11 v6 Explicit 4-Row Truth Table + Algebraic Proof',
      find: /<div id="v6-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v6-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Answer to (a) — Contrapositive Equivalence $(p \\to q) \\equiv (\\neg q \\to \\neg p)$:</strong></p>
              <p><strong>1. Truth Table Proof:</strong></p>
              <table class="exam-script-table">
                <thead>
                  <tr><th>$p$</th><th>$q$</th><th>$\\neg q$</th><th>$\\neg p$</th><th>$p \\to q$</th><th>$\\neg q \\to \\neg p$</th></tr>
                </thead>
                <tbody>
                  <tr><td>T</td><td>T</td><td>F</td><td>F</td><td><strong>T</strong></td><td><strong>T</strong></td></tr>
                  <tr><td>T</td><td>F</td><td>T</td><td>F</td><td><strong>F</strong></td><td><strong>F</strong></td></tr>
                  <tr><td>F</td><td>T</td><td>F</td><td>T</td><td><strong>T</strong></td><td><strong>T</strong></td></tr>
                  <tr><td>F</td><td>F</td><td>T</td><td>T</td><td><strong>T</strong></td><td><strong>T</strong></td></tr>
                </tbody>
              </table>
              <p>Since the truth columns of $(p \\to q)$ and $(\\neg q \\to \\neg p)$ are identical $(T, F, T, T)$ across all $2^2 = 4$ truth assignments, $(p \\to q) \\equiv (\\neg q \\to \\neg p)$.</p>
              <p><strong>2. Algebraic Equivalence Proof:</strong>
              $$\\neg q \\to \\neg p \\equiv \\neg(\\neg q) \\lor \\neg p \\;\\text{(Implication Law)} \\equiv q \\lor \\neg p \\;\\text{(Double Negation)} \\equiv \\neg p \\lor q \\;\\text{(Commutative)} \\equiv p \\to q.$$</p>
              <p><strong>Answer to (b) — Generalized Pigeonhole Principle Proof:</strong> Let the $k = 12$ calendar months be the pigeonholes and the $N$ people be the pigeons. By the Generalized Pigeonhole Principle, at least one box holds $\\lceil N / k \\rceil$ objects:<br>
              &bull; For $N = 13$: $\\lceil 13/12 \\rceil = \\lceil 1.083\\dots \\rceil = \\mathbf{2}$ people share a birth month.<br>
              &bull; For $N = 25$: $\\lceil 25/12 \\rceil = \\lceil 2.083\\dots \\rceil = \\mathbf{3}$ people share a birth month. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l12': [
    {
      label: 'MATH103 L12 v1 & v2 Full Partial-Fraction Steps',
      find: /<div id="v1-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v1-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Formulate Recurrence):</strong> Let $a_n$ denote the squirrel population after $n$ years, with $a_0 = 500$. Since the population doubles and $150$ squirrels are relocated annually, $a_{n+1} = 2a_n - 150$ for $n \\ge 0$.</p>
              <p><strong>Step 2 (Solve for Ordinary Generating Function $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$):</strong> Multiply $a_{n+1} = 2a_n - 150$ by $x^{n+1}$ and sum over $n = 0, 1, 2, \\dots$:
              $$\\sum_{n=0}^{\\infty} a_{n+1}x^{n+1} = 2x\\sum_{n=0}^{\\infty} a_n x^n - 150x\\sum_{n=0}^{\\infty} x^n \\implies G(x) - 500 = 2xG(x) - \\frac{150x}{1 - x}.$$
              Collecting $G(x)$ terms:
              $$(1 - 2x)G(x) = 500 - \\frac{150x}{1 - x} = \\frac{500 - 650x}{1 - x} \\implies G(x) = \\frac{500 - 650x}{(1 - 2x)(1 - x)}.$$</p>
              <p><strong>Step 3 (Partial Fraction Decomposition):</strong> Set $\\dfrac{500 - 650x}{(1 - 2x)(1 - x)} = \\dfrac{A}{1 - 2x} + \\dfrac{B}{1 - x}$, so $500 - 650x = A(1 - x) + B(1 - 2x)$:<br>
              &bull; Put $x = 1$: $500 - 650(1) = B(1 - 2) \\implies -150 = -B \\implies B = 150$.<br>
              &bull; Put $x = \\frac{1}{2}$: $500 - 650(\\frac{1}{2}) = A(1 - \\frac{1}{2}) \\implies 175 = \\frac{1}{2}A \\implies A = 350$.</p>
              <p><strong>Step 4 (Power Series Expansion &amp; Coefficient Extraction):</strong>
              $$G(x) = \\frac{350}{1 - 2x} + \\frac{150}{1 - x} = 350\\sum_{n=0}^{\\infty} (2x)^n + 150\\sum_{n=0}^{\\infty} x^n = \\sum_{n=0}^{\\infty} \\big(350 \\cdot 2^n + 150\\big)x^n.$$</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $a_n = 350 \\cdot 2^n + 150$ squirrels after $n$ years ($n \\ge 0$). $\\blacksquare$</p>
            </div>`,
    },
    {
      label: 'MATH103 L12 v2 Frog Recurrence Full Steps',
      find: /<div id="v2-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v2-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Answer to (a) — Recurrence Relation:</strong> Let $a_n$ be the number of frogs after $n$ years. Given $a_0 = 50$, quadrupling each year minus $100$ shipped out gives $a_{n+1} = 4a_n - 100$ for $n \\ge 0$.</p>
              <p><strong>Answer to (b) — Generating Function Solution:</strong> Define $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$. Multiplying $a_{n+1} = 4a_n - 100$ by $x^{n+1}$ and summing over $n \\ge 0$:
              $$G(x) - 50 = 4xG(x) - \\frac{100x}{1 - x} \\implies (1 - 4x)G(x) = \\frac{50 - 150x}{1 - x} \\implies G(x) = \\frac{50 - 150x}{(1 - 4x)(1 - x)}.$$
              Write $50 - 150x = A(1 - x) + B(1 - 4x)$:<br>
              &bull; Put $x = 1$: $-100 = -3B \\implies B = \\dfrac{100}{3}$.<br>
              &bull; Put $x = \\frac{1}{4}$: $50 - \\frac{150}{4} = \\frac{3}{4}A \\implies \\frac{50}{4} = \\frac{3}{4}A \\implies A = \\dfrac{50}{3}$.<br>
              Expanding in geometric series:
              $$G(x) = \\frac{50/3}{1 - 4x} + \\frac{100/3}{1 - x} = \\sum_{n=0}^{\\infty} \\left(\\frac{50 \\cdot 4^n + 100}{3}\\right)x^n.$$</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $a_n = \\dfrac{50 \\cdot 4^n + 100}{3}$ frogs after $n$ years. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l13': [
    {
      label: 'MATH103 L13 v4 5-Vertex House Graph SVG in Question',
      find: /4\. Consider the 5-vertex House Graph on \$\\\{A, B, C, D, E\\\}\$ with edges \$\\\{AB, BC, CD, DA, CE, DE\\\}\$\. Find the degree of each vertex, verify the Handshaking Lemma, and justify whether it has an Euler path or Euler circuit\./,
      replace: `4. Consider the 5-vertex House Graph on $\\{A, B, C, D, E\\}$ with edges $\\{AB, BC, CD, DA, CE, DE\\}$ shown below. Find the degree of each vertex, verify the Handshaking Lemma, and justify whether it has an Euler path or Euler circuit.
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 280 185" width="280" height="185" role="img" aria-label="5-vertex House Graph on A, B, C, D, E with roof triangle CDE and base square ABCD">
                  <!-- Base square A(80,150), B(80,82), C(200,82), D(200,150) rotated/standard house: A(85,155), B(195,155), C(195,85), D(85,85), E(140,28) -->
                  <line x1="85" y1="155" x2="195" y2="155" stroke="#475569" stroke-width="2.2"/>
                  <line x1="195" y1="155" x2="195" y2="85" stroke="#475569" stroke-width="2.2"/>
                  <line x1="195" y1="85" x2="85" y2="85" stroke="#475569" stroke-width="2.2"/>
                  <line x1="85" y1="85" x2="85" y2="155" stroke="#475569" stroke-width="2.2"/>
                  <line x1="195" y1="85" x2="140" y2="28" stroke="#475569" stroke-width="2.2"/>
                  <line x1="85" y1="85" x2="140" y2="28" stroke="#475569" stroke-width="2.2"/>
                  <circle cx="85" cy="155" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/>
                  <circle cx="195" cy="155" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/>
                  <circle cx="195" cy="85" r="14" fill="#FFFFFF" stroke="#C27803" stroke-width="2.4"/>
                  <circle cx="85" cy="85" r="14" fill="#FFFFFF" stroke="#C27803" stroke-width="2.4"/>
                  <circle cx="140" cy="28" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/>
                  <text x="85" y="160" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">A</text>
                  <text x="195" y="160" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">B</text>
                  <text x="195" y="90" font-size="12" font-weight="700" text-anchor="middle" fill="#7C4A03">C</text>
                  <text x="85" y="90" font-size="12" font-weight="700" text-anchor="middle" fill="#7C4A03">D</text>
                  <text x="140" y="33" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">E</text>
                </svg>
                <figcaption>Given House Graph (ISRT 2nd Incourse 2025 Q6): 5 vertices, 6 edges ($C$ and $D$ have odd degree 3).</figcaption>
              </figure>`,
    },
    {
      label: 'MATH103 L13 v5 Weighted Graph SVG in Question',
      find: /5\. Apply Dijkstra's Algorithm to find the shortest path from \$A\$ to \$D\$ on the weighted graph with edges \$AB\(4\), AC\(2\), BC\(1\), BD\(5\), BE\(2\), CE\(8\), CF\(10\), ED\(1\), FD\(2\)\$(?: \(matching Lab 2 Preset 1\))?\./,
      replace: `5. Apply Dijkstra's Algorithm to find the shortest path from $A$ to $D$ on the weighted graph shown below (edges $AB(4), AC(2), BC(1), BD(5), BE(2), CE(8), CF(10), ED(1), FD(2)$):
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 400 200" width="400" height="200" role="img" aria-label="6-vertex weighted graph A B C D E F for Dijkstra shortest path problem">
                  <!-- Nodes: A(45,100), B(145,45), C(145,155), E(255,45), F(255,155), D(355,100) -->
                  <line x1="45" y1="100" x2="145" y2="45" stroke="#475569" stroke-width="2"/>
                  <line x1="45" y1="100" x2="145" y2="155" stroke="#475569" stroke-width="2"/>
                  <line x1="145" y1="45" x2="145" y2="155" stroke="#475569" stroke-width="2"/>
                  <path d="M 145 45 Q 250 10, 355 100" fill="none" stroke="#475569" stroke-width="2"/>
                  <line x1="145" y1="45" x2="255" y2="45" stroke="#475569" stroke-width="2"/>
                  <line x1="145" y1="155" x2="255" y2="45" stroke="#475569" stroke-width="2"/>
                  <line x1="145" y1="155" x2="255" y2="155" stroke="#475569" stroke-width="2"/>
                  <line x1="255" y1="45" x2="355" y2="100" stroke="#475569" stroke-width="2"/>
                  <line x1="255" y1="155" x2="355" y2="100" stroke="#475569" stroke-width="2"/>
                  <!-- Weights -->
                  <rect x="84" y="59" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="92" y="70" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">4</text>
                  <rect x="84" y="122" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="92" y="133" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">2</text>
                  <rect x="132" y="93" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="140" y="104" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">1</text>
                  <rect x="242" y="14" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="250" y="25" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">5</text>
                  <rect x="192" y="34" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="200" y="45" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">2</text>
                  <rect x="194" y="92" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="202" y="103" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">8</text>
                  <rect x="192" y="159" width="20" height="15" rx="3" fill="#FFFFFF"/><text x="202" y="170" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">10</text>
                  <rect x="301" y="59" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="309" y="70" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">1</text>
                  <rect x="301" y="122" width="16" height="15" rx="3" fill="#FFFFFF"/><text x="309" y="133" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">2</text>
                  <!-- Vertices -->
                  <circle cx="45" cy="100" r="14" fill="#FFFBEB" stroke="#C27803" stroke-width="2.2"/><text x="45" y="105" font-size="12" font-weight="700" text-anchor="middle" fill="#7C4A03">A</text>
                  <circle cx="145" cy="45" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/><text x="145" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">B</text>
                  <circle cx="145" cy="155" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/><text x="145" y="160" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">C</text>
                  <circle cx="255" cy="45" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/><text x="255" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">E</text>
                  <circle cx="255" cy="155" r="14" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2.2"/><text x="255" y="160" font-size="12" font-weight="700" text-anchor="middle" fill="#111827">F</text>
                  <circle cx="355" cy="100" r="14" fill="#EBF9F0" stroke="#15803D" stroke-width="2.2"/><text x="355" y="105" font-size="12" font-weight="700" text-anchor="middle" fill="#14532D">D</text>
                </svg>
                <figcaption>Given Weighted Graph (ISRT 2nd Incourse 2025 Q5): Find shortest path from $A$ to $D$.</figcaption>
              </figure>`,
    },
    {
      label: 'MATH103 L13 v5 Clean Dijkstra Step-by-Step Relaxation Explanation + Table + Highlighted Path SVG',
      find: /<div id="v5-sol"[\s\S]*?<p class="font-bold text-emerald-700[\s\S]*?<\/div>/,
      replace: `<div id="v5-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Initialization &amp; Iterative Relaxation Trace:</strong> Set $d(A)=0$ and $d(v)=\\infty$ for $v \\ne A$. At each iteration, permanently settle ($*$) the unvisited vertex $u$ with smallest tentative distance and relax all outgoing edges $(u, v)$ via $d(v) \\leftarrow \\min\\big(d(v),\\; d(u) + w(u,v)\\big)$:</p>
              <table class="exam-script-table">
                <thead>
                  <tr><th>Step</th><th>Settled $u$</th><th>$A$</th><th>$B$</th><th>$C$</th><th>$D$</th><th>$E$</th><th>$F$</th><th>Key Relaxations</th></tr>
                </thead>
                <tbody>
                  <tr><td>0</td><td>—</td><td>$0$</td><td>$\\infty$</td><td>$\\infty$</td><td>$\\infty$</td><td>$\\infty$</td><td>$\\infty$</td><td>Source $A$ initialized to $0$</td></tr>
                  <tr><td>1</td><td><strong>$A$</strong></td><td>$0^*$</td><td>$4_A$</td><td>$2_A$</td><td>$\\infty$</td><td>$\\infty$</td><td>$\\infty$</td><td>$AB: 4,\\; AC: 2$</td></tr>
                  <tr><td>2</td><td><strong>$C$</strong></td><td>$0^*$</td><td>$3_C$</td><td>$2^*_A$</td><td>$\\infty$</td><td>$10_C$</td><td>$12_C$</td><td>$CB: 2+1=3 &lt; 4;\\; CE: 10;\\; CF: 12$</td></tr>
                  <tr><td>3</td><td><strong>$B$</strong></td><td>$0^*$</td><td>$3^*_C$</td><td>$2^*_A$</td><td>$8_B$</td><td>$5_B$</td><td>$12_C$</td><td>$BD: 3+5=8;\\; BE: 3+2=5 &lt; 10$</td></tr>
                  <tr><td>4</td><td><strong>$E$</strong></td><td>$0^*$</td><td>$3^*_C$</td><td>$2^*_A$</td><td>$6_E$</td><td>$5^*_B$</td><td>$12_C$</td><td>$ED: 5+1=6 &lt; 8$</td></tr>
                  <tr class="exam-total-row"><td>5</td><td><strong>$D$</strong></td><td>$0^*$</td><td>$3^*_C$</td><td>$2^*_A$</td><td>$6^*_E$</td><td>$5^*_B$</td><td>$8_D$</td><td>Target $D$ settled with $d(D) = 6$</td></tr>
                </tbody>
              </table>
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 400 195" width="400" height="195" role="img" aria-label="Highlighted shortest path A to C to B to E to D with total cost 6">
                  <line x1="45" y1="98" x2="145" y2="43" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <path d="M 145 43 Q 250 10, 355 98" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <line x1="145" y1="153" x2="255" y2="43" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <line x1="145" y1="153" x2="255" y2="153" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <line x1="255" y1="153" x2="355" y2="98" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="4,3"/>
                  <!-- Optimal path: A->C(2), C->B(1), B->E(2), E->D(1) -->
                  <line x1="45" y1="98" x2="145" y2="153" stroke="#15803D" stroke-width="3.4"/>
                  <line x1="145" y1="153" x2="145" y2="43" stroke="#15803D" stroke-width="3.4"/>
                  <line x1="145" y1="43" x2="255" y2="43" stroke="#15803D" stroke-width="3.4"/>
                  <line x1="255" y1="43" x2="355" y2="98" stroke="#15803D" stroke-width="3.4"/>
                  <circle cx="45" cy="98" r="14" fill="#FFFBEB" stroke="#C27803" stroke-width="2.2"/><text x="45" y="103" font-size="11.5" font-weight="700" text-anchor="middle" fill="#7C4A03">A(0)</text>
                  <circle cx="145" cy="153" r="14" fill="#EBF9F0" stroke="#15803D" stroke-width="2.2"/><text x="145" y="158" font-size="11.5" font-weight="700" text-anchor="middle" fill="#14532D">C(2)</text>
                  <circle cx="145" cy="43" r="14" fill="#EBF9F0" stroke="#15803D" stroke-width="2.2"/><text x="145" y="48" font-size="11.5" font-weight="700" text-anchor="middle" fill="#14532D">B(3)</text>
                  <circle cx="255" cy="43" r="14" fill="#EBF9F0" stroke="#15803D" stroke-width="2.2"/><text x="255" y="48" font-size="11.5" font-weight="700" text-anchor="middle" fill="#14532D">E(5)</text>
                  <circle cx="355" cy="98" r="14" fill="#15803D" stroke="#14532D" stroke-width="2.2"/><text x="355" y="103" font-size="11.5" font-weight="700" text-anchor="middle" fill="#FFFFFF">D(6)</text>
                  <circle cx="255" cy="153" r="13" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.5"/><text x="255" y="158" font-size="11" text-anchor="middle" fill="#64748B">F</text>
                  <text x="86" y="140" font-size="10.5" font-weight="700" fill="#15803D">+2</text>
                  <text x="155" y="101" font-size="10.5" font-weight="700" fill="#15803D">+1</text>
                  <text x="200" y="34" font-size="10.5" font-weight="700" fill="#15803D">+2</text>
                  <text x="310" y="64" font-size="10.5" font-weight="700" fill="#15803D">+1</text>
                </svg>
                <figcaption>Optimal Path Highlighted: $A \\to C \\to B \\to E \\to D$ (Minimum Distance $= 6$).</figcaption>
              </figure>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Backtracking Predecessors ($D \\leftarrow E \\leftarrow B \\leftarrow C \\leftarrow A$): Shortest Path is $A \\to C \\to B \\to E \\to D$ with minimum weight $2 + 1 + 2 + 1 = \\mathbf{6}$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l14': [
    {
      label: 'MATH103 L14 Worked Exam Derivation Q8(c) Graphical Minimax SVG',
      find: /<p><strong>2\. Lower Envelope &amp; Peak:<\/strong> Notice \$E_1\(x_1\) > E_2\(x_1\)\$ everywhere on \$\[0, 1\]\$[\s\S]*?<\/p>/,
      replace: `<p><strong>2. Lower Envelope Graph &amp; Maximin Peak:</strong></p>
            <figure class="exam-svg-fig">
              <svg viewBox="0 0 380 225" width="380" height="225" role="img" aria-label="2x3 Graphical Minimax Lower Envelope diagram showing E1, E2, E3 lines and peak at (7/11, 2/11)">
                <!-- x in [0,1] -> X = 60 + 260*x; E in [-4, 6] -> Y = 185 - (E+4)*15.5 (E=0 is y=123) -->
                <line x1="60" y1="123" x2="320" y2="123" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
                <line x1="60" y1="190" x2="60" y2="22" stroke="currentColor" stroke-width="1.4"/>
                <line x1="320" y1="190" x2="320" y2="22" stroke="currentColor" stroke-width="1.4"/>
                <!-- E1: (0,5)->(60, 45.5) to (1,0)->(320, 123) -->
                <line x1="60" y1="45.5" x2="320" y2="123" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,3"/>
                <!-- E2: (0,4)->(60, 61) to (1,-2)->(320, 154) -->
                <line x1="60" y1="61" x2="320" y2="154" stroke="#1D4ED8" stroke-width="2"/>
                <!-- E3: (0,-3)->(60, 169.5) to (1,2)->(320, 92) -->
                <line x1="60" y1="169.5" x2="320" y2="92" stroke="#C27803" stroke-width="2"/>
                <!-- Bold Lower Envelope: (0,-3)->(60,169.5) to peak (7/11, 2/11)->(225.45, 120.18) to (1,-2)->(320,154) -->
                <polyline points="60,169.5 225.45,120.18 320,154" fill="none" stroke="#15803D" stroke-width="3.6"/>
                <line x1="225.45" y1="123" x2="225.45" y2="190" stroke="#BE123C" stroke-width="1.3" stroke-dasharray="3,3"/>
                <circle cx="225.45" cy="120.18" r="5" fill="#BE123C"/>
                <text x="235" y="49" font-size="10" fill="#64748B">E₁ = 5 − 5x₁ (dominated)</text>
                <text x="72" y="78" font-size="10.5" font-weight="700" fill="#1D4ED8">E₂ = 4 − 6x₁</text>
                <text x="266" y="88" font-size="10.5" font-weight="700" fill="#C27803">E₃ = 5x₁ − 3</text>
                <text x="225" y="111" font-size="10.5" font-weight="700" text-anchor="middle" fill="#BE123C">Peak (x₁* = 7/11, v = 2/11)</text>
                <text x="60" y="206" font-size="10" text-anchor="middle" fill="currentColor">x₁ = 0</text>
                <text x="225.45" y="206" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">7/11</text>
                <text x="320" y="206" font-size="10" text-anchor="middle" fill="currentColor">x₁ = 1</text>
              </svg>
              <figcaption>Lower Envelope $L(x_1) = \\min(E_2, E_3)$ highlighted in green; maximin peak occurs at $x_1^* = 7/11,\\; v = 2/11$.</figcaption>
            </figure>
            <p>Notice $E_1(x_1) > E_2(x_1)$ everywhere on $[0, 1]$ (Col 1 is strictly dominated by Col 2). The lower envelope is formed by $E_3$ (rising) and $E_2$ (falling), peaking at their intersection:
            $$4 - 6x_1 = 5x_1 - 3 \\implies 11x_1 = 7 \\implies x_1^* = \\frac{7}{11}, \\qquad x_2^* = \\frac{4}{11}, \\qquad v = 4 - 6\\left(\\frac{7}{11}\\right) = \\frac{2}{11}$$</p>`,
    },
    {
      label: 'MATH103 L14 v2, v3, v4 Complete Dominance & Graphical Minimax Scripts',
      find: /<div id="v2-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v2-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-1.5">
              <p><strong>Saddle-Point Check First:</strong> Row minima are $\\{-3, 1, -2\\} \\implies \\text{maximin } \\underline{v} = 1$ (Row 2). Column maxima are $\\{1, 2, 2\\} \\implies \\text{minimax } \\overline{v} = 1$ (Col 1). Now reduce systematically by dominance (Player 1 maximizes rows; Player 2 minimizes columns):</p>
              <p>&bull; <strong>Step 1 (Row Dominance):</strong> Compare Row 3 $[1, 0, -2]$ with Row 2 $[1, 2, 1]$. Since $1 \\le 1,\\; 0 &lt; 2,\\; -2 &lt; 1$, Row 3 is dominated by Row 2 $\\implies$ eliminate Row 3, leaving $\\begin{pmatrix}-3 & 1 & 2 \\\\ 1 & 2 & 1\\end{pmatrix}$.</p>
              <p>&bull; <strong>Step 2 (Column Dominance):</strong> In the $2 \\times 3$ matrix, Col 1 $[-3, 1]^T$ has entries $\\le$ Col 2 $[1, 2]^T$ ($-3 &lt; 1,\\; 1 &lt; 2$) and $\\le$ Col 3 $[2, 1]^T$ ($-3 &lt; 2,\\; 1 \\le 1$). Since Player 2 minimizes loss, eliminate Col 2 and Col 3, leaving $\\begin{pmatrix}-3 \\\\ 1\\end{pmatrix}$.</p>
              <p>&bull; <strong>Step 3 (Final Row Choice):</strong> Between Row 1 ($-3$) and Row 2 ($1$), maximizing Player 1 eliminates Row 1 ($-3 &lt; 1$).</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Optimal Pure-Strategy Solution: Player 1 chooses Row 2 ($\\mathbf{x}^*=(0,1,0)$), Player 2 chooses Column 1 ($\\mathbf{y}^*=(1,0,0)$), and Value of the Game $v = 1$. $\\blacksquare$</p>
            </div>`,
    },
    {
      label: 'MATH103 L14 v3 2x3 Graphical Minimax Full Script + SVG',
      find: /<div id="v3-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v3-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Saddle Check &amp; Player 1 Parametrization):</strong> Row minima are $\\{-2, -3\\}$ ($\\underline{v}=-2$) and column maxima are $\\{5, 4, 2\\}$ ($\\overline{v}=2 \\ne -2$, no saddle point). Let Player 1 play Row 1 with probability $x_1 \\in [0, 1]$ and Row 2 with probability $x_2 = 1 - x_1$.</p>
              <p><strong>Step 2 (Expected Payoff Lines against Player 2's Pure Columns):</strong>
              $$\\begin{aligned}
              E_1(x_1) &= 0(x_1) + 5(1 - x_1) = 5 - 5x_1 \\quad [\\text{joins }(0, 5)\\text{ to }(1, 0)], \\\\
              E_2(x_1) &= -2x_1 + 4(1 - x_1) = 4 - 6x_1 \\quad [\\text{joins }(0, 4)\\text{ to }(1, -2)], \\\\
              E_3(x_1) &= 2x_1 - 3(1 - x_1) = 5x_1 - 3 \\quad [\\text{joins }(0, -3)\\text{ to }(1, 2)].
              \\end{aligned}$$</p>
              <p><strong>Step 3 (Lower Envelope Graph &amp; Maximin Peak):</strong></p>
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 380 225" width="380" height="225" role="img" aria-label="2x3 Graphical Minimax Lower Envelope diagram peaking at (7/11, 2/11)">
                  <line x1="60" y1="123" x2="320" y2="123" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
                  <line x1="60" y1="190" x2="60" y2="22" stroke="currentColor" stroke-width="1.4"/>
                  <line x1="320" y1="190" x2="320" y2="22" stroke="currentColor" stroke-width="1.4"/>
                  <line x1="60" y1="45.5" x2="320" y2="123" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,3"/>
                  <line x1="60" y1="61" x2="320" y2="154" stroke="#1D4ED8" stroke-width="2"/>
                  <line x1="60" y1="169.5" x2="320" y2="92" stroke="#C27803" stroke-width="2"/>
                  <polyline points="60,169.5 225.45,120.18 320,154" fill="none" stroke="#15803D" stroke-width="3.6"/>
                  <line x1="225.45" y1="123" x2="225.45" y2="190" stroke="#BE123C" stroke-width="1.3" stroke-dasharray="3,3"/>
                  <circle cx="225.45" cy="120.18" r="5" fill="#BE123C"/>
                  <text x="235" y="49" font-size="10" fill="#64748B">E₁ = 5 − 5x₁ (dominated)</text>
                  <text x="72" y="78" font-size="10.5" font-weight="700" fill="#1D4ED8">E₂ = 4 − 6x₁</text>
                  <text x="266" y="88" font-size="10.5" font-weight="700" fill="#C27803">E₃ = 5x₁ − 3</text>
                  <text x="225" y="111" font-size="10.5" font-weight="700" text-anchor="middle" fill="#BE123C">Peak (7/11, 2/11)</text>
                  <text x="60" y="206" font-size="10" text-anchor="middle" fill="currentColor">x₁ = 0</text>
                  <text x="225.45" y="206" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">7/11</text>
                  <text x="320" y="206" font-size="10" text-anchor="middle" fill="currentColor">x₁ = 1</text>
                </svg>
              </figure>
              <p>Plot $x_1 \\in [0, 1]$ horizontally and $E$ vertically. Note $E_1(x_1) - E_2(x_1) = 1 + x_1 &gt; 0$ everywhere on $[0, 1]$ (Col 1 is strictly dominated by Col 2, so $y_1^* = 0$). Thus the lower envelope $L(x_1) = \\min(E_2, E_3)$ rises along $E_3$ from $(0, -3)$ and falls along $E_2$ to $(1, -2)$, attaining its maximum at $E_2(x_1) = E_3(x_1)$:
              $$4 - 6x_1 = 5x_1 - 3 \\implies 11x_1 = 7 \\implies x_1^* = \\frac{7}{11}, \\quad x_2^* = \\frac{4}{11}, \\quad v = 5\\!\\left(\\frac{7}{11}\\right) - 3 = \\frac{2}{11}.$$</p>
              <p><strong>Step 4 (Player 2's Optimal Mix on Active $2 \\times 2$ Subgame of Cols 2 &amp; 3):</strong> Set $y_1^* = 0$ and solve $-2y_2 + 2(1 - y_2) = \\frac{2}{11} \\implies 2 - 4y_2 = \\frac{2}{11} \\implies 4y_2 = \\frac{20}{11} \\implies y_2^* = \\frac{5}{11}$ and $y_3^* = \\frac{6}{11}$.</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $\\mathbf{x}^* = \\left(\\dfrac{7}{11}, \\dfrac{4}{11}\\right)$, $\\mathbf{y}^* = \\left(0, \\dfrac{5}{11}, \\dfrac{6}{11}\\right)$, and Game Value $v = \\dfrac{2}{11}$. $\\blacksquare$</p>
            </div>`,
    },
    {
      label: 'MATH103 L14 v4 3x2 Upper Envelope Full Script + SVG',
      find: /<div id="v4-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v4-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Player 2 Parametrization):</strong> Let Player 2 play Col 1 with probability $y_1 \\in [0, 1]$ and Col 2 with probability $y_2 = 1 - y_1$. Player 2's expected losses against Player 1's three pure rows are:
              $$E_1(y_1) = 4y_1 - (1 - y_1) = 5y_1 - 1, \\quad E_2(y_1) = y_1 + 3(1 - y_1) = 3 - 2y_1, \\quad E_3(y_1) = -2y_1 + 5(1 - y_1) = 5 - 7y_1.$$</p>
              <p><strong>Step 2 (Upper Envelope Graph &amp; Minimax Trough):</strong></p>
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 380 225" width="380" height="225" role="img" aria-label="3x2 Upper Envelope diagram showing minimax trough at (4/7, 13/7)">
                  <!-- y1 in [0,1] -> X = 60 + 260*y1; E in [-3, 6] -> Y = 185 - (E+3)*17.5 (E=0 is y=132.5) -->
                  <line x1="60" y1="132.5" x2="320" y2="132.5" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
                  <line x1="60" y1="190" x2="60" y2="22" stroke="currentColor" stroke-width="1.4"/>
                  <line x1="320" y1="190" x2="320" y2="22" stroke="currentColor" stroke-width="1.4"/>
                  <!-- E1: (0,-1)->(60, 150) to (1,4)->(320, 62.5) -->
                  <line x1="60" y1="150" x2="320" y2="62.5" stroke="#1D4ED8" stroke-width="2"/>
                  <!-- E2: (0,3)->(60, 80) to (1,1)->(320, 115) -->
                  <line x1="60" y1="80" x2="320" y2="115" stroke="#0F5E59" stroke-width="2"/>
                  <!-- E3: (0,5)->(60, 45) to (1,-2)->(320, 167.5) -->
                  <line x1="60" y1="45" x2="320" y2="167.5" stroke="#C27803" stroke-width="2"/>
                  <!-- Bold Upper Envelope: (0,5)->(60,45) to (2/5, 11/5)->(164, 94) to trough (4/7, 13/7)->(208.57, 100) to (1,4)->(320, 62.5) -->
                  <polyline points="60,45 164,94 208.57,100 320,62.5" fill="none" stroke="#15803D" stroke-width="3.6"/>
                  <line x1="208.57" y1="100" x2="208.57" y2="190" stroke="#BE123C" stroke-width="1.3" stroke-dasharray="3,3"/>
                  <circle cx="208.57" cy="100" r="5" fill="#BE123C"/>
                  <text x="68" y="42" font-size="10" font-weight="700" fill="#C27803">E₃ = 5 − 7y₁</text>
                  <text x="275" y="128" font-size="10" font-weight="700" fill="#0F5E59">E₂ = 3 − 2y₁</text>
                  <text x="278" y="57" font-size="10" font-weight="700" fill="#1D4ED8">E₁ = 5y₁ − 1</text>
                  <text x="208.5" y="88" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">Trough (4/7, 13/7)</text>
                  <text x="60" y="206" font-size="10" text-anchor="middle" fill="currentColor">y₁ = 0</text>
                  <text x="208.57" y="206" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">4/7</text>
                  <text x="320" y="206" font-size="10" text-anchor="middle" fill="currentColor">y₁ = 1</text>
                </svg>
              </figure>
              <p>On $y_1 \\in [0, 1]$, the upper envelope $U(y_1) = \\max(E_1, E_2, E_3)$ follows $E_3$ on $[0, \\frac{2}{5}]$, $E_2$ on $[\\frac{2}{5}, \\frac{4}{7}]$, and $E_1$ on $[\\frac{4}{7}, 1]$. Its lowest point occurs where downward-sloping $E_2$ meets upward-sloping $E_1$ ($x_3^* = 0$):
              $$5y_1 - 1 = 3 - 2y_1 \\implies 7y_1 = 4 \\implies y_1^* = \\frac{4}{7}, \\quad y_2^* = \\frac{3}{7}, \\quad v = 5\\!\\left(\\frac{4}{7}\\right) - 1 = \\frac{13}{7}.$$</p>
              <p><strong>Step 3 (Player 1's Optimal Mix from Active Rows 1 &amp; 2):</strong> Solve $4x_1 + 1(1 - x_1) = \\frac{13}{7} \\implies 3x_1 = \\frac{6}{7} \\implies x_1^* = \\frac{2}{7}$ and $x_2^* = \\frac{5}{7}$ (with $x_3^* = 0$).</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $\\mathbf{x}^* = \\left(\\dfrac{2}{7}, \\dfrac{5}{7}, 0\\right)$, $\\mathbf{y}^* = \\left(\\dfrac{4}{7}, \\dfrac{3}{7}\\right)$, and Game Value $v = \\dfrac{13}{7}$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math104-l02': [
    {
      label: 'MATH104 L2 Exm1 Cosine Sketch + Exm2 Graphs I-VI + Exm3 Waves',
      find: /<li><em>Quick Sketch Check:<\/em>[\s\S]*?<\/li>/,
      replace: `<li><strong>Exam Sketch:</strong> Peak at $(-\\frac{\\pi}{4}, 3)$, zeros at $(0, 0)$ and $(\\frac{\\pi}{2}, 0)$, trough at $(\\frac{\\pi}{4}, -3)$:
              <figure class="exam-svg-fig">
                <svg viewBox="0 0 380 185" width="380" height="185" role="img" aria-label="Graph comparing reference 3 cos(2x) and shifted y = 3 cos(2x + pi/2)">
                  <line x1="40" y1="95" x2="350" y2="95" stroke="currentColor" stroke-width="1.2"/>
                  <line x1="125" y1="168" x2="125" y2="18" stroke="currentColor" stroke-width="1.2"/>
                  <!-- Reference 3cos(2x) dashed: x = 125 + (t/(pi))*140, y = 95 - 56*cos(2t) -->
                  <path d="M 55 95 C 85 95, 95 39, 125 39 C 155 39, 165 95, 195 95 C 225 95, 235 151, 265 151 C 295 151, 305 95, 335 95" fill="none" stroke="#94A3B8" stroke-width="1.7" stroke-dasharray="4,3"/>
                  <!-- Shifted y = 3cos(2x + pi/2): shifted left by pi/4 = 35px -> peaks at 90(-pi/4) and 230(3pi/4), zero at 125(0) & 195(pi/2), trough at 160(pi/4) -->
                  <path d="M 55 67 C 68 46, 78 39, 90 39 C 107 39, 114 67, 125 95 C 136 123, 143 151, 160 151 C 177 151, 184 123, 195 95 C 206 67, 213 39, 230 39 C 247 39, 254 67, 265 95 C 276 123, 283 151, 300 151 C 314 151, 323 130, 335 95" fill="none" stroke="#0F5E59" stroke-width="2.6"/>
                  <circle cx="90" cy="39" r="4" fill="#BE123C"/><circle cx="125" cy="95" r="3.5" fill="#0F5E59"/><circle cx="160" cy="151" r="4" fill="#BE123C"/>
                  <text x="90" y="28" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">(-π/4, 3)</text>
                  <text x="160" y="168" font-size="10" font-weight="700" text-anchor="middle" fill="#BE123C">(π/4, -3)</text>
                  <text x="275" y="28" font-size="10" font-weight="700" fill="#0F5E59">y = 3 cos(2x + π/2)</text>
                  <text x="275" y="43" font-size="9.5" fill="#64748B">--- y = 3 cos(2x)</text>
                </svg>
              </figure>
            </li>`,
    },
    {
      label: 'MATH104 L2 Exm2 Lecture 2 Graphs I-VI SVG Grid',
      find: /\(a\) \$y = \\sqrt\[5\]\{x\}\$ &nbsp;&nbsp; \(b\) \$y = 2x\^5\$ &nbsp;&nbsp; \(c\) \$y = -1\/x\^8\$ &nbsp;&nbsp; \(d\) \$y = \\sqrt\{x\^2 - 1\}\$ &nbsp;&nbsp; \(e\) \$y = \\sqrt\[4\]\{x - 2\}\$ &nbsp;&nbsp; \(f\) \$y = -\\sqrt\[5\]\{x\^2\}\$/,
      replace: `(a) $y = \\sqrt[5]{x}$ &nbsp;&nbsp; (b) $y = 2x^5$ &nbsp;&nbsp; (c) $y = -1/x^8$ &nbsp;&nbsp; (d) $y = \\sqrt{x^2 - 1}$ &nbsp;&nbsp; (e) $y = \\sqrt[4]{x - 2}$ &nbsp;&nbsp; (f) $y = -\\sqrt[5]{x^2}$
          <div class="exam-svg-grid">
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph I starting at (2,0) rising in Q1"><line x1="15" y1="75" x2="138" y2="75" stroke="currentColor" stroke-width="1"/><line x1="50" y1="98" x2="50" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 76 75 Q 84 42, 132 30" fill="none" stroke="#0F5E59" stroke-width="2.4"/><circle cx="76" cy="75" r="3" fill="#0F5E59"/><text x="76" y="88" font-size="9" text-anchor="middle" fill="currentColor">2</text></svg><figcaption><strong>Graph I</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph II downward cusp at origin symmetric about y-axis"><line x1="15" y1="32" x2="138" y2="32" stroke="currentColor" stroke-width="1"/><line x1="75" y1="98" x2="75" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 22 72 Q 68 62, 75 32 Q 82 62, 128 72" fill="none" stroke="#0F5E59" stroke-width="2.4"/><circle cx="75" cy="32" r="2.8" fill="#0F5E59"/></svg><figcaption><strong>Graph II</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph III symmetric below x-axis with vertical asymptote at x=0"><line x1="15" y1="30" x2="138" y2="30" stroke="currentColor" stroke-width="1"/><line x1="75" y1="98" x2="75" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 20 34 Q 63 36, 68 94" fill="none" stroke="#0F5E59" stroke-width="2.3"/><path d="M 130 34 Q 87 36, 82 94" fill="none" stroke="#0F5E59" stroke-width="2.3"/></svg><figcaption><strong>Graph III</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph IV steep odd curve flat at origin"><line x1="15" y1="55" x2="138" y2="55" stroke="currentColor" stroke-width="1"/><line x1="75" y1="98" x2="75" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 48 96 C 56 62, 62 55, 75 55 C 88 55, 94 48, 102 14" fill="none" stroke="#0F5E59" stroke-width="2.4"/></svg><figcaption><strong>Graph IV</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph V two symmetric arms outside [-1,1]"><line x1="15" y1="82" x2="138" y2="82" stroke="currentColor" stroke-width="1"/><line x1="75" y1="98" x2="75" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 22 25 L 57 82" fill="none" stroke="#0F5E59" stroke-width="2.4"/><path d="M 93 82 L 128 25" fill="none" stroke="#0F5E59" stroke-width="2.4"/><circle cx="57" cy="82" r="2.8" fill="#0F5E59"/><circle cx="93" cy="82" r="2.8" fill="#0F5E59"/><text x="57" y="95" font-size="8.5" text-anchor="middle" fill="currentColor">-1</text><text x="93" y="95" font-size="8.5" text-anchor="middle" fill="currentColor">1</text></svg><figcaption><strong>Graph V</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 150 110" width="150" height="110" role="img" aria-label="Graph VI odd root vertical tangent at origin"><line x1="15" y1="55" x2="138" y2="55" stroke="currentColor" stroke-width="1"/><line x1="75" y1="98" x2="75" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 22 80 Q 68 74, 75 55 Q 82 36, 128 30" fill="none" stroke="#0F5E59" stroke-width="2.4"/></svg><figcaption><strong>Graph VI</strong></figcaption></figure>
          </div>`,
    },
    {
      label: 'MATH104 L2 Exm3 Reverse-Engineering Sinusoidal Waves SVG Grid',
      find: /\(c\) Starts at \$\(0,0\)\$, drops first to min \$-5\$, completes one full cycle at \$x = \\frac\{\\pi\}\{2\}\$\./,
      replace: `(c) Starts at $(0,0)$, drops first to min $-5$, completes one full cycle at $x = \\frac{\\pi}{2}$.
          <div class="exam-svg-grid">
            <figure class="exam-svg-fig"><svg viewBox="0 0 175 110" width="175" height="110" role="img" aria-label="Wave (a) sine period 4 pi amplitude 3"><line x1="15" y1="56" x2="162" y2="56" stroke="currentColor" stroke-width="1"/><line x1="25" y1="98" x2="25" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 25 56 C 45 14, 70 14, 88 56 C 106 98, 131 98, 150 56" fill="none" stroke="#0F5E59" stroke-width="2.3"/><text x="150" y="70" font-size="9" text-anchor="middle" fill="currentColor">4π</text><text x="20" y="24" font-size="9" text-anchor="end" fill="currentColor">3</text></svg><figcaption><strong>Wave (a)</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 175 110" width="175" height="110" role="img" aria-label="Wave (b) cosine period pi amplitude 4"><line x1="15" y1="56" x2="162" y2="56" stroke="currentColor" stroke-width="1"/><line x1="25" y1="98" x2="25" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 25 22 C 48 22, 65 90, 88 90 C 111 90, 127 22, 150 22" fill="none" stroke="#1D4ED8" stroke-width="2.3"/><text x="150" y="70" font-size="9" text-anchor="middle" fill="currentColor">π</text><text x="20" y="24" font-size="9" text-anchor="end" fill="currentColor">4</text></svg><figcaption><strong>Wave (b)</strong></figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 175 110" width="175" height="110" role="img" aria-label="Wave (c) inverted sine period pi/2 amplitude 5"><line x1="15" y1="56" x2="162" y2="56" stroke="currentColor" stroke-width="1"/><line x1="25" y1="98" x2="25" y2="12" stroke="currentColor" stroke-width="1"/><path d="M 25 56 C 45 98, 70 98, 88 56 C 106 14, 131 14, 150 56" fill="none" stroke="#C27803" stroke-width="2.3"/><text x="150" y="70" font-size="9" text-anchor="middle" fill="currentColor">π/2</text><text x="20" y="92" font-size="9" text-anchor="end" fill="currentColor">-5</text></svg><figcaption><strong>Wave (c)</strong></figcaption></figure>
          </div>`,
    },
  ],

  'math104-l03': [
    {
      label: 'MATH104 L3 Figure 17 SVG in Question',
      find: /Write a polynomial function whose graph is shown in Figure 17 \(use the smallest degree possible\):\s*The smooth curve opens upward at both ends, <strong>touches<\/strong> the \$x\$-axis at \$\(-2, 0\)\$, <strong>crosses<\/strong> the \$x\$-axis at \$\(0, 0\)\$ and \$\(2, 0\)\$, and passes through the point \$\(-1, 6\)\$\./,
      replace: `Write a polynomial function whose graph is shown in Figure 17 (use the smallest degree possible):
          <figure class="exam-svg-fig">
            <svg viewBox="0 0 360 215" width="360" height="215" role="img" aria-label="Figure 17 polynomial graph opening up at both ends, tangent at (-2, 0), passing through (-1, 6), crossing (0, 0) and (2, 0)">
              <line x1="35" y1="128" x2="335" y2="128" stroke="currentColor" stroke-width="1.3"/>
              <line x1="180" y1="200" x2="180" y2="16" stroke="currentColor" stroke-width="1.3"/>
              <!-- x scale: x0=180, 45px/unit -> -2 at 90, -1 at 135, 0 at 180, 1.3 at 238, 2 at 270; y scale: y0=128, 12px/unit -> (-1,6) at (135,56), local min around (1.28,-13.7)->clamp y=185 -->
              <path d="M 62 22 C 74 96, 81 128, 90 128 C 102 128, 118 56, 135 56 C 152 56, 168 104, 180 128 C 198 164, 214 185, 232 185 C 250 185, 260 152, 270 128 C 282 98, 294 54, 306 20" fill="none" stroke="#0F5E59" stroke-width="2.6"/>
              <circle cx="90" cy="128" r="4" fill="#0F5E59"/>
              <circle cx="135" cy="56" r="4.5" fill="#BE123C"/>
              <circle cx="180" cy="128" r="4" fill="#0F5E59"/>
              <circle cx="270" cy="128" r="4" fill="#0F5E59"/>
              <text x="90" y="144" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">(-2, 0)</text>
              <text x="122" y="45" font-size="10.5" font-weight="700" text-anchor="end" fill="#BE123C">(-1, 6)</text>
              <text x="192" y="121" font-size="10" font-weight="600" fill="#0F5E59">(0, 0)</text>
              <text x="278" y="144" font-size="10.5" font-weight="700" fill="#0F5E59">(2, 0)</text>
              <text x="330" y="143" font-size="10.5" fill="currentColor">x</text>
              <text x="188" y="24" font-size="10.5" fill="currentColor">y</text>
            </svg>
            <figcaption>Figure 17: Smooth quartic opening upward at both ends, tangent touch at $(-2,0)$, crossing $(0,0)$ &amp; $(2,0)$, passing through $(-1,6)$.</figcaption>
          </figure>`,
    },
    {
      label: 'MATH104 L3 Figure 16 Actual 4-Graph SVG Grid in Question',
      find: /<em>Graph descriptions:<\/em>[\s\S]*?negative\./,
      replace: `<div class="exam-svg-grid">
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 16 graph (a): both ends up, 3 turning points, positive y-intercept"><line x1="15" y1="68" x2="148" y2="68" stroke="currentColor" stroke-width="1.1"/><line x1="80" y1="104" x2="80" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 22 18 C 34 86, 46 86, 58 62 C 70 40, 88 40, 100 62 C 112 86, 124 86, 138 18" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="80" cy="45" r="3.2" fill="#BE123C"/></svg><figcaption><strong>(a)</strong> Positive $y$-int</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 16 graph (b): both ends up, 3 turning points, negative y-intercept"><line x1="15" y1="54" x2="148" y2="54" stroke="currentColor" stroke-width="1.1"/><line x1="80" y1="104" x2="80" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 22 16 C 34 94, 48 94, 62 72 C 74 58, 86 58, 98 72 C 112 94, 126 94, 138 16" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="80" cy="61" r="3.2" fill="#15803D"/></svg><figcaption><strong>(b)</strong> Negative $y$-int, 3 turns</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 16 graph (c): both ends up, 5 turning points, negative y-intercept"><line x1="15" y1="54" x2="148" y2="54" stroke="currentColor" stroke-width="1.1"/><line x1="80" y1="104" x2="80" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 18 16 C 24 88, 34 88, 42 54 C 50 32, 58 32, 66 64 C 74 88, 86 88, 94 58 C 102 32, 110 32, 118 64 C 126 88, 134 88, 142 16" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="80" cy="79" r="3.2" fill="#BE123C"/></svg><figcaption><strong>(c)</strong> 5 turning points</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 16 graph (d): both ends down, 3 turning points, negative y-intercept"><line x1="15" y1="45" x2="148" y2="45" stroke="currentColor" stroke-width="1.1"/><line x1="80" y1="104" x2="80" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 22 98 C 34 26, 48 26, 62 56 C 74 72, 86 72, 98 56 C 112 26, 126 26, 138 98" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="80" cy="68" r="3.2" fill="#BE123C"/></svg><figcaption><strong>(d)</strong> Both ends down</figcaption></figure>
          </div>`,
    },
    {
      label: 'MATH104 L3 Figure 13 Actual 4-Graph SVG Grid in Question',
      find: /\(a\) Has a jump\/gap at \$x = -1\$\.<br \/>\s*\(b\)[\s\S]*?\(both ends down\)\./,
      replace: `<div class="exam-svg-grid">
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 13 (a): piecewise curve with jump discontinuity at x = -1"><line x1="15" y1="62" x2="148" y2="62" stroke="currentColor" stroke-width="1.1"/><line x1="88" y1="104" x2="88" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 22 86 Q 45 78, 64 70" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="64" cy="70" r="3" fill="#FFFFFF" stroke="#0F5E59" stroke-width="2"/><path d="M 64 36 Q 100 32, 138 56" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="64" cy="36" r="3" fill="#0F5E59"/><text x="64" y="99" font-size="9" text-anchor="middle" fill="#BE123C">x=-1</text></svg><figcaption><strong>(a)</strong> Jump gap at $-1$</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 13 (b): smooth cubic crossing at -2, 1, 2"><line x1="15" y1="60" x2="148" y2="60" stroke="currentColor" stroke-width="1.1"/><line x1="78" y1="104" x2="78" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 24 16 C 34 45, 42 60, 48 60 C 60 60, 72 95, 84 82 C 92 72, 95 60, 100 60 C 106 60, 112 42, 116 42 C 122 42, 126 60, 130 60 C 134 60, 139 78, 144 98" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="48" cy="60" r="2.8" fill="#0F5E59"/><circle cx="100" cy="60" r="2.8" fill="#0F5E59"/><circle cx="130" cy="60" r="2.8" fill="#0F5E59"/><text x="46" y="72" font-size="8.5" text-anchor="middle" fill="currentColor">-2</text><text x="100" y="72" font-size="8.5" text-anchor="middle" fill="currentColor">1</text><text x="132" y="72" font-size="8.5" text-anchor="middle" fill="currentColor">2</text></svg><figcaption><strong>(b)</strong> Smooth cubic</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 13 (c): sharp corner at x = 1"><line x1="15" y1="78" x2="148" y2="78" stroke="currentColor" stroke-width="1.1"/><line x1="65" y1="104" x2="65" y2="12" stroke="currentColor" stroke-width="1.1"/><polyline points="22,25 92,78 142,20" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="92" cy="78" r="3" fill="#BE123C"/><text x="92" y="92" font-size="9" text-anchor="middle" fill="#BE123C">x=1 (corner)</text></svg><figcaption><strong>(c)</strong> Sharp corner</figcaption></figure>
            <figure class="exam-svg-fig"><svg viewBox="0 0 160 115" width="160" height="115" role="img" aria-label="Figure 13 (d): smooth quartic crossing -2 and 1 with 3 turns both ends down"><line x1="15" y1="62" x2="148" y2="62" stroke="currentColor" stroke-width="1.1"/><line x1="88" y1="104" x2="88" y2="12" stroke="currentColor" stroke-width="1.1"/><path d="M 28 98 C 36 52, 42 30, 56 30 C 68 30, 74 44, 82 44 C 90 44, 96 28, 108 28 C 118 28, 122 62, 126 62 L 136 98" fill="none" stroke="#0F5E59" stroke-width="2.3"/><circle cx="38" cy="62" r="2.8" fill="#0F5E59"/><circle cx="126" cy="62" r="2.8" fill="#0F5E59"/><text x="38" y="74" font-size="8.5" text-anchor="middle" fill="currentColor">-2</text><text x="128" y="54" font-size="8.5" text-anchor="middle" fill="currentColor">1</text></svg><figcaption><strong>(d)</strong> Smooth, 3 turns</figcaption></figure>
          </div>`,
    },
  ],

  'math104-l04': [
    {
      label: 'MATH104 L4 Exam Q1 Complete Sketch SVG of (x^3 - 1)/(x^2 - 9)',
      find: /<li><strong>6\. Sign Regions:<\/strong>[\s\S]*?<\/li>/,
      replace: `<li><strong>6. Sign Regions:</strong> $(-\\infty, -3)$: $(-)$ below; $(-3, 1)$: $(+)$ above; $(1, 3)$: $(-)$ below; $(3, \\infty)$: $(+)$ above.</li>
          <li><strong>7. Exam Sketch ($x = \\pm 3$ VAs, $y = x$ OA, crossing at $(\\frac{1}{9}, \\frac{1}{9})$, intercepts $(0, \\frac{1}{9})$ and $(1, 0)$):</strong>
            <figure class="exam-svg-fig">
              <svg viewBox="0 0 380 230" width="380" height="230" role="img" aria-label="Sketch of f(x) = (x^3-1)/(x^2-9) with vertical asymptotes x=-3 and x=3 and oblique asymptote y=x">
                <line x1="30" y1="115" x2="350" y2="115" stroke="currentColor" stroke-width="1.2"/>
                <line x1="190" y1="215" x2="190" y2="15" stroke="currentColor" stroke-width="1.2"/>
                <!-- Scale: 1 unit = 22px in x (center 190 -> -3 at 124, +3 at 256), 1 unit = 9px in y (center 115) -->
                <line x1="124" y1="15" x2="124" y2="215" stroke="#BE123C" stroke-width="1.5" stroke-dasharray="5,4"/>
                <line x1="256" y1="15" x2="256" y2="215" stroke="#BE123C" stroke-width="1.5" stroke-dasharray="5,4"/>
                <!-- OA y = x: (-8,-8)->(14,187)? Use x=-6(58,169) to x=+6(322,61) -->
                <line x1="58" y1="169" x2="322" y2="61" stroke="#C27803" stroke-width="1.6" stroke-dasharray="5,3"/>
                <!-- Left branch x < -3: approaches y=x from below on left, -inf at x=-3- -->
                <path d="M 48 182 Q 96 155, 117 212" fill="none" stroke="#0F5E59" stroke-width="2.4"/>
                <!-- Middle branch (-3, 3): +inf at -3+, passes (0,1/9), crosses OA at (1/9,1/9), crosses (1,0), -inf at 3- -->
                <path d="M 131 20 C 138 85, 165 112, 190 114 C 202 115, 207 115, 212 115 C 228 117, 242 142, 249 212" fill="none" stroke="#0F5E59" stroke-width="2.4"/>
                <!-- Right branch x > 3: +inf at 3+, approaches y=x from above -->
                <path d="M 263 20 Q 282 78, 336 46" fill="none" stroke="#0F5E59" stroke-width="2.4"/>
                <circle cx="212" cy="115" r="3.5" fill="#0F5E59"/>
                <text x="119" y="28" font-size="9.5" font-weight="700" text-anchor="end" fill="#BE123C">x=-3</text>
                <text x="261" y="28" font-size="9.5" font-weight="700" fill="#BE123C">x=3</text>
                <text x="322" y="75" font-size="10" font-weight="700" fill="#C27803">OA: y = x</text>
                <text x="215" y="106" font-size="9.5" fill="#0F5E59">(1, 0)</text>
              </svg>
            </figure>
          </li>`,
    },
  ],

  'math104-l05': [
    {
      label: 'MATH104 L5 Exam Q3 Skydiver Velocity Curve SVG & Strip Sandbox Chatter',
      find: /<strong>\(a\) Graph:<\/strong> Starts at \$\(0, 0\)\$ since \$v\(0\) = 190\(1 - 1\) = 0\$, rises rapidly at first \(concave down\), and levels off just below \$v = 190\$\. \*\(Interact with this exact curve in Tab 3 of the Sandbox!\)\*<br \/>/,
      replace: `<strong>(a) Graph of $v(t) = 190\\big(1 - e^{-0.168t}\\big)$:</strong> Starts at $(0, 0)$ since $v(0) = 0$, rises rapidly at first (concave down, $v''(t) &lt; 0$), and levels off asymptotically below the horizontal line $v = 190$:
          <figure class="exam-svg-fig">
            <svg viewBox="0 0 380 190" width="380" height="190" role="img" aria-label="Skydiver velocity v(t) starting at (0,0) rising concave down toward horizontal asymptote v = 190">
              <line x1="48" y1="158" x2="350" y2="158" stroke="currentColor" stroke-width="1.3"/>
              <line x1="48" y1="164" x2="48" y2="18" stroke="currentColor" stroke-width="1.3"/>
              <!-- Asymptote v = 190 at y = 40 (scale 118px = 190 ft/s) -->
              <line x1="48" y1="40" x2="345" y2="40" stroke="#BE123C" stroke-width="1.6" stroke-dasharray="5,4"/>
              <path d="M 48 158 C 72 95, 118 56, 185 45 C 240 41, 290 40.3, 342 40.1" fill="none" stroke="#0F5E59" stroke-width="2.6"/>
              <circle cx="48" cy="158" r="3.8" fill="#0F5E59"/>
              <text x="42" y="44" font-size="10" font-weight="700" text-anchor="end" fill="#BE123C">190</text>
              <text x="240" y="31" font-size="10" font-weight="700" fill="#BE123C">Horizontal Asymptote v = 190 ft/s</text>
              <text x="200" y="177" font-size="10.5" font-weight="600" text-anchor="middle" fill="currentColor">Time t (seconds)</text>
              <text x="16" y="95" font-size="10.5" font-weight="600" text-anchor="middle" transform="rotate(-90 16 95)" fill="currentColor">Speed v(t) ft/s</text>
            </svg>
          </figure>`,
    },
  ],

  'math104-l09': [
    {
      label: 'MATH104 L9 Exam Q3(b) Inline Exam Sketch of dy vs Delta y',
      find: /\*\(See Tab 1 for the exact sketch!\)\*/,
      replace: `<figure class="exam-svg-fig">
            <svg viewBox="0 0 380 205" width="380" height="205" role="img" aria-label="Geometric comparison of exact change Delta y and differential dy for y = sqrt(x) from x = 4 to x = 7">
              <line x1="36" y1="175" x2="355" y2="175" stroke="currentColor" stroke-width="1.3"/>
              <line x1="45" y1="182" x2="45" y2="18" stroke="currentColor" stroke-width="1.3"/>
              <path d="M 45 175 Q 95 110, 155 95 T 330 62" fill="none" stroke="#1E5B5A" stroke-width="2.3"/>
              <line x1="120" y1="112" x2="320" y2="38" stroke="#A66A17" stroke-width="1.8" stroke-dasharray="5,4"/>
              <line x1="155" y1="95" x2="295" y2="95" stroke="currentColor" stroke-opacity="0.55" stroke-dasharray="3,3"/>
              <line x1="295" y1="175" x2="295" y2="47" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3,3"/>
              <line x1="155" y1="175" x2="155" y2="95" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3,3"/>
              <line x1="305" y1="95" x2="305" y2="66" stroke="#1E5B5A" stroke-width="2.2"/>
              <line x1="322" y1="95" x2="322" y2="47" stroke="#A66A17" stroke-width="2.2"/>
              <circle cx="155" cy="95" r="4" fill="#1E5B5A"/>
              <circle cx="295" cy="66" r="4" fill="#1E5B5A"/>
              <circle cx="295" cy="47" r="4" fill="#A66A17"/>
              <text x="155" y="191" font-size="11" text-anchor="middle" fill="currentColor">x = 4</text>
              <text x="295" y="191" font-size="11" text-anchor="middle" fill="currentColor">x + Δx = 7</text>
              <text x="225" y="110" font-size="11" text-anchor="middle" fill="currentColor">dx = Δx = 3</text>
              <text x="115" y="90" font-size="11" fill="currentColor">P(4, 2)</text>
              <text x="218" y="62" font-size="11" fill="#1E5B5A">y = √x</text>
              <text x="208" y="34" font-size="11" fill="#A66A17">Tangent line</text>
              <text x="310" y="83" font-size="10.5" fill="#1E5B5A">Δy ≈ 0.646</text>
              <text x="327" y="73" font-size="10.5" fill="#A66A17">dy = 0.75</text>
            </svg>
            <figcaption>Exam Sketch: From $P(4, 2)$ to $x = 7$, the curve rises by $\\Delta y = \\sqrt{7} - 2 \\approx 0.646$, while the tangent line rises slightly higher by $dy = 0.75$ because $y = \\sqrt{x}$ is concave down.</figcaption>
          </figure>`,
    },
  ],

  'math106-l05': [
    {
      label: 'MATH106 L5 sol2 Explicit Gaussian Elimination Steps',
      find: /Solving by Gaussian elimination gives \$c_1 = 4,\\; c_2 = -5,\\; c_3 = 1\$\.<br>/,
      replace: `Row-reducing the augmented matrix $[A \\mid \\mathbf{b}]$ (swap $R_1 \\leftrightarrow R_2$ first for unit pivot):
          $$\\left[\\begin{array}{ccc|c} 1 & -1 & 2 & 11 \\\\ 2 & 1 & 3 & 6 \\\\ 4 & 3 & 5 & 6 \\end{array}\\right] \\xrightarrow[R_3 \\leftarrow R_3 - 4R_1]{R_2 \\leftarrow R_2 - 2R_1} \\left[\\begin{array}{ccc|c} 1 & -1 & 2 & 11 \\\\ 0 & 3 & -1 & -16 \\\\ 0 & 7 & -3 & -38 \\end{array}\\right] \\xrightarrow{R_3 \\leftarrow 3R_3 - 7R_2} \\left[\\begin{array}{ccc|c} 1 & -1 & 2 & 11 \\\\ 0 & 3 & -1 & -16 \\\\ 0 & 0 & -2 & -2 \\end{array}\\right].$$
          Back-substituting: $-2c_3 = -2 \\implies c_3 = 1$; $3c_2 - 1 = -16 \\implies c_2 = -5$; $c_1 - (-5) + 2(1) = 11 \\implies c_1 = 4$.<br>`,
    },
  ],

  'math106-l07': [
    {
      label: 'MATH106 L7 sol2 Explicit Row-Reduction Steps to RREF',
      find: /Row-reducing \$A\$ to RREF yields:\s*\$\$\\text\{RREF\}\(A\) = \\begin\{bmatrix\} 1 & 0 & 3 & 6 \\\\ 0 & 1 & -9 & -16 \\\\ 0 & 0 & 0 & 0 \\end\{bmatrix\}\.\$\$/,
      replace: `Apply elementary row operations (start with $R_1 \\leftrightarrow -R_3$ to get a clean leading $1$):
          $$\\begin{bmatrix} 6 & 2 & 0 & 4 \\\\ -2 & -1 & 3 & 4 \\\\ -1 & -1 & 6 & 10 \\end{bmatrix} \\xrightarrow{R_1 \\leftrightarrow -R_3} \\begin{bmatrix} 1 & 1 & -6 & -10 \\\\ -2 & -1 & 3 & 4 \\\\ 6 & 2 & 0 & 4 \\end{bmatrix} \\xrightarrow[R_3 \\leftarrow R_3 - 6R_1]{R_2 \\leftarrow R_2 + 2R_1} \\begin{bmatrix} 1 & 1 & -6 & -10 \\\\ 0 & 1 & -9 & -16 \\\\ 0 & -4 & 36 & 64 \\end{bmatrix} \\xrightarrow[R_1 \\leftarrow R_1 - R_2]{R_3 \\leftarrow R_3 + 4R_2} \\begin{bmatrix} 1 & 0 & 3 & 6 \\\\ 0 & 1 & -9 & -16 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix} = \\text{RREF}(A).$$`,
    },
  ],

  'math106-l10': [
    {
      label: 'MATH106 L10 sol2 Explicit 3x3 Characteristic Determinant Expansion',
      find: /1\. <strong>Characteristic polynomial:<\/strong> \$\\det\(\\lambda I - A\) = \\lambda\^3 - 6\\lambda\^2 \+ 11\\lambda - 6 = \(\\lambda - 1\)\(\\lambda - 2\)\(\\lambda - 3\) = 0\$\./,
      replace: `1. <strong>Characteristic polynomial (cofactor expansion along Column 3):</strong>
          $$\\begin{aligned} \\det(\\lambda I - A) &= \\begin{vmatrix} \\lambda + 1 & -4 & 2 \\\\ 3 & \\lambda - 4 & 0 \\\\ 3 & -1 & \\lambda - 3 \\end{vmatrix} = 2\\big[-3 - 3(\\lambda - 4)\\big] + (\\lambda - 3)\\big[(\\lambda + 1)(\\lambda - 4) + 12\\big] \\\\ &= 2(9 - 3\\lambda) + (\\lambda - 3)(\\lambda^2 - 3\\lambda + 8) = (\\lambda - 3)\\big[(\\lambda^2 - 3\\lambda + 8) - 6\\big] = (\\lambda - 3)(\\lambda^2 - 3\\lambda + 2) = (\\lambda - 1)(\\lambda - 2)(\\lambda - 3) = 0. \\end{aligned}$$`,
    },
    {
      label: 'MATH106 L10 sol4 Explicit Cayley-Hamilton Determinant & Matrix Verification',
      find: /1\. <strong>Characteristic equation:<\/strong> \$\\det\(\\lambda I - A\) = \\lambda\^3 - 3\\lambda\^2 - 5\\lambda \+ 1 = 0\$\.<br>\s*2\. <strong>Cayley-Hamilton:<\/strong> \$A\^3 - 3A\^2 - 5A \+ I = 0\$\.<br>/,
      replace: `1. <strong>Characteristic equation (expanding along Row 2):</strong>
          $$\\det(\\lambda I - A) = \\begin{vmatrix} \\lambda - 1 & -2 & -2 \\\\ -3 & \\lambda - 1 & 0 \\\\ -1 & -1 & \\lambda - 1 \\end{vmatrix} = 3\\big[-2(\\lambda - 1) - 2\\big] + (\\lambda - 1)\\big[(\\lambda - 1)^2 - 2\\big] = -6\\lambda + (\\lambda - 1)(\\lambda^2 - 2\\lambda - 1) = \\lambda^3 - 3\\lambda^2 - 5\\lambda + 1 = 0.$$
          2. <strong>Verify Cayley-Hamilton ($A^3 - 3A^2 - 5A + I = 0$):</strong> Compute $A^2 = \\begin{bmatrix} 9 & 6 & 4 \\\\ 6 & 7 & 6 \\\\ 5 & 4 & 3 \\end{bmatrix}$ and $A^3 = A^2 A = \\begin{bmatrix} 31 & 28 & 22 \\\\ 33 & 25 & 18 \\\\ 20 & 17 & 13 \\end{bmatrix}$. Then:
          $$A^3 - 3A^2 - 5A + I = \\begin{bmatrix} 31-27-5+1 & 28-18-10+0 & 22-12-10+0 \\\\ 33-18-15+0 & 25-21-5+1 & 18-18-0+0 \\\\ 20-15-5+0 & 17-12-5+0 & 13-9-5+1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}. \\;\\checkmark$$`,
    },
  ],

  'math106-l11': [
    {
      label: 'MATH106 L11 sol1 Explicit Eigenspace Systems Before Normalization',
      find: /2\. Eigenvalues: \$\\det\(\\lambda I - A\) = \\lambda\^3 - 9\\lambda = \\lambda\(\\lambda \+ 3\)\(\\lambda - 3\) = 0 \\implies \\lambda_1 = 0,\\; \\lambda_2 = -3,\\; \\lambda_3 = 3\$\.<br>\s*3\. Unit eigenvectors \(automatically orthogonal because eigenvalues are distinct!\):/,
      replace: `2. <strong>Characteristic equation:</strong> Expanding along Row 1:
          $$\\det(\\lambda I - A) = \\begin{vmatrix} \\lambda - 1 & 2 & 0 \\\\ 2 & \\lambda & -2 \\\\ 0 & -2 & \\lambda + 1 \\end{vmatrix} = (\\lambda - 1)(\\lambda^2 + \\lambda - 4) - 2(2\\lambda + 2) = \\lambda^3 - 9\\lambda = \\lambda(\\lambda + 3)(\\lambda - 3) = 0 \\implies \\lambda_1 = 0,\\; \\lambda_2 = -3,\\; \\lambda_3 = 3.$$
          3. <strong>Eigenspaces $(\\lambda_i I - A)\\mathbf{x} = \\mathbf{0}$ &amp; Orthonormalization:</strong><br>
          &bull; $\\lambda_1 = 0$: $-x_1 + 2x_2 = 0,\\; 2x_2 - x_3 = 0 \\implies \\mathbf{v}_1 = (2, 1, 2)^T$ ($\\|\\mathbf{v}_1\\| = 3$).<br>
          &bull; $\\lambda_2 = -3$: $-4x_1 + 2x_2 = 0,\\; -2x_2 - 2x_3 = 0 \\implies \\mathbf{v}_2 = (-1, -2, 2)^T$ ($\\|\\mathbf{v}_2\\| = 3$).<br>
          &bull; $\\lambda_3 = 3$: $2x_1 + 2x_2 = 0,\\; -2x_2 + 4x_3 = 0 \\implies \\mathbf{v}_3 = (-2, 2, 1)^T$ ($\\|\\mathbf{v}_3\\| = 3$).<br>
          Dividing each orthogonal eigenvector by its norm $3$:`,
    },
  ],
};
