/* ==========================================================================
   ECON107 — Remaining PYQ Accordion Upgrades (L1, L2, L3, L5, L6, L7, L8, L9, L12, L13)
   Ensures 100% (61 / 61) of ECON107 Past Exam Questions display the exact
   Exam Paper Question prompt and a complete, formal ISRT exam-script answer.
   ========================================================================== */

export const ECON_REST_UPGRADES = {
  'econ107-l01': [
    {
      label: 'ECON107 L1 All 6 PYQ Items Formal Exam-Script Format',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q1(a) [2 Marks]</span> Describe the role of scarcity and efficiency in economics.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q1(a) [2 Marks]</span>
                  Describe the role of scarcity and efficiency in economics.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Role of Scarcity:</strong> Productive inputs (land, labor, capital, technology) are finite relative to unlimited human wants. Scarcity forces every society to make fundamental allocation choices regarding <em>what</em> goods to produce, <em>how</em> to produce them, and <em>for whom</em>.</p>
                  <p><strong>2. Role of Efficiency:</strong> Given scarcity, society seeks <em>economic efficiency</em>—organizing production and distribution without waste so that no individual can be made better off without making someone else worse off (Pareto/allocative efficiency on the PPF).</p>
                  <p><strong>Synthesis:</strong> Scarcity poses the central economic problem, while efficiency provides the normative criterion for utilizing limited resources optimally; together they constitute the twin themes of economics.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">1st In-course 2024 • Q1(a,b) [4 Marks]</span> Do you consider studying economics important? Explain "Scarcity and efficiency are twin themes of economics."</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2024, Q1(a,b) [2 + 2 = 4 Marks]</span>
                  <strong>(a)</strong> Do you consider studying economics important? Why or why not? [2]<br>
                  <strong>(b)</strong> Explain the statement: &ldquo;Scarcity and efficiency are the twin themes of economics.&rdquo; [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Yes, studying economics is essential for three reasons: (1) <em>Understanding National &amp; Global Affairs</em>—it explains inflation, unemployment, trade deficits, and financial crises; (2) <em>Rational Personal &amp; Business Decisions</em>—it trains individuals and firms to weigh opportunity costs and marginal benefits under budget/time constraints; and (3) <em>Informed Citizenship &amp; Policy Analysis</em>—it enables rigorous evaluation of tax, subsidy, monetary, and welfare policies.</p>
                  <p><strong>Answer to (b):</strong> In a hypothetical world without <em>scarcity</em>, all goods would be infinite free goods (like air), rendering prices, markets, and economizing unnecessary. Conversely, because resources are scarce, wasting them lowers human welfare—making <em>efficiency</em> (producing maximum valued output from available inputs) indispensable. Economics therefore studies how societies acknowledge scarcity and organize institutions to achieve efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">1st In-course 2023 • Q1(a,b) [4 Marks]</span> Distinguish with examples: (a) Normative and positive economics; (b) Post-hoc fallacy and fallacy of composition.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2023, Q1(a,b) [2 + 2 = 4 Marks]</span>
                  Distinguish clearly with suitable examples between:<br>
                  <strong>(a)</strong> Positive economics and normative economics. [2]<br>
                  <strong>(b)</strong> The post-hoc fallacy and the fallacy of composition. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Positive vs. Normative Economics:</strong><br>
                  &bull; <em>Positive Economics</em> analyzes objective facts and cause-and-effect behavioral relationships (&ldquo;what is&rdquo;) that can be empirically tested and refuted with statistical data. <em>Example:</em> &ldquo;Raising the excise tax on cigarettes by 20% reduces youth smoking by 8%.&rdquo;<br>
                  &bull; <em>Normative Economics</em> involves ethical precepts and value judgments (&ldquo;what ought to be&rdquo;) settled by political debate rather than econometrics alone. <em>Example:</em> &ldquo;The government ought to guarantee free universal healthcare to low-income households.&rdquo;</p>
                  <p><strong>Answer to (b) — Post-Hoc Fallacy vs. Fallacy of Composition:</strong><br>
                  &bull; <em>Post-Hoc Fallacy (post hoc, ergo propter hoc):</em> Falsely inferring that Event A caused Event B merely because A preceded B chronologically. <em>Example:</em> Observing that tax revenues rose after a tax cut during an economic boom and falsely attributing the entire revenue gain to the tax cut while ignoring GDP growth.<br>
                  &bull; <em>Fallacy of Composition:</em> Falsely assuming that what holds true for a single individual or firm holds true when everyone acts simultaneously. <em>Example:</em> A single farmer earning higher income from a bumper crop vs. all farmers harvesting a bumper crop simultaneously, which crashes market agricultural prices and reduces aggregate farm income.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">Final 2023 • Q1(a,b) [4 Marks]</span> Define Economics &amp; its benefits for Applied Statistics and Data Science; importance of "holding other things constant."</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023, Q1(a,b) [2 + 2 = 4 Marks]</span>
                  <strong>(a)</strong> Define Economics and state its benefits for students of Applied Statistics and Data Science. [2]<br>
                  <strong>(b)</strong> Explain the importance of &ldquo;holding other things constant&rdquo; (<em>ceteris paribus</em>) in economic analysis with an example. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Economics is the study of how societies use scarce resources to produce valuable commodities and distribute them among different people. For Applied Statistics and Data Science students, economics supplies structural theory for causal inference and econometrics, guides variable selection in demand/pricing/macro forecasting models, and prevents spurious data-mining conclusions.</p>
                  <p><strong>Answer to (b):</strong> In observational economic systems, dozens of variables (prices, incomes, interest rates, weather) change simultaneously. Holding all confounding variables constant (<em>ceteris paribus</em>)—either via controlled regression covariates or natural experiments—is indispensable to isolate the pure partial effect of one variable on another; for instance, isolating how higher coffee prices reduce coffee purchases while holding consumer income Growth constant.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q1(c) [2 Marks]</span> Explain the role of "holding other things constant" in defining the downward-sloping demand curve.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q1(c) [2 Marks]</span>
                  Explain the role of &ldquo;holding other things constant&rdquo; in defining the downward-sloping nature of a demand curve with an example.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p>The Law of Downward-Sloping Demand states that when a good's own price rises, its quantity demanded falls—<strong>provided all other demand determinants (consumer income, tastes, population, and prices of related goods) remain constant</strong>. If other factors vary simultaneously, observed market quantities can move in the same direction as price: for example, during rapid income growth in Dhaka, both air-conditioner prices and air-conditioner sales may rise together because the rightward income-driven shift of demand masks the negative own-price slope along any single demand curve.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2019 • Q1(e) &amp; 1st In-course 2017 • Q1(b) [2 Marks]</span> Define and give an economic example of the fallacy of composition.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2019, Q1(e) [2 Marks]</span>
                  Define the fallacy of composition and illustrate it with a suitable economic example.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Definition:</strong> The <em>fallacy of composition</em> is the logical error of assuming that a property or outcome that holds true for one individual agent acting alone must also hold true for the aggregate economy when all agents act simultaneously.</p>
                  <p><strong>Economic Example (Paradox of Thrift / Bumper Crop):</strong> If a single rice farmer doubles his harvest while market price is unchanged, his individual revenue doubles. However, if <em>all</em> rice farmers achieve a bumper harvest simultaneously, aggregate market supply shifts sharply right against inelastic food demand, causing market rice prices to plunge so severely that total farm revenue across the agricultural sector actually falls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l02': [
    {
      label: 'ECON107 L2 First 2 PYQ Items (Rice & Perfume + Salon PPF Table)',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">1st In-course 2025 • Q1\(a,b\) \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">1st In-course 2020 • Q4 \[2\.5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">1st In-course 2025 • Q1(a,b) [5 Marks]</span> Economy producing rice &amp; perfume: Define PPF, identify infeasible/inefficient points, and compare PPFs for high- vs. low-income nations.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2025, Q1(a,b) [2.5 + 2.5 = 5 Marks]</span>
                  Suppose an economy produces only two goods: Rice (a necessity) and Perfume (a luxury).<br>
                  <strong>(a)</strong> Define the Production Possibility Frontier (PPF) and explain the meaning of inefficient and infeasible points. [2.5]<br>
                  <strong>(b)</strong> Compare the PPFs and chosen production points of a low-income country versus a high-income country. [2.5]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> The PPF is the boundary curve showing all maximum combinations of Rice and Perfume that the economy can produce given its fixed endowment of resources and technology.<br>
                  &bull; <em>Inefficient point (strictly inside the PPF):</em> Arises from unemployment or resource misallocation; the economy can increase Rice, Perfume, or both at zero opportunity cost.<br>
                  &bull; <em>Infeasible/Unattainable point (strictly outside the PPF):</em> Cannot be produced with existing inputs and technology.</p>
                  <p><strong>Answer to (b):</strong> Plotting Rice (necessity) on the horizontal axis and Perfume (luxury) on the vertical axis: a <strong>low-income country</strong> has a smaller inward PPF due to limited capital and technology and must devote nearly all its productive capacity to basic subsistence Rice (operating near the Rice-axis intercept with minimal Perfume). A <strong>high-income country</strong> possesses an outward-shifted PPF and operates at a point producing both abundant Rice and a large volume of luxury Perfume.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">1st In-course 2020 • Q4 [2.5 Marks]</span> A salon has 10 hours of labor/day (haircut = 0.5 hr, facial = 2 hrs). Construct &amp; interpret the salon's PPF.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2020, Q4 [2.5 Marks]</span>
                  A beauty salon has \\(10\\) hours of skilled labor available per day. Each haircut requires \\(0.5\\) hour and each facial requires \\(2\\) hours. Derive the algebraic equation, schedule, and shape of the salon's daily PPF.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Resource Constraint Equation:</strong> Let \\(F\\) = number of facials and \\(H\\) = number of haircuts per day. Full utilization of the \\(10\\) labor hours gives:</p>
                  <p>\\[2F + 0.5H = 10 \\implies \\mathbf{H = 20 - 4F} \\quad (0 \\le F \\le 5).\\]</p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Facials (\\(F\\))</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Haircuts (\\(H = 20 - 4F\\))</strong></td><td>20</td><td>16</td><td>12</td><td>8</td><td>4</td><td>0</td></tr>
                    </tbody>
                  </table>
                  <p><strong>2. Shape &amp; Opportunity Cost:</strong> Because labor is homogeneous and equally transferable between tasks, the PPF is a <strong>downward-sloping straight line</strong> from \\((F=0, H=20)\\) to \\((F=5, H=0)\\) with a constant slope \\(dH/dF = -4\\): the opportunity cost of \\(1\\) facial is always \\(4\\) haircuts (and \\(1\\) haircut costs \\(0.25\\) facials).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l03': [
    {
      label: 'ECON107 L3 Items 1 & 2 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2025 • Q2\(a,b\) \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">Final 2024 • Q1\(3,4\) &amp; Q2\(a\) \[7 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q2(a,b) [5 Marks]</span> Why is a supply curve upward sloping? Discuss three factors that impact the supply of wrist watches.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q2(a,b) [2 + 3 = 5 Marks]</span>
                  <strong>(a)</strong> Why does a market supply curve slope upward from left to right? [2]<br>
                  <strong>(b)</strong> Discuss three major non-price determinants that shift the supply curve of wrist watches. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> In the short run, firms operate with fixed plant and machinery. By the <strong>Law of Diminishing Marginal Returns</strong>, hiring additional workers and materials to expand output lowers marginal product and raises the <em>marginal cost</em> of each extra unit. Competitive profit-maximizing firms (\\(P = MC\\)) therefore require a higher market price to cover the higher marginal cost of supplying extra units, making the supply curve slope upward.</p>
                  <p><strong>Answer to (b) — Three Supply Shifters for Wrist Watches:</strong><br>
                  1. <em>Prices of Production Inputs:</em> An increase in the cost of quartz/mechanical movements, stainless steel, sapphire glass, or technician wages raises per-watch cost and shifts wrist-watch supply <strong>leftward</strong>.<br>
                  2. <em>Production Technology:</em> Precision robotic assembly reduces defect rates and unit labor cost, shifting wrist-watch supply <strong>rightward</strong>.<br>
                  3. <em>Government Taxes, Tariffs &amp; Trade Policy:</em> Higher import duties on watch movements or excise taxes act as a unit cost hike and shift supply <strong>leftward</strong>, whereas production subsidies or tariff reductions shift supply <strong>rightward</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q1(3,4) &amp; Q2(a) [7 Marks]</span> Backward-bending labor supply; coffee downward demand via substitution effect; movement along vs. shift for ice cream.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q1(3,4) &amp; Q2(a) [2 + 2 + 3 = 7 Marks]</span>
                  <strong>Q1(3):</strong> Give an example of a backward-bending supply curve and explain why it bends backward. [2]<br>
                  <strong>Q1(4):</strong> Explain the downward-sloping demand for coffee using the substitution effect. [2]<br>
                  <strong>Q2(a):</strong> Using the market for ice cream, distinguish between a movement along the demand curve and a shift of the demand curve. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q1(3):</strong> Individual <strong>labor supply</strong> bends backward at high wage rates. At low-to-moderate wages, a wage hike makes leisure costlier in forgone earnings, so the <em>substitution effect</em> dominates and workers supply more hours (upward-sloping segment). Above a high wage threshold, workers feel sufficiently affluent to purchase more leisure time with family; the <em>income effect</em> dominates the substitution effect, causing hours worked to decline as wages rise further.</p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 380 185" width="380" height="185" role="img" aria-label="Side-by-side diagrams of Backward-Bending Labor Supply curve and Demand Movement versus Shift">
                      <!-- Left: Labor supply -->
                      <line x1="36" y1="156" x2="170" y2="156" stroke="currentColor" stroke-width="1.2"/>
                      <line x1="36" y1="156" x2="36" y2="18" stroke="currentColor" stroke-width="1.2"/>
                      <path d="M 52 145 C 122 122, 138 92, 128 68 C 118 46, 98 32, 82 22" fill="none" stroke="#0F5E59" stroke-width="2.4"/>
                      <circle cx="131" cy="78" r="3.5" fill="#BE123C"/>
                      <text x="138" y="82" font-size="9" font-weight="700" fill="#BE123C">W*</text>
                      <text x="102" y="172" font-size="9.5" text-anchor="middle" fill="currentColor">Hours Worked (L)</text>
                      <text x="14" y="88" font-size="9.5" text-anchor="middle" transform="rotate(-90 14 88)" fill="currentColor">Wage (W)</text>
                      <!-- Right: Movement vs Shift -->
                      <line x1="215" y1="156" x2="360" y2="156" stroke="currentColor" stroke-width="1.2"/>
                      <line x1="215" y1="156" x2="215" y2="18" stroke="currentColor" stroke-width="1.2"/>
                      <line x1="230" y1="34" x2="305" y2="144" stroke="#0F5E59" stroke-width="2.2"/>
                      <line x1="268" y1="34" x2="343" y2="144" stroke="#C27803" stroke-width="2.2" stroke-dasharray="4,3"/>
                      <circle cx="256" cy="72" r="3.5" fill="#0F5E59"/><circle cx="274" cy="98" r="3.5" fill="#0F5E59"/>
                      <text x="292" y="138" font-size="9.5" font-weight="700" fill="#0F5E59">D₀</text>
                      <text x="346" y="138" font-size="9.5" font-weight="700" fill="#C27803">D₁ (Shift)</text>
                      <text x="288" y="172" font-size="9.5" text-anchor="middle" fill="currentColor">Ice Cream Qty (Q)</text>
                    </svg>
                  </figure>
                  <p><strong>Answer to Q1(4):</strong> Holding tea prices and consumer income constant, an increase in the price of coffee makes coffee relatively more expensive than close caffeine substitutes such as tea or hot chocolate. Rational consumers substitute lower-priced tea in place of coffee, causing the quantity demanded of coffee to fall as its price rises.</p>
                  <p><strong>Answer to Q2(a):</strong> A <strong>movement along</strong> the ice-cream demand curve (change in <em>quantity demanded</em>) is caused solely by a change in the <em>own price of ice cream</em> (e.g., price per cone rising from Tk. 80 to Tk. 100 reduces quantity bought along the fixed curve \\(D_0\\)). A <strong>shift</strong> of the entire demand curve (change in <em>demand</em>, \\(D_0 \\to D_1\\)) is caused by a change in a <em>non-price determinant</em>—such as a hot summer heatwave or rising household income—increasing ice-cream purchases at every possible price.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
    {
      label: 'ECON107 L3 Item 5 Inverse Demand Calculus Formal Script',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-danger">1st In-course 2019 • Q4 \[10 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">1st In-course 2019 • Q4 [10 Marks]</span> Calculus of inverse demand curves: P = 100 − 5X and P = 100 − 20X + X² (slopes, downward condition &amp; convexity).</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2019, Q4 [10 Marks]</span>
                  Consider two inverse demand functions: <strong>(i)</strong> \\(P = 100 - 5X\\) and <strong>(ii)</strong> \\(P = 100 - 20X + X^2\\) (for \\(0 \\le X \\le 10\\)).<br>
                  <strong>(a)</strong> Compute the slope \\(dP/dX\\) of each curve at \\(X = 0\\) and \\(X = 1\\). [4]<br>
                  <strong>(b)</strong> For a general linear curve \\(P = a + bX\\), state the condition for downward-sloping demand. [2]<br>
                  <strong>(c)</strong> Determine via second derivatives whether curve (ii) is concave or convex to the origin. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — First Derivatives at \\(X = 0\\) and \\(X = 1\\):</strong><br>
                  &bull; For curve (i) \\(P = 100 - 5X\\): \\(\\dfrac{dP}{dX} = -5\\) (constant). Hence slope at \\(X = 0\\) is \\(\\mathbf{-5}\\) and slope at \\(X = 1\\) is \\(\\mathbf{-5}\\).<br>
                  &bull; For curve (ii) \\(P = 100 - 20X + X^2\\): \\(\\dfrac{dP}{dX} = -20 + 2X\\). At \\(X = 0\\), slope \\(= -20 + 0 = \\mathbf{-20}\\); at \\(X = 1\\), slope \\(= -20 + 2(1) = \\mathbf{-18}\\).</p>
                  <p><strong>Answer to (b):</strong> For \\(P = a + bX\\) (with choke price \\(a &gt; 0\\)), the Law of Downward-Sloping Demand requires \\(dP/dX &lt; 0\\), i.e., \\(\\mathbf{b &lt; 0}\\).</p>
                  <p><strong>Answer to (c) — Curvature of \\(P = 100 - 20X + X^2\\):</strong> Differentiating a second time with respect to \\(X\\):</p>
                  <p>\\[\\frac{d^2 P}{dX^2} = \\frac{d}{dX}(-20 + 2X) = \\mathbf{+2 &gt; 0}.\\]</p>
                  <p>Because \\(dP/dX &lt; 0\\) on \\(0 \\le X &lt; 10\\) and \\(d^2P/dX^2 = +2 &gt; 0\\) everywhere, the curve slopes downward at a flattening (less negative) rate, meaning curve (ii) is <strong>strictly convex to the origin</strong>.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l05': [
    {
      label: 'ECON107 L5 All 5 Elasticity PYQ Items Formal Exam-Script Format',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">1st In-course 2025 • Q2(b) &amp; Q5 [8 Marks]</span> Midpoint arc elasticity (Q: 150→270, P: 15→8) &amp; how cooking-oil import restrictions raise domestic producer revenue.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2025, Q2(b) [4m] &amp; Q5 [4m]</span>
                  <strong>Q2(b):</strong> When the price of a good falls from Tk. \\(15\\) to Tk. \\(8\\), quantity demanded rises from \\(150\\) units to \\(270\\) units. Calculate the price elasticity of demand using the midpoint (arc) formula and interpret your result. [4]<br>
                  <strong>Q5:</strong> Using supply-and-demand and price elasticity, explain how government restrictions on cooking-oil imports affect domestic cooking-oil producers' total revenue. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q2(b) — Midpoint Arc Elasticity [4 Marks]:</strong></p>
                  <p>Given \\((P_1, Q_1) = (15, 150)\\) and \\((P_2, Q_2) = (8, 270)\\), average quantity is \\(\\bar{Q} = \\frac{150 + 270}{2} = 210\\) and average price is \\(\\bar{P} = \\frac{15 + 8}{2} = 11.5\\):</p>
                  <p>\\[E_D = \\left|\\frac{Q_2 - Q_1}{\\bar{Q}} \\div \\frac{P_2 - P_1}{\\bar{P}}\\right| = \\frac{270 - 150}{210} \\div \\frac{|8 - 15|}{11.5} = \\frac{120}{210} \\times \\frac{11.5}{7} = \\frac{0.5714}{0.6087} = \\mathbf{0.939}.\\]</p>
                  <p><em>Interpretation:</em> Since \\(E_D = 0.939 &lt; 1\\), demand over this price range is <strong>slightly price-inelastic</strong>: a \\(1\\%\\) reduction in price induces an approximate \\(0.94\\%\\) increase in quantity demanded.</p>
                  <p><strong>Answer to Q5 — Cooking-Oil Import Restrictions [4 Marks]:</strong> Restricting foreign cooking-oil imports contracts aggregate market supply, shifting the supply curve <strong>leftward (\\(S_0 \\to S_1\\))</strong> and driving domestic market price up from \\(P_0\\) to \\(P_1\\). Because cooking oil is an indispensable daily kitchen staple with virtually no close substitutes, household demand is <strong>highly price-inelastic (\\(E_D &lt; 1\\))</strong>. Consequently, the percentage jump in market price far exceeds the small percentage contraction in domestic consumption, causing <strong>total revenue (\\(TR = P \\times Q\\)) and profits of domestic cooking-oil producers to increase</strong> (at the expense of domestic consumers).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2023 • Q3(b,c) [9 Marks]</span> Demand Q = 300 − 5P + 2I (at P = 25, I = 4000): compute E_D, E_I &amp; 3% income growth effect; plus corn crop restriction policy.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023, Q3(b,c) [6 + 3 = 9 Marks]</span>
                  <strong>(b)</strong> Market demand is \\(Q = 300 - 5P + 2I\\). At \\(P = 25\\) and income \\(I = 4{,}000\\), calculate: (i) price elasticity of demand, (ii) income elasticity of demand, and (iii) the predicted annual growth in sales if income grows by \\(3\\%\\) per year (price constant). [6]<br>
                  <strong>(c)</strong> Why do governments sometimes pay farmers to restrict corn acreage, and how does this raise farm income? [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (b) [6 Marks]:</strong> First evaluate quantity demanded at \\((P, I) = (25, 4{,}000)\\):</p>
                  <p>\\[Q = 300 - 5(25) + 2(4{,}000) = 300 - 125 + 8{,}000 = \\mathbf{8{,}175\\text{ units}}.\\]</p>
                  <p>&bull; <strong>(i) Point Price Elasticity (\\(E_D\\)):</strong> With \\(\\partial Q / \\partial P = -5\\):</p>
                  <p>\\[E_D = \\left|\\frac{\\partial Q}{\\partial P}\\right| \\cdot \\frac{P}{Q} = 5 \\times \\frac{25}{8{,}175} = \\frac{125}{8{,}175} = \\mathbf{0.0153} \\;(\\text{highly price-inelastic}).\\]</p>
                  <p>&bull; <strong>(ii) Point Income Elasticity (\\(E_I\\)):</strong> With \\(\\partial Q / \\partial I = +2\\):</p>
                  <p>\\[E_I = \\frac{\\partial Q}{\\partial I} \\cdot \\frac{I}{Q} = 2 \\times \\frac{4{,}000}{8{,}175} = \\frac{8{,}000}{8{,}175} = \\mathbf{+0.9786} \\;(\\text{normal necessity, }0 &lt; E_I &lt; 1).\\]</p>
                  <p>&bull; <strong>(iii) Sales Growth from \\(3\\%\\) Income Growth:</strong> \\(\\%\\Delta Q = E_I \\times \\%\\Delta I = 0.9786 \\times 3\\% = \\mathbf{2.94\\%\\text{ per year}}\\).</p>
                  <p><strong>Answer to (c) — Crop Restriction Policy [3 Marks]:</strong> Demand for staple grains like corn is strongly <em>price-inelastic (\\(E_D &lt; 1\\))</em>. Unchecked bumper harvests shift supply right and depress farm prices so steeply that total farm revenue (\\(P \\times Q\\)) falls. By paying farmers to leave part of their land fallow, the government shifts market corn supply <strong>leftward (\\(S_0 \\to S_1\\))</strong>; against inelastic demand, equilibrium price rises by a much larger percentage than quantity falls, raising total farm revenue.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2017 • Q2(b,c) [9 Marks]</span> For Q = 100 − 2P, find elasticities at P = 1 and P = 25; distinguish slope vs. elasticity; cigarette tax incidence.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2017, Q2(b,c) [5 + 4 = 9 Marks]</span>
                  <strong>(b)</strong> Given the demand function \\(Q = 100 - 2P\\), find the price elasticity of demand at \\(P = 1\\) and at \\(P = 25\\), and distinguish between slope and elasticity. [5]<br>
                  <strong>(c)</strong> Compare the effect and tax incidence of an excise tax on cigarettes for heavy (addicted) smokers versus casual smokers. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (b) [5 Marks]:</strong> Here \\(dQ/dP = -2\\) everywhere, and \\(E_D = |dQ/dP| \\cdot (P/Q) = \\dfrac{2P}{100 - 2P}\\):<br>
                  &bull; At \\(P = 1\\): \\(Q = 100 - 2(1) = 98 \\implies E_D = \\dfrac{2(1)}{98} = \\mathbf{0.0204}\\) (highly inelastic).<br>
                  &bull; At \\(P = 25\\): \\(Q = 100 - 2(25) = 50 \\implies E_D = \\dfrac{2(25)}{50} = \\mathbf{1.00}\\) (unit-elastic midpoint).<br>
                  <em>Distinction:</em> Slope (\\(\\Delta Q / \\Delta P = -2\\)) measures absolute unit change and depends on measurement units, whereas elasticity (\\(E_D\\)) is a unit-free ratio of percentage changes that varies continuously along a straight-line demand curve as \\(P/Q\\) changes.</p>
                  <p><strong>Answer to (c) — Cigarette Excise Tax Incidence [4 Marks]:</strong><br>
                  &bull; <em>Heavy Smokers (Highly Inelastic Demand, \\(E_D \\ll E_S\\)):</em> Because nicotine addiction prevents heavy smokers from cutting back easily, quantity smoked falls very little while retail price rises by nearly the full tax—<strong>consumers bear most of the tax burden</strong> (generating high tax revenue).<br>
                  &bull; <em>Casual / Youth Smokers (Relatively Elastic Demand, \\(E_D &gt; E_S\\)):</em> Higher retail prices induce casual smokers to quit or cut consumption sharply—achieving a large public-health reduction in smoking while shifting a larger share of the tax burden backward onto producers.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">1st In-course 2023 • Q6 [4 Marks]</span> Rice vs. Car: Justify their price elasticities and show what happens to total revenue when price rises.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2023, Q6 [4 Marks]</span>
                  Consider two commodities: Rice and Passenger Cars. Justify whether each has elastic or inelastic demand, and explain what happens to total expenditure/revenue when the price of each rises.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Rice — Price-Inelastic Demand (\\(E_D &lt; 1\\)):</strong> Rice is an essential daily dietary staple in Bangladesh with no close caloric substitute for most households. When the price of rice increases, quantity demanded contracts by a much smaller percentage than the price hike (\\(\\%\\Delta Q &lt; \\%\\Delta P\\)); hence by the Total Revenue Test, <strong>total revenue (\\(TR = P \\times Q\\)) increases</strong>.</p>
                  <p><strong>2. Passenger Cars — Price-Elastic Demand (\\(E_D &gt; 1\\)):</strong> Private cars are expensive luxury durables taking a large share of household income and having accessible substitutes (public buses, metro rail, ride-sharing, delaying purchase). When car prices rise, quantity demanded drops by a larger percentage than the price rise (\\(\\%\\Delta Q &gt; \\%\\Delta P\\)); hence <strong>total revenue (\\(TR = P \\times Q\\)) decreases</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2024 • Q3(b) &amp; 1st In-course 2024 • Q4(a) [3 Marks]</span> Prove algebraically why price elasticity varies along a linear demand curve despite constant slope.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q3(b) [3 Marks]</span>
                  Explain why the price elasticity of demand varies continuously along a linear demand curve even though its slope is constant.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p>Consider any linear demand curve \\(Q = a - bP\\) (\\(a, b &gt; 0\\)). Its reciprocal slope \\(\\Delta Q / \\Delta P = -b\\) is constant at every point. However, point price elasticity is the product of that constant slope magnitude and the variable coordinate ratio \\(P / Q\\):</p>
                  <p>\\[E_D = \\left|\\frac{dQ}{dP}\\right| \\cdot \\frac{P}{Q} = b \\cdot \\frac{P}{a - bP}.\\]</p>
                  <p>&bull; Near the <strong>vertical price intercept</strong> (\\(P \\to a/b,\\; Q \\to 0\\)): \\(P/Q \\to \\infty \\implies E_D \\to \\infty\\) (elastic upper half, \\(E_D &gt; 1\\)).<br>
                  &bull; At the <strong>exact geometric midpoint</strong> (\\(P = a/(2b),\\; Q = a/2\\)): \\(E_D = b \\cdot \\frac{a/(2b)}{a/2} = \\mathbf{1}\\) (unit-elastic).<br>
                  &bull; Near the <strong>horizontal quantity intercept</strong> (\\(P \\to 0,\\; Q \\to a\\)): \\(P/Q \\to 0 \\implies E_D \\to 0\\) (inelastic lower half, \\(E_D &lt; 1\\)).</p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 340 190" width="340" height="190" role="img" aria-label="Linear demand curve showing upper elastic segment E_D > 1, midpoint E_D = 1, and lower inelastic segment E_D < 1">
                      <line x1="50" y1="162" x2="310" y2="162" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="50" y1="162" x2="50" y2="18" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="50" y1="26" x2="290" y2="162" stroke="#0F5E59" stroke-width="2.4"/>
                      <circle cx="170" cy="94" r="4.5" fill="#BE123C"/>
                      <text x="178" y="90" font-size="10.5" font-weight="700" fill="#BE123C">Midpoint: E_D = 1</text>
                      <text x="108" y="54" font-size="10.5" font-weight="700" fill="#0F5E59">E_D &gt; 1 (Elastic)</text>
                      <text x="225" y="138" font-size="10.5" font-weight="700" fill="#C27803">E_D &lt; 1 (Inelastic)</text>
                      <text x="42" y="28" font-size="10" text-anchor="end" fill="currentColor">a/b</text>
                      <text x="290" y="176" font-size="10" text-anchor="middle" fill="currentColor">a</text>
                      <text x="170" y="178" font-size="10.5" text-anchor="middle" fill="currentColor">Quantity (Q)</text>
                      <text x="16" y="95" font-size="10.5" text-anchor="middle" transform="rotate(-90 16 95)" fill="currentColor">Price (P)</text>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l06': [
    {
      label: 'ECON107 L6 Items 1 & 2 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2025 • Q2\(d\) \[3 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">1st In-course 2025 • Q4\(a,b\) \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q2(d) [3 Marks]</span> State the equi-marginal principle and find optimal (x*, y*) for u = x⁰·⁸ y⁰·² under B = 75, P_x = 5, P_y = 3.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q2(d) [3 Marks]</span>
                  State the equi-marginal principle of utility maximization, and find the optimal consumption bundle \\((x^*, y^*)\\) for a consumer with utility function \\(u(x, y) = x^{0.8} y^{0.2}\\), budget \\(B = 75\\), and prices \\(P_x = 5,\\; P_y = 3\\).
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Equi-Marginal Principle:</strong> A budget-constrained consumer maximizes total utility when the marginal utility per unit of money spent is equalized across all purchased goods: \\(\\dfrac{MU_x}{P_x} = \\dfrac{MU_y}{P_y}\\) subject to \\(P_x x + P_y y = B\\).</p>
                  <p><strong>2. Step-by-Step Optimization:</strong><br>
                  &bull; <em>Marginal Utilities:</em> \\(MU_x = \\frac{\\partial u}{\\partial x} = 0.8 x^{-0.2} y^{0.2}\\) and \\(MU_y = \\frac{\\partial u}{\\partial y} = 0.2 x^{0.8} y^{-0.8}\\).<br>
                  &bull; <em>Equi-Marginal Condition:</em></p>
                  <p>\\[\\frac{0.8 x^{-0.2} y^{0.2}}{5} = \\frac{0.2 x^{0.8} y^{-0.8}}{3} \\implies \\frac{4y}{x} = \\frac{5}{3} \\implies 5x = 12y \\implies x = 2.4y.\\]</p>
                  <p>&bull; <em>Substitute into Budget Line \\(5x + 3y = 75\\):</em></p>
                  <p>\\[5(2.4y) + 3y = 75 \\implies 15y = 75 \\implies \\mathbf{y^* = 5}, \\qquad \\mathbf{x^* = 2.4(5) = 12}.\\]</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">1st In-course 2025 • Q4(a,b) [5 Marks]</span> Rice, umbrella &amp; perfume: Cardinal or ordinal scale? State equi-marginal principle &amp; effect if umbrella price falls.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2025, Q4(a,b) [2 + 3 = 5 Marks]</span>
                  A consumer purchases three goods: Rice, Umbrellas, and Perfume.<br>
                  <strong>(a)</strong> Should the consumer's satisfaction from these bundles be measured on a cardinal or an ordinal scale? Justify. [2]<br>
                  <strong>(b)</strong> State the equi-marginal condition and explain how the consumer adjusts purchases if the price of umbrellas falls. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Satisfaction should be measured on an <strong>ordinal scale</strong>. Psychological utility from dissimilar goods like rice, umbrellas, and perfume has no objective physical unit or true zero, making cardinal measurement impossible; ranking bundles in order of preference (ordinality) is both realistic and sufficient to determine consumer equilibrium.</p>
                  <p><strong>Answer to (b):</strong> Equilibrium requires \\(\\dfrac{MU_R}{P_R} = \\dfrac{MU_U}{P_U} = \\dfrac{MU_P}{P_P}\\). If the price of umbrellas \\(P_U\\) falls, marginal utility per Taka spent on umbrellas rises strictly above the other two goods: \\(\\frac{MU_U}{P_U} &gt; \\frac{MU_R}{P_R} = \\frac{MU_P}{P_P}\\). To maximize total satisfaction, the consumer reallocates expenditure toward buying <strong>more umbrellas</strong>; as umbrella quantity rises, diminishing marginal utility lowers \\(MU_U\\) until all three ratios are equalized again.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
    {
      label: 'ECON107 L6 Items 4 & 5 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-purple">2nd In-course 2022 • Q1 &amp; Q2 \[9 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-danger">Final 2019 • Q4\(a\) \[3 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">2nd In-course 2022 • Q1 &amp; Q2 [9 Marks]</span> Classify (a) pen &amp; glue, (b) pen &amp; paper, (c) pen &amp; pencil; critique "utility is maximized when MUs are equal."</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2022, Q1 [6m] &amp; Q2 [3m]</span>
                  <strong>Q1:</strong> Classify the economic relationship between: (a) pen and glue, (b) pen and paper, and (c) pen and pencil, explaining how a price hike in the second good shifts demand for pens. [6]<br>
                  <strong>Q2:</strong> &ldquo;A consumer maximizes total utility when the marginal utilities of all goods consumed are equal.&rdquo; Critique this statement. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q1 [6 Marks]:</strong><br>
                  &bull; <strong>(a) Pen &amp; Glue — Independent Goods (Zero Cross-Price Elasticity):</strong> Used for unrelated tasks; an increase in the price of glue leaves the demand curve for pens unchanged.<br>
                  &bull; <strong>(b) Pen &amp; Paper — Complementary Goods (\\(E_{XY} &lt; 0\\)):</strong> Consumed jointly for writing; an increase in the price of paper raises the combined cost of writing and shifts the demand curve for pens <strong>leftward</strong>.<br>
                  &bull; <strong>(c) Pen &amp; Pencil — Substitute Goods (\\(E_{XY} &gt; 0\\)):</strong> Competing writing instruments; an increase in the price of pencils induces students to switch to pens, shifting the demand curve for pens <strong>rightward</strong>.</p>
                  <p><strong>Answer to Q2 [3 Marks]:</strong> The statement is <strong>FALSE</strong> unless all goods happen to have the exact same unit price! Rational consumers care about satisfaction <em>per unit of money spent</em>. Requiring an expensive Tk. 3,000 pair of shoes to yield the same raw marginal utility as a Tk. 10 candy ignores opportunity cost; utility is maximized when <strong>marginal utility divided by price (\\(\\text{MU}_i / P_i\\))</strong> is equal across all purchased goods.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2019 • Q4(a) [3 Marks]</span> Mr. Paul buys 2 hamburgers ($2), 8 cokes ($0.50), 8 pizza slices ($1), and 0 hot dogs ($1.50). Deduce his marginal utilities.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2019, Q4(a) [3 Marks]</span>
                  At equilibrium, Mr. Paul buys \\(2\\) hamburgers at \\(\\$2.00\\) each, \\(8\\) cokes at \\(\\$0.50\\) each, \\(8\\) slices of pizza at \\(\\$1.00\\) each, and \\(0\\) hot dogs at \\(\\$1.50\\) each. What can you deduce about his marginal utilities for each of the four goods?
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Interior Goods Purchased in Positive Quantities:</strong> By the equi-marginal condition, let \\(\\lambda\\) denote Mr. Paul's common marginal utility per dollar on the last unit purchased:</p>
                  <p>\\[\\frac{MU_H}{2.00} = \\frac{MU_C}{0.50} = \\frac{MU_P}{1.00} = \\lambda \\implies \\mathbf{MU_H = 2\\lambda}, \\quad \\mathbf{MU_P = \\lambda}, \\quad \\mathbf{MU_C = 0.5\\lambda}.\\]</p>
                  <p>Thus his last hamburger yields \\(2\\times\\) the marginal utility of his last pizza slice and \\(4\\times\\) the marginal utility of his last coke.</p>
                  <p><strong>2. Corner Solution for Hot Dogs (\\(Q_{\\text{hotdog}} = 0\\)):</strong> Because he chooses to buy <em>zero</em> hot dogs at \\(\\$1.50\\), even the very <strong>first hot dog</strong> yields strictly less marginal utility per dollar than his equilibrium purchases:</p>
                  <p>\\[\\frac{MU_{\\text{hotdog (1st)}}}{1.50} \\le \\lambda \\implies \\mathbf{MU_{\\text{hotdog (1st)}} \\le 1.5\\lambda}.\\]</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l07': [
    {
      label: 'ECON107 L7 Items 1-4 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">2nd In-course 2025 • Q2\(a,b,c\) \[6 Marks\]<\/span>[\s\S]*?<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-danger">Final 2024 Q2\(4\)/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">2nd In-course 2025 • Q2(a,b,c) [6 Marks]</span> Cake Consumer Surplus (8 pieces, MU drops linearly 20 → 6, P = 5 Tk) &amp; Public Children's Park cost-benefit rule.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2025, Q2(a,b,c) [1.5 + 2.5 + 2 = 6 Marks]</span>
                  <strong>(a)</strong> Define Consumer Surplus. [1.5]<br>
                  <strong>(b)</strong> A consumer buys \\(8\\) pieces of cake at market price \\(P = 5\\) Tk/piece; her marginal willingness to pay drops linearly from \\(20\\) Tk on the 1st piece to \\(6\\) Tk on the 8th piece. Compute Total Utility, Total Expenditure, and Consumer Surplus. [2.5]<br>
                  <strong>(c)</strong> Using consumer surplus, explain how a municipality should evaluate building a free children's park. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> <em>Consumer Surplus (CS)</em> is the net economic gain to buyers, measured by the excess of the maximum total amount consumers are willing to pay for a quantity of a good (Total Utility in money terms) over the actual market amount they pay (\\(P \\times Q\\)).</p>
                  <p><strong>Answer to (b):</strong> Over \\(8\\) discrete pieces declining linearly from \\(20\\) to \\(6\\), the constant per-piece drop is \\((20 - 6)/(8 - 1) = 2\\) Tk, giving willingness-to-pay schedule \\(\\{20, 18, 16, 14, 12, 10, 8, 6\\}\\) Tk:<br>
                  &bull; <em>Total Willingness to Pay (\\(TU\\)):</em> \\(20 + 18 + 16 + 14 + 12 + 10 + 8 + 6 = 8 \\times \\frac{20 + 6}{2} = \\mathbf{104\\text{ Tk}}\\).<br>
                  &bull; <em>Total Market Expenditure:</em> \\(8 \\text{ pieces} \\times 5\\text{ Tk} = \\mathbf{40\\text{ Tk}}\\).<br>
                  &bull; <em>Discrete Consumer Surplus:</em> \\(CS = 104 - 40 = \\mathbf{64\\text{ Tk}}\\).</p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 340 190" width="340" height="190" role="img" aria-label="Cake marginal willingness to pay bars 20 to 6 above market price line P = 5 showing shaded Consumer Surplus of 64 Tk">
                      <line x1="48" y1="162" x2="310" y2="162" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="48" y1="162" x2="48" y2="16" stroke="currentColor" stroke-width="1.3"/>
                      <!-- Price line P=5 -> y=162 - 5*6 = 132; max 20 -> 42 -->
                      <!-- Step bars for pieces 1..8: x=54+28*(k-1), w=26 -->
                      <rect x="54" y="42" width="26" height="90" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/><rect x="82" y="54" width="26" height="78" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/>
                      <rect x="110" y="66" width="26" height="66" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/><rect x="138" y="78" width="26" height="54" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/>
                      <rect x="166" y="90" width="26" height="42" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/><rect x="194" y="102" width="26" height="30" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/>
                      <rect x="222" y="114" width="26" height="18" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/><rect x="250" y="126" width="26" height="6" fill="#15803D" fill-opacity="0.22" stroke="#15803D"/>
                      <rect x="54" y="132" width="222" height="30" fill="#C27803" fill-opacity="0.18"/>
                      <line x1="48" y1="132" x2="295" y2="132" stroke="#BE123C" stroke-width="2"/>
                      <text x="155" y="112" font-size="10.5" font-weight="700" text-anchor="middle" fill="#14532D">CS = 64 Tk (Shaded Green)</text>
                      <text x="165" y="150" font-size="9.5" font-weight="700" text-anchor="middle" fill="#7C4A03">Expenditure = 8 × 5 = 40 Tk</text>
                      <text x="42" y="45" font-size="9.5" text-anchor="end" fill="currentColor">20</text>
                      <text x="42" y="135" font-size="9.5" font-weight="700" text-anchor="end" fill="#BE123C">P=5</text>
                      <text x="180" y="180" font-size="10.5" text-anchor="middle" fill="currentColor">Pieces of Cake (1 to 8)</text>
                    </svg>
                  </figure>
                  <p><strong>Answer to (c):</strong> Even though a free public children's park collects zero gate revenue (\\(P = 0\\)), neighborhood families derive substantial positive willingness to pay (health, safety, recreation), all of which accrues as <strong>Consumer Surplus</strong>. Under social cost-benefit analysis, the municipality should construct the park if and only if the <strong>aggregate Consumer Surplus across all residents exceeds the total opportunity cost</strong> of land, construction, and maintenance.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">2nd In-course 2023 • Q4 &amp; Q5 [9 Marks]</span> Cake Consumer Surplus (7 pieces: 50, 45, …, 20 Tk at P = 15 Tk) &amp; Indifference-curve tangency equilibrium for rice and coffee.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2023, Q4 [4m] &amp; Q5 [5m]</span>
                  <strong>Q4:</strong> A consumer values the 1st piece of cake at \\(50\\) Tk, with marginal valuation dropping by \\(5\\) Tk per additional piece. If she buys \\(7\\) pieces at \\(P = 15\\) Tk each, calculate her Consumer Surplus. [4]<br>
                  <strong>Q5:</strong> Explain geometrically how consumer equilibrium is achieved for rice and coffee using indifference curves and a budget line, and justify why this point is called an equilibrium. [5]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q4:</strong> Marginal valuations for pieces \\(1\\) through \\(7\\) are \\(50, 45, 40, 35, 30, 25, 20\\) Tk. Total Willingness to Pay \\(= 7 \\times \\frac{50 + 20}{2} = \\mathbf{245\\text{ Tk}}\\); Total Paid \\(= 7 \\times 15 = \\mathbf{105\\text{ Tk}}\\); hence \\(\\mathbf{CS = 245 - 105 = 140\\text{ Tk}}\\).</p>
                  <p><strong>Answer to Q5:</strong> Given budget line \\(P_R R + P_C C = B\\) (slope \\(-P_R/P_C\\)) and an indifference map for Rice and Coffee, utility maximization occurs at the interior <strong>point of tangency \\(E^*\\)</strong> where the budget line just touches the highest attainable indifference curve, equating slopes:</p>
                  <p>\\[MRS_{RC} = \\frac{MU_R}{MU_C} = \\frac{P_R}{P_C}.\\]</p>
                  <p>It is called an <em>equilibrium</em> because any other affordable bundle on the budget line lies on a strictly lower indifference curve (lower satisfaction), whereas higher indifference curves lie outside the budget set—giving the consumer zero incentive to alter her bundle.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">2nd In-course 2024 • Q2(a,b) [3 Marks]</span> Indifference curve &amp; budget-line equilibrium for rice and fish (P_rice = 1.5, P_fish = 2, Budget = 12).</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2024, Q2(a,b) [3 Marks]</span>
                  Given \\(P_{\\text{rice}} = 1.5\\), \\(P_{\\text{fish}} = 2\\), and total budget \\(B = 12\\), construct the budget line equation, find its axis intercepts and slope, and identify consumer equilibrium using indifference curves.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Budget Constraint &amp; Intercepts:</strong> \\(1.5R + 2F = 12\\). Putting Rice \\(R\\) on the horizontal axis and Fish \\(F\\) on the vertical axis:<br>
                  &bull; Horizontal Rice intercept (\\(F = 0\\)): \\(R_{\\max} = 12 / 1.5 = \\mathbf{8\\text{ units}}\\).<br>
                  &bull; Vertical Fish intercept (\\(R = 0\\)): \\(F_{\\max} = 12 / 2 = \\mathbf{6\\text{ units}}\\).<br>
                  &bull; Budget-line slope: \\(-\\dfrac{P_R}{P_F} = -\\dfrac{1.5}{2} = \\mathbf{-0.75}\\).</p>
                  <p><strong>2. Consumer Equilibrium:</strong> Draw the straight line connecting \\((0, 6)\\) and \\((8, 0)\\) and superimpose convex indifference curves. Optimal consumer equilibrium occurs at the tangency point \\(E^*\\) (such as \\((R^*, F^*) = (4, 3)\\) under symmetric Cobb-Douglas preferences) where \\(MRS_{RF} = MU_R / MU_F = 0.75\\).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">2nd In-course 2021 • Q2 [5 Marks]</span> Bridge demand Y = 1,000,000 − 75,000P: Find CS at P = $2, $5, $20 &amp; prove why a $5M toll-free bridge should be built.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2021, Q2 [5 Marks]</span>
                  Crossing demand for a proposed bridge is \\(Y = 1{,}000{,}000 - 75{,}000P\\), where \\(Y\\) is annual trips and \\(P\\) is the toll in dollars.<br>
                  <strong>(a)</strong> Calculate Consumer Surplus at tolls \\(P = \\$2\\), \\(P = \\$5\\), and \\(P = \\$20\\). [3]<br>
                  <strong>(b)</strong> If the bridge costs \\(\\$5{,}000{,}000\\) to build, prove that no private toll revenue can cover its cost, yet society should still build it free of toll. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Setting \\(Y = 0\\) gives the choke price \\(P_{\\max} = \\frac{1{,}000{,}000}{75{,}000} = \\frac{40}{3} \\approx \\$13.333\\):<br>
                  &bull; <strong>At \\(P = \\$2\\):</strong> \\(Y = 850{,}000 \\implies CS = \\frac{1}{2}(850{,}000)\\!\\left(\\frac{40}{3} - 2\\right) = \\mathbf{\\$4{,}816{,}667}\\).<br>
                  &bull; <strong>At \\(P = \\$5\\):</strong> \\(Y = 625{,}000 \\implies CS = \\frac{1}{2}(625{,}000)\\!\\left(\\frac{40}{3} - 5\\right) = \\mathbf{\\$2{,}604{,}167}\\).<br>
                  &bull; <strong>At \\(P = \\$20\\):</strong> Since \\(\\$20 &gt; \\$13.333\\), zero motorists cross (\\(Y = 0\\)) \\(\\implies \\mathbf{CS = \\$0}\\).</p>
                  <p><strong>Answer to (b):</strong> Maximum possible toll revenue occurs at the unit-elastic midpoint \\(P = \\frac{20}{3} \\approx \\$6.67,\\; Y = 500{,}000\\), yielding \\(TR_{\\max} = \\$3{,}333{,}333 &lt; \\$5{,}000{,}000\\)—so a private single-price operator would lose money. However, at a zero toll (\\(P = \\$0,\\; Y = 1{,}000{,}000\\)), total social Consumer Surplus is \\(\\frac{1}{2}(1{,}000{,}000)\\!\\left(\\frac{40}{3}\\right) = \\mathbf{\\$6{,}666{,}667} &gt; \\$5{,}000{,}000\\), generating a net social welfare gain of \\(\\mathbf{\\$1.67\\text{ million}}\\)!</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2024 Q2(4)`,
    },
  ],

  'econ107-l08': [
    {
      label: 'ECON107 L8 All 4 Production PYQ Items Formal Exam-Script Format',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2024 • Q4(a,b) [8 Marks]</span> Student club burger &amp; potato-chips stall: Classify inputs; short-run vs. long-run cuts; MP &amp; AP of labor; diminishing returns vs. returns to scale.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q4(a,b) [8 Marks]</span>
                  Suppose your university student club operates a burger and potato-chips food stall.<br>
                  <strong>(a)</strong> Identify the capital, labor, and material inputs used, and explain how the club reduces inputs in the short run vs. the long run if campus demand declines. [4]<br>
                  <strong>(b)</strong> Using this stall, define \\(MP_L\\) and \\(AP_L\\), and distinguish between the Law of Diminishing Returns and Returns to Scale. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) [4 Marks]:</strong><br>
                  &bull; <em>Inputs:</em> <strong>Capital (\\(K\\)):</strong> gas grill, deep fryer, refrigerator, stall counter. <strong>Labor (\\(L\\)):</strong> student cooks, cashiers, servers. <strong>Raw Materials:</strong> buns, meat patties, potatoes, cooking oil, sauces, wrappers.<br>
                  &bull; <em>Response to Declining Demand:</em> In the <strong>Short Run</strong>, capital equipment and stall lease are fixed; the club cuts <em>variable inputs</em>—purchasing fewer buns/potatoes and scheduling fewer student worker hours. In the <strong>Long Run</strong>, all inputs become variable; the club can sell off fryers/grills, move to a smaller kiosk, or exit the stall entirely.</p>
                  <p><strong>Answer to (b) [4 Marks]:</strong><br>
                  &bull; <em>\\(MP_L\\) &amp; \\(AP_L\\):</em> <strong>Marginal Product of Labor (\\(MP_L = \\Delta TP / \\Delta L\\))</strong> is the extra burgers produced per hour by adding \\(1\\) more student cook (holding grills fixed). <strong>Average Product of Labor (\\(AP_L = TP / L\\))</strong> is total burgers produced divided by total student workers.<br>
                  &bull; <em>Diminishing Returns vs. Returns to Scale:</em> Crowding \\(5\\) or \\(6\\) cooks around a single fixed grill causes each extra cook to add fewer burgers (short-run <strong>diminishing marginal returns</strong> to one variable input). Scaling <em>all</em> inputs together—doubling stalls, grills, cooks, and ingredients—tests long-run <strong>increasing or decreasing returns to scale</strong> according as output more than doubles or less than doubles.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">2nd In-course 2023 • Q1(a,b) [4 Marks]</span> Soft-toy workshop (cotton, thread, needle, cloth): True/False on Diminishing Returns vs. DRS and MP vs. AP.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2023, Q1(a,b) [2 + 2 = 4 Marks]</span>
                  A firm manufactures soft toys using cotton, thread, needles, and cloth. State True or False with justification:<br>
                  <strong>(a)</strong> Diminishing returns and decreasing returns to scale mean the same thing.<br>
                  <strong>(b)</strong> Marginal product and average product of needles are identical.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(a) FALSE:</strong> The <em>Law of Diminishing Returns</em> is a short-run partial relationship where only <strong>one input</strong> (e.g., needles/workers) is increased while cotton, thread, and cloth are held fixed. <em>Decreasing Returns to Scale</em> is a long-run relationship where <strong>all inputs</strong> (cotton, thread, needles, cloth, workspace) are scaled up proportionally by \\(t &gt; 1\\), yet total toy output rises by less than \\(t\\).</p>
                  <p><strong>(b) FALSE:</strong> <em>Marginal product of needles</em> (\\(MP_N = \\Delta TP / \\Delta N\\)) measures the <strong>additional</strong> toys produced by adding one extra needle (holding other inputs constant), whereas <em>average product of needles</em> (\\(AP_N = TP / N\\)) measures total toys divided by the total number of needles in use (they coincide only at the maximum point of \\(AP_N\\)).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">2nd In-course 2024 • Q3(a,b,c) [6 Marks]</span> Cake baking: Define TP, MP, AP of flour; contrast IRS vs. DRS; prove a 50% rise in K &amp; L gives &lt; 50% output under DRS.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2024, Q3(a,b,c) [2 + 2 + 2 = 6 Marks]</span>
                  A bakery makes cakes using flour, butter, eggs, and sugar.<br>
                  <strong>(a)</strong> Define Total Product (TP), Marginal Product (MP), and Average Product (AP) with respect to flour. [2]<br>
                  <strong>(b)</strong> Distinguish between Increasing Returns to Scale (IRS) and Decreasing Returns to Scale (DRS). [2]<br>
                  <strong>(c)</strong> Using a DRS Cobb-Douglas production function, prove algebraically that increasing \\(K\\) and \\(L\\) by \\(50\\%\\) raises output by strictly less than \\(50\\%\\). [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Holding ovens, butter, eggs, and sugar constant: <em>TP of flour</em> is total cakes baked from \\(F\\) kg of flour; <em>MP of flour</em> (\\(\\Delta TP / \\Delta F\\)) is the extra cakes obtained from \\(1\\) additional kg of flour; <em>AP of flour</em> (\\(TP / F\\)) is average cakes produced per kg of flour.</p>
                  <p><strong>Answer to (b):</strong> Scaling all inputs (flour, butter, eggs, sugar, ovens, bakers) by a factor \\(t &gt; 1\\) exhibits <strong>IRS</strong> if cake output rises by more than \\(t Q\\), and <strong>DRS</strong> if cake output rises by less than \\(t Q\\).</p>
                  <p><strong>Answer to (c) — Algebraic Proof:</strong> Let \\(Q(K, L) = A K^{\\alpha} L^{\\beta}\\) with \\(\\alpha + \\beta &lt; 1\\) (DRS, e.g., \\(\\alpha = 0.4,\\; \\beta = 0.4 \\implies \\alpha + \\beta = 0.8\\)). Increasing both \\(K\\) and \\(L\\) by \\(50\\%\\) multiplies each input by \\(t = 1.5\\):</p>
                  <p>\\[Q(1.5K, 1.5L) = A(1.5K)^{\\alpha}(1.5L)^{\\beta} = (1.5)^{\\alpha + \\beta} Q(K, L).\\]</p>
                  <p>Since \\(1.5 &gt; 1\\) and \\(0 &lt; \\alpha + \\beta &lt; 1\\), we have \\((1.5)^{\\alpha + \\beta} &lt; (1.5)^1 = 1.5\\) (specifically, \\(1.5^{0.8} \\approx 1.3832\\), an output gain of \\(\\mathbf{38.32\\% &lt; 50\\%}\\)). \\(\\blacksquare\\)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">2nd In-course 2025 • Q4(1,2) [3 Marks]</span> Cakes (flour, sugar, egg): Contrast diminishing returns vs. DRS; define MP of sugar and MC of cakes.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2025, Q4(1,2) [1.5 + 1.5 = 3 Marks]</span>
                  In cake production using flour, sugar, and eggs: <strong>(1)</strong> distinguish between the law of diminishing returns and decreasing returns to scale; <strong>(2)</strong> define Marginal Product of sugar and Marginal Cost of cakes.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(1)</strong> Adding more sugar while holding flour, eggs, and oven capacity fixed eventually yields smaller increments of output (short-run <em>diminishing marginal returns</em>). Increasing flour, sugar, eggs, and ovens simultaneously by \\(10\\%\\) and obtaining less than \\(10\\%\\) extra cakes is long-run <em>decreasing returns to scale</em>.</p>
                  <p><strong>(2)</strong> <em>Marginal Product of Sugar (\\(MP_{\\text{sugar}} = \\Delta Q / \\Delta S\\))</em> is the additional physical cake output gained from \\(1\\) extra kg of sugar (other inputs constant). <em>Marginal Cost (\\(MC = \\Delta TC / \\Delta Q\\))</em> is the additional monetary cost in Taka incurred to bake \\(1\\) additional cake.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l09': [
    {
      label: 'ECON107 L9 Items 2 & 3 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">Final 2024 • Q5\(a–d\) \[12 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">Final 2023 Q5\(c\) &amp; 2nd In-course 2023 Q6 \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q5(a–d) [12 Marks]</span> U-shaped cost curves; AC vs. MC; Isoquant/isocost for q = 100 (P_K = 3, P_L = 2, B = 24); Profit max for TC = 1500 + 80Q &amp; TR = 1400Q − 6Q².</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q5(a–d) [12 Marks]</span>
                  <strong>(a)</strong> Why are short-run average and marginal cost curves U-shaped? [3]<br>
                  <strong>(b)</strong> Explain the relationship between \\(AC\\) and \\(MC\\). [2]<br>
                  <strong>(c)</strong> Construct the isocost line for \\(P_K = 3,\\; P_L = 2,\\; B = 24\\) and identify the optimal input bundle on the \\(q = 100\\) isoquant. [3]<br>
                  <strong>(d)</strong> Given \\(TC = 1{,}500 + 80Q\\) and \\(TR = 1{,}400Q - 6Q^2\\), find the profit-maximizing output \\(Q^*\\) and verify \\(MC = MR\\) at \\(Q^*\\). [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) &amp; (b):</strong> In the short run, initial specialization and teamwork raise marginal product (\\(MP \\uparrow \\implies MC \\downarrow\\)), and spreading Fixed Cost over larger \\(Q\\) pulls \\(AFC\\) down rapidly—making \\(MC, AVC,\\) and \\(AC\\) fall initially. Beyond a threshold, crowding variable inputs against fixed plant triggers the <strong>Law of Diminishing Returns</strong> (\\(MP \\downarrow \\implies MC \\uparrow\\)), pulling \\(AVC\\) and \\(AC\\) back upward in a U-shape. While \\(MC &lt; AC\\), \\(AC\\) falls; at minimum \\(AC\\), \\(MC = AC\\); where \\(MC &gt; AC\\), \\(AC\\) rises.</p>
                  <p><strong>Answer to (c):</strong> Isocost equation: \\(2L + 3K = 24\\), with Labor intercept \\(L_{\\max} = 12\\), Capital intercept \\(K_{\\max} = 8\\), and slope \\(-P_L / P_K = -2/3\\). Superimposing the \\(q = 100\\) convex isoquant, the least-cost bundle is the unique tangency point \\(E^*\\) where \\(MRTS_{LK} = MP_L / MP_K = 2/3\\)—any other point on \\(q = 100\\) lies on a higher isocost line (\\(TC &gt; 24\\)).</p>
                  <p><strong>Answer to (d):</strong> Form total profit \\(\\pi(Q) = TR - TC = (1{,}400Q - 6Q^2) - (1{,}500 + 80Q) = -6Q^2 + 1{,}320Q - 1{,}500\\):</p>
                  <p>\\[\\frac{d\\pi}{dQ} = -12Q + 1{,}320 = 0 \\implies \\mathbf{Q^* = 110}, \\qquad \\frac{d^2\\pi}{dQ^2} = -12 &lt; 0 \\;(\\text{strict maximum}).\\]</p>
                  <p><em>Verification of \\(MR = MC\\) at \\(Q^* = 110\\):</em> \\(MR(Q) = 1{,}400 - 12Q \\implies MR(110) = 1{,}400 - 1{,}320 = \\mathbf{80}\\), and \\(MC(Q) = \\frac{d(TC)}{dQ} = \\mathbf{80}\\). Thus \\(MR(110) = MC(110) = 80\\) (with \\(\\pi_{\\max} = 71{,}100\\)). \\(\\checkmark\\)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2023 Q5(c) &amp; 2nd In-course 2023 Q6 [5 Marks]</span> For TC = Q³ − 21Q² + 500Q, find MC, AC, where MC = AC, minimum AC, and minimum MC.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023 Q5(c) &amp; 2nd Incourse 2023 Q6 [5 Marks]</span>
                  Given total cost \\(TC = Q^3 - 21Q^2 + 500Q\\) (\\(Q &gt; 0\\)), derive the \\(MC\\) and \\(AC\\) functions, find the output where \\(MC = AC\\), and determine both minimum \\(AC\\) and minimum \\(MC\\).
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Cost Functions:</strong> \\(MC = \\frac{d(TC)}{dQ} = 3Q^2 - 42Q + 500\\) and \\(AC = \\frac{TC}{Q} = Q^2 - 21Q + 500\\).</p>
                  <p><strong>2. Intersection \\(MC = AC\\) &amp; Minimum \\(AC\\):</strong> Setting \\(3Q^2 - 42Q + 500 = Q^2 - 21Q + 500 \\implies 2Q^2 - 21Q = 0 \\implies \\mathbf{Q = 10.5}\\) (verified by \\(d(AC)/dQ = 2Q - 21 = 0,\\; d^2(AC)/dQ^2 = 2 &gt; 0\\)). Minimum \\(AC = (10.5)^2 - 21(10.5) + 500 = \\mathbf{389.75}\\).</p>
                  <p><strong>3. Minimum \\(MC\\):</strong> Set \\(\\frac{d(MC)}{dQ} = 6Q - 42 = 0 \\implies \\mathbf{Q = 7}\\) (with \\(\\frac{d^2(MC)}{dQ^2} = 6 &gt; 0\\)). Evaluating at \\(Q = 7\\): \\(\\min MC = 3(7)^2 - 42(7) + 500 = 147 - 294 + 500 = \\mathbf{353}\\).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l12': [
    {
      label: 'ECON107 L12 Item 1 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2025 • Q1\(b\) &amp; Q6\(a\) \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q1(b) &amp; Q6(a) [5 Marks]</span> Categorize electricity distribution &amp; domestic airlines in Bangladesh; explain sources &amp; structures of imperfect competition.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q1(b) [2m] &amp; Q6(a) [3m]</span>
                  <strong>Q1(b):</strong> Categorize the market structures of (i) retail electricity distribution and (ii) domestic passenger airlines in Bangladesh with brief justifications. [2]<br>
                  <strong>Q6(a):</strong> Discuss the main sources of market imperfections and outline the key types of imperfectly competitive markets. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q1(b) [2 Marks]:</strong><br>
                  &bull; <em>(i) Electricity Distribution (e.g., DESCO, DPDC, BPDB):</em> <strong>Regulated Natural / Franchise Monopoly</strong>—a single utility serves each geographic zone with no close substitute because duplicating high-voltage power grids involves prohibitive subadditive fixed costs and government licensing.<br>
                  &bull; <em>(ii) Domestic Passenger Airlines (Biman, US-Bangla, Novoair, Air Astra):</em> <strong>Oligopoly</strong>—a handful of carriers supply the entire market under high capital and regulatory entry barriers (aircraft leasing, landing slots) and exhibit mutual strategic interdependence in pricing.</p>
                  <p><strong>Answer to Q6(a) [3 Marks]:</strong> Market imperfections stem from two primary sources: (1) <em>Economies of Scale (Declining LRAC)</em>, where large incumbent firms achieve lower unit costs that small entrants cannot match; and (2) <em>Barriers to Entry</em>, including legal patents/copyrights, exclusive government franchises, control of scarce inputs, and brand differentiation/advertising. The three imperfect structures are <strong>Pure Monopoly</strong> (1 seller, unique product), <strong>Oligopoly</strong> (few interdependent sellers), and <strong>Monopolistic Competition</strong> (many sellers offering differentiated products).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
    {
      label: 'ECON107 L12 Item 3 Sunk Cost Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">Samuelson Ch\. 9 • Marginal Principle[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Samuelson Ch. 9 • Marginal Principle [3 Marks]</span> Prove why a profit-maximizing monopolist ignores fixed / sunk costs when choosing optimal price and output.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot;Marginal Principle (&ldquo;Let Bygones Be Bygones&rdquo;) [3 Marks]</span>
                  Using calculus and economic reasoning, explain why a monopolist should ignore fixed (sunk) costs when choosing its profit-maximizing output and price in the short run.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p>Write total cost as \\(TC(q) = FC + VC(q)\\), where \\(FC\\) is a constant independent of output \\(q\\). Total profit is \\(\\pi(q) = TR(q) - VC(q) - FC\\). Differentiating with respect to \\(q\\) to find optimal output \\(q^*\\):</p>
                  <p>\\[\\frac{d\\pi}{dq} = \\frac{d(TR)}{dq} - \\frac{d(VC)}{dq} - \\frac{d(FC)}{dq} = MR(q) - MC(q) - 0 = 0 \\iff MR(q^*) = MC(q^*).\\]</p>
                  <p>Because \\(d(FC)/dq = 0\\), a change in Fixed Cost shifts total profit \\(\\pi\\) vertically dollar-for-dollar, but leaves both \\(MR(q)\\) and \\(MC(q)\\)—and therefore optimal output \\(q^*\\) and optimal price \\(P^*(q^*)\\)—completely unchanged (provided the firm remains above its shutdown threshold).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l13': [
    {
      label: 'ECON107 L13 Items 3 & 4 Formal Exam-Script Format',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">Final 2023 • Q6\(b\) \[7 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-purple">Final 2017 • Q7\(a,b,c\) \[12 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2023 • Q6(b) [7 Marks]</span> Women shifting from unpaid housework to paid market jobs: GDP effect, overstatement &amp; augmented accounts, and "Marrying your gardener" paradox.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023, Q6(b) [2 + 3 + 2 = 7 Marks]</span>
                  Over recent decades, women's participation in paid market employment has risen substantially while hours spent on unpaid household work have declined.<br>
                  <strong>(i)</strong> How does this shift affect conventionally measured GDP? [2]<br>
                  <strong>(ii)</strong> Why does conventional GDP overstate the true increase in society's output, and how would augmented national accounts address this? [3]<br>
                  <strong>(iii)</strong> Explain the related paradox: &ldquo;When a person marries their paid gardener, GDP goes down.&rdquo; [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(i) Effect on Conventional GDP:</strong> Measured GDP <strong>increases</strong> because wages earned in formal market jobs and commercial childcare/restaurant purchases enter market transactions, whereas prior unpaid home cooking and childcare were excluded from national accounts.</p>
                  <p><strong>(ii) Overstatement &amp; Augmented National Accounts:</strong> Conventional GDP counts the newly added market output (\\(+M\\)) while ignoring the simultaneous loss of valuable non-market household production (\\(-H\\)), thereby overstating the true net gain \\((M - H)\\). <em>Augmented national accounts</em> impute shadow market wages to unpaid household labor so both home and market production are valued consistently, recording only the genuine net change in economic welfare.</p>
                  <p><strong>(iii) Gardener Paradox:</strong> While employed as a hired worker, the gardener's cash wages are recorded as a market service in GDP. After marriage, the exact same lawn care continues identically as unpaid household work outside the market—causing <strong>measured GDP to fall</strong> even though real physical output and welfare are completely unchanged.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">Final 2017 • Q7(a,b,c) [12 Marks]</span> Inflation rate from CPI (330 → 375); Income, Consumption, Saving &amp; MPC; Dual macroeconomic role of investment.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2017, Q7(a,b,c) [4 + 4 + 4 = 12 Marks]</span>
                  <strong>(a)</strong> Define price stability. Given \\(\\text{CPI}_{2016} = 330\\) and \\(\\text{CPI}_{2017} = 375\\), compute the 2017 inflation rate. [4]<br>
                  <strong>(b)</strong> Explain the identity linking Disposable Income (\\(Y\\)), Consumption (\\(C\\)), and Saving (\\(S\\)), and define MPC and MPS. [4]<br>
                  <strong>(c)</strong> Explain why private investment plays a &ldquo;dual role&rdquo; in short-run and long-run macroeconomics. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> <em>Price stability</em> means keeping the overall price level changing slowly and predictably so money retains its function as a reliable yardstick for contracts and saving. Annual CPI inflation rate in 2017:</p>
                  <p>\\[\\pi_{2017} = \\frac{\\text{CPI}_{2017} - \\text{CPI}_{2016}}{\\text{CPI}_{2016}} \\times 100\\% = \\frac{375 - 330}{330} \\times 100\\% = \\frac{45}{330} \\times 100\\% = \\mathbf{13.64\\%}.\\]</p>
                  <p><strong>Answer to (b):</strong> Every Taka of household disposable income is either consumed or saved: \\(Y \\equiv C + S \\implies S \\equiv Y - C\\). Differentiating with respect to \\(Y\\) yields \\(\\text{MPC} + \\text{MPS} = 1\\), where \\(\\text{MPC} = \\Delta C / \\Delta Y\\) is the fraction of an extra Taka of income spent on consumption and \\(\\text{MPS} = \\Delta S / \\Delta Y = 1 - \\text{MPC}\\) is the fraction saved (e.g., if \\(\\Delta Y = \\$1{,}000\\) raises \\(\\Delta C = \\$800\\) and \\(\\Delta S = \\$200\\), then \\(\\text{MPC} = 0.80\\) and \\(\\text{MPS} = 0.20\\)).</p>
                  <p><strong>Answer to (c) — Dual Role of Investment:</strong><br>
                  1. <em>Short-Run Aggregate Demand Role:</em> Because investment (\\(I\\)) is large and highly sensitive to interest rates, business confidence, and credit cycles, swings in \\(I\\) drive short-run Aggregate Demand fluctuations and business cycles via the expenditure multiplier.<br>
                  2. <em>Long-Run Aggregate Supply Role:</em> Net capital formation expands a nation's stock of factories, infrastructure, and software, shifting Potential GDP (Long-Run Aggregate Supply) rightward and raising long-term labor productivity.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],
};
