/* ==========================================================================
   IASDS Empirical Exam Intelligence & Unit Importance Engine (2017–2025)
   Derived from ISRT 1st Incourse, 2nd Incourse, and Year Final question papers
   alongside Batch-32 official course outlines and lecture materials.
   ========================================================================== */

export const STAR_META = {
  3: {
    stars: 3,
    glyph: '★★★',
    shortLabel: 'High-yield',
    label: '★★★ High-Yield Exam Staple',
    description: 'Appears in ≥75% of ISRT papers (often Compulsory Q1 or a dedicated 12-mark Final question). Master all proofs and numerical variations.',
  },
  2: {
    stars: 2,
    glyph: '★★',
    shortLabel: 'Regular',
    label: '★★ Core / Regular Topic',
    description: 'Tested regularly (35%–70% of papers) or rotated across Incourse and Year Final sub-questions.',
  },
  1: {
    stars: 1,
    glyph: '★',
    shortLabel: 'Low-yield',
    label: '★ Supplementary / Low Exam Priority',
    description: 'Rarely or never examined as a standalone written problem in 2020–2025 ISRT papers. Revise after securing ★★★ and ★★ units.',
  },
};

export const SCOPE_LABELS = {
  inc1: '1st Incourse',
  inc2: '2nd Incourse',
  final: 'Year Final',
};

export const EXAM_ARCHITECTURE = {
  incourse: {
    marks: 25,
    duration: '1 Hour each (1st Incourse & 2nd Incourse)',
    summary:
      'Each course holds two 25-mark incourse exams. AST101 splits into Part 1 (5 marks MCQ, 10 min) + Part 2 (20 marks written, 50 min). AST102 and MATH103 frequently include 5 marks of MCQ/short items + 20 marks of derivations/problems. MATH106 opens with a signature 6-item True/False with justification block.',
  },
  yearFinal: {
    marks: 70,
    duration: '4 Hours (4-credit: AST101, AST102, ECON107) · 3 Hours (3-credit: MATH103, MATH104, MATH105, MATH106)',
    summary:
      'Every theory Year Final carries 70 marks across 8 questions: Question 1 (10 marks) is COMPULSORY (concise definitions, True/False justifications, counterexamples, graph/chart reading), plus ANY FIVE of Questions 2–8 (5 × 12 = 60 marks). Exception: MATH103 enforces mandatory selection across Groups A, B, and C.',
  },
  ancillaryNote:
    'Lab & non-theory courses in the 1st-year curriculum: CSE130 (C/C++, 60 marks, 4 hrs: Q1 trace/output on script + Q2–Q4 live gcc code & CSV file processing on server) and CSE131 (SQL for Data Science, 60 marks, 4 hrs: DBMS/View/Transaction theory + DDL schema + 25–30 sakila/meditrack queries).',
};

/* ---------- Course-Level Exam Blueprints (7 Core Courses) ---------- */
export const COURSE_BLUEPRINTS = {
  AST101: {
    code: 'AST101',
    credits: 4,
    finalDuration: '4 Hours',
    finalMarks: 70,
    incourseFormat: 'Part 1: 5 Marks MCQ (10 min) + Part 2: 20 Marks Written (50 min)',
    finalFormat: 'Compulsory Q1 (10m: 8 short conceptual/plot items) + Any 5 of Q2–Q8 (5 × 12m = 60m)',
    incourse1Scope: 'Lessons 1–4 (NOIR Scales, Density Histograms, Central Tendency, Box-Plots, Moments)',
    incourse2Scope: 'Lessons 4–9 (Skewness/Kurtosis, Pearson r, Spearman rs, Correlation Ratio η, OLS Regression)',
    finalScope: 'All 12 Lessons (Q2: Graphs/Mode; Q3–Q5: GM/CV/Box-Plot; Q6: Moments; Q7: Correlation/OLS; Q8: 2×2 Association & χ²)',
    signaturePatterns: [
      'Unequal-width histogram via Frequency Density + geometric derivation of Mode = L + [Δ₁/(Δ₁+Δ₂)]c (Final 2022, 2023, 2024, 2025 Q2).',
      'GM of percentage growth rates using (1 + r/100), origin/scale effect on Mean, SD, CV & Quantiles, and Modified Box-Plot with inner/outer fences (Final 2021–2025 Q3–Q5).',
      'Raw-to-central moment derivations μ₂ = μ′₂ − (μ′₁)² and μ₃ = μ′₃ − 3μ′₂μ′₁ + 2(μ′₁)³ + mesokurtic condition μ₄ = 3σ⁴ (Final 2020–2025 Q6).',
      '2×2 Contingency Table: proving Yule’s Q = (OR − 1)/(OR + 1), computing OR, Q, χ², and explaining why association ≠ causation (Final 2019–2025 Q8 every single year).',
    ],
    classicTraps: [
      'Using raw frequency instead of Frequency Density (fᵢ / cᵢ) to pick the modal class when class widths are unequal (explicitly tested in Final 2025 Q2c-ii).',
      'Taking the geometric mean of raw percentage changes (−5, 4, 8…) directly instead of multiplicative factors (0.95, 1.04, 1.08…).',
      'Claiming Pearson r ≈ 0 implies “no relationship” when Correlation Ratio η is high (nonlinear U-shaped or curved trend — Final 2025 Q1e-iii).',
    ],
    timeSavers:
      'Sheppard’s grouping correction (L4) and Data Governance role taxonomies (L12) rarely carry standalone Final marks; secure all ★★★ derivations in L2–L11 first.',
  },

  AST102: {
    code: 'AST102',
    credits: 4,
    finalDuration: '4 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — Short conceptual proofs + multi-part probability problems',
    finalFormat: 'Compulsory Q1 (10m: 4 conceptual/proof items) + Any 5 of Q2–Q8 (5 × 12m = 60m)',
    incourse1Scope: 'Lessons 1–6 (Sample Spaces, 3-Event Venn/Set Laws, Counting, Axioms/Boole, Bayes, Piecewise CDF)',
    incourse2Scope: 'Lessons 6–11 (Random Variables, Expectation/LOTUS, Joint/Conditional PDFs, Tower Laws, PGF/MGF, Binomial)',
    finalScope: 'All 14 Lessons (Set/Bayes Q2–Q3, Piecewise CDF & Transformations Q4, Joint Triangle PDF Q5, PGF/MGF Q6, Binomial/Poisson Q7, Exponential/Normal Q8)',
    signaturePatterns: [
      '3-Event verbal-to-set notation + 3-set Venn counting (“Whales / Survey”) + pairwise independence A, B′ verification + 3-Urn Bayes’ Theorem (Final 2021–2025 Q2–Q3).',
      'Piecewise CDF F(x): checking continuity, differentiating for f(x), conditional P(X > 3 | X > 1), and CDF transformation Y = aX + b (Final 2022–2025 Q4).',
      'Joint PDF on non-rectangular triangle 0 ≤ y ≤ x ≤ 1: proving dependence immediately from non-product support + finding f(x|y) and E[E(Y|X)] / Law of Total Variance (Final 2021–2025 Q5).',
      'Polynomial PGF of biased + unbiased coin sums P_Z(t) = P_X(t)P_Y(t), Binomial mean = variance contradiction proof, Exponential memoryless proof, and Normal quantile pair solving μ, σ (Final 2023–2025 Q1, Q6–Q8).',
    ],
    classicTraps: [
      'Confusing Mutually Exclusive (P(A∩B) = 0) with Independent (P(A∩B) = P(A)P(B)) — for P(A), P(B) > 0 they can NEVER both hold.',
      'Integrating a joint PDF over [0, 1] × [0, 1] when support is 0 ≤ y ≤ x ≤ 1: when integrating out x to get f_Y(y), the lower limit of x is y, NOT 0!',
      'Evaluating PGF derivatives at t = 0 instead of t = 1 (PGF moments require P′_X(1); MGF moments require M′_X(0)).',
    ],
    timeSavers:
      'Skip abstract measure-theoretic σ-field subtleties; ISRT exams reward clean piecewise limits, tree diagrams, and exact algebraic proofs.',
  },

  MATH103: {
    code: 'MATH103',
    credits: 3,
    finalDuration: '3 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — 1st Incourse covers Group A + early Group B; 2nd Incourse covers Group B + early Group C',
    finalFormat: 'Compulsory Q1 (10m) + Any 5 from Q2–Q8 taking AT LEAST ONE question from Group A, Group B, and Group C',
    incourse1Scope: 'Lessons 1–7 (Number Theory, Congruences, Inequalities/Series, Complex Roots, Theory of Equations, DE Order/Formation)',
    incourse2Scope: 'Lessons 8–12 (First & Higher-Order ODEs, Exact/IF/Bernoulli, Counting & Recurrence Generating Functions)',
    finalScope: 'Group A: L1–L6 (Q2–Q4) · Group B: L7–L10 (Q5–Q6) · Group C: L11–L14 (Q7–Q8)',
    signaturePatterns: [
      'Group A: Wilson’s Theorem (18! + 1 ≡ 0 mod 437), Linear Diophantine 62x + 11y = 788, Cube Roots of Unity (a+bω+cω²)³ + (a+bω²+cω)³ = 27abc, and Cubic Vieta root transformations (Final 2019–2025 Q2–Q4).',
      'Group B: Exact DE unknown N(x,y) + Integrating Factor xⁿ on (4x + 3y²)dx + 2xy dy = 0 + Constant-coefficient & Cauchy–Euler x²y″ − xy′ + y = ln(x²) (Final 2022–2025 Q5–Q6).',
      'Group C: Population Recurrence via Ordinary Generating Function (“500 squirrels doubling minus 150” / “50 frogs quadrupling minus 100” — tested EVERY year 2023, 2024, 2025 Q7a!).',
      'Group C: 2-Person Zero-Sum Game Theory — Dominated Strategy 3×3 reduction + 2×3 Graphical Minimax Mixed Strategy (full 12-mark Q8 in Final 2025) + Euler vs Hamilton & Shortest-Path/MST.',
    ],
    classicTraps: [
      'Violating the Group Rule: answering 3 questions from Group A and 2 from Group B while skipping Group C forfeits an entire 12-mark question!',
      'Using characteristic roots instead of the Generating Function method when Q7(a) explicitly instructs “solve through generating function”.',
      'Forgetting the resonance multiplier x (or x²) when the RHS trial function e^(−3x) or e^x matches an auxiliary root (Final 2025 Q5b, Q5c).',
    ],
    timeSavers:
      'CRITICAL TIME-SAVER: Propositional Logic & Truth Tables (first half of Lesson 11) had ZERO marks across 2023, 2024, and 2025 Incourses and Finals. Focus Lesson 11 time on Counting with Restrictions & Inclusion–Exclusion (★★★).',
  },

  MATH104: {
    code: 'MATH104',
    credits: 3,
    finalDuration: '3 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — Domain/Asymptotes, ε-δ proofs, Differentiation & Related Rates',
    finalFormat: 'Compulsory Q1 (10m: Rational asymptotes/graph + Sinusoidal sketch) + Any 5 of Q2–Q8 (5 × 12m = 60m)',
    incourse1Scope: 'Lessons 1–7 (Domain/Range, Transformations, Rational Asymptotes, Inverse/Log, ε-δ Limits & Continuity)',
    incourse2Scope: 'Lessons 8–12 (Differentiability, Implicit/Log Diff, Related Rates, MVT/Concavity, Leibnitz & Taylor/Maclaurin, Curvature)',
    finalScope: 'All 15 Lessons (Q1: Rational/Sinusoid; Q2: Limits/ε-δ/Continuity; Q3–Q5: Diff, Related Rates, Concavity, MVT, L’Hôpital; Q6: 2D Limits, Euler Homogeneous, dz; Q7: T-N-B & Polar Curvature; Q8: Taylor/Maclaurin)',
    signaturePatterns: [
      'Compulsory Q1 Staple: Rational function domain, holes vs vertical asymptotes, oblique asymptote via long division, and constructing a rational function from its asymptote graph (Final 2021–2025 Q1).',
      'Formal ε-δ proof for quadratic/linear limit + piecewise/oscillating sin(1/x) continuity + frustrated-cone/sliding-ladder related rates + Δy vs dy comparison (Final 2022–2025 Q2–Q4).',
      'Leibnitz’s n-th derivative recurrence + Taylor’s Theorem (Lagrange vs Cauchy remainder comparison) + Maclaurin approximations of sin 3°, ln(1.1), and logistic P(1) (Final 2020–2025 Q4c, Q5a, Q8).',
      'Vector Frenet frame T(t), N(t), Cartesian & Polar radius/center of curvature (r = 1 + cos θ) + 2D two-path non-existence, Euler’s Homogeneous Theorem xf_x + yf_y = nf, and total differential dz (Final 2021–2025 Q6–Q7).',
    ],
    classicTraps: [
      'Reporting a cancelled root factor (x − a)/(x − a) as a Vertical Asymptote instead of a removable Hole.',
      'Forgetting to convert 3° to radians (π/60 rad) before substituting into the Maclaurin series for sin x (Final 2025 Q5a)!',
      'Checking y = mx paths at (0,0) and claiming the 2D limit exists — two-path agreement NEVER proves existence; use polar r → 0 squeeze to prove existence.',
    ],
    timeSavers:
      'Lessons 3 (Polynomials) and 6 (Hyperbolic/Inverse Hyperbolic identities) have minimal standalone Final weight compared to Lessons 4, 7, 9, 10, 11, 12, 13, and 14.',
  },

  MATH105: {
    code: 'MATH105',
    credits: 3,
    finalDuration: '3 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — Integrability/FTC, Integration Techniques, Gamma/Beta & Area/Volumes',
    finalFormat: 'Compulsory Q1 (10m: 5 × 2m items on Integrability, Max-Min bounds, Average value, FTC-II, 3D coords) + Any 5 of Q2–Q8 (60m)',
    incourse1Scope: 'Lessons 1–8 (Area/Riemann Sums, Integrability/Max-Min, FTC, IBP/Reduction, Partial Fractions, Improper, Gamma/Beta, Area)',
    incourse2Scope: 'Lessons 8–14 (Area Bisection, Disks/Washers/Shells, Arc Length/Centroid/Work, Polar Area, Double & Triple Integrals)',
    finalScope: 'All 17 Lessons (Q1: Compulsory 5-part; Q2: Centroid + IBP; Q3: Gamma/Beta [12m!]; Q4: Area bisection + Shifted Volumes; Q5: Polar Area + Double Integrals; Q6: Cylindrical & Spherical; Q7: 2D Jacobian + Line Integral; Q8: Green’s Theorem + Origin Singularity)',
    signaturePatterns: [
      'Full 12-Mark Question EVERY Year: Gamma & Beta definitions, proving B(m,n) = 2∫₀^(π/2) sin^(2m−1)θ cos^(2n−1)θ dθ, and evaluating ∫₀¹ [ln(1/x)]ⁿ dx & ∫₀^∞ x³e^(−2x) dx (Final 2019–2025 Q3).',
      'Area bisection line x = k + Volumes of revolution around SHIFTED axes (x = 9, y = −2) via Washers & Cylindrical Shells + Planar Centroid between parabola & line (Final 2021–2025 Q2a, Q4).',
      'Cylindrical & Spherical coordinate conversions + evaluating ∫∫∫ e^(−(x²+y²+z²)^(3/2)) dV in spherical coordinates (Final 2021–2025 Q1e, Q6).',
      '2D Jacobian transformation on 4 parallel/slanted bounding lines (u = y − 4x, v = y + 4x) + Green’s Theorem exact assumptions & punctured-origin ∮ (−y dx + x dy)/(x² + y²) = 0 vs 2π (Final 2022–2025 Q7–Q8).',
    ],
    classicTraps: [
      'Solving the integral in Q1(b) when it explicitly says “Use max/min values to find bounds — do NOT attempt to solve the integral”.',
      'Forgetting the Jacobian factor r in polar dA = r dr dθ or ρ² sin ϕ in spherical dV = ρ² sin ϕ dρ dϕ dθ, or forgetting |∂(x,y)/∂(u,v)| = 1 / |∂(u,v)/∂(x,y)|.',
      'Applying standard Green’s Theorem directly to (−y dx + x dy)/(x² + y²) when C encloses (0,0) — partials fail continuity at the origin, giving 2π (not 0!).',
    ],
    timeSavers:
      'Feynman’s differentiation-under-integral bonus in L7 is enrichment; focus your L7 drill on the standard ln(1/x), x = sin²θ, and Γ(−5/2) recurrence problems.',
  },

  MATH106: {
    code: 'MATH106',
    credits: 3,
    finalDuration: '3 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — Always opens with 6 True/False statements requiring short proofs/counterexamples + computational problems',
    finalFormat: 'Compulsory Q1 (10m: Parametric rank, Parallel planes distance, Matrix word product, Triangle Inequality) + Any 5 of Q2–Q8 (60m)',
    incourse1Scope: 'Lessons 1–5 (Vectors/Planes in ℝⁿ, Matrix Operations, RREF & Parametric Systems, Determinants/Adjoint/Cramer, Vector Space Axioms)',
    incourse2Scope: 'Lessons 5–10 (Subspaces, Basis/Coordinates & Linear Operators T, Rank-Nullity/Idempotent/g-Inverse, Gram-Schmidt, Eigenvalues)',
    finalScope: 'All 12 Lessons (Q1: Vectors/Planes/Rank(t); Q2: Quadratic Form Orthogonal Diag + SVD; Q3: Vector Space/LI; Q4: Nonlinear trig system + Adjoint proof; Q5: 4×4 Eigenpairs; Q6: M₂₂ Basis & Linear Operator T; Q7: Rank-Nullity + Parameter a,k; Q8: g-Inverse + (X′X)⁻ proof)',
    signaturePatterns: [
      'Parametric rank/consistency analysis: Rank of symmetric A(t) with parameter t (Q1a) and 0 / 1 / ∞ solutions of (a² − 4)x₃ = a − 2 (check a = 2 vs a = −2 separately! — Final 2022–2025 Q1a, Q7b).',
      'Basis & Coordinate Vector in M₂₂ or P₂ + finding explicit formula T(x₁, x₂, x₃) of a linear operator from its images on a non-standard basis (Final 2020–2025 Q6 every year!).',
      'Generalized Inverse (g-inverse AGA = A): computing A⁻ of a 3×4 matrix + proving (X′X)⁻ symmetry, XGX′X = X invariance, and idempotent rank(A) = tr(A) (Final 2021–2025 Q8).',
      'Orthogonal diagonalization x = Py to eliminate cross-product terms in quadratic form x′Ax + computing Singular Values of a 3×2 matrix + 4×4 block eigenspace bases (Final 2022–2025 Q2, Q5).',
    ],
    classicTraps: [
      'Dividing both sides of (a² − 4)x₃ = a − 2 by (a − 2) without testing a = 2 (∞ solutions) and a = −2 (no solution) separately!',
      'Normalizing eigenvectors with ordinary columns instead of ORTHONORMAL columns when diagonalizing a quadratic form (P⁻¹ = Pᵀ requires unit-norm orthogonal vectors).',
      'Computing 3×3 AAᵀ instead of 2×2 AᵀA when asked only for the singular values of a 3×2 matrix (Final 2025 Q2b).',
    ],
    timeSavers:
      'LU Factorization (L3), Kronecker Product (L2), Geometric OLS Projection (L9), and Cholesky LLᵀ (L12) had 0 standalone Final problems in 2021–2025; prioritize RREF, T(v), g-inverse, Eigen, Quadratic Forms, and SVD.',
  },

  ECON107: {
    code: 'ECON107',
    credits: 4,
    finalDuration: '4 Hours',
    finalMarks: 70,
    incourseFormat: '25 Marks (1 Hour) — Diagrammatic microeconomic explanations + algebraic equilibrium/elasticity/utility problems',
    finalFormat: 'Compulsory Q1 (10m: 5 × 2m conceptual contrasts) + Any 5 of Q2–Q8 (5 × 12m = 60m)',
    incourse1Scope: 'Lessons 1–6 (Scarcity/Fallacies, PPF, Demand/Supply Shifts, Market Equilibrium, Elasticity & Paradox of Bumper Crop, Utility)',
    incourse2Scope: 'Lessons 6–11 (Equi-Marginal & Cobb-Douglas Utility, Consumer Surplus & Indifference Curves, Production, Cost Curves, CES/Euler, Perfect Competition)',
    finalScope: 'All 14 Lessons (Q1: Short contrasts; Q2: Supply/Shifts/Utility opt; Q3: Elasticity + Dynamic Pricing + Nonlinear Eq; Q4: CES/MRTS/ML Production; Q5: Cost Curves + Cubic TC + Least-Cost; Q6: Competition vs Monopoly + Shutdown; Q7: GDP/Value-Added/MPC/Policy; Q8: Index Numbers)',
    signaturePatterns: [
      'Modern Data-Science Economics Questions (2024–2025): Uber/Amazon algorithmic dynamic pricing vs static equilibrium + quadratic Q_d, Q_s viable root selection (Q3b–c) + how ML-driven production violates traditional production assumptions (Q4d).',
      'Constrained Cobb-Douglas utility optimization u = x^0.8 y^0.2 + CES production MRTS, CRS proof & generalization of Cobb-Douglas/Leontief + Cubic TC = Q³ − 21Q² + 500Q where MC = min AC (Final 2021–2025 Q2d, Q4, Q5d).',
      'Perfect Competition vs Monopoly: horizontal vs downward demand, justifying “Both set MR = MC” (P = MR only under perfect competition!), Shutdown condition P ≤ min AVC, and Multi-market monopoly C(Q₁, Q₂) (Final 2022–2025 Q6).',
      'Guaranteed Q7 & Q8 Macro/Index Pair: GDP vs NDP vs GNP + Transfer payments exclusion + Value-Added table + MPC/Fiscal-Monetary policy (Q7), and Laspeyres, Paasche & Fisher Ideal Index + Time/Factor Reversal + Base Shifting & Deflating (Q8 EVERY year 2019–2025!).',
    ],
    classicTraps: [
      'Stating a competitive firm shuts down in the short run when P < AC (WRONG — fixed costs are sunk; it shuts down only when P < min AVC!).',
      'Forgetting to swap base-year (0) and current-year (n) subscripts when a table gives 2020 and 2025 data and asks for “2020 index with 2025 as base year” (Final 2025 Q8c!).',
      'Keeping negative price roots when solving quadratic Q_d(P) = Q_s(P) instead of justifying economic viability (P > 0, Q > 0).',
    ],
    timeSavers:
      'Business organization legal forms (proprietorship/partnership/corporation in L8) and Economics of Addiction (L6) are background reading; invest heavy practice in Q3–Q8 math + diagram pairings.',
  },
};

/* ---------- Empirical Lesson-Level Star & Scope Map (All 98 Lessons) ---------- */
export const LESSON_RATINGS = {
  // ==================== AST101 (12 Lessons) ====================
  'ast101-l01': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q1 + 1st Inc',
    examSummary:
      'Tested every year in Compulsory Q1 and 1st Incourse: Qualitative vs Quantitative, NOIR measurement scales (IQ = Interval, siblings = Ratio), NOIR × Central Tendency compatibility matrix, and Sampling vs Non-sampling errors.',
  },
  'ast101-l02': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q1 & Q2',
    examSummary:
      'Guaranteed 12-mark Final Q2 + Q1 plots: Frequency Density histogram for unequal class widths, geometric derivation of Mode = L + [Δ₁/(Δ₁+Δ₂)]c, Stem-and-Leaf median/spread, Ogive quartiles, Pie & Radar chart reading (2025 Q1f–h, Q2).',
  },
  'ast101-l03': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: '3 Final Qs in 2025!',
    examSummary:
      'Highest mark-weight lesson in AST101 (36 marks across Q3, Q4, Q5 in Final 2025!): AM ≥ GM ≥ HM, GM of growth factors (1 + r/100), CV & origin/scale invariance proofs, quantile linear transformation, and Modified Box-Plot with fences/outliers.',
  },
  'ast101-l04': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Every Final Q6',
    examSummary:
      'Dedicated 12-mark Final Q6 nearly every year (2020–2025): Deriving μ₂ and μ₃ from raw moments μ′_r, computing skewness/kurtosis from raw moments, and finding μ₄ required for a mesokurtic distribution (μ₄ = 3σ⁴).',
  },
  'ast101-l05': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q1 & Q7',
    examSummary:
      'Core bivariate staple (2nd Incourse + Final 2025 Q1e & Q7): Expected sign of r across real scenarios, scatter plot vs Pearson r calculation, origin/scale invariance & |r| ≤ 1 proofs, and Correlation Ratio η vs |r| for nonlinear trends.',
  },
  'ast101-l06': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Final Regular',
    examSummary:
      'Heavy in 2nd Incourses (2024, 2025) and Finals: Deriving Spearman’s r_s = 1 − 6Σdᵢ²/[n(n²−1)], tied-rank adjustment, proving −1 ≤ r_s ≤ 1, Coefficient of Concurrent Deviation, and asymmetric Somers’ D.',
  },
  'ast101-l07': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Final Q1/Q7',
    examSummary:
      'Essential OLS foundation: Normal equations derivation of α̂ and β̂, contextual interpretation of intercept & slope (Final 2025 Q1e-ii), residual properties Σeᵢ = 0 and Σxᵢeᵢ = 0, and Car Age/Price full regression problem.',
  },
  'ast101-l08': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Final Proofs',
    examSummary:
      'High-yield algebraic proofs: r² = β̂_yx · β̂_xy, recovering (x̄, ȳ) as the intersection of dual regression lines, reverse-line solver from R² (Final 2022 Q7b, 2024 Q7), and origin/scale shifts on α̂ and β̂.',
  },
  'ast101-l09': {
    stars: 2,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Final Sub-parts (Q7c)',
    examSummary:
      'Frequently tested as a 3–5 mark sub-question alongside OLS (Final 2022 Q7c, 2024 Q7c, 2nd Inc 2024): TSS = ESS + RSS decomposition, R² interpretation, dangers of extrapolation, and Outlier vs High-Leverage (hᵢᵢ) vs Influential point.',
  },
  'ast101-l10': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q8 (12m)',
    examSummary:
      'Guaranteed Final Q8 every single year (2019–2025): Correlation vs Association, constructing a 2×2 table from word counts, proving Yule’s Q = (OR − 1)/(OR + 1), Yule’s Y, and why observational association does not prove causation.',
  },
  'ast101-l11': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q8 Pair',
    examSummary:
      'Paired directly with Lesson 10 in Final Q8 (2019–2025): Expected frequencies Eᵢⱼ = RᵢCⱼ/N, χ² calculation & degrees of freedom, why raw χ² scales with N, and standardized coefficients Φ, Contingency C, Tschuprow’s T, and Cramér’s V.',
  },
  'ast101-l12': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '2023 Inc1 & 2024 Final',
    examSummary:
      'Tested in 1st Incourse 2023 and Final 2024 Q2 (skipped in Final 2025): Structured vs Unstructured data, Big Data 5Vs, Data Science vs Statistics/ML, CRISP-DM lifecycle, and core Data Quality dimensions.',
  },

  // ==================== AST102 (14 Lessons) ====================
  'ast102-l01': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc + Q1 Definitions',
    examSummary:
      'Foundational definitions for 1st Incourse & Final Q1: Random vs deterministic experiment, constructing discrete/continuous sample spaces, and multi-stage tree diagrams.',
  },
  'ast102-l02': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q2 (12m)',
    examSummary:
      'Tested every single year in 1st Incourse and Final Q2 (2020–2025): Translating 3-event verbal statements (“exactly one”, “at most two”) into set algebra and solving 3-set Venn word problems (Final 2025 Q2a, Q2d).',
  },
  'ast102-l03': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc Staple',
    examSummary:
      'Heavy in 1st Incourse and supports Hypergeometric/Binomial setups: Restricted committee selections, complement counting (“at least one”), permutations of alike letters, and digit restrictions.',
  },
  'ast102-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q1/Q2 + 1st Inc',
    examSummary:
      'Core probability laws: Empirical/Relative-frequency vs Classical vs Axiomatic definitions (Final 2025 Q1a), Kolmogorov axioms, proving P(A∪B∪C) inclusion-exclusion, and Boole’s / Bonferroni’s inequalities.',
  },
  'ast102-l05': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q2b & Q3',
    examSummary:
      'Appears in every 1st Incourse and Final (15+ marks in Final 2025 Q2b & Q3!): General multiplication rule P(R₁∩R₂∩R₃) without replacement, proving A⊥B ⇒ A⊥B′, Law of Total Probability tree diagram, and 3-Urn Bayes’ Theorem.',
  },
  'ast102-l06': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Every Final Q4',
    examSummary:
      'Guaranteed Final Q4 problem (2021–2025): Proving P(X > a) = 1 − F_X(a), checking continuity of a 5-piece CDF F(x), differentiating for PDF f(x), and computing conditional waiting probability P(X > 3 | X > 1).',
  },
  'ast102-l07': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q4b + 2nd Inc',
    examSummary:
      'High-yield expectation & transformation methods: Proving E[(X − a)²] = (μ − a)² + σ² (minimized at a = μ), LOTUS, linear variance rules, and finding CDF/PDF of Y = 10(X − 1) or Y = X² (Final 2024 Q1b, 2025 Q4b).',
  },
  'ast102-l08': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q5 (12m)',
    examSummary:
      'Dedicated 12-mark Final Q5 every year (2020–2025): Defining joint/marginal/conditional densities, testing independence (Final 2025 Q1b, Q5b), integrating P(X + Y < 1), and finding f(x|y) on triangular support 0 ≤ y ≤ x ≤ 1.',
  },
  'ast102-l09': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Final Proofs',
    examSummary:
      'Signature ISRT bivariate theory (Final 2021, 2023, 2024 + 2nd Inc 2025): Variance of linear combinations Var(aX + bY), Law of Iterated Expectations E[E(Y|X)] = E(Y), and Law of Total Variance.',
  },
  'ast102-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q6 + 2nd Inc',
    examSummary:
      'Major 2nd Incourse & Final Q6 staple (Final 2025 Q6a–c): Polynomial PGF of independent biased/unbiased coin sums, extracting E(Z) from P′_Z(1), proving M_{a+bX}(t) = e^(at)M_X(bt), and CGF cumulants.',
  },
  'ast102-l11': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q7 (12m)',
    examSummary:
      'Dedicated Final Q7 staple (Final 2025 Q7a–c): Four BINS conditions, proving Σ C(n,x)p^x q^(n−x) = 1, proving mean = variance contradicts 0 < p < 1, solving p from npq = 1.44, and minimum shots n for 1 − q^n > 0.995.',
  },
  'ast102-l12': {
    stars: 2,
    scopes: ['final'],
    frequencyTag: 'Final Q1c & Q7d (2025)',
    examSummary:
      '6 marks in Final 2025 (Q1c intoxicated driver E(X), SD(X) & Q7d truncated key-trial waiting time): Distinguish trials-until-first-success X ∈ {1,2,…} vs failures-before-first-success Y ∈ {0,1,…}, plus Negative Binomial.',
  },
  'ast102-l13': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Final Staple (2020–2024)',
    examSummary:
      'Classic Final distribution: Poisson MGF & equidispersion E(X) = Var(X) = λ, Binomial → Poisson rare-event limit proof, central moment recurrence (Final 2024 Q7c), and conditional X₁ | (X₁ + X₂ = n) ~ Binomial.',
  },
  'ast102-l14': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: '20 Marks in Final 2025!',
    examSummary:
      'Heaviest single Final lesson in 2025 (Q1d [4m] + Q6d [4m] + Q8 [12m] = 20 marks!): Proving Exponential memoryless property, sum/linear combination of independent Normals via MGF, IQ percentiles, and finding μ, σ from two tail probabilities.',
  },

  // ==================== MATH103 (14 Lessons — Groups A, B, C) ====================
  'math103-l01': {
    stars: 2,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · 1st Inc + Q3d',
    examSummary:
      'Group A foundation: Properties of GCD (Final 2025 Q3d), Euclidean Algorithm, Euclid’s Lemma, and Fundamental Theorem of Arithmetic (heavier in 1st Incourse than Final).',
  },
  'math103-l02': {
    stars: 3,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · Every Final Q1/Q2/Q3',
    examSummary:
      '12+ marks in Final 2025 (Q1a, Q2a, Q3c): Euler’s totient ϕ(n), Wilson’s Theorem proof that 18! + 1 ≡ 0 (mod 437), Fermat’s Little Theorem, linear congruences, and positive integer solutions of Diophantine 62x + 11y = 788.',
  },
  'math103-l03': {
    stars: 3,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · 1st Inc + Final Regular',
    examSummary:
      'Core Group A staple across 2019–2024 Finals & every 1st Incourse: Symmetric AM ≥ GM ≥ HM & Cauchy–Schwarz inequality proofs, plus telescoping method of differences, inverse-tangent, and trig series.',
  },
  'math103-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · Every Final Q2',
    examSummary:
      'Appears almost verbatim every year (2019, 2020, 2022, 2024, 2025 Q2b–c): Modulus & principal argument, De Moivre’s theorem, and cube roots of unity identity (a + bω + cω²)³ + (a + bω² + cω)³ = 27abc when a + b + c = 0.',
  },
  'math103-l05': {
    stars: 3,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · 20 Marks in 2025!',
    examSummary:
      'Dominated Group A in Final 2025 (Q1d, Q3a–b, Q4a–c = 20 marks!): Synthetic division, n-roots theorem, solving cubics with roots in GP/AP/HP, symmetric root sums on x³ + qx + r = 0, and transformed equation with roots (1/a + 1/b).',
  },
  'math103-l06': {
    stars: 2,
    scopes: ['inc1', 'final'],
    group: 'Group A',
    frequencyTag: 'Group A · Q1b + Cross-MATH105',
    examSummary:
      'Tested in Final 2025 Q1(b) (definitions) and cross-reinforces the guaranteed 12-mark Gamma/Beta question in MATH105 Lesson 7: Γ(1/2) = √π, B(m,n) = Γ(m)Γ(n)/Γ(m+n), and trigonometric integral reduction.',
  },
  'math103-l07': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    group: 'Group B',
    frequencyTag: 'Group B · Incourse + Q1c',
    examSummary:
      'Group B gateway: Order, degree & linearity classification of 6–8 tricky ODEs (incourse favorite), complementary vs particular solution (Final 2025 Q1c), and forming ODEs by eliminating arbitrary constants.',
  },
  'math103-l08': {
    stars: 2,
    scopes: ['inc2', 'final'],
    group: 'Group B',
    frequencyTag: 'Group B · 2nd Inc + Final Rotator',
    examSummary:
      'Core first-order techniques: Separable, homogeneous y = vx, and non-homogeneous fractional equations (a₁x + b₁y + c₁)dx + (a₂x + b₂y + c₂)dy = 0 (intersecting origin shift vs parallel-line substitution).',
  },
  'math103-l09': {
    stars: 3,
    scopes: ['inc2', 'final'],
    group: 'Group B',
    frequencyTag: 'Group B · Every Final Q6 (12m)',
    examSummary:
      'Full 12-mark Final Q6 in 2025 (and tested every year 2020–2025): Necessary/sufficient exactness ∂M/∂y = ∂N/∂x, finding most general N(x,y), finding integrating factor xⁿ or exp(∫g(x)dx), and Bernoulli dy/dx + P(x)y = Q(x)yⁿ.',
  },
  'math103-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    group: 'Group B',
    frequencyTag: 'Group B · Every Final Q5 (12m)',
    examSummary:
      'Full 12-mark Final Q5 in 2025 (4 × 3m ODEs): Constant-coefficient linear ODEs with polynomial x², resonance e^(−3x), shifted operator e^x sin x, Cauchy–Euler x²y″ − xy′ + y = ln(x²), and Variation of Parameters.',
  },
  'math103-l11': {
    stars: 2,
    scopes: ['inc2', 'final'],
    group: 'Group C',
    frequencyTag: 'Group C · Counting ★★★ / Logic ★',
    examSummary:
      'SPLIT PRIORITY: Propositional Logic & Truth Tables (★) had ZERO questions in 2023–2025 exams. Counting with Restrictions & Inclusion–Exclusion PIE (★★★, e.g. 2025 Q7b Tea/Coffee survey, restricted committees) appear every year!',
  },
  'math103-l12': {
    stars: 3,
    scopes: ['inc2', 'final'],
    group: 'Group C',
    frequencyTag: 'Group C · Every Final Q7a!',
    examSummary:
      'Single most predictable question in Group C (tested 2023, 2024, and 2025 Q7a): Modeling a population recurrence a_n = k·a_{n−1} − c (squirrels/frogs/bacteria) and solving it explicitly via Ordinary Generating Functions.',
  },
  'math103-l13': {
    stars: 3,
    scopes: ['final'],
    group: 'Group C',
    frequencyTag: 'Group C · Every Final Q1e & Q7c',
    examSummary:
      'Tested every year (2023–2025 Q1e, Q7c): Path vs Trail vs Cycle, Eulerian vs Hamiltonian paths/circuits (Dirac & Ore conditions), Greedy pros/cons, Dijkstra & Floyd–Warshall shortest paths, and Kruskal/Prim MST.',
  },
  'math103-l14': {
    stars: 3,
    scopes: ['final'],
    group: 'Group C',
    frequencyTag: 'Group C · Full 12m Q8 in 2025!',
    examSummary:
      'Entire 12-mark Question 8 in Final 2025: Two-person zero-sum game & payoff matrix definitions, 3×3 reduction via Dominated Strategies, Saddle Point maximin–minimax check, and 2×3 Graphical Minimax Mixed Strategy.',
  },

  // ==================== MATH104 (15 Lessons) ====================
  'math104-l01': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc Staple',
    examSummary:
      'Core 1st Incourse opener: Natural domain & range of radical/rational functions, piecewise graph sketching, and algebraic Even/Odd symmetry tests.',
  },
  'math104-l02': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final 2025 Q1c (4m)',
    examSummary:
      'Directly tested in Final 2025 Compulsory Q1(c) [4 marks]: Sketching y = A sin(Bx + C), identifying amplitude, period 2π/B, phase shift, and range, plus sequential graph transformations.',
  },
  'math104-l03': {
    stars: 1,
    scopes: ['inc1'],
    frequencyTag: 'Low-Yield on Finals',
    examSummary:
      'Supplementary pre-calculus foundation: Root multiplicity (touch vs cross) and sign tables support rational curve sketching in L4, but standalone polynomial questions rarely appear on Year Finals.',
  },
  'math104-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Compulsory Q1 Every Year!',
    examSummary:
      'Guaranteed Compulsory Q1 appearance (6 marks in Final 2025 Q1a–b!): Domain, removable holes vs vertical asymptotes, oblique asymptote of (x⁴+x²+1)/(x³−1), and writing a minimal-degree rational function from its graph.',
  },
  'math104-l05': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc + Logistic Prep',
    examSummary:
      'Tested in 1st Incourses (domain of f∘g, inverse of piecewise/radical functions, Horizontal Line Test) and underpins exponential/logarithmic limits and logistic growth models (Final 2025 Q2a, Q8c).',
  },
  'math104-l06': {
    stars: 1,
    scopes: ['inc1'],
    frequencyTag: 'Low-Yield Standalone',
    examSummary:
      'Reference toolkit: Restricted principal domains of sin⁻¹x, cos⁻¹x, tan⁻¹x and exponential definitions of sinh x, cosh x are used inside L7–L11 derivatives/limits rather than as standalone Final questions.',
  },
  'math104-l07': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q2 (12m)',
    examSummary:
      'Full 12-mark Final Q2 every single year (2020–2025): Algebraic/conjugate/±∞ limits, formal ε-δ proof for nonlinear f(x) = 3x² + 2x − 20, and piecewise/oscillating sin(1/x) continuity analysis.',
  },
  'math104-l08': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q3a + 2nd Inc',
    examSummary:
      'Tested in Final 2025 Q3(a) and every 2nd Incourse: Average vs instantaneous rate of change with secant/tangent sketch, proving differentiability ⇒ continuity, and proving |x| or cusps are non-differentiable.',
  },
  'math104-l09': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '15 Marks in Final 2025!',
    examSummary:
      'Massive exam weight (Final 2025 Q3b–c, Q4b, Q4d = 15 marks!): Astroid/Folium implicit dy/dx, logarithmic differentiation, Δy vs dy comparison & sketch, and sliding-ladder & truncated-cone coffee cup related rates.',
  },
  'math104-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q4a & Q5b–c',
    examSummary:
      'Tested every year (Final 2025 Q4a, Q5b–c): Verifying Rolle’s & Mean Value Theorem hypotheses and finding c, concavity & inflection points of exp(−x²/2), L’Hôpital indeterminate powers (1+2x)^(−3/x), and applied optimization.',
  },
  'math104-l11': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '20 Marks in Final 2025!',
    examSummary:
      'Highest-scoring lesson in Final 2025 (Q4c [3m] + Q5a [5m] + Q8 [12m] = 20 marks!): Leibnitz n-th derivative proofs, Taylor’s Theorem with Lagrange vs Cauchy remainders, and Maclaurin approximations of sin 3°, ln(1.1), and logistic P(1).',
  },
  'math104-l12': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q7 (12m)',
    examSummary:
      'Dedicated 12-mark Final Q7 every year (2021–2025): Unit tangent T(t) & unit normal N(t) of ⟨t, t², t³⟩, Cartesian curvature κ(x) of y = ln x, and Polar radius & center of curvature of cardioid r = 1 + cos θ.',
  },
  'math104-l13': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q6a & Q6c',
    examSummary:
      'Core multivariable Final Q6 (2021–2025): 2D limits at (0,0) via polar squeeze vs two-path non-existence, Clairaut mixed partials, and total differential dz approximation vs exact Δz on z = √(4 − x² − y²).',
  },
  'math104-l14': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Final Q6b + Directional',
    examSummary:
      'Tested in Final 2025 Q6(b) [5 marks] and 2022–2024 Finals: Proving homogeneity & Euler’s Theorem xf_x + yf_y = nf (watch degree n = 0 for e^(x/y)!), multivariable chain rule / polar Laplace equation, and gradient directional derivatives.',
  },
  'math104-l15': {
    stars: 2,
    scopes: ['final'],
    frequencyTag: 'Final Alternator (2022–2024)',
    examSummary:
      'Regular Final topic (2021–2024, rotated out in 2025): Tangent plane & normal line to an ellipsoid/surface F(x,y,z) = c, acute angle between planes, and classifying local max, min & saddle points via D = f_xx f_yy − (f_xy)².',
  },

  // ==================== MATH105 (17 Lessons) ====================
  'math105-l01': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc + Riemann Limit',
    examSummary:
      'Essential 1st Incourse & Final foundation: Geometric area function A(x), net signed vs total area, and evaluating definite integrals from first principles via Riemann sum limits.',
  },
  'math105-l02': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Compulsory Q1a–b Every Year!',
    examSummary:
      'Guaranteed 4 marks in Compulsory Q1 every year (Final 2025 Q1a–b): Justifying integrability of piecewise/discontinuous functions on [a,b] and bounding ∫₀³ √(x³+2) dx via the Max–Min Inequality without integrating.',
  },
  'math105-l03': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Compulsory Q1c–d Every Year!',
    examSummary:
      'Guaranteed 4 marks in Compulsory Q1 every year (Final 2025 Q1c–d): Average value of f(x) on [a,b], FTC Part II derivatives F(4), F′(4), F″(4) of ∫₄ˣ √(t²+9) dt (including Leibniz chain-rule bounds), and definite u-substitution.',
  },
  'math105-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q2b (7m) + Reduction',
    examSummary:
      '7 marks in Final 2025 Q2(b) plus classic reduction proofs: Tabular/repeated Integration by Parts on xe^(2x), (x²+1)e^x, (x+1)cos x, cyclic e^(ax)cos(bx), and deriving sinⁿx / secⁿx reduction & Wallis’s formulas.',
  },
  'math105-l05': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc + Final Rotator',
    examSummary:
      'Core integration toolkit (1st Incourse & 2020–2024 Finals): Trig parity & reference-triangle substitutions, Weierstrass t = tan(x/2) on dx/(2 + cos x), partial fractions, and piecewise splitting of |2 − x|/x.',
  },
  'math105-l06': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st/2nd Inc + Final Sub-part',
    examSummary:
      'Important convergence test & limit drill: Splitting Type I (±∞) and Type II (interior vertical asymptote!) improper integrals into one-sided limits and applying L’Hôpital’s rule.',
  },
  'math105-l07': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Guaranteed 12m Final Q3!',
    examSummary:
      '12-mark Question 3 EVERY SINGLE YEAR (2019–2025): Defining Γ(n) and B(m,n), evaluating ∫₀¹ [ln(1/x)]² dx and ∫₀^∞ x³e^(−2x) dx, proving B(m,n) = 2∫₀^(π/2) sin^(2m−1)θ cos^(2n−1)θ dθ, and Γ(−5/2) recurrence.',
  },
  'math105-l08': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Every Final Q4a',
    examSummary:
      'Tested in Final 2025 Q4(a) and Incourses: Choosing vertical (dx) vs horizontal (dy) slicing and finding the exact line x = k or y = k that bisects an enclosed planar region into two equal areas.',
  },
  'math105-l09': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '8 Marks in Final 2025 Q4b–c!',
    examSummary:
      '8 marks in Final 2025 Q4(b–c) and tested every year: Disks/Washers vs Cylindrical Shells around SHIFTED axes (about x = 9 and about y = −2), torus volume setup, and explaining when Shells beat Washers.',
  },
  'math105-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Final 2025 Q2a (5m) + 2nd Inc',
    examSummary:
      '5 marks in Final 2025 Q2(a) + 2nd Incourse staple: Planar Centroid (x̄, ȳ) of the region enclosed between y = x² and y = x + 2, Hooke’s Law spring/pumping work integrals, arc length, and surface area of revolution.',
  },
  'math105-l11': {
    stars: 2,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Final 2025 Q5a (4m)',
    examSummary:
      '4 marks in Final 2025 Q5(a): Area inside cardioid r = 4 + 4 cos θ and outside circle r = 6, rose-petal symmetry traps, and checking pole (r = 0) intersections.',
  },
  'math105-l12': {
    stars: 2,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Final 2025 Q5b (4m)',
    examSummary:
      '4 marks in Final 2025 Q5(b) and 2nd Incourse staple: Setting up Type I vs Type II iterated double integrals and reversing the order of integration when ∫ e^(y²) dy or (1+y²)^(−1/2) blocks direct integration.',
  },
  'math105-l13': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q5c',
    examSummary:
      'Tested every year (Final 2025 Q5c): Converting sector/disk double integrals like ∫∫ (1 + x² + y²)⁻¹ dA into polar coordinates with dA = r dr dθ.',
  },
  'math105-l14': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '14 Marks in Final 2025!',
    examSummary:
      '14 marks in Final 2025 (Q1e [2m] + Q6a–c [12m]): Converting points & paraboloid z = x² + y² to cylindrical/spherical forms, paraboloid volume in cylindrical coords, and spherical integral of exp(−(x²+y²+z²)^(3/2)).',
  },
  'math105-l15': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q7a (6m)',
    examSummary:
      '6 marks every single year (Final 2022–2025 Q7a): Choosing linear/elliptic u, v transformations for a region bounded by 4 lines (y = 4x, y = 4x+2, y = 2−4x, y = 5−4x), computing |J| via inverse Jacobian, and integrating.',
  },
  'math105-l16': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q7b (6m)',
    examSummary:
      '6 marks in Final 2025 Q7(b) and 2022–2024 Finals: Divergence & Curl identities, plus parametrizing and evaluating line integrals ∫_C P dx + Q dy along semicircles, parabolas, and polygonal paths.',
  },
  'math105-l17': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Guaranteed 12m Final Q8!',
    examSummary:
      'Full 12-mark Question 8 in Final 2023, 2024, and 2025: Stating all exact hypotheses on C, R, f, g in Green’s Theorem, triangular circulation integral, and the classic punctured-origin integral ∮ (−y dx + x dy)/(x² + y²) = 0 vs 2π.',
  },

  // ==================== MATH106 (12 Lessons) ====================
  'math106-l01': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q1b, Q1d & Q3b',
    examSummary:
      '9 marks in Final 2025 (Q1b, Q1d, Q3b) + 1st Incourse staple: Proving Cauchy–Schwarz & Triangle Inequality, solving orthogonality parameter λ, testing parallel/perpendicular planes, and point-to-plane / plane-to-plane distance.',
  },
  'math106-l02': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q1c + Incourse T/F',
    examSummary:
      'Tested in Final 2025 Q1(c) (interpreting matrix-vector cost products) and Incourse True/False blocks: Symmetric + skew-symmetric decomposition, trace cyclicity tr(AB) = tr(BA), and transpose rules. (Kronecker A⊗B is ★).',
  },
  'math106-l03': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q4b & Q7b (9m)',
    examSummary:
      '9 marks in Final 2025 + 1st Incourse core: Parametric consistency bifurcation (0, 1, or ∞ solutions for (a²−4)x₃ = a−2), RREF star-pattern diagnostics, and nonlinear trigonometric system reduction. (LU factorization is ★).',
  },
  'math106-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: '10 Marks in Final 2025!',
    examSummary:
      '10 marks in Final 2025 (Q4a, Q4c, Q7c) + 1st Incourse staple: Proving uniqueness of A⁻¹ and A⁻¹ = adj(A)/det(A), row-reduction determinant proofs, invertibility parameter k, and Cramer’s Rule.',
  },
  'math106-l05': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Final Q3a + Subspace Tests',
    examSummary:
      'Tested in Final 2025 Q3(a) and Incourses: Stating all 10 Vector Space axioms, proving/disproving subspaces via the 2-step closure test (checking 0 ∈ W first!), and testing span membership.',
  },
  'math106-l06': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '17 Marks in Final 2025!',
    examSummary:
      'Massive Final weight every year (Q3c [5m] + Q6a–b [12m] in Final 2025!): Testing linear independence in ℝ³, proving a set is a basis & finding coordinate vectors in M₂₂ or P₂, and deriving T(x₁,x₂,x₃) from basis images.',
  },
  'math106-l07': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '16 Marks in Final 2025!',
    examSummary:
      'Signature ISRT Linear Algebra lesson (Q1a [3m] + Q7a [5m] + Q8a–b [8m] in Final 2025!): Parametric rank of A(t), Rank-Nullity verification, idempotent rank(A) = tr(A), computing g-inverse A⁻, and proving (X′X)⁻ properties.',
  },
  'math106-l08': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Orthogonal Diag Prep',
    examSummary:
      'Essential for 2nd Incourse and required inside every Final Q2(c) orthogonal diagonalization: Gram–Schmidt orthonormalization in ℝ³ and orthogonal matrix properties Q⁻¹ = Qᵀ, det(Q) = ±1.',
  },
  'math106-l09': {
    stars: 1,
    scopes: ['inc2'],
    frequencyTag: 'Conceptual Bridge to AST101',
    examSummary:
      'Low standalone weight on MATH106 written Finals: Geometric projection H = X(XᵀX)⁻¹Xᵀ bridges Linear Algebra to AST101 Regression. For MATH106 Final, prioritize the algebraic (X′X)⁻ proofs in Lesson 7 (★★★)!',
  },
  'math106-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: '16 Marks in Final 2025!',
    examSummary:
      '16 marks in Final 2025 (Q5a–b [12m] + Q8c [4m]) and tested every year: Characteristic polynomial & eigenspace bases of 4×4 matrices, proving A⁻¹ has eigenvalue 1/λ, diagonalization A^k, and Cayley–Hamilton A⁻¹.',
  },
  'math106-l11': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Every Final Q2a & Q2c (9m)',
    examSummary:
      '9 marks in Final 2025 Q2(a, c) and tested every single year: Writing conics/quadratics in matrix form x′Ax + Kx + f = 0, orthogonal change of variables x = Py to eliminate cross-product terms, and definiteness.',
  },
  'math106-l12': {
    stars: 2,
    scopes: ['final'],
    frequencyTag: 'SVD ★★★ (2025 Q2b) / Cholesky ★',
    examSummary:
      'SPLIT PRIORITY: Singular Value Decomposition & finding singular values of a 3×2 matrix (★★★, Final 2020, 2023, 2025 Q2b) is high-yield; Cholesky A = LLᵀ (★) has not appeared on recent Finals.',
  },

  // ==================== ECON107 (14 Lessons) ====================
  'econ107-l01': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q1a + 1st Inc',
    examSummary:
      'Tested in Final 2025 Q1(a) and 1st Incourses: Role of scarcity & efficiency, Positive vs Normative economics, and the 3 classic fallacies (Post Hoc, Failure to Hold Other Things Constant, Fallacy of Composition).',
  },
  'econ107-l02': {
    stars: 2,
    scopes: ['inc1', 'final'],
    frequencyTag: '1st Inc + Final 2024',
    examSummary:
      'Core 1st Incourse diagram & opportunity-cost problem (Final 2024): Efficient vs infeasible vs unemployed points on the PPF, bowed-out increasing opportunity cost, and rich vs poor society investment shifts.',
  },
  'econ107-l03': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Final Q1c & Q2a–b',
    examSummary:
      '7 marks in Final 2025 (Q1c, Q2a–b): Ceteris paribus in downward-sloping demand, Substitution vs Income effect, upward-sloping supply & supply shifters, Shift vs Movement along curve, and Backward-bending labor supply.',
  },
  'econ107-l04': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: '12 Marks in Final 2025!',
    examSummary:
      '12 marks in Final 2025 (Q2c, Q3b–c) + 2024 Final: Simultaneous supply/demand shifts (computer chips → computers & typewriters), Uber/Amazon dynamic pricing vs static equilibrium, and nonlinear quadratic Q_d = Q_s viable roots.',
  },
  'econ107-l05': {
    stars: 3,
    scopes: ['inc1', 'final'],
    frequencyTag: 'Every Final Q3a + Policy',
    examSummary:
      'Tested every year (Final 2025 Q3a + 1st Incourse): Why price elasticity varies along a linear demand curve (slope ≠ elasticity!), arc/point & income elasticity calculations, Total Revenue test, and Paradox of the Bumper Harvest.',
  },
  'econ107-l06': {
    stars: 3,
    scopes: ['inc1', 'inc2', 'final'],
    frequencyTag: 'Final Q2d + 2nd Inc',
    examSummary:
      'Tested in Final 2025 Q2(d) and Incourses: Law of Diminishing Marginal Utility, Cardinal vs Ordinal utility, Paradox of Value, and Equi-Marginal constrained optimization of u = x^0.8 y^0.2 under Px·x + Py·y = B.',
  },
  'econ107-l07': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Final Q1e + CS Problems',
    examSummary:
      'Tested in Final 2025 Q1(e) and 2021–2024 Finals: Contrast Indifference Curve vs Isoquant (milk & sugar example), why indifference curves never intersect, MRS tangency equilibrium, and Consumer Surplus bridge/project appraisal.',
  },
  'econ107-l08': {
    stars: 2,
    scopes: ['inc2', 'final'],
    frequencyTag: '2nd Inc + Concept Bridge',
    examSummary:
      '2nd Incourse staple supporting Lessons 9–10: TP, MP, and AP stage relationships, Short Run vs Long Run, and distinguishing Diminishing Marginal Returns (one variable input) from Returns to Scale (all inputs scaled).',
  },
  'econ107-l09': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Entire 12m Final Q5 in 2025!',
    examSummary:
      'All 12 marks of Question 5 in Final 2025: FC, VC & Opportunity Cost, drawing MC, AC, AVC, AFC on one graph, Least-Cost Rule adjustment when an input price falls, and solving cubic TC = Q³ − 21Q² + 500Q where MC = min AC.',
  },
  'econ107-l10': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Entire 12m Final Q4 in 2025!',
    examSummary:
      'All 12 marks of Question 4 in Final 2025 (and 2023–2024): CES MRTS calculation at (L, K), why CES generalizes Cobb-Douglas & Leontief, CRS homogeneity & Euler’s Theorem proof, and how ML-driven production violates classical assumptions.',
  },
  'econ107-l11': {
    stars: 3,
    scopes: ['inc2', 'final'],
    frequencyTag: 'Every Final Q6b–d',
    examSummary:
      '9 marks in Final 2025 Q6(b–d): Horizontal competitive firm demand vs downward market/monopoly demand, True/False proof of MR = MC across market structures, and graphical derivation of the Shutdown Condition (P ≤ min AVC).',
  },
  'econ107-l12': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Final Q1b, Q6a & Multi-Market',
    examSummary:
      'Tested in Final 2025 Q1(b), Q6(a) and 2022–2024 Finals: Categorizing real Bangladesh markets (DESCO electricity monopoly vs domestic airlines oligopoly), sources of market imperfection, deadweight loss, and multi-market monopoly calculus.',
  },
  'econ107-l13': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Guaranteed 14m Final Q1d & Q7!',
    examSummary:
      '14 marks in Final 2025 (Q1d [2m] + Q7a–d [12m]) and tested every year: GDP vs NDP vs GNP, why government transfer payments are excluded, numeric Value-Added example against double counting, MPC & consumption, and Fiscal/Monetary policy.',
  },
  'econ107-l14': {
    stars: 3,
    scopes: ['final'],
    frequencyTag: 'Guaranteed 12m Final Q8!',
    examSummary:
      'Dedicated 12-mark Question 8 EVERY SINGLE YEAR (2019–2025): CPI definition, Time Reversal & Factor Reversal accuracy tests, Base Shifting & Deflating with examples, and Laspeyres, Paasche & Fisher Ideal Index table calculations.',
  },
};

/* ---------- Unit-Level (h2 / h3) Star Importance Classifier ---------- */
const LOW_YIELD_HEADING_PATTERNS = [
  // Cross-course low-yield / background sections
  { course: 'AST101', re: /historical evolution|two aspects|uses,\s*scope|ethics|primary vs\.\s*secondary|sheppard|data types across science|six types of analytical|data governance|audit checklist/i, reason: 'Background context; rarely carries standalone written marks on ISRT Finals.' },
  { course: 'AST102', re: /arbitrary set|countably infinite simulator|monte carlo/i, reason: 'Conceptual intuition aid; focus exam practice on formal derivations and vault problems.' },
  { course: 'MATH103', lesson: 'math103-l11', re: /propositional logic|tautologies|truth table/i, reason: '0 marks across 2023, 2024, and 2025 Incourses & Finals — revise Counting & PIE (★★★) first!' },
  { course: 'MATH103', re: /order properties of real|divisor functions|crs\s*&\s*rrs|modular clock|newton's method of divisors|newton's divisor|statistical connections|applications of differential|verhulst|slope field|integer partitions|exponential generating/i, reason: 'Supplementary syllabus unit; rarely examined on written MATH103 Finals.' },
  { course: 'MATH104', re: /satellite power|decibels|hyperbolic|course & slide problem vault \(lecture 6\)/i, reason: 'Low standalone Final frequency; prioritize Rational asymptotes, ε-δ, Taylor, and Curvature.' },
  { course: 'MATH105', re: /feynman|rate-of-change curves|non-uniqueness/i, reason: 'Enrichment bonus; prioritize core Gamma/Beta, Shifted Volumes, Jacobian, and Green’s Theorem.' },
  { course: 'MATH106', re: /kronecker|a\s*=\s*lu|lu\s+factoriz|triangular solve|cholesky|spectral square root|whitening/i, reason: '0 standalone questions in 2021–2025 MATH106 Finals — prioritize RREF, g-Inverse, Eigen & SVD.' },
  { course: 'ECON107', re: /economic systems spectrum|circular flow|economics of addiction|why firms exist|forms of business organization/i, reason: 'Introductory reading; low frequency on recent 70-mark Finals.' },
];

const HIGH_YIELD_HEADING_PATTERNS = [
  // Past Exam Vaults & Written Exam Sections are always ★★★
  { re: /past[-\s]*exam|exam arena|written exam problems|subjective exam|authentic isrt exam|exam traps|proofs\s*&\s*(?:derivations|identities)|formal proofs for the final/i, reason: 'Direct ISRT past-exam questions, proofs, and mark-saving trap checks.' },
  // AST101 high-yield units
  { course: 'AST101', re: /parameter,\s*statistic|types of variables|noir|compatibility matrix|pie chart|frequency distributions|unequal|histogram|ogive|stem-and-leaf|central tendency|dispersion|chebyshev|measures of position|box-plot|raw moments|master conversion|skewness\s*&\s*kurtosis|covariance|pearson|correlation ratio|spearman|tied ranks|concurrent deviation|ordinary least squares|ols derivation|algebraic properties|dual regression|origin\s*&\s*scale|reverse-line|sum of squares|outliers,\s*influential|contingency|association vs\.\s*correlation|yule|odds ratio|expected counts|limitations of|chi-square/i, reason: 'High-frequency ISRT exam unit (tested repeatedly across 2019–2025 papers).' },
  // AST102 high-yield units
  { course: 'AST102', re: /mutually exclusive|verbal statements|3-set|de morgan|committee|slot restriction|approaches to probability|kolmogorov|boole|conditional probability|multiplication rule|independence|bayes|pmf|pdf|cdf|piecewise|expectation|lotus|minimum mse|linear transformation|function of a random|joint|marginal|tower laws|adam's law|generating functions|pgf|mgf|raw moments|binomial|bins|hypergeometric|geometric vs\.\s*shifted|memoryless|poisson|equidispersion|approximations|recurrence|exponential|normal/i, reason: 'Core ISRT probability derivation or problem type (2020–2025 Finals & Incourses).' },
  // MATH103 high-yield units
  { course: 'MATH103', re: /gcd|diophantine|linear congruences|totient|wilson|power mean|cauchy|inequality proof|telescoping|trigonometric\s*&\s*inverse-tangent|modulus|argand|de moivre|cube roots of unity|vieta|ap,\s*gp|transformation of equations|gamma|beta|order,\s*degree|linear vs\.\s*nonlinear|classifier|formation of differential|exact|integrating factor|first-order linear|bernoulli|auxiliary|inverse d-operator|undetermined coefficients|cauchy–euler|cauchy-euler|variation of parameters|fundamental counting|restrictions|inclusion–exclusion|inclusion-exclusion|recurrence|ogf|generating function|walks,\s*trails|eulerian|hamiltonian|dijkstra|prim|floyd|zero-sum|saddle point|dominance|mixed strategies|graphical minimax/i, reason: 'High-yield MATH103 Group A/B/C exam unit (2019–2025).' },
  // MATH104 high-yield units
  { course: 'MATH104', re: /sinusoidal|holes vs\.\s*vertical|horizontal\s*&\s*oblique|6-step rational|oblique asymptote|limit existence|formal.*\\varepsilon|formal.*ε|continuity at a point| crossing curves|tangent lines|differentiability|prove.*\|x\||chain rule,\s*implicit|differentials|fol|rolle|mean value theorem|concavity|exp\(-x|maclaurin|taylor|remainder|leibnitz|frenet|curvature|two-path|total differential|euler's homogeneous|directional derivatives|gradient/i, reason: 'High-yield MATH104 Calculus exam staple (2020–2025).' },
  // MATH105 high-yield units
  { course: 'MATH105', re: /area function|net signed|riemann sums|summation\s*&\s*limit|max–min|max-min|integrability|ftc|average value|ibp|archetypes|reduction formulas|gamma|beta|area between curves|bisection|vertical slicing|horizontal slicing|disks\s*&\s*washers|cylindrical shells|shifted-axis|4-case formula|centroid|arc length|polar.*double|dA\s*=\s*r|cylindrical\s*&\s*spherical|volume elements|point\s*&\s*surface|jacobian|change of variables|divergence,\s*curl|line integral|green's theorem|origin singularity/i, reason: 'High-yield MATH105 Integral Calculus exam unit (2019–2025).' },
  // MATH106 high-yield units
  { course: 'MATH106', re: /norm,\s*dot product|cauchy-schwarz|planes\s*&\s*distances|distance formulas|gaussian elimination|echelon|rouch|rref solver|cofactor|row operations|adjoint|cramer|10 axioms|subspace test|linear independence|basis,\s*dimension|defined on a basis|3-step exam recipe|coordinate vector|linear transformation builder|rank-nullity|varies with parameter|idempotent|generalized inverses|g-inverse|gram-schmidt|orthogonal matrices|eigenpairs|characteristic equation|diagonalization|cayley-hamilton|spectral theorem|orthogonal diagonalization|quadratic forms|cross terms|singular value|svd/i, reason: 'High-yield MATH106 Linear Algebra exam staple (2019–2025).' },
  // ECON107 high-yield units
  { course: 'ECON107', re: /scarcity\s*&\s*efficiency|three common fallacies|positive vs\.\s*normative|downward|shifters|upward slope|shift of the curve|backward-bending|market-clearing|simultaneous shifts|algebraic equilibrium|dynamic pricing|price elasticity|midpoint|elasticity\s*≠\s*slope|income elasticity|agriculture paradox|diminishing mu|equi-marginal|cardinal vs\.\s*ordinal|consumer surplus|indifference curves|ic vs\.\s*isoquant|tangency|marginal\s*&\s*average costs|cubic cost|u-shaped|least-cost|cobb-douglas|ces production|euler's theorem|lagrange|horizontal demand|shutdown|imperfections|marginal revenue|multi-product|gdp,\s*ndp|transfer payments|value-added|mpc|fiscal vs\.\s*monetary|weighted price index|laspeyres|4 tests|base shifting/i, reason: 'High-yield ECON107 exam question unit (2019–2025).' },
];

export function rateUnitHeading(lessonId, courseCode, rawHeadingText, fallbackLessonStars = 2) {
  const text = String(rawHeadingText || '').trim();

  // 1. Explicit low-yield overrides first (so e.g. LU Factorization inside a ★★★ lesson is accurately ★)
  for (const rule of LOW_YIELD_HEADING_PATTERNS) {
    if (rule.course && rule.course !== courseCode) continue;
    if (rule.lesson && rule.lesson !== lessonId) continue;
    if (rule.re.test(text)) {
      return { stars: 1, reason: rule.reason };
    }
  }

  // 2. Lessons whose overall rating is ★ default their internal units to ★ (unless Past Exam / key bridge)
  if (fallbackLessonStars === 1) {
    if (/normal equations|hat matrix|restricted domains for inverse trig/i.test(text)) {
      return { stars: 2, reason: 'Useful bridge concept referenced in multi-step problems.' };
    }
    if (/past[-\s]*exam|exam arena/i.test(text)) {
      return { stars: 2, reason: 'Practice archive for incourse & conceptual readiness.' };
    }
    return { stars: 1, reason: 'Supplementary topic with low standalone weight on written Finals.' };
  }

  // 3. Explicit high-yield overrides (★★★)
  for (const rule of HIGH_YIELD_HEADING_PATTERNS) {
    if (rule.course && rule.course !== courseCode) continue;
    if (rule.lesson && rule.lesson !== lessonId) continue;
    if (rule.re.test(text)) {
      return { stars: 3, reason: rule.reason };
    }
  }

  // 4. Objective MCQ / Quick Mastery Checks: ★★★ on courses with MCQ/T-F incourses, ★★ otherwise
  if (/mastery check|mastery quiz|quick-check quiz|objective quiz|capstone quiz|true\s*\/\s*false/i.test(text)) {
    const mcqCourse = courseCode === 'AST101' || courseCode === 'MATH106';
    return {
      stars: mcqCourse ? 3 : 2,
      reason: mcqCourse
        ? 'Directly trains Part 1 MCQs / Compulsory True-False justification blocks.'
        : 'Rapid self-check for incourse & Compulsory Q1 conceptual items.',
    };
  }

  // 5. Guided Worked Examples inside ★★★ lessons inherit ★★★; otherwise ★★
  if (/^example\s*\d|guided worked examples|step-by-step/i.test(text)) {
    return {
      stars: fallbackLessonStars === 3 ? 3 : 2,
      reason: 'Step-by-step worked model solution for written exam execution.',
    };
  }

  // 6. Clean fallback: ★★ Regular/Core foundation (or 2 if inside a 3-star lesson's general intro/map)
  return {
    stars: fallbackLessonStars >= 2 ? 2 : 1,
    reason: 'Core conceptual & interactive foundation supporting exam problem-solving.',
  };
}

/* ---------- Build-Time Lesson Content Cleanup & High-Yield Exam Supplements ---------- */
export function enhanceLessonContent(lessonId, courseCode, contentHtml) {
  let html = contentHtml;

  // 1. Remove AI-builder completion meta-banners at the end of AST102 L14 & MATH104 L15
  if (lessonId === 'ast102-l14') {
    const marker = html.search(/AST\s*102\s*Course\s*Complete\s*[—–-]\s*All\s*14\s*Lessons\s*Built!/i);
    if (marker !== -1) {
      const secStart = html.lastIndexOf('<section', marker);
      const secEnd = html.indexOf('</section>', marker);
      if (secStart !== -1 && secEnd !== -1) {
        html = html.slice(0, secStart) + html.slice(secEnd + '</section>'.length);
      }
    }
  }
  if (lessonId === 'math104-l15') {
    const marker = html.indexOf('class="finale-banner"');
    if (marker !== -1) {
      const divStart = html.lastIndexOf('<div', marker);
      const divEnd = html.indexOf('</div>', marker);
      if (divStart !== -1 && divEnd !== -1) {
        html = html.slice(0, divStart) + html.slice(divEnd + '</div>'.length);
      }
    }
  }

  // 2. Strip decorative leading emojis from <h2>/<h3> headings so TOC & headings stay strictly academic
  html = html.replace(
    /(<h[23][^>]*>\s*)(?:🏛️|⚡|🎓|&#127891;|&#9889;|&#127963;&#65039;)\s*/gu,
    '$1'
  );

  // 3. Inject targeted 2024–2025 Exam Intelligence Supplements & Scope Notes where needed
  const supplement = LESSON_SUPPLEMENTS[lessonId];
  if (supplement) {
    if (supplement.position === 'top') {
      html = `${supplement.html}\n${html}`;
    } else {
      html = `${html}\n${supplement.html}`;
    }
  }

  return html;
}

const LESSON_SUPPLEMENTS = {
  'ast101-l07': {
    position: 'bottom',
    html: `
    <section class="exam-supplement" aria-labelledby="supp-ast101-l07">
      <div class="exam-supplement__eyebrow">2025 FINAL EXAM ADDITION &middot; Q1(e) [3 MARKS]</div>
      <h2 id="supp-ast101-l07">2025 Final Worked Problem: Slope Interpretation &amp; Correlation Ratio</h2>
      <div class="exam-script-block">
        <div class="exam-script-q">
          <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2025, Q1(e) [3 Marks]</span>
          For monthly income in thousand Taka ($Y$) and years of schooling ($X$), the fitted OLS regression line is $\\hat{Y} = -43.68 + 8.66X$, with Pearson's correlation coefficient $r = 0.64$ and correlation ratio $\\eta = 0.80$.<br>
          <strong>(i)</strong> Interpret the estimated slope and intercept in context. [1.5]<br>
          <strong>(ii)</strong> Comparing $r = 0.64$ and $\\eta = 0.80$, should you revise a purely linear description of the relationship? Justify mathematically. [1.5]
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Answer to (i):</strong></p>
          <p>&bull; <strong>Slope ($\\hat{\\beta} = +8.66$):</strong> Holding the linear model specification, for each additional $1$ year of schooling, an individual's predicted average monthly income increases by <strong>Tk. $8.66$ thousand (i.e., Tk. $8{,}660$)</strong>.</p>
          <p>&bull; <strong>Intercept ($\\hat{\\alpha} = -43.68$):</strong> Mathematically, $\\hat{Y} = -43.68$ thousand Taka when $X = 0$ years of schooling. However, this intercept has <strong>no literal practical meaning</strong> because monthly income cannot be negative and $X = 0$ represents extrapolation outside the observed range of formal schooling.</p>
          <p><strong>Answer to (ii):</strong></p>
          <p><strong>Yes, a purely linear description must be revised.</strong> For any bivariate dataset, $0 \\le r^2 \\le \\eta^2 \\le 1$, where $\\eta^2 - r^2$ measures the departure from linearity:</p>
          <p>$$r^2 = (0.64)^2 = 0.4096, \\qquad \\eta^2 = (0.80)^2 = 0.6400 \\implies \\eta^2 - r^2 = 0.6400 - 0.4096 = 0.2304 &gt; 0.$$</p>
          <p>While a straight line explains $40.96\\%$ of the variance in monthly income, allowing for group-level curvature explains $64.00\\%$ (an additional $23.04\\%$ of variance). Because $\\eta = 0.80$ is substantially larger than $|r| = 0.64$, the true relationship between schooling and income is <strong>markedly curvilinear (nonlinear)</strong>, and a straight-line model understates the overall strength of association.</p>
        </div>
      </div>
    </section>`,
  },

  'math103-l11': {
    position: 'top',
    html: `
    <div class="callout callout--note exam-scope-advisory">
      <div class="callout__title">ISRT Exam Revision Priority (2023–2025 Empirical Pattern)</div>
      <p>Across all 2023, 2024, and 2025 Incourse and Year Final papers for <strong>MATH103</strong>, <strong>Propositional Logic &amp; Truth Tables (★)</strong> carried <strong>0 exam marks</strong>, whereas <strong>Counting with Restrictions &amp; Principle of Inclusion–Exclusion (★★★)</strong> appeared every single year (e.g., Final 2025 Q7b Tea/Coffee survey, restricted committees, and digit divisibility). Master Sections 4–6 first during exam preparation.</p>
    </div>`,
  },

  'math103-l13': {
    position: 'bottom',
    html: `
    <section class="exam-supplement" aria-labelledby="supp-math103-l13">
      <div class="exam-supplement__eyebrow">GROUP C EXAM SUPPLEMENT &middot; 2024–2025 FINALS</div>
      <h2 id="supp-math103-l13">Additional Past-Exam Algorithms: Prim’s MST &amp; Floyd–Warshall All-Pairs Shortest Path</h2>
      <div class="exam-script-block">
        <div class="exam-script-q">
          <span class="exam-script-q__label">Exam Paper Question &middot; MATH103 Group C Algorithm Pair [6 Marks]</span>
          <strong>(a)</strong> State Prim's Algorithm for finding a Minimum Spanning Tree (MST) of a connected weighted graph $G = (V, E)$, and distinguish it from Kruskal's Algorithm. [3]<br>
          <strong>(b)</strong> State the dynamic-programming recurrence of the Floyd–Warshall All-Pairs Shortest Path Algorithm and explain how it detects negative-weight cycles. [3]
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Answer to (a) — Prim's Algorithm &amp; Comparison with Kruskal's:</strong></p>
          <p>Let $G = (V, E)$ be a connected, undirected, weighted graph with $|V| = n$ vertices.</p>
          <p><strong>Step 1 (Initialization):</strong> Choose an arbitrary starting vertex $v_0 \\in V$. Set the visited tree vertex set $T = \\{v_0\\}$ and tree edge set $E_T = \\varnothing$.</p>
          <p><strong>Step 2 (Greedy Expansion — repeat $n - 1$ times):</strong> Among all edges $(u, v) \\in E$ having one endpoint $u \\in T$ and the other endpoint $v \\in V \\setminus T$, select an edge $e^* = (u^*, v^*)$ of <strong>minimum weight</strong>. Update $T \\leftarrow T \\cup \\{v^*\\}$ and $E_T \\leftarrow E_T \\cup \\{e^*\\}$.</p>
          <p><strong>Step 3 (Termination):</strong> When $|T| = n$, $(V, E_T)$ is a Minimum Spanning Tree with $n - 1$ edges.</p>
          <p><strong>Distinction from Kruskal's Algorithm:</strong> Prim's algorithm is <em>vertex-based</em> and always maintains a <strong>single connected tree</strong> growing outward from $v_0$, whereas Kruskal's algorithm is <em>edge-based</em>, scanning all edges globally in non-decreasing order of weight and merging a <strong>forest of disconnected components</strong> whenever an edge does not form a cycle.</p>
          <p><strong>Answer to (b) — Floyd–Warshall Algorithm:</strong></p>
          <p>Label the vertices $V = \\{1, 2, \\dots, n\\}$. Let $D^{(k)}_{ij}$ denote the length of the shortest path from vertex $i$ to vertex $j$ using only intermediate vertices from $\\{1, 2, \\dots, k\\}$.</p>
          <p><strong>Step 1 (Base Matrix $k = 0$):</strong> Set $D^{(0)}_{ii} = 0$, $D^{(0)}_{ij} = w(i, j)$ if edge $(i, j) \\in E$, and $D^{(0)}_{ij} = +\\infty$ if no direct edge exists.</p>
          <p><strong>Step 2 (Iterative Relaxation for $k = 1, 2, \\dots, n$):</strong> For every ordered pair $(i, j) \\in V \\times V$, compute:</p>
          <p>$$D^{(k)}_{ij} = \\min\\!\\left(D^{(k-1)}_{ij},\\; D^{(k-1)}_{ik} + D^{(k-1)}_{kj}\\right).$$</p>
          <p><strong>Step 3 (Output &amp; Negative-Cycle Detection):</strong> After $k = n$ stages ($O(n^3)$ time), $D^{(n)}_{ij}$ gives the exact all-pairs shortest distance. If any diagonal entry satisfies $D^{(n)}_{ii} &lt; 0$ for some $i \\in \\{1, \\dots, n\\}$, then $G$ contains a <strong>negative-weight cycle</strong> reachable from vertex $i$.</p>
        </div>
      </div>
    </section>`,
  },

  'math105-l05': {
    position: 'bottom',
    html: `
    <section class="exam-supplement" aria-labelledby="supp-math105-l05">
      <div class="exam-supplement__eyebrow">ISRT PAST-EXAM WORKED SUPPLEMENT &middot; PIECEWISE &amp; RATIONAL TRIG</div>
      <h2 id="supp-math105-l05">Worked Exam Problems: Piecewise Absolute-Value &amp; Weierstrass Substitution</h2>
      <div class="exam-script-block">
        <div class="exam-script-q">
          <span class="exam-script-q__label">Exam Paper Question &middot; MATH105 Integration Drill [3 + 4 = 7 Marks]</span>
          Evaluate the following definite integrals showing all intermediate limits and substitutions:<br>
          <strong>(a)</strong> $\\displaystyle \\int_1^4 \\frac{|2 - x|}{x}\\,dx$ [3 Marks] &emsp;&emsp;
          <strong>(b)</strong> $\\displaystyle \\int_0^{\\pi/2} \\frac{dx}{2 + \\cos x}$ [4 Marks]
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Solution to (a):</strong></p>
          <p><strong>Step 1 (Split at the sign-change root):</strong> Inside $[1, 4]$, $2 - x = 0$ at $x = 2$. By definition of absolute value:</p>
          <p>$$|2 - x| = \\begin{cases} 2 - x, &amp; 1 \\le x \\le 2 \\\\ x - 2, &amp; 2 \\le x \\le 4. \\end{cases}$$</p>
          <p><strong>Step 2 (Apply Additivity &amp; Integrate):</strong></p>
          <p>$$\\begin{aligned} \\int_1^4 \\frac{|2 - x|}{x}\\,dx &amp;= \\int_1^2 \\frac{2 - x}{x}\\,dx + \\int_2^4 \\frac{x - 2}{x}\\,dx = \\int_1^2 \\left(\\frac{2}{x} - 1\\right)dx + \\int_2^4 \\left(1 - \\frac{2}{x}\\right)dx \\\\ &amp;= \\Big[2\\ln x - x\\Big]_1^2 + \\Big[x - 2\\ln x\\Big]_2^4 \\\\ &amp;= \\big[(2\\ln 2 - 2) - (0 - 1)\\big] + \\big[(4 - 2\\ln 4) - (2 - 2\\ln 2)\\big] \\\\ &amp;= (2\\ln 2 - 1) + (2 - 4\\ln 2 + 2\\ln 2) = \\mathbf{1}. \\end{aligned}$$</p>
          <p><strong>Solution to (b):</strong></p>
          <p><strong>Step 1 (Weierstrass Tangent Half-Angle Substitution):</strong> Let $t = \\tan(x/2)$. Then:</p>
          <p>$$\\cos x = \\frac{1 - t^2}{1 + t^2}, \\qquad dx = \\frac{2\\,dt}{1 + t^2}.$$</p>
          <p><strong>Step 2 (Change Limits):</strong> When $x = 0$, $t = \\tan(0) = 0$; when $x = \\frac{\\pi}{2}$, $t = \\tan(\\frac{\\pi}{4}) = 1$.</p>
          <p><strong>Step 3 (Substitute &amp; Evaluate):</strong></p>
          <p>$$\\begin{aligned} \\int_0^{\\pi/2} \\frac{dx}{2 + \\cos x} &amp;= \\int_0^1 \\frac{\\dfrac{2\\,dt}{1 + t^2}}{2 + \\dfrac{1 - t^2}{1 + t^2}} = \\int_0^1 \\frac{2\\,dt}{2(1 + t^2) + (1 - t^2)} = \\int_0^1 \\frac{2\\,dt}{3 + t^2} \\\\ &amp;= 2 \\cdot \\frac{1}{\\sqrt{3}}\\left[\\tan^{-1}\\!\\left(\\frac{t}{\\sqrt{3}}\\right)\\right]_0^1 = \\frac{2}{\\sqrt{3}}\\left(\\frac{\\pi}{6} - 0\\right) = \\mathbf{\\frac{\\pi}{3\\sqrt{3}}}. \\end{aligned}$$</p>
        </div>
      </div>
    </section>`,
  },

  'math106-l03': {
    position: 'bottom',
    html: `
    <section class="exam-supplement" aria-labelledby="supp-math106-l03">
      <div class="exam-supplement__eyebrow">2025 FINAL EXAM ADDITIONS &middot; Q7(b) &amp; Q4(b) [9 MARKS]</div>
      <h2 id="supp-math106-l03">2025 Final Worked Questions: Parametric Bifurcation &amp; Nonlinear Trig System</h2>
      <div class="exam-script-block">
        <div class="exam-script-q">
          <span class="exam-script-q__label">Question 1 &middot; MATH106 Year Final 2025, Q7(b) [4 Marks]</span>
          For which value(s) of the constant $a$ does the following linear system have <strong>(i)</strong> no solutions, <strong>(ii)</strong> exactly one solution, or <strong>(iii)</strong> infinitely many solutions?
          $$\\begin{cases} x_1 + x_2 + x_3 = 4 \\\\ x_3 = 2 \\\\ (a^2 - 4)x_3 = a - 2 \\end{cases}$$
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Step 1 (Compatibility Condition on $x_3$):</strong> Equation (2) fixes $x_3 = 2$. Substituting $x_3 = 2$ into Equation (3) requires:</p>
          <p>$$2(a^2 - 4) = a - 2 \\implies 2a^2 - a - 6 = 0 \\implies (a - 2)(2a + 3) = 0 \\implies a = 2 \\text{ or } a = -\\frac{3}{2}.$$</p>
          <p><strong>Step 2 (Case-by-Case Analysis):</strong></p>
          <p>&bull; <strong>Case A ($a \\ne 2$ and $a \\ne -\\frac{3}{2}$):</strong> Equation (3) is incompatible with $x_3 = 2$ (specifically, for $a = -2$, Equation (3) gives $0 = -4$; for $a \\notin \\{\\pm 2, -\\frac{3}{2}\\}$, it gives $x_3 = \\frac{1}{a+2} \\ne 2$). Hence the system is <strong>inconsistent (no solution)</strong>.</p>
          <p>&bull; <strong>Case B ($a = 2$ or $a = -\\frac{3}{2}$):</strong> Both Equations (2) and (3) are satisfied by $x_3 = 2$. Equation (1) then reduces to $x_1 + x_2 = 4 - 2 = 2$. Letting $x_2 = t \\in \\mathbb{R}$ (one free parameter), we obtain $(x_1, x_2, x_3) = (2 - t,\\; t,\\; 2)$, giving <strong>infinitely many solutions</strong>.</p>
          <p>&bull; <strong>Unique Solution Check:</strong> Because $x_1$ and $x_2$ appear only in the first equation as $x_1 + x_2$, the coefficient matrix has at most $2$ pivots for $3$ unknowns ($\\text{rank}(A) \\le 2 &lt; 3$) for <em>every</em> $a \\in \\mathbb{R}$.</p>
          <p><strong>Final Summary:</strong> <strong>(i) No solution:</strong> $a \\in \\mathbb{R} \\setminus \\{2, -\\frac{3}{2}\\}$; &nbsp;<strong>(ii) Exactly one solution:</strong> <strong>No value of $a$</strong>; &nbsp;<strong>(iii) Infinitely many solutions:</strong> $a = 2$ and $a = -\\frac{3}{2}$.</p>
        </div>

        <div class="exam-script-q" style="margin-top:0.5rem;">
          <span class="exam-script-q__label">Question 2 &middot; MATH106 Year Final 2025, Q4(b) [5 Marks]</span>
          Solve the nonlinear trigonometric system for $\\alpha, \\beta, \\gamma$ subject to $0 \\le \\alpha \\le 2\\pi$, $0 \\le \\beta \\le 2\\pi$, and $0 \\le \\gamma &lt; \\pi$:
          $$\\begin{cases} 2\\sin\\alpha - \\cos\\beta + 3\\tan\\gamma = 3 \\\\ 4\\sin\\alpha + 2\\cos\\beta - 2\\tan\\gamma = 2 \\\\ 6\\sin\\alpha - 3\\cos\\beta + \\tan\\gamma = 9 \\end{cases}$$
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Step 1 (Linearize by Substitution):</strong> Let $u = \\sin\\alpha$, $v = \\cos\\beta$, and $w = \\tan\\gamma$. The augmented matrix $[A \\mid \\mathbf{b}]$ is:</p>
          <p>$$\\left[\\begin{array}{ccc|c} 2 &amp; -1 &amp; 3 &amp; 3 \\\\ 4 &amp; 2 &amp; -2 &amp; 2 \\\\ 6 &amp; -3 &amp; 1 &amp; 9 \\end{array}\\right] \\xrightarrow[R_3 \\leftarrow R_3 - 3R_1]{R_2 \\leftarrow R_2 - 2R_1} \\left[\\begin{array}{ccc|c} 2 &amp; -1 &amp; 3 &amp; 3 \\\\ 0 &amp; 4 &amp; -8 &amp; -4 \\\\ 0 &amp; 0 &amp; -8 &amp; 0 \\end{array}\\right].$$</p>
          <p><strong>Step 2 (Back-Substitution for $u, v, w$):</strong></p>
          <p>&bull; From Row 3: $-8w = 0 \\implies w = 0$.</p>
          <p>&bull; From Row 2: $4v - 8(0) = -4 \\implies v = -1$.</p>
          <p>&bull; From Row 1: $2u - (-1) + 3(0) = 3 \\implies 2u = 2 \\implies u = 1$.</p>
          <p><strong>Step 3 (Solve for Angles on Given Domains):</strong></p>
          <p>&bull; $\\sin\\alpha = 1$ on $[0, 2\\pi] \\implies \\mathbf{\\alpha = \\dfrac{\\pi}{2}}$.</p>
          <p>&bull; $\\cos\\beta = -1$ on $[0, 2\\pi] \\implies \\mathbf{\\beta = \\pi}$.</p>
          <p>&bull; $\\tan\\gamma = 0$ on $[0, \\pi) \\implies \\mathbf{\\gamma = 0}$ (note: if the domain includes $\\pi$, then $\\gamma = 0, \\pi$).</p>
          <p><strong>Final Answer:</strong> $(\\alpha, \\beta, \\gamma) = \\left(\\dfrac{\\pi}{2},\\; \\pi,\\; 0\\right)$.</p>
        </div>
      </div>
    </section>`,
  },

  'math106-l09': {
    position: 'top',
    html: `
    <div class="callout callout--note exam-scope-advisory">
      <div class="callout__title">Exam Revision Pointer (Cross-Course Bridge)</div>
      <p>This lesson builds geometric intuition connecting Linear Algebra to <strong>AST101 Lessons 7–9 (OLS Regression)</strong>. On written <strong>MATH106 Year Finals (2020–2025)</strong>, regression matrices are tested algebraically via <strong>Generalized Inverses of $X^T X$</strong> in <strong>Lesson 7 (★★★)</strong> (e.g., Final 2025 Q8b: proving $G^T$ is a g-inverse of $X^T X$ and $XGX^T X = X$).</p>
    </div>`,
  },

  'math106-l12': {
    position: 'bottom',
    html: `
    <section class="exam-supplement" aria-labelledby="supp-math106-l12">
      <div class="exam-supplement__eyebrow">2025 FINAL EXAM ADDITION &middot; Q2(b) [3 MARKS]</div>
      <h2 id="supp-math106-l12">2025 Final Worked Problem: Singular Values of a $3 \\times 2$ Matrix</h2>
      <div class="exam-script-block">
        <div class="exam-script-q">
          <span class="exam-script-q__label">Exam Paper Question &middot; MATH106 Year Final 2025, Q2(b) [3 Marks]</span>
          Find the singular values of the matrix $A = \\begin{bmatrix} 1 &amp; 0 \\\\ 1 &amp; 1 \\\\ -1 &amp; 1 \\end{bmatrix}$.
        </div>
        <div class="exam-script-ans">
          <span class="exam-script-ans__label">Model Exam-Script Answer</span>
          <p><strong>Step 1 (Compute the Symmetric Gram Matrix $A^T A$):</strong> Since $A$ is $3 \\times 2$, $A^T A$ is a $2 \\times 2$ symmetric positive semidefinite matrix:</p>
          <p>$$A^T A = \\begin{bmatrix} 1 &amp; 1 &amp; -1 \\\\ 0 &amp; 1 &amp; 1 \\end{bmatrix} \\begin{bmatrix} 1 &amp; 0 \\\\ 1 &amp; 1 \\\\ -1 &amp; 1 \\end{bmatrix} = \\begin{bmatrix} 1^2 + 1^2 + (-1)^2 &amp; 0 + 1 - 1 \\\\ 0 + 1 - 1 &amp; 0^2 + 1^2 + 1^2 \\end{bmatrix} = \\begin{bmatrix} 3 &amp; 0 \\\\ 0 &amp; 2 \\end{bmatrix}.$$</p>
          <p><strong>Step 2 (Find Eigenvalues of $A^T A$):</strong> Because $A^T A$ is diagonal, its characteristic equation is $\\det(\\lambda I_2 - A^T A) = (\\lambda - 3)(\\lambda - 2) = 0$, giving eigenvalues $\\lambda_1 = 3$ and $\\lambda_2 = 2$ (ordered $\\lambda_1 \\ge \\lambda_2 \\ge 0$).</p>
          <p><strong>Step 3 (Extract Singular Values $\\sigma_i = \\sqrt{\\lambda_i}$):</strong></p>
          <p>$$\\sigma_1 = \\sqrt{\\lambda_1} = \\mathbf{\\sqrt{3}}, \\qquad \\sigma_2 = \\sqrt{\\lambda_2} = \\mathbf{\\sqrt{2}}.$$</p>
          <p><strong>Final Answer:</strong> The singular values of $A$ are $\\sigma_1 = \\sqrt{3}$ and $\\sigma_2 = \\sqrt{2}$.</p>
        </div>
      </div>
    </section>`,
  },
};
