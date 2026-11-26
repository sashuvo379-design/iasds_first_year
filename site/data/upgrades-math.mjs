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
      label: 'MATH103 L13 v5 Clean Dijkstra Step-by-Step Relaxation Explanation + Table',
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
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Backtracking Predecessors ($D \\leftarrow E \\leftarrow B \\leftarrow C \\leftarrow A$): Shortest Path is $A \\to C \\to B \\to E \\to D$ with minimum weight $2 + 1 + 2 + 1 = \\mathbf{6}$. $\\blacksquare$</p>
            </div>`,
    },
  ],

  'math103-l14': [
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
      label: 'MATH103 L14 v3 2x3 Graphical Minimax Full Script',
      find: /<div id="v3-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v3-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Saddle Check &amp; Player 1 Parametrization):</strong> Row minima are $\\{-2, -3\\}$ ($\\underline{v}=-2$) and column maxima are $\\{5, 4, 2\\}$ ($\\overline{v}=2 \\ne -2$, no saddle point). Let Player 1 play Row 1 with probability $x_1 \\in [0, 1]$ and Row 2 with probability $x_2 = 1 - x_1$.</p>
              <p><strong>Step 2 (Expected Payoff Lines against Player 2's Pure Columns):</strong>
              $$\\begin{aligned}
              E_1(x_1) &= 0(x_1) + 5(1 - x_1) = 5 - 5x_1 \\quad [\\text{joins }(0, 5)\\text{ to }(1, 0)], \\\\
              E_2(x_1) &= -2x_1 + 4(1 - x_1) = 4 - 6x_1 \\quad [\\text{joins }(0, 4)\\text{ to }(1, -2)], \\\\
              E_3(x_1) &= 2x_1 - 3(1 - x_1) = 5x_1 - 3 \\quad [\\text{joins }(0, -3)\\text{ to }(1, 2)].
              \\end{aligned}$$</p>
              <p><strong>Step 3 (Lower Envelope &amp; Maximin Peak):</strong> Plot $x_1 \\in [0, 1]$ horizontally and $E$ vertically. Note $E_1(x_1) - E_2(x_1) = 1 + x_1 &gt; 0$ everywhere on $[0, 1]$ (Col 1 is strictly dominated by Col 2, so $y_1^* = 0$). Thus the lower envelope $L(x_1) = \\min(E_2, E_3)$ rises along $E_3$ from $(0, -3)$ and falls along $E_2$ to $(1, -2)$, attaining its maximum at the intersection $E_2(x_1) = E_3(x_1)$:
              $$4 - 6x_1 = 5x_1 - 3 \\implies 11x_1 = 7 \\implies x_1^* = \\frac{7}{11}, \\quad x_2^* = \\frac{4}{11}, \\quad v = 5\\!\\left(\\frac{7}{11}\\right) - 3 = \\frac{2}{11}.$$</p>
              <p><strong>Step 4 (Player 2's Optimal Mix on Active $2 \\times 2$ Subgame of Cols 2 &amp; 3):</strong> Set $y_1^* = 0$ and solve $-2y_2 + 2(1 - y_2) = \\frac{2}{11} \\implies 2 - 4y_2 = \\frac{2}{11} \\implies 4y_2 = \\frac{20}{11} \\implies y_2^* = \\frac{5}{11}$ and $y_3^* = \\frac{6}{11}$.</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $\\mathbf{x}^* = \\left(\\dfrac{7}{11}, \\dfrac{4}{11}\\right)$, $\\mathbf{y}^* = \\left(0, \\dfrac{5}{11}, \\dfrac{6}{11}\\right)$, and Game Value $v = \\dfrac{2}{11}$. $\\blacksquare$</p>
            </div>`,
    },
    {
      label: 'MATH103 L14 v4 3x2 Upper Envelope Full Script',
      find: /<div id="v4-sol"[\s\S]*?<\/div>/,
      replace: `<div id="v4-sol" class="hidden p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2">
              <p><strong>Step 1 (Player 2 Parametrization):</strong> Let Player 2 play Col 1 with probability $y_1 \\in [0, 1]$ and Col 2 with probability $y_2 = 1 - y_1$. Player 2's expected losses against Player 1's three pure rows are:
              $$E_1(y_1) = 4y_1 - (1 - y_1) = 5y_1 - 1, \\quad E_2(y_1) = y_1 + 3(1 - y_1) = 3 - 2y_1, \\quad E_3(y_1) = -2y_1 + 5(1 - y_1) = 5 - 7y_1.$$</p>
              <p><strong>Step 2 (Upper Envelope &amp; Minimax Trough):</strong> On $y_1 \\in [0, 1]$, the upper envelope $U(y_1) = \\max(E_1, E_2, E_3)$ follows $E_3$ on $[0, \\frac{2}{5}]$, $E_2$ on $[\\frac{2}{5}, \\frac{4}{7}]$, and $E_1$ on $[\\frac{4}{7}, 1]$. Its lowest point occurs where downward-sloping $E_2$ meets upward-sloping $E_1$ ($x_3^* = 0$):
              $$5y_1 - 1 = 3 - 2y_1 \\implies 7y_1 = 4 \\implies y_1^* = \\frac{4}{7}, \\quad y_2^* = \\frac{3}{7}, \\quad v = 5\\!\\left(\\frac{4}{7}\\right) - 1 = \\frac{13}{7}.$$</p>
              <p><strong>Step 3 (Player 1's Optimal Mix from Active Rows 1 &amp; 2):</strong> Solve $4x_1 + 1(1 - x_1) = \\frac{13}{7} \\implies 3x_1 = \\frac{6}{7} \\implies x_1^* = \\frac{2}{7}$ and $x_2^* = \\frac{5}{7}$ (with $x_3^* = 0$).</p>
              <p class="font-bold text-emerald-700 dark:text-emerald-400">Final Answer: $\\mathbf{x}^* = \\left(\\dfrac{2}{7}, \\dfrac{5}{7}, 0\\right)$, $\\mathbf{y}^* = \\left(\\dfrac{4}{7}, \\dfrac{3}{7}\\right)$, and Game Value $v = \\dfrac{13}{7}$. $\\blacksquare$</p>
            </div>`,
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
