/* ==========================================================================
   ECON107 — Complete Exam-Script Question & Answer Upgrades (Lessons 2–14)
   Replaces compressed prompt summaries, arrow shorthand (→ P* ↑, Q* ↓),
   missing data/working tables, and "see Section / Table / Figure" notes with
   verbatim ISRT exam questions, tables, labeled SVG diagrams, and formal prose.
   ========================================================================== */

export const ECON_UPGRADES = {
  'econ107-l02': [
    {
      label: 'ECON107 L2 PPF Exam Vault Complete Upgrade',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">Final 2024 • Q1\(2\) &amp; Q1\(5\) \[4 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2024 • Q1(2) &amp; Q1(5) [4 Marks]</span> Opportunity cost of university education &amp; PPF diagram with efficient, inefficient, and unattainable points.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q1(2) &amp; Q1(5) [2 + 2 = 4 Marks]</span>
                  <strong>(2)</strong> Is there any opportunity cost of taking university education? Explain briefly. [2]<br>
                  <strong>(5)</strong> Graphically illustrate a Production Possibility Frontier (PPF) clearly marking efficient, inefficient, and unattainable points. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q1(2) — Opportunity Cost of Education:</strong></p>
                  <p><strong>Yes.</strong> In economics, the <em>opportunity cost</em> of any decision is the value of the single best alternative forgone. Taking full-time university education incurs two components of economic cost: (i) explicit out-of-pocket expenses on tuition, books, and study materials, and (ii) the <strong>implicit forgone wages/salary</strong> the student could have earned in full-time employment during those four years (note: ordinary food and housing expenses that would be incurred regardless of attending university are excluded so they are not double-counted).</p>
                  <p><strong>Answer to Q1(5) — Graphical Illustration of PPF:</strong></p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 340 210" width="340" height="210" role="img" aria-label="PPF curve showing efficient point E on curve, inefficient point U inside curve, and unattainable point I outside curve">
                      <line x1="48" y1="175" x2="310" y2="175" stroke="currentColor" stroke-width="1.4"/>
                      <line x1="48" y1="175" x2="48" y2="20" stroke="currentColor" stroke-width="1.4"/>
                      <path d="M 48 38 Q 195 45, 275 175" fill="none" stroke="#1E5B5A" stroke-width="2.4"/>
                      <circle cx="182" cy="84" r="4.5" fill="#1E5B5A"/>
                      <circle cx="120" cy="128" r="4.5" fill="#A66A17"/>
                      <circle cx="242" cy="56" r="4.5" fill="#9E3F2E"/>
                      <text x="191" y="81" font-size="11" font-weight="700" fill="#1E5B5A">E (Efficient — on PPF)</text>
                      <text x="128" y="132" font-size="11" font-weight="700" fill="#A66A17">U (Inefficient — inside)</text>
                      <text x="200" y="45" font-size="11" font-weight="700" fill="#9E3F2E">I (Unattainable — outside)</text>
                      <text x="180" y="196" font-size="11" text-anchor="middle" fill="currentColor">Butter (millions of kg)</text>
                      <text x="16" y="102" font-size="11" text-anchor="middle" transform="rotate(-90 16 102)" fill="currentColor">Guns (thousands)</text>
                    </svg>
                    <figcaption>PPF Diagram: Points on the frontier (\\(E\\)) are productively efficient; interior points (\\(U\\)) represent unemployment/waste; exterior points (\\(I\\)) are infeasible under current resources and technology.</figcaption>
                  </figure>
                  <p>&bull; <strong>Efficient Point (\\(E\\) on the PPF):</strong> All resources are fully and efficiently employed; producing more butter requires sacrificing guns.<br>
                  &bull; <strong>Inefficient Point (\\(U\\) inside the PPF):</strong> Idle labor/capital or misallocation exists; society can expand both goods simultaneously.<br>
                  &bull; <strong>Unattainable Point (\\(I\\) outside the PPF):</strong> Exceeds the economy's current resource and technological capacity.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">Final 2023 • Q4(b) [3 Marks]</span> Illustrate a PPF with a numeric schedule &amp; explain the impact of technology and national income changes.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023, Q4(b) [3 Marks]</span>
                  Illustrate a Production Possibility Frontier (PPF) using a numerical example. How do a change in technology and a change in national income impact a nation's PPF?
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Numerical Production Possibilities Schedule (Guns vs. Butter):</strong> Suppose an economy has fixed labor and capital that can be allocated across six efficient combinations \\(A\\) through \\(F\\):</p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Possibility</th><th>Butter (million kg)</th><th>Guns (thousands)</th><th>Opportunity Cost of 1 Extra Unit of Butter</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>A</td><td>0</td><td>15</td><td>—</td></tr>
                      <tr><td>B</td><td>1</td><td>14</td><td>\\(15 - 14 = 1\\) thousand guns</td></tr>
                      <tr><td>C</td><td>2</td><td>12</td><td>\\(14 - 12 = 2\\) thousand guns</td></tr>
                      <tr><td>D</td><td>3</td><td>9</td><td>\\(12 - 9 = 3\\) thousand guns</td></tr>
                      <tr><td>E</td><td>4</td><td>5</td><td>\\(9 - 5 = 4\\) thousand guns</td></tr>
                      <tr><td>F</td><td>5</td><td>0</td><td>\\(5 - 0 = 5\\) thousand guns</td></tr>
                    </tbody>
                  </table>
                  <p>Plotting Butter on the horizontal axis and Guns on the vertical axis yields a downward-sloping, <strong>concave (bowed-out) PPF</strong> because specialized resources cause the marginal opportunity cost of butter to rise steadily from \\(1\\) to \\(5\\) thousand guns.</p>
                  <p><strong>2. Impact of Technological Progress:</strong> An advance in technology enables greater output from the same inputs, shifting the PPF <strong>outward to the northeast</strong> (if specific to one sector, the PPF pivots outward along that good's axis), making previously unattainable bundles feasible.</p>
                  <p><strong>3. Impact of Rising National Income / Capital Accumulation:</strong> Sustained growth in productive capacity and capital investment shifts the entire PPF <strong>outward</strong> over time, while rising per-capita income shifts society's chosen consumption point along the expanded frontier away from bare necessities (food) toward luxuries, education, healthcare, and public goods.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">1st In-course 2023 • Q3 &amp; 1st In-course 2022 • Q1 [5 Marks]</span> Define scarcity, PPF, productive efficiency, and opportunity cost with Rice &amp; Cars examples.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2023 Q3 / 2022 Q1 [5 Marks]</span>
                  Consider an economy producing only two goods: Rice and Cars. Define and illustrate (i) Scarcity, (ii) Production Possibility Frontier (PPF), (iii) Productive Efficiency, and (iv) Opportunity Cost.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(i) Scarcity:</strong> Scarcity is the fundamental economic condition in which society's productive resources (arable land, skilled workers, steel, machinery) are finite whereas human desires for Rice and Cars are unlimited. Consequently, the economy cannot produce infinite quantities of both and must choose a trade-off.</p>
                  <p><strong>(ii) Production Possibility Frontier (PPF):</strong> The PPF is the boundary locus showing the maximum attainable combinations of Rice and Cars that the economy can produce in a given period using all available inputs and current technology (e.g., \\(100\\) thousand tons of Rice and \\(0\\) Cars, \\(80\\) thousand tons of Rice and \\(10{,}000\\) Cars, down to \\(0\\) Rice and \\(25{,}000\\) Cars).</p>
                  <p><strong>(iii) Productive Efficiency:</strong> An economy achieves productive efficiency when it operates <em>on</em> (rather than inside) its PPF—meaning it is impossible to manufacture one more Car without sacrificing some quantity of Rice (no idle factories or wasted agricultural labor).</p>
                  <p><strong>(iv) Opportunity Cost:</strong> Opportunity cost is the quantity of the next-best alternative good forgone to obtain one more unit of a chosen good. For example, if moving along the PPF from \\((80\\text{k tons Rice}, 10\\text{k Cars})\\) to \\((70\\text{k tons Rice}, 12\\text{k Cars})\\) sacrifices \\(10{,}000\\) tons of Rice to gain \\(2{,}000\\) extra Cars, the opportunity cost of \\(1\\) additional Car is \\(5\\) tons of Rice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l03': [
    {
      label: 'ECON107 L3 Fish Table & Coffee Graphical SVG Answers',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">1st In-course 2024 • Q2\(a,b\) \[4 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-purple">1st In-course 2023 • Q4 \[5 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">1st In-course 2024 • Q2(a,b) [4 Marks]</span> Construct a demand schedule for fish and explain its downward slope via substitution &amp; income effects.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2024, Q2(a,b) [4 Marks]</span>
                  <strong>(a)</strong> Construct a hypothetical market demand schedule for fish and comment on the relationship shown. [2]<br>
                  <strong>(b)</strong> Explain why the demand curve for fish slopes downward using the substitution effect and the income effect. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Market Demand Schedule for Fish:</strong></p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Combination</th><th>Price of Fish (BDT per kg)</th><th>Quantity Demanded (thousand kg / week)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>A</td><td>600</td><td>5</td></tr>
                      <tr><td>B</td><td>500</td><td>8</td></tr>
                      <tr><td>C</td><td>400</td><td>12</td></tr>
                      <tr><td>D</td><td>300</td><td>18</td></tr>
                      <tr><td>E</td><td>200</td><td>26</td></tr>
                    </tbody>
                  </table>
                  <p><em>Comment:</em> Holding consumer income, tastes, population, and prices of related meats constant (<em>ceteris paribus</em>), quantity demanded of fish varies <strong>inversely</strong> with its own price—satisfying the Law of Downward-Sloping Demand.</p>
                  <p><strong>Answer to (b) — Substitution &amp; Income Effects:</strong></p>
                  <p>&bull; <strong>Substitution Effect:</strong> When the price of fish falls (say from \\(500\\) to \\(300\\) BDT/kg), fish becomes relatively cheaper than substitute protein sources such as chicken, beef, or eggs. Rational households substitute cheaper fish in place of meat, raising quantity demanded.<br>
                  &bull; <strong>Income Effect:</strong> A fall in the price of fish increases households' real purchasing power (their fixed money income can now buy more food overall), enabling consumers to purchase a larger quantity of normal goods including fish.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">1st In-course 2023 • Q4 [5 Marks]</span> Explain graphically how demand for coffee changes when: (a) price of tea rises; (b) price of coffee rises.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2023, Q4 [5 Marks]</span>
                  Explain graphically how the demand for coffee changes when: <strong>(a)</strong> the price of tea rises; and <strong>(b)</strong> the price of coffee itself rises.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 540 195" width="540" height="195" role="img" aria-label="Left panel shows rightward shift of coffee demand from D0 to D1 when tea price rises; right panel shows upward movement along D0 from A to B when coffee price rises">
                      <!-- Left Panel (a) -->
                      <line x1="38" y1="160" x2="235" y2="160" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="38" y1="160" x2="38" y2="22" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="62" y1="38" x2="182" y2="148" stroke="#1E5B5A" stroke-width="2"/>
                      <line x1="102" y1="38" x2="222" y2="148" stroke="#A66A17" stroke-width="2.2"/>
                      <line x1="38" y1="95" x2="160" y2="95" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3,3"/>
                      <circle cx="124" cy="95" r="3.8" fill="#1E5B5A"/>
                      <circle cx="164" cy="95" r="3.8" fill="#A66A17"/>
                      <text x="138" y="88" font-size="11" fill="#A66A17" font-weight="700">→ Shift</text>
                      <text x="184" y="146" font-size="11" fill="#1E5B5A">D₀</text>
                      <text x="224" y="146" font-size="11" fill="#A66A17">D₁</text>
                      <text x="20" y="98" font-size="10.5" fill="currentColor">P₀</text>
                      <text x="136" y="182" font-size="11" text-anchor="middle" fill="currentColor">(a) Tea Price Rises: Shift D₀ → D₁</text>
                      <!-- Right Panel (b) -->
                      <line x1="308" y1="160" x2="505" y2="160" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="308" y1="160" x2="308" y2="22" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="335" y1="36" x2="472" y2="148" stroke="#1E5B5A" stroke-width="2.2"/>
                      <circle cx="425" cy="110" r="4" fill="#1E5B5A"/>
                      <circle cx="376" cy="70" r="4" fill="#9E3F2E"/>
                      <line x1="308" y1="110" x2="425" y2="110" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3,3"/>
                      <line x1="308" y1="70" x2="376" y2="70" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3,3"/>
                      <text x="432" y="112" font-size="11" fill="#1E5B5A" font-weight="700">A</text>
                      <text x="383" y="67" font-size="11" fill="#9E3F2E" font-weight="700">B (↖ Movement)</text>
                      <text x="290" y="113" font-size="10.5" fill="currentColor">P₀</text>
                      <text x="290" y="73" font-size="10.5" fill="currentColor">P₁</text>
                      <text x="476" y="148" font-size="11" fill="#1E5B5A">D₀</text>
                      <text x="406" y="182" font-size="11" text-anchor="middle" fill="currentColor">(b) Coffee Price Rises: Move A → B</text>
                    </svg>
                  </figure>
                  <p><strong>Answer to (a) — Increase in Price of Tea (Increase in Demand / Curve Shift):</strong> Tea and coffee are close <em>substitutes</em> in consumption. When the price of tea rises, consumers switch from tea to coffee even when coffee's own price remains unchanged at \\(P_0\\). Consequently, the entire demand curve for coffee <strong>shifts rightward from \\(D_0\\) to \\(D_1\\)</strong> (an increase in <em>demand</em> at every price).</p>
                  <p><strong>Answer to (b) — Increase in Own Price of Coffee (Decrease in Quantity Demanded / Movement Along Curve):</strong> Because only coffee's own price rises from \\(P_0\\) to \\(P_1\\) while all non-price determinants remain fixed, the demand schedule itself does not shift. Instead, consumers move <strong>upward and leftward from point \\(A\\) to point \\(B\\) along the same demand curve \\(D_0\\)</strong>, reducing <em>quantity demanded</em> from \\(Q_0\\) to \\(Q_1\\).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l04': [
    {
      label: 'ECON107 L4 Complete Formal Exam Scripts + Pizza Table + Final 2025 Q3(b,c)',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q2(c) [4 Marks]</span> Technological advances reduced the cost of computer chips. Show the effect on equilibrium P &amp; Q for (i) computers and (ii) typewriters.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q2(c) [4 Marks]</span>
                  Technological advances have sharply reduced the cost of manufacturing computer chips. Using supply-and-demand analysis, explain how this affected equilibrium price and equilibrium quantity in the markets for: <strong>(i)</strong> computers, and <strong>(ii)</strong> typewriters.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(i) Market for Computers [2 Marks]:</strong><br>
                  1. <em>Initial Equilibrium:</em> The computer market starts at \\(E_0(P_0, Q_0)\\) where initial demand \\(D_0\\) intersects initial supply \\(S_0\\).<br>
                  2. <em>Supply Shift:</em> Microchips are a core production input for computers. Lower chip costs reduce firms' marginal cost of production, making computer manufacturing more profitable at any given price and shifting the <strong>computer supply curve rightward from \\(S_0\\) to \\(S_1\\)</strong> (while demand \\(D_0\\) stays unchanged).<br>
                  3. <em>New Equilibrium:</em> At the old price \\(P_0\\), excess supply (surplus) emerges, bidding price down until a new equilibrium \\(E_1(P_1, Q_1)\\) is reached where <strong>equilibrium price falls (\\(P_1 &lt; P_0\\)) and equilibrium quantity increases (\\(Q_1 &gt; Q_0\\))</strong>.</p>
                  <p><strong>(ii) Market for Typewriters [2 Marks]:</strong><br>
                  1. <em>Cross-Market Link:</em> Computers and typewriters are <strong>substitutes</strong> for word processing.<br>
                  2. <em>Demand Shift:</em> Because the equilibrium price of computers fell in part (i), offices and households substitute away from mechanical typewriters toward cheaper, more powerful computers. This shifts the <strong>typewriter demand curve leftward from \\(D_0\\) to \\(D_1\\)</strong> (with typewriter supply \\(S_0\\) unchanged).<br>
                  3. <em>New Equilibrium:</em> Unsold typewriter surplus at the initial price forces sellers to cut prices and curtail output, so <strong>both equilibrium price falls (\\(P_1 &lt; P_0\\)) and equilibrium quantity falls (\\(Q_1 &lt; Q_0\\))</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q3(b,c) [8 Marks]</span> Algorithmic dynamic pricing (Uber/Amazon) vs. static equilibrium &amp; solving nonlinear quadratic demand/supply.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q3(b,c) [4 + 4 = 8 Marks]</span>
                  <strong>(b)</strong> Digital platforms such as Uber and Amazon adjust prices algorithmically in real time. Contrast algorithmic dynamic pricing with textbook static market equilibrium in terms of rationing, surpluses/shortages, and consumer surplus. [4]<br>
                  <strong>(c)</strong> Suppose market demand and supply are nonlinear: \\(Q_d = 150 - P^2\\) and \\(Q_s = 2P^2 - 12P\\). Find the economically viable equilibrium price and quantity, justifying why any extraneous root is rejected. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (b) — Algorithmic Dynamic Pricing vs. Static Equilibrium [4 Marks]:</strong></p>
                  <p>&bull; <strong>Instantaneous Market Clearing:</strong> Textbook static models assume demand and supply remain fixed while price converges once to \\(P^*\\). In reality, ride-hailing or e-commerce demand spikes abruptly (e.g., rainstorms or rush hour). Under sticky static fares, \\(Q_d &gt; Q_s\\) creates severe <strong>shortages</strong> (long wait times, unavailable rides). Uber's surge algorithm raises \\(P\\) immediately—both rationing urgent riders along \\(D'\\) and incentivizing extra drivers along \\(S\\)—restoring \\(Q_d = Q_s\\) continuously.<br>
                  &bull; <strong>Efficiency &amp; Welfare Trade-off:</strong> Dynamic pricing improves <em>allocative efficiency</em> by eliminating queues and deadweight rationing losses, ensuring rides go to high-valuation users. However, personalized/surge pricing captures a larger share of <strong>consumer surplus</strong> as platform/producer revenue and raises perceived fairness concerns during emergencies.</p>
                  <p><strong>Answer to (c) — Nonlinear Quadratic Market Equilibrium [4 Marks]:</strong></p>
                  <p><strong>Step 1 (Market-Clearing Condition \\(Q_d = Q_s\\)):</strong></p>
                  <p>\\[150 - P^2 = 2P^2 - 12P \\implies 3P^2 - 12P - 150 = 0 \\implies P^2 - 4P - 50 = 0.\\]</p>
                  <p><strong>Step 2 (Solve Quadratic Formula):</strong></p>
                  <p>\\[P = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(1)(-50)}}{2} = \\frac{4 \\pm \\sqrt{216}}{2} = 2 \\pm 3\\sqrt{6} \\approx 2 \\pm 7.3485.\\]</p>
                  <p>The two algebraic roots are \\(P_1 = 2 + 3\\sqrt{6} \\approx 9.35\\) and \\(P_2 = 2 - 3\\sqrt{6} \\approx -5.35\\).</p>
                  <p><strong>Step 3 (Economic Viability Filter &amp; Equilibrium Quantity):</strong> Competitive goods prices and quantities must be strictly non-negative (\\(P &gt; 0,\\; Q &gt; 0\\)); hence the negative root \\(P_2 = -5.35\\) is economically meaningless and rejected. Substituting \\(P^* = 2 + 3\\sqrt{6} \\approx 9.3485\\) into \\(Q_d = 150 - P^2\\) (noting \\(P^2 = 4P + 50\\)):</p>
                  <p>\\[Q^* = 150 - (4P^* + 50) = 100 - 4(2 + 3\\sqrt{6}) = 92 - 12\\sqrt{6} \\approx \\mathbf{62.61\\text{ units}}.\\]</p>
                  <p><strong>Final Answer:</strong> Viable Equilibrium Price \\(P^* = \\mathbf{9.35}\\) and Equilibrium Quantity \\(Q^* = \\mathbf{62.61}\\) units.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">1st In-course 2025 • Q3(a,b) [5 Marks]</span> Curd market equilibrium: Why won't price settle higher? Effects of (i) rise in milk price &amp; (ii) fall in ice-cream price.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2025, Q3(a,b) [5 Marks]</span>
                  Consider a competitive market for sweet curd.<br>
                  <strong>(a)</strong> How is equilibrium price determined, and why cannot the market price remain above the equilibrium level? [2]<br>
                  <strong>(b)</strong> Explain the impact on equilibrium price and quantity of curd when: (i) the price of raw milk rises; (ii) the price of ice cream falls. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Market equilibrium occurs at \\((P^*, Q^*)\\) where market demand \\(D\\) intersects market supply \\(S\\), so \\(Q_D(P^*) = Q_S(P^*)\\) and there is neither shortage nor surplus. If price temporarily stood above \\(P^*\\), producers would supply more curd than consumers wish to buy (\\(Q_S &gt; Q_D\\)), creating an unsold <strong>excess supply (surplus)</strong>. Because curd is perishable, competing sellers cut prices to clear unsold stock; as price falls, \\(Q_D\\) expands and \\(Q_S\\) contracts until \\(P = P^*\\) is restored.</p>
                  <p><strong>Answer to (b)(i) — Rise in Price of Raw Milk:</strong> Raw milk is the primary production input for curd. Higher milk prices raise marginal production cost at every output level, shifting the <strong>curd supply curve leftward (\\(S_0 \\to S_1\\))</strong> while demand \\(D_0\\) remains fixed. At the old price \\(P_0\\) a shortage arises, driving the market to a new equilibrium with a <strong>higher equilibrium price (\\(P_1 &gt; P_0\\)) and a lower equilibrium quantity (\\(Q_1 &lt; Q_0\\))</strong>.</p>
                  <p><strong>Answer to (b)(ii) — Fall in Price of Ice Cream:</strong> Ice cream and sweet curd are <strong>substitutes</strong> in dessert consumption. When ice cream becomes cheaper, consumers switch toward ice cream and buy less curd at every curd price, shifting the <strong>curd demand curve leftward (\\(D_0 \\to D_1\\))</strong> while supply \\(S_0\\) stays fixed. The resulting surplus at \\(P_0\\) pushes the market to a new equilibrium with <strong>both a lower equilibrium price (\\(P_1 &lt; P_0\\)) and a lower equilibrium quantity (\\(Q_1 &lt; Q_0\\))</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2024 • Q2(b) [4 Marks]</span> Chicken burger market: Impact of (i) rise in beef burger price and (ii) rise in burger-shop employee wages.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q2(b) [4 Marks]</span>
                  Analyze the impact on the equilibrium price and equilibrium quantity of chicken burgers caused by: <strong>(i)</strong> an increase in the price of beef burgers; and <strong>(ii)</strong> an increase in the wages paid to burger-shop employees.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(i) Increase in the Price of Beef Burgers [2 Marks]:</strong> Beef burgers and chicken burgers are close <em>consumption substitutes</em>. When beef burgers become more expensive, consumers substitute toward chicken burgers at every given chicken-burger price, causing a <strong>rightward shift of the chicken-burger demand curve (\\(D_0 \\to D_1\\))</strong> while supply \\(S_0\\) remains unchanged. Excess demand at the original price bids price upward along \\(S_0\\), resulting in a <strong>higher equilibrium price (\\(P_1 &gt; P_0\\)) and a higher equilibrium quantity (\\(Q_1 &gt; Q_0\\))</strong>.</p>
                  <p><strong>(ii) Increase in Burger-Shop Employee Wages [2 Marks]:</strong> Kitchen and counter labor is a direct variable input in producing chicken burgers. Higher wage rates increase per-burger production cost, reducing profitability and causing a <strong>leftward/upward shift of the chicken-burger supply curve (\\(S_0 \\to S_1\\))</strong> while demand \\(D_0\\) remains unchanged. Excess demand at the old price pushes price up along \\(D_0\\), yielding a <strong>higher equilibrium price (\\(P_1 &gt; P_0\\)) and a lower equilibrium quantity (\\(Q_1 &lt; Q_0\\))</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">1st In-course 2019 Q2 &amp; Final 2019 Q2(b) [6 Marks]</span> Complete Pizza Market Schedule: Equilibrium P* &amp; Q*, Tripled Demand &amp; Shortage at P = $4.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2019 Q2 &amp; Final 2019 Q2(b) [6 Marks]</span>
                  Given the following demand and supply schedule for pizzas: at prices \\(P = \\$10, \\$8, \\$6, \\$4, \\$2, \\$0\\), quantity demanded is \\(Q_D = 0, 10, 20, 30, 40, 50\\) and quantity supplied is \\(Q_S = 40, 30, 20, 10, 0, 0\\).<br>
                  <strong>(a)</strong> Find the original equilibrium price and quantity. [2]<br>
                  <strong>(b)</strong> If quantity demanded triples at each price, find the new equilibrium price and quantity. [2]<br>
                  <strong>(c)</strong> In the original market, what happens if the price is initially set at \\(\\$4\\)? [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Price \\(P\\) ($)</th><th>Original \\(Q_D\\)</th><th>Supply \\(Q_S\\)</th><th>Original Market State (\\(Q_D\\) vs. \\(Q_S\\))</th><th>Tripled Demand \\(Q'_D = 3Q_D\\)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>$10</td><td>0</td><td>40</td><td>Surplus of 40 (Downward \\(P\\))</td><td>0</td></tr>
                      <tr><td><strong>$8</strong></td><td>10</td><td><strong>30</strong></td><td>Surplus of 20 (Downward \\(P\\))</td><td><strong>30 (New Eq.!)</strong></td></tr>
                      <tr class="exam-total-row"><td><strong>$6</strong></td><td><strong>20</strong></td><td><strong>20</strong></td><td><strong>Original Equilibrium (\\(Q_D = Q_S\\))</strong></td><td>60</td></tr>
                      <tr><td>$4</td><td>30</td><td>10</td><td>Shortage of 20 (Upward \\(P\\))</td><td>90</td></tr>
                      <tr><td>$2</td><td>40</td><td>0</td><td>Shortage of 40 (Upward \\(P\\))</td><td>120</td></tr>
                      <tr><td>$0</td><td>50</td><td>0</td><td>Shortage of 50 (Upward \\(P\\))</td><td>150</td></tr>
                    </tbody>
                  </table>
                  <p><strong>Answer to (a):</strong> Comparing columns 2 and 3, \\(Q_D = Q_S = 20\\) occurs uniquely at \\(P = \\$6\\). Hence the original equilibrium is <strong>\\(P^* = \\$6\\) per pizza and \\(Q^* = 20\\) pizzas</strong>.</p>
                  <p><strong>Answer to (b):</strong> Tripling \\(Q_D\\) at each price gives column 5 (\\(Q'_D = 0, 30, 60, 90, 120, 150\\)). Matching \\(Q'_D\\) against \\(Q_S\\) shows \\(Q'_D = Q_S = 30\\) at \\(P = \\$8\\). Hence the new equilibrium is <strong>\\(P^{**} = \\$8\\) per pizza and \\(Q^{**} = 30\\) pizzas</strong>.</p>
                  <p><strong>Answer to (c):</strong> If price is initially set at \\(P = \\$4\\) in the original market, buyers demand \\(Q_D = 30\\) pizzas while sellers supply only \\(Q_S = 10\\) pizzas, creating an <strong>excess demand (shortage) of \\(30 - 10 = 20\\) pizzas</strong>. Frustrated buyers bid prices up, inducing sellers to expand output and buyers to economize until the market clears at \\(P^* = \\$6\\).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2022 • Q2(c) [4 Marks]</span> Attaining labor market equilibrium and analyzing the impact of immigration on wages &amp; employment.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2022, Q2(c) [4 Marks]</span>
                  Explain how equilibrium wage and employment are determined in a competitive labor market, and analyze the possible impacts of immigration on this equilibrium.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Competitive Labor Market Equilibrium:</strong> Firms demand labor downward with the real wage (\\(D_L\\) reflects diminishing marginal revenue product of labor), while workers supply labor upward with the wage (\\(S_L\\)). Equilibrium occurs at \\((W_0, L_0)\\) where \\(D_L = S_L\\).</p>
                  <p><strong>2. Impact of Immigration — Two Empirical Cases:</strong><br>
                  &bull; <strong>Case A (Pure Labor Supply Shock in a Static Local Market):</strong> An inflow of immigrant workers shifts the labor supply curve <strong>rightward (\\(S_L \\to S'_L\\))</strong> while labor demand \\(D_L\\) stays fixed. Competition among workers lowers the equilibrium wage (\\(W_1 &lt; W_0\\)) and raises total employment (\\(L_1 &gt; L_0\\)).<br>
                  &bull; <strong>Case B (Immigration into Expanding Cities with Simultaneous Demand Growth):</strong> Immigrants typically settle in economically growing cities and also spend their own earnings on local housing, food, and services—shifting <strong>labor demand rightward (\\(D_L \\to D'_L\\))</strong> alongside \\(S_L \\to S'_L\\). Consequently, equilibrium employment rises substantially (\\(L_1 \\gg L_0\\)), while the net change in the equilibrium wage \\(W_1\\) is small or nearly unchanged (depending on whether \\(D_L\\) or \\(S_L\\) shifts further).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">1st In-course 2024 • Q3 [6 Marks]</span> Fish market shocks: (a) price held above equilibrium; (b) fishing-net price rises; (c) household income rises.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 1st Incourse 2024, Q3 [6 Marks]</span>
                  Using demand-and-supply analysis for the competitive fish market, explain the effect of each event separately:<br>
                  <strong>(a)</strong> Price is artificially set above the market-clearing equilibrium price. [2]<br>
                  <strong>(b)</strong> The price of fishing nets increases. [2]<br>
                  <strong>(c)</strong> Average household income increases. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(a) Price Set Above Equilibrium (\\(P &gt; P^*\\)):</strong> Neither the demand curve nor the supply curve shifts; instead, at \\(P &gt; P^*\\), quantity supplied exceeds quantity demanded (\\(Q_S &gt; Q_D\\)), creating an <strong>excess supply (surplus)</strong> of unsold perishable fish. Unless enforced by a binding price floor with government purchases, competition among fishmongers drives market price back down to \\(P^*\\).</p>
                  <p><strong>(b) Increase in Price of Fishing Nets:</strong> Fishing nets are a capital/material input for fishermen. Higher equipment cost raises the marginal cost of catching fish, shifting the <strong>fish supply curve leftward (\\(S_0 \\to S_1\\))</strong> while demand \\(D_0\\) remains fixed. At \\(P_0\\) a shortage arises, moving the market to a new equilibrium with a <strong>higher equilibrium price (\\(P_1 &gt; P_0\\)) and a lower equilibrium quantity (\\(Q_1 &lt; Q_0\\))</strong>.</p>
                  <p><strong>(c) Increase in Average Household Income:</strong> Fresh fish is a <em>normal good</em>. Higher household income increases willingness to purchase fish at every price, shifting the <strong>fish demand curve rightward (\\(D_0 \\to D_1\\))</strong> while supply \\(S_0\\) remains fixed. Excess demand at \\(P_0\\) bids price up along \\(S_0\\), resulting in <strong>both a higher equilibrium price (\\(P_1 &gt; P_0\\)) and a higher equilibrium quantity (\\(Q_1 &gt; Q_0\\))</strong>.</p>
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
      label: 'ECON107 L6 2nd Incourse 2023 Q3 TU/MU Table + Stacked SVG & Final 2017 Q1 Full Script',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-warn">2nd In-course 2023 • Q2 &amp; Q3 \[8 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">2nd In-course 2023 • Q2 &amp; Q3 [8 Marks]</span> Equi-marginal principle for tea, milk &amp; sugar (milk price rises) + Law of Diminishing MU with schedule &amp; TU/MU graphs.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2023, Q2 &amp; Q3 [4 + 4 = 8 Marks]</span>
                  <strong>Q2:</strong> State the equi-marginal principle of consumer equilibrium for three goods—tea, milk, and sugar—and explain how the consumer adjusts if the price of milk rises. [4]<br>
                  <strong>Q3:</strong> State the Law of Diminishing Marginal Utility and illustrate the relationship between Total Utility (TU) and Marginal Utility (MU) using a numerical table and aligned diagrams. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q2 — Equi-Marginal Principle &amp; Milk Price Increase [4 Marks]:</strong></p>
                  <p>A utility-maximizing consumer with fixed income allocates expenditure across tea (\\(T\\)), milk (\\(M\\)), and sugar (\\(S\\)) until the <strong>marginal utility per Taka spent</strong> is equalized across all three goods:</p>
                  <p>\\[\\frac{MU_T}{P_T} = \\frac{MU_M}{P_M} = \\frac{MU_S}{P_S} = \\lambda \\;(\\text{common marginal utility of income}).\\]</p>
                  <p>If the price of milk \\(P_M\\) rises while \\(P_T\\) and \\(P_S\\) stay constant, the ratio \\(MU_M / P_M\\) falls strictly below \\(MU_T / P_T\\) and \\(MU_S / P_S\\) (the last Taka spent on milk now yields less satisfaction than on tea or sugar). To restore equilibrium, the consumer <strong>reduces milk consumption</strong>; by the law of diminishing marginal utility, consuming fewer units of milk raises \\(MU_M\\) until \\(MU_M / P_M\\) is once again equal to the other ratios. This directly explains why milk's demand curve slopes downward.</p>
                  <p><strong>Answer to Q3 — Law of Diminishing Marginal Utility, Schedule &amp; Aligned Graphs [4 Marks]:</strong></p>
                  <p><strong>Statement:</strong> Holding consumption of other goods constant, as a person consumes more and more units of a commodity within a given period, the additional satisfaction (<em>marginal utility</em>, \\(MU = \\Delta TU / \\Delta Q\\)) derived from each successive unit eventually declines.</p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Quantity Consumed (\\(Q\\))</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Total Utility (\\(TU\\), utils)</strong></td><td>0</td><td>4</td><td>7</td><td>9</td><td>10</td><td>10</td></tr>
                      <tr><td><strong>Marginal Utility (\\(MU = \\Delta TU\\))</strong></td><td>—</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>
                    </tbody>
                  </table>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 380 245" width="380" height="245" role="img" aria-label="Stacked graphs showing concave Total Utility reaching maximum at Q=5 in top panel and downward-sloping Marginal Utility hitting zero at Q=5 in bottom panel">
                      <!-- Top: TU -->
                      <line x1="48" y1="110" x2="340" y2="110" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="48" y1="110" x2="48" y2="16" stroke="currentColor" stroke-width="1.3"/>
                      <polyline points="48,110 100,74 152,47 204,29 256,20 308,20" fill="none" stroke="#1E5B5A" stroke-width="2.3"/>
                      <line x1="308" y1="20" x2="308" y2="215" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="4,3"/>
                      <circle cx="308" cy="20" r="4" fill="#1E5B5A"/>
                      <text x="275" y="14" font-size="10.5" font-weight="700" fill="#1E5B5A">Max TU = 10</text>
                      <text x="18" y="65" font-size="10.5" text-anchor="middle" transform="rotate(-90 18 65)" fill="currentColor">TU</text>
                      <!-- Bottom: MU -->
                      <line x1="48" y1="215" x2="340" y2="215" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="48" y1="215" x2="48" y2="132" stroke="currentColor" stroke-width="1.3"/>
                      <polyline points="100,143 152,161 204,179 256,197 308,215" fill="none" stroke="#A66A17" stroke-width="2.3"/>
                      <circle cx="308" cy="215" r="4" fill="#A66A17"/>
                      <text x="272" y="208" font-size="10.5" font-weight="700" fill="#A66A17">MU = 0 at Q = 5</text>
                      <text x="18" y="175" font-size="10.5" text-anchor="middle" transform="rotate(-90 18 175)" fill="currentColor">MU</text>
                      <text x="195" y="236" font-size="11" text-anchor="middle" fill="currentColor">Quantity Consumed (Q = 0 to 5)</text>
                    </svg>
                  </figure>
                  <p><strong>Key Geometric Links:</strong> (1) \\(MU\\) is the slope of \\(TU\\); (2) while \\(MU &gt; 0\\) and falling, \\(TU\\) rises at a diminishing rate (concave curve); (3) at saturation (\\(Q = 5\\)), \\(MU = 0\\) and \\(TU\\) reaches its maximum; if consumption continues where \\(MU &lt; 0\\), \\(TU\\) declines.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
    {
      label: 'ECON107 L6 Final 2017 Q1 Full Multi-Part Answer',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2017 • Q1\(a,b,c\)[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2017 • Q1(a,b,c) &amp; 2nd In-course 2021 • Q1 [9 Marks]</span> Relationship between TU &amp; MU; why ordinal utility is preferred to cardinal utility; economics of addictive substances.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2017, Q1(a,b,c) [9 Marks]</span>
                  <strong>(a)</strong> Explain the algebraic and geometric relationship between Total Utility (TU) and Marginal Utility (MU). [3]<br>
                  <strong>(b)</strong> Why do modern economists prefer ordinal utility over cardinal utility in deriving consumer demand? [3]<br>
                  <strong>(c)</strong> Using price elasticity of demand, analyze the market consequences of prohibiting addictive drugs. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Algebraically, \\(MU_n = TU_n - TU_{n-1}\\) (or \\(MU = d(TU)/dQ\\)), and \\(TU(Q) = \\sum_{k=1}^Q MU_k\\) (total utility equals the area under the marginal utility schedule). Geometrically, as long as \\(MU &gt; 0\\) and declining, \\(TU\\) increases at a decreasing rate; when \\(MU = 0\\) (satiation point), \\(TU\\) attains its peak; if \\(MU &lt; 0\\), \\(TU\\) slopes downward.</p>
                  <p><strong>Answer to (b):</strong> Cardinal utility assumes satisfaction can be measured in objective numerical &ldquo;utils&rdquo; (like weight in kg), which is scientifically unobservable and not comparable across individuals. <strong>Ordinal utility</strong> requires only that consumers consistently <em>rank</em> bundles (preferring \\(A\\) to \\(B\\), or being indifferent). Because indifference curves and budget constraints derive the entire downward-sloping demand curve under far weaker, empirically realistic assumptions, ordinal utility is strictly preferred.</p>
                  <p><strong>Answer to (c):</strong> Supply interdiction/prohibition raises supplier risk and shifts the drug supply curve sharply leftward, driving street prices up. <strong>Casual/experimental users</strong> have relatively <em>price-elastic</em> demand and cut consumption substantially. By contrast, <strong>habitual addicts</strong> have highly <em>price-inelastic</em> demand (\\(E_D \\ll 1\\)): they reduce quantity very little despite steep price hikes, causing their total expenditure (\\(P \\times Q\\)) on drugs—and associated property crime used to finance purchases—to surge unless supply enforcement is paired with demand-side medical treatment.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l07': [
    {
      label: 'ECON107 L7 Indifference Curve Non-Intersection Proof + Isoquant Table',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-danger">Final 2024 Q2\(4\), Final 2025 Q1\(5\) &amp; 2nd Inc 2022 Q4<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-danger">Final 2024 Q2(4), Final 2025 Q1(5) &amp; 2nd Inc 2022 Q4 [5 Marks]</span> Formal proof why two indifference curves cannot intersect &amp; contrast Indifference Curve vs. Isoquant (Milk &amp; Sugar).</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Final 2024 Q2(4) &amp; Final 2025 Q1(5) [5 Marks]</span>
                  <strong>(a)</strong> Prove graphically and logically why two indifference curves of a rational consumer can never intersect. [3]<br>
                  <strong>(b)</strong> Contrast an indifference curve and an isoquant using the concrete example of milk and sugar. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Proof by Contradiction (Non-Intersection of Indifference Curves) [3 Marks]:</strong></p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 320 190" width="320" height="190" role="img" aria-label="Two intersecting indifference curves U1 and U2 meeting at point A, with bundle B above C at the same x coordinate">
                      <line x1="42" y1="162" x2="290" y2="162" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="42" y1="162" x2="42" y2="18" stroke="currentColor" stroke-width="1.3"/>
                      <path d="M 62 36 Q 130 112, 265 142" fill="none" stroke="#1E5B5A" stroke-width="2.1"/>
                      <path d="M 62 66 Q 135 102, 265 112" fill="none" stroke="#9E3F2E" stroke-width="2.1"/>
                      <line x1="210" y1="162" x2="210" y2="107" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="3,3"/>
                      <circle cx="132" cy="95" r="4" fill="currentColor"/>
                      <circle cx="210" cy="109" r="4" fill="#9E3F2E"/>
                      <circle cx="210" cy="133" r="4" fill="#1E5B5A"/>
                      <text x="128" y="85" font-size="11" font-weight="700" fill="currentColor">A</text>
                      <text x="217" y="106" font-size="11" font-weight="700" fill="#9E3F2E">B (on U₂)</text>
                      <text x="217" y="145" font-size="11" font-weight="700" fill="#1E5B5A">C (on U₁)</text>
                      <text x="270" y="112" font-size="11" fill="#9E3F2E">U₂</text>
                      <text x="270" y="145" font-size="11" fill="#1E5B5A">U₁</text>
                      <text x="170" y="182" font-size="11" text-anchor="middle" fill="currentColor">Good X</text>
                      <text x="16" y="92" font-size="11" text-anchor="middle" transform="rotate(-90 16 92)" fill="currentColor">Good Y</text>
                    </svg>
                  </figure>
                  <p>Suppose, to the contrary, that two distinct indifference curves \\(U_1\\) and \\(U_2\\) intersect at bundle \\(A\\). Pick a point \\(B\\) on \\(U_2\\) and a point \\(C\\) on \\(U_1\\) lying vertically aligned to the right of \\(A\\) such that \\(B\\) has the same quantity of Good \\(X\\) as \\(C\\) but strictly more of Good \\(Y\\) (or strictly more of both goods).<br>
                  1. Because \\(A\\) and \\(B\\) both lie on \\(U_2\\), the consumer is indifferent between them: \\(A \\sim B\\).<br>
                  2. Because \\(A\\) and \\(C\\) both lie on \\(U_1\\), the consumer is indifferent between them: \\(A \\sim C\\).<br>
                  3. By <strong>transitivity of preferences</strong>, \\(A \\sim B\\) and \\(A \\sim C \\implies B \\sim C\\).<br>
                  4. However, by <strong>non-satiation (monotonicity — &ldquo;more is better&rdquo;)</strong>, bundle \\(B\\) contains strictly more output than \\(C\\), so \\(B \\succ C\\) (strictly preferred). This contradicts \\(B \\sim C\\). Hence two indifference curves can never intersect. \\(\\blacksquare\\)</p>
                  <p><strong>Answer to (b) — Indifference Curve vs. Isoquant (Milk &amp; Sugar Example) [2 Marks]:</strong></p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Dimension</th><th>Indifference Curve (Consumer Theory)</th><th>Isoquant (Production Theory)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Decision Maker</strong></td><td>A household consumer preparing tea/desserts.</td><td>A sweetmeat firm producing Rasgolla / Sandesh.</td></tr>
                      <tr><td><strong>What the Curve Plots</strong></td><td>Combinations of <em>milk and sugar</em> consumed that yield the same <strong>ordinal level of personal satisfaction</strong>.</td><td>Combinations of <em>milk and sugar</em> inputs that produce an exact <strong>cardinal physical output</strong> (e.g., \\(50\\text{ kg}\\) of sweets).</td></tr>
                      <tr><td><strong>Measurability</strong></td><td>Ordinal ranking only (cannot attach physical units to utils).</td><td>Cardinally measurable in physical units (kg, liters, boxes).</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l09': [
    {
      label: 'ECON107 L9 Final 2025 Q5(a-d) & 2nd Incourse 2024 Q4 Complete Cost Scripts + SVG',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2025 • Q5\(a–d\) \[12 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q5(a–d) [12 Marks]</span> FC, VC &amp; Opportunity Cost + 4 Cost Curves; Toy firm least-cost adjustment; Budget cut effect; Cubic TC = Q³ − 21Q² + 500Q proof.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q5(a–d) [12 Marks]</span>
                  <strong>(a)</strong> Define Fixed Cost, Variable Cost, and Opportunity Cost with examples, and draw the standard short-run \\(MC, AC, AVC,\\) and \\(AFC\\) curves on a single labeled diagram. [3]<br>
                  <strong>(b)</strong> A toy manufacturer uses paper, glue, and craftsmen. State its least-cost input rule and explain how it adjusts input usage if the price of glue falls. [3]<br>
                  <strong>(c)</strong> Illustrate a firm's optimal input tangency using an isoquant–isocost diagram and show the effect of a decrease in total expenditure budget (input prices constant). [3]<br>
                  <strong>(d)</strong> Given \\(TC = Q^3 - 21Q^2 + 500Q\\), find the output \\(Q &gt; 0\\) where \\(MC = AC\\) and prove via calculus that \\(AC\\) is minimized at that exact output. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Definitions &amp; Four Short-Run Cost Curves [3 Marks]:</strong></p>
                  <p>&bull; <strong>Fixed Cost (\\(FC\\)):</strong> Contractual expenses paid in the short run even when output \\(Q = 0\\) (e.g., factory rent, equipment lease, insurance).<br>
                  &bull; <strong>Variable Cost (\\(VC\\)):</strong> Expenses that vary directly with output \\(Q\\) and equal zero at \\(Q = 0\\) (e.g., raw materials, hourly production wages, electricity).<br>
                  &bull; <strong>Opportunity Cost:</strong> The economic return of the best alternative use of a resource forgone (including implicit owner labor and capital returns).</p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 370 205" width="370" height="205" role="img" aria-label="Short-run cost curves showing U-shaped MC piercing minimum AVC and minimum AC, with rectangular hyperbola AFC declining continuously">
                      <line x1="45" y1="175" x2="340" y2="175" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="45" y1="175" x2="45" y2="18" stroke="currentColor" stroke-width="1.3"/>
                      <!-- AFC -->
                      <path d="M 65 95 Q 130 150, 325 166" fill="none" stroke="currentColor" stroke-opacity="0.65" stroke-width="1.7" stroke-dasharray="4,3"/>
                      <!-- AVC -->
                      <path d="M 70 112 Q 155 152, 295 62" fill="none" stroke="#A66A17" stroke-width="2.1"/>
                      <!-- AC -->
                      <path d="M 70 46 Q 185 130, 310 42" fill="none" stroke="#1E5B5A" stroke-width="2.2"/>
                      <!-- MC -->
                      <path d="M 72 135 Q 115 165, 255 24" fill="none" stroke="#9E3F2E" stroke-width="2.3"/>
                      <circle cx="163" cy="122" r="4" fill="#A66A17"/>
                      <circle cx="195" cy="86" r="4" fill="#1E5B5A"/>
                      <text x="258" y="26" font-size="11" font-weight="700" fill="#9E3F2E">MC</text>
                      <text x="313" y="45" font-size="11" font-weight="700" fill="#1E5B5A">AC</text>
                      <text x="298" y="65" font-size="11" font-weight="700" fill="#A66A17">AVC</text>
                      <text x="310" y="160" font-size="10.5" fill="currentColor">AFC</text>
                      <text x="202" y="92" font-size="10" fill="#1E5B5A">min AC</text>
                      <text x="169" y="132" font-size="10" fill="#A66A17">min AVC</text>
                      <text x="195" y="194" font-size="11" text-anchor="middle" fill="currentColor">Output (Q)</text>
                      <text x="16" y="96" font-size="11" text-anchor="middle" transform="rotate(-90 16 96)" fill="currentColor">Cost per Unit</text>
                    </svg>
                  </figure>
                  <p><strong>Answer to (b) — Toy Manufacturer Least-Cost Rule &amp; Fall in Glue Price [3 Marks]:</strong></p>
                  <p>To minimize the cost of any target toy output, marginal product per Taka spent must be equal across paper (\\(p\\)), glue (\\(g\\)), and craftsmen (\\(c\\)):</p>
                  <p>\\[\\frac{MP_p}{P_p} = \\frac{MP_g}{P_g} = \\frac{MP_c}{P_c}.\\]</p>
                  <p>When the price of glue \\(P_g\\) falls, the ratio \\(MP_g / P_g\\) becomes strictly greater than \\(MP_p / P_p\\) and \\(MP_c / P_c\\) (an extra Taka spent on glue yields more output than on paper or labor). By the <strong>Substitution Rule</strong>, the firm substitutes cheaper glue in place of costlier paper/craftsmen; as more glue is used, diminishing marginal returns lower \\(MP_g\\) until equality across all three ratios is restored.</p>
                  <p><strong>Answer to (c) — Isoquant–Isocost Tangency &amp; Budget Reduction [3 Marks]:</strong></p>
                  <p>With inputs \\(L\\) (horizontal) and \\(K\\) (vertical) and budget \\(B = P_L L + P_K K\\), equilibrium occurs at the tangency point \\(E_0\\) where the straight isocost line touches the highest attainable convex isoquant \\(q_0\\), satisfying \\(MRTS_{LK} = MP_L/MP_K = P_L/P_K\\). If total budget \\(B\\) decreases while \\(P_L\\) and \\(P_K\\) stay constant, the slope \\(-P_L/P_K\\) is unchanged, so the isocost line undergoes a <strong>parallel inward shift toward the origin</strong>, establishing a new tangency \\(E_1\\) on a lower isoquant \\(q_1 &lt; q_0\\) with reduced employment of normal inputs.</p>
                  <p><strong>Answer to (d) — Calculus Proof for \\(TC = Q^3 - 21Q^2 + 500Q\\) [3 Marks]:</strong></p>
                  <p><strong>Step 1 (Derive \\(MC\\) and \\(AC\\)):</strong></p>
                  <p>\\[MC = \\frac{d(TC)}{dQ} = 3Q^2 - 42Q + 500, \\qquad AC = \\frac{TC}{Q} = Q^2 - 21Q + 500.\\]</p>
                  <p><strong>Step 2 (Find Intersection \\(MC = AC\\) for \\(Q &gt; 0\\)):</strong></p>
                  <p>\\[3Q^2 - 42Q + 500 = Q^2 - 21Q + 500 \\implies 2Q^2 - 21Q = 0 \\implies Q(2Q - 21) = 0 \\implies \\mathbf{Q^* = 10.5}.\\]</p>
                  <p><strong>Step 3 (Prove \\(AC\\) Is Minimized at \\(Q^* = 10.5\\)):</strong></p>
                  <p>\\[\\frac{d(AC)}{dQ} = 2Q - 21 = 0 \\implies Q = 10.5, \\qquad \\frac{d^2(AC)}{dQ^2} = +2 &gt; 0.\\]</p>
                  <p>Since the first derivative vanishes at \\(Q = 10.5\\) and the second derivative is strictly positive, \\(AC\\) attains its strict global minimum \\(\\min AC = (10.5)^2 - 21(10.5) + 500 = \\mathbf{389.75}\\) precisely where \\(MC = AC\\). \\(\\blacksquare\\)</p>
                </div>
              </div>
            </div>
          </div>`,
    },
    {
      label: 'ECON107 L9 2nd Incourse 2024 Q4 Full Answer',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-purple">2nd In-course 2024 • Q4\(1,2\)<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">2nd In-course 2024 • Q4(1,2) [4 Marks]</span> Cake bakery (flour, butter, egg, sugar): Least-cost combination rule &amp; MC–AC relationship.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 2nd Incourse 2024, Q4(1,2) [4 Marks]</span>
                  A commercial bakery uses flour, butter, eggs, and sugar to bake cakes. <strong>(1)</strong> State the least-cost input rule for this bakery. <strong>(2)</strong> Explain the geometric relationship between its Marginal Cost (\\(MC\\)) and Average Cost (\\(AC\\)) curves.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>(1) Four-Input Least-Cost Rule:</strong> The bakery minimizes the total cost of producing a given batch of cakes when the marginal physical product per Taka spent is identical across all four ingredients:</p>
                  <p>\\[\\frac{MP_{\\text{flour}}}{P_{\\text{flour}}} = \\frac{MP_{\\text{butter}}}{P_{\\text{butter}}} = \\frac{MP_{\\text{egg}}}{P_{\\text{egg}}} = \\frac{MP_{\\text{sugar}}}{P_{\\text{sugar}}}.\\]</p>
                  <p><strong>(2) Geometric Relationship Between \\(MC\\) and \\(AC\\):</strong><br>
                  &bull; Whenever \\(MC &lt; AC\\), producing an additional cake adds less to total cost than the current average, pulling the \\(AC\\) curve <strong>downward</strong>.<br>
                  &bull; Whenever \\(MC &gt; AC\\), the extra cake costs more than the current average, pulling the \\(AC\\) curve <strong>upward</strong>.<br>
                  &bull; Consequently, the rising \\(MC\\) curve must intersect the U-shaped \\(AC\\) curve <strong>precisely at the minimum point of \\(AC\\)</strong> (where \\(d(AC)/dQ = (MC - AC)/Q = 0 \\iff MC = AC\\)).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l10': [
    {
      label: 'ECON107 L10 Complete Self-Contained Mathematical Proofs (No Section 5 Deflections)',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q4(2,3,4) [9 Marks]</span> Prove CES generalizes Cobb-Douglas &amp; Leontief; prove CES exhibits Constant Returns to Scale; analyze ML-driven production.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q4(2,3,4) [3 + 3 + 3 = 9 Marks]</span>
                  Consider the CES production function \\(Q = A\\big[\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}\\big]^{-1/\\rho}\\) (\\(A &gt; 0,\\; 0 &lt; \\delta &lt; 1,\\; \\rho &gt; -1\\)).<br>
                  <strong>(2)</strong> Show mathematically how CES generalizes both Cobb-Douglas and Leontief production functions. [3]<br>
                  <strong>(3)</strong> Prove that this CES production function exhibits Constant Returns to Scale (CRS). [3]<br>
                  <strong>(4)</strong> Explain how modern Machine-Learning (ML) driven production processes challenge traditional neoclassical production assumptions. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (2) — Limiting Special Cases of CES (\\(\\sigma = \\frac{1}{1+\\rho}\\)) [3 Marks]:</strong></p>
                  <p><em>Case A (Cobb-Douglas as \\(\\rho \\to 0\\), i.e., \\(\\sigma \\to 1\\)):</em> Take natural logarithms:</p>
                  <p>\\[\\ln Q = \\ln A - \\frac{\\ln\\big[\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}\\big]}{\\rho}.\\]</p>
                  <p>As \\(\\rho \\to 0\\), numerator \\(\\ln[\\delta + (1-\\delta)] = \\ln 1 = 0\\) and denominator \\(\\rho \\to 0\\) (\\(0/0\\) form). Applying L'Hôpital's Rule with respect to \\(\\rho\\) (using \\(\\frac{d}{d\\rho}(K^{-\\rho}) = -K^{-\\rho}\\ln K\\)):</p>
                  <p>\\[\\lim_{\\rho \\to 0} \\ln Q = \\ln A - \\lim_{\\rho \\to 0} \\frac{-\\delta K^{-\\rho}\\ln K - (1 - \\delta)L^{-\\rho}\\ln L}{\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}} = \\ln A + \\delta\\ln K + (1 - \\delta)\\ln L = \\ln\\!\\left(A K^{\\delta} L^{1-\\delta}\\right).\\]</p>
                  <p>Exponentiating yields the Cobb-Douglas function \\(\\mathbf{Q = A K^{\\delta} L^{1-\\delta}}\\).</p>
                  <p><em>Case B (Leontief Fixed-Proportions as \\(\\rho \\to +\\infty\\), i.e., \\(\\sigma \\to 0\\)):</em> Let \\(m = \\min(K, L)\\). Factor \\(m^{-\\rho}\\) out of the bracket (say \\(K \\le L\\), so \\(m = K\\) and \\((K/L)^{\\rho} \\to 0\\) if \\(K &lt; L\\)):</p>
                  <p>\\[Q = A K \\big[\\delta + (1 - \\delta)(K/L)^{\\rho}\\big]^{-1/\\rho} \\xrightarrow{\\rho \\to \\infty} A K (\\delta)^{0} = A K = \\mathbf{A\\min(K, L)}.\\]</p>
                  <p><strong>Answer to (3) — Algebraic Proof of Constant Returns to Scale [3 Marks]:</strong></p>
                  <p>Scale both inputs by any positive constant \\(t &gt; 0\\):</p>
                  <p>\\[\\begin{aligned} Q(tK, tL) &= A\\big[\\delta(tK)^{-\\rho} + (1 - \\delta)(tL)^{-\\rho}\\big]^{-1/\\rho} \\\\ &= A\\Big[t^{-\\rho}\\big(\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}\\big)\\Big]^{-1/\\rho} \\\\ &= (t^{-\\rho})^{-1/\\rho} \\cdot A\\big[\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}\\big]^{-1/\\rho} = t^1 Q(K, L) = \\mathbf{t\\,Q(K, L)}. \\end{aligned}\\]</p>
                  <p>Since \\(Q(tK, tL) = t Q(K, L)\\) (homogeneous of degree \\(1\\)), CES exhibits <strong>Constant Returns to Scale</strong>. \\(\\blacksquare\\)</p>
                  <p><strong>Answer to (4) — How ML-Driven Production Violates Traditional Assumptions [3 Marks]:</strong></p>
                  <ol>
                    <li><strong>Non-Rival Inputs vs. Rival Physical Inputs:</strong> Classical \\(K\\) and \\(L\\) are rival (a machine used in Factory 1 cannot simultaneously run in Factory 2), whereas trained ML weights and digital datasets are <em>non-rival</em> and can be replicated across millions of users at near-zero marginal cost.</li>
                    <li><strong>Endogenous Self-Improving Technology vs. Static \\(A\\):</strong> Traditional production treats \\(A\\) as exogenous and fixed in the short run, whereas ML pipelines exhibit <em>data feedback loops</em>—more output/users generate training data that endogenously raise \\(A\\).</li>
                    <li><strong>Increasing Returns vs. Diminishing Returns:</strong> High fixed compute/training cost paired with near-zero marginal inference cost generates strong <em>increasing returns to scale</em> rather than U-shaped average costs.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2017 • Q6(a,b,c) [12 Marks]</span> Optimize Q = K⁰·⁴ L⁰·⁶ (B = 110, P_K = 4, P_L = 5); Prove CES has diminishing marginal returns &amp; C-D limit.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2017, Q6(a,b,c) [4 + 4 + 4 = 12 Marks]</span>
                  <strong>(a)</strong> Maximize output \\(Q = K^{0.4} L^{0.6}\\) subject to total budget \\(B = 110\\) given input prices \\(P_K = 4\\) and \\(P_L = 5\\). [4]<br>
                  <strong>(b)</strong> Prove mathematically that the CES production function exhibits diminishing marginal returns to each input for \\(\\rho &gt; -1\\). [4]<br>
                  <strong>(c)</strong> Prove that the Cobb-Douglas function is the limiting case of CES as \\(\\rho \\to 0\\). [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Constrained Output Maximization [4 Marks]:</strong></p>
                  <p>Form the Lagrangian \\(\\mathcal{L} = K^{0.4}L^{0.6} + \\lambda(110 - 4K - 5L)\\). First-order conditions:</p>
                  <p>\\[\\frac{\\partial \\mathcal{L}}{\\partial K} = 0.4 K^{-0.6} L^{0.6} - 4\\lambda = 0, \\qquad \\frac{\\partial \\mathcal{L}}{\\partial L} = 0.6 K^{0.4} L^{-0.4} - 5\\lambda = 0.\\]</p>
                  <p>Dividing the two conditions gives the tangency rule \\(\\frac{0.4 L}{0.6 K} = \\frac{4}{5} \\implies \\frac{2L}{3K} = \\frac{4}{5} \\implies L = 1.2 K\\). Substituting into the budget constraint \\(4K + 5L = 110\\):</p>
                  <p>\\[4K + 5(1.2K) = 10K = 110 \\implies \\mathbf{K^* = 11}, \\quad \\mathbf{L^* = 13.2}, \\quad \\mathbf{Q^* = 11^{0.4}(13.2)^{0.6} \\approx 12.27}.\\]</p>
                  <p><strong>Answer to (b) — Proof of Diminishing Marginal Returns in CES [4 Marks]:</strong></p>
                  <p>Write \\(Q^{-\\rho} = A^{-\\rho}[\\delta K^{-\\rho} + (1 - \\delta)L^{-\\rho}]\\). Differentiating implicitly with respect to \\(K\\) (holding \\(L\\) constant):</p>
                  <p>\\[-\\rho Q^{-\\rho - 1} \\frac{\\partial Q}{\\partial K} = A^{-\\rho}(-\\rho \\delta K^{-\\rho - 1}) \\implies MP_K = \\frac{\\partial Q}{\\partial K} = \\delta A^{-\\rho}\\left(\\frac{Q}{K}\\right)^{1+\\rho} &gt; 0.\\]</p>
                  <p>Differentiating \\(MP_K = \\delta A^{-\\rho} Q^{1+\\rho} K^{-(1+\\rho)}\\) a second time with respect to \\(K\\):</p>
                  <p>\\[\\frac{\\partial^2 Q}{\\partial K^2} = \\delta A^{-\\rho}(1 + \\rho) Q^{\\rho} K^{-(2+\\rho)}\\left(K \\frac{\\partial Q}{\\partial K} - Q\\right).\\]</p>
                  <p>By Euler's Theorem for CRS, \\(Q = K\\frac{\\partial Q}{\\partial K} + L\\frac{\\partial Q}{\\partial L}\\), so \\(K\\frac{\\partial Q}{\\partial K} - Q = -L\\frac{\\partial Q}{\\partial L} &lt; 0\\) (since \\(L &gt; 0\\) and \\(MP_L &gt; 0\\)). Because \\(1 + \\rho &gt; 0\\) (for \\(\\rho &gt; -1\\)), we conclude \\(\\mathbf{\\dfrac{\\partial^2 Q}{\\partial K^2} &lt; 0}\\) (and symmetrically \\(\\dfrac{\\partial^2 Q}{\\partial L^2} &lt; 0\\)), proving strict diminishing marginal returns to each input. \\(\\blacksquare\\)</p>
                  <p><strong>Answer to (c) — Proof that CES \\(\\to\\) Cobb-Douglas as \\(\\rho \\to 0\\) [4 Marks]:</strong></p>
                  <p>Taking logs: \\(\\ln Q - \\ln A = -\\frac{1}{\\rho}\\ln[\\delta K^{-\\rho} + (1-\\delta)L^{-\\rho}]\\). Applying L'Hôpital's Rule to the \\(0/0\\) indeterminate form as \\(\\rho \\to 0\\):</p>
                  <p>\\[\\lim_{\\rho \\to 0}(\\ln Q - \\ln A) = \\lim_{\\rho \\to 0} \\frac{\\delta K^{-\\rho}\\ln K + (1-\\delta)L^{-\\rho}\\ln L}{\\delta K^{-\\rho} + (1-\\delta)L^{-\\rho}} = \\delta\\ln K + (1-\\delta)\\ln L \\implies \\mathbf{Q = A K^{\\delta} L^{1-\\delta}}. \\quad \\blacksquare\\]</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2019 • Q6(a,b,c) [12 Marks]</span> Euler's product-exhaustion theorem; CES advantages; verify Euler's theorem for Z = X² − XY + 2Y² and Z = A^α B^β.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2019, Q6(a,b,c) [12 Marks]</span>
                  <strong>(a)</strong> State Euler's Theorem and explain its economic significance for income distribution under linearly homogeneous production. [4]<br>
                  <strong>(b)</strong> Define the CES production function and state its main empirical advantage over Cobb-Douglas. [3]<br>
                  <strong>(c)</strong> Verify Euler's Theorem for: (i) \\(Z = X^2 - XY + 2Y^2\\), and (ii) \\(Z = A^{\\alpha} B^{\\beta}\\). [5]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> If \\(Q = f(K, L)\\) is homogeneous of degree \\(r\\) (so \\(f(tK, tL) = t^r f(K, L)\\)), Euler's Theorem states that \\(K\\frac{\\partial Q}{\\partial K} + L\\frac{\\partial Q}{\\partial L} = r Q\\). Under Constant Returns to Scale (\\(r = 1\\)) and competitive factor markets where each input is paid its marginal product (\\(r_K = MP_K,\\; w_L = MP_L\\)), we get \\(K \\cdot MP_K + L \\cdot MP_L = Q\\): total output is <strong>exactly exhausted</strong> by factor payments with zero residual profit or deficit (Clark–Wicksteed Product Exhaustion Theorem).</p>
                  <p><strong>Answer to (b):</strong> The CES function is \\(Q = A[\\delta K^{-\\rho} + (1-\\delta)L^{-\\rho}]^{-1/\\rho}\\). Unlike Cobb-Douglas—which rigidly forces the elasticity of substitution to equal \\(\\sigma = 1\\) in every industry—CES permits any constant empirical elasticity of substitution \\(\\sigma = \\frac{1}{1+\\rho} \\in (0, \\infty)\\), encompassing complements (\\(\\sigma &lt; 1\\)), Cobb-Douglas (\\(\\sigma = 1\\)), and easy substitutes (\\(\\sigma &gt; 1\\)).</p>
                  <p><strong>Answer to (c)(i) — Verification for \\(Z = X^2 - XY + 2Y^2\\):</strong></p>
                  <p>1. <em>Degree of Homogeneity:</em> \\(f(tX, tY) = (tX)^2 - (tX)(tY) + 2(tY)^2 = t^2(X^2 - XY + 2Y^2) = t^2 Z \\implies r = 2\\).<br>
                  2. <em>Partial Derivatives &amp; LHS:</em> \\(\\frac{\\partial Z}{\\partial X} = 2X - Y\\) and \\(\\frac{\\partial Z}{\\partial Y} = -X + 4Y\\). Therefore:</p>
                  <p>\\[X\\frac{\\partial Z}{\\partial X} + Y\\frac{\\partial Z}{\\partial Y} = X(2X - Y) + Y(-X + 4Y) = 2X^2 - 2XY + 4Y^2 = 2(X^2 - XY + 2Y^2) = \\mathbf{2Z}. \\;\\checkmark\\]</p>
                  <p><strong>Answer to (c)(ii) — Verification for \\(Z = A^{\\alpha} B^{\\beta}\\):</strong></p>
                  <p>1. <em>Degree of Homogeneity:</em> \\(f(tA, tB) = (tA)^{\\alpha}(tB)^{\\beta} = t^{\\alpha + \\beta} A^{\\alpha}B^{\\beta} = t^{\\alpha+\\beta} Z \\implies r = \\alpha + \\beta\\).<br>
                  2. <em>Partial Derivatives &amp; LHS:</em> \\(\\frac{\\partial Z}{\\partial A} = \\alpha A^{\\alpha-1} B^{\\beta}\\) and \\(\\frac{\\partial Z}{\\partial B} = \\beta A^{\\alpha} B^{\\beta-1}\\). Therefore:</p>
                  <p>\\[A\\frac{\\partial Z}{\\partial A} + B\\frac{\\partial Z}{\\partial B} = \\alpha A^{\\alpha} B^{\\beta} + \\beta A^{\\alpha} B^{\\beta} = \\mathbf{(\\alpha + \\beta)Z}. \\;\\checkmark\\]</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-purple">Final 2023 • Q4(c) [5 Marks]</span> Distinguish Cobb-Douglas vs. CES production functions &amp; prove both exhibit Constant Returns to Scale.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2023, Q4(c) [5 Marks]</span>
                  Define and distinguish between the strict Cobb-Douglas and CES production functions, and prove algebraically that both exhibit constant returns to scale.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>1. Definitions &amp; Key Distinction:</strong><br>
                  &bull; <em>Strict Cobb-Douglas:</em> \\(Q = A K^{\\alpha} L^{1-\\alpha}\\) (\\(A &gt; 0,\\; 0 &lt; \\alpha &lt; 1\\)), which restricts the elasticity of substitution to \\(\\sigma = 1\\) and implies constant factor income shares \\(\\alpha\\) and \\(1-\\alpha\\).<br>
                  &bull; <em>CES Function:</em> \\(Q = A[\\delta K^{-\\rho} + (1-\\delta)L^{-\\rho}]^{-1/\\rho}\\) (\\(\\rho &gt; -1\\)), which generalizes Cobb-Douglas by allowing any constant elasticity of substitution \\(\\sigma = \\frac{1}{1+\\rho}\\).</p>
                  <p><strong>2. Proof of CRS for Strict Cobb-Douglas:</strong> For any scalar \\(t &gt; 0\\):</p>
                  <p>\\[Q(tK, tL) = A(tK)^{\\alpha}(tL)^{1-\\alpha} = A t^{\\alpha + 1 - \\alpha} K^{\\alpha}L^{1-\\alpha} = t^1 A K^{\\alpha}L^{1-\\alpha} = \\mathbf{t\\,Q(K, L)}.\\]</p>
                  <p><strong>3. Proof of CRS for CES:</strong> For any scalar \\(t &gt; 0\\):</p>
                  <p>\\[Q(tK, tL) = A\\big[\\delta t^{-\\rho}K^{-\\rho} + (1-\\delta)t^{-\\rho}L^{-\\rho}\\big]^{-1/\\rho} = (t^{-\\rho})^{-1/\\rho} A\\big[\\delta K^{-\\rho} + (1-\\delta)L^{-\\rho}\\big]^{-1/\\rho} = \\mathbf{t\\,Q(K, L)}. \\quad \\blacksquare\\]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l11': [
    {
      label: 'ECON107 L11 Shutdown & Zero-Profit Exam SVG + Complete Final 2025/2019 Answers',
      find: /<section class="section-card" id="sec-pyq">[\s\S]*?<\/section>/,
      replace: `<section class="section-card" id="sec-pyq">
        <div class="section-header">
          <div>
            <div class="section-kicker">Section 05 • Exam Preparation</div>
            <h2>ISRT Past Exam Question (PYQ) Vault (2019–2025)</h2>
          </div>
          <button class="done-btn" data-section="s5">✓ Mark Done</button>
        </div>

        <div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q6(2,3,4) [9 Marks]</span> Horizontal vs. downward demand (PC vs. Monopoly); True/False proof of MR = MC; Graphical derivation of Shutdown Condition.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q6(b,c,d) [3 + 3 + 3 = 9 Marks]</span>
                  <strong>(b)</strong> Why does an individual perfectly competitive firm face a horizontal demand curve whereas a monopolist faces a downward-sloping demand curve? [3]<br>
                  <strong>(c)</strong> &ldquo;Both perfectly competitive firms and monopolists maximize profit where \\(MR = MC\\).&rdquo; True or False? Justify mathematically. [3]<br>
                  <strong>(d)</strong> Graphically illustrate and derive the short-run shutdown condition of a perfectly competitive firm. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (b) — Horizontal Firm Demand vs. Downward Monopoly Demand [3 Marks]:</strong> A perfectly competitive market contains thousands of tiny firms selling a strictly homogeneous product. Because any single firm supplies a negligible fraction of industry output, it is a <strong>price-taker</strong>: raising price even slightly above market price \\(P^*\\) loses 100% of buyers, while it can sell all it wishes at \\(P^*\\) without depressing price—yielding a <strong>horizontal (perfectly elastic, \\(E_D = \\infty\\)) firm demand curve</strong>. Conversely, a pure monopolist <em>is</em> the sole seller in the entire industry, so its firm demand curve is the <strong>downward-sloping market demand curve</strong>; to sell additional units, it must lower price.</p>
                  <p><strong>Answer to (c) — Universal \\(MR = MC\\) Rule [3 Marks]:</strong> <strong>TRUE.</strong> For <em>any</em> firm, profit is \\(\\pi(q) = TR(q) - TC(q)\\). Necessary first-order condition for interior profit maximization:</p>
                  <p>\\[\\frac{d\\pi}{dq} = \\frac{d(TR)}{dq} - \\frac{d(TC)}{dq} = MR(q) - MC(q) = 0 \\iff \\mathbf{MR(q) = MC(q)}.\\]</p>
                  <p>Under <em>perfect competition</em>, price \\(P\\) is constant (\\(TR = Pq\\)), so \\(MR = d(Pq)/dq = P\\), reducing \\(MR = MC\\) to the special case \\(P = MC\\). Under <em>monopoly</em>, \\(P(q)\\) falls with \\(q\\), so \\(MR = P + q\\frac{dP}{dq} &lt; P\\), and the monopolist equates \\(MR = MC &lt; P\\).</p>
                  <p><strong>Answer to (d) — Short-Run Shutdown Condition &amp; Diagram [3 Marks]:</strong></p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 380 210" width="380" height="210" role="img" aria-label="Competitive firm MC, AC, and AVC curves showing Break-Even Zero-Profit Point M at min AC and Shutdown Point M-prime at min AVC">
                      <line x1="50" y1="178" x2="345" y2="178" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="50" y1="178" x2="50" y2="18" stroke="currentColor" stroke-width="1.3"/>
                      <!-- AVC -->
                      <path d="M 75 122 Q 160 164, 295 72" fill="none" stroke="#A66A17" stroke-width="2.1"/>
                      <!-- AC -->
                      <path d="M 75 52 Q 190 128, 310 42" fill="none" stroke="#1E5B5A" stroke-width="2.2"/>
                      <!-- MC -->
                      <path d="M 82 148 Q 120 172, 255 22" fill="none" stroke="#9E3F2E" stroke-width="2.4"/>
                      <!-- Price lines -->
                      <line x1="50" y1="88" x2="330" y2="88" stroke="#1E5B5A" stroke-dasharray="4,3"/>
                      <line x1="50" y1="129" x2="330" y2="129" stroke="#A66A17" stroke-dasharray="4,3"/>
                      <circle cx="195" cy="88" r="4.5" fill="#1E5B5A"/>
                      <circle cx="163" cy="129" r="4.5" fill="#A66A17"/>
                      <text x="203" y="83" font-size="10.5" font-weight="700" fill="#1E5B5A">M (Zero-Profit: P = min AC)</text>
                      <text x="171" y="143" font-size="10.5" font-weight="700" fill="#A66A17">M′ (Shutdown: P_S = min AVC)</text>
                      <text x="260" y="26" font-size="11" font-weight="700" fill="#9E3F2E">MC (Supply above M′)</text>
                      <text x="313" y="45" font-size="11" font-weight="700" fill="#1E5B5A">AC</text>
                      <text x="298" y="75" font-size="11" font-weight="700" fill="#A66A17">AVC</text>
                      <text x="24" y="92" font-size="10.5" fill="#1E5B5A">P_B</text>
                      <text x="24" y="133" font-size="10.5" fill="#A66A17">P_S</text>
                      <text x="198" y="196" font-size="11" text-anchor="middle" fill="currentColor">Firm Output (q)</text>
                    </svg>
                  </figure>
                  <p>In the short run, Fixed Cost \\(FC\\) must be paid even if \\(q = 0\\) (yielding shutdown loss \\(\\pi(0) = -FC\\)). If the firm produces \\(q &gt; 0\\), its profit is \\(\\pi(q) = (TR - VC) - FC = q(P - AVC) - FC\\).<br>
                  &bull; If \\(\\min AVC &lt; P &lt; \\min AC\\): \\(P &gt; AVC\\), so revenue covers all variable costs plus part of \\(FC\\); operating incurs a smaller loss than \\(-FC\\).<br>
                  &bull; If \\(P &lt; \\min AVC\\) (below point \\(M'\\)): \\(TR &lt; VC\\) at every \\(q &gt; 0\\), so operating loses <em>more</em> than \\(FC\\). Hence the firm shuts down (\\(q = 0\\)) whenever \\(\\mathbf{P &lt; \\min AVC}\\).</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q6(2) [2 Marks]</span> "A competitive firm's shutdown point comes where price is less than minimum average cost" — True or False?</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q6(2) [2 Marks]</span>
                  &ldquo;A competitive firm's shutdown point comes where price is less than minimum average cost.&rdquo; State True or False and justify your answer.
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Verdict: FALSE.</strong> A competitive firm's short-run shutdown point occurs where market price falls below <strong>minimum Average Variable Cost (\\(P &lt; \\min AVC\\))</strong>, not minimum Average Total Cost (\\(\\min AC\\)). When \\(\\min AVC &lt; P &lt; \\min AC\\), total economic profit is negative, yet \\(TR &gt; VC\\), so every unit sold contributes \\(P - AVC &gt; 0\\) toward defraying sunk fixed costs \\(FC\\), making continued operation strictly preferable to shutting down.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-warn">Final 2019 • Q5(a,b) [8 Marks]</span> Zero-profit &amp; shutdown points graphically + proving TR and TC curves have parallel tangents at max profit.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2019, Q5(a,b) [5 + 3 = 8 Marks]</span>
                  <strong>(a)</strong> Explain graphically the zero-profit (break-even) point and the shutdown point of a perfectly competitive firm. [5]<br>
                  <strong>(b)</strong> Show mathematically and geometrically that the slopes of the Total Revenue (\\(TR\\)) and Total Cost (\\(TC\\)) curves are parallel at the profit-maximizing output. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a):</strong> Draw the U-shaped \\(AC\\) and \\(AVC\\) curves pierced at their respective minimum points \\(M\\) and \\(M'\\) by the rising \\(MC\\) curve (as shown in the diagram in Q6d above):<br>
                  &bull; <strong>Zero-Profit (Break-Even) Point \\(M\\):</strong> Occurs at \\(P_B = \\min AC\\), where \\(P = MC = AC\\). Here \\(TR = Pq = AC \\cdot q = TC\\), so economic profit \\(\\pi = 0\\) (the firm earns exact normal return on capital and management).<br>
                  &bull; <strong>Shutdown Point \\(M'\\):</strong> Occurs at \\(P_S = \\min AVC\\), where \\(P = MC = AVC\\). Here \\(TR = VC\\) and \\(\\pi = -FC\\), so the firm is indifferent between operating and shutting down; for any \\(P &lt; P_S\\), the firm produces \\(q = 0\\).</p>
                  <p><strong>Answer to (b) — Parallel Tangents of \\(TR(q)\\) and \\(TC(q)\\):</strong> Total profit is the vertical gap \\(\\pi(q) = TR(q) - TC(q)\\). Maximizing vertical distance requires the first-order condition:</p>
                  <p>\\[\\frac{d\\pi}{dq} = \\frac{d(TR)}{dq} - \\frac{d(TC)}{dq} = 0 \\iff \\frac{d(TR)}{dq} = \\frac{d(TC)}{dq} \\;\\;(\\text{i.e., } MR = MC),\\]</p>
                  <p>with second-order condition \\(\\frac{d^2\\pi}{dq^2} = \\frac{d(MR)}{dq} - \\frac{d(MC)}{dq} &lt; 0\\). Because \\(\\frac{d(TR)}{dq}\\) is the tangent slope of the \\(TR\\) curve and \\(\\frac{d(TC)}{dq}\\) is the tangent slope of the \\(TC\\) curve, equal derivatives mean the tangent lines to \\(TR\\) and \\(TC\\) at \\(q^*\\) have identical slopes and are therefore <strong>strictly parallel</strong>. \\(\\blacksquare\\)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],

  'econ107-l12': [
    {
      label: 'ECON107 L12 Final 2024 Q6 Complete Market Table + Monopoly SVG + Hessian Check',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">Final 2024 • Q6\(1, 3, 4\) \[10 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q6(1, 3, 4) [10 Marks]</span> Comparison table of PC, Monopolistic Competition &amp; Monopoly; Monopoly MR = MC diagram; Two-product monopoly optimization.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q6(1, 3, 4) [3 + 3 + 4 = 10 Marks]</span>
                  <strong>(1)</strong> Distinguish systematically among Perfect Competition, Monopolistic Competition, and Pure Monopoly. [3]<br>
                  <strong>(3)</strong> Explain graphically how a profit-maximizing monopolist determines optimal output and price using \\(MR = MC\\). [3]<br>
                  <strong>(4)</strong> A monopolist sells two products with demand functions \\(Q_1 = 50 - 0.5P_1\\) and \\(Q_2 = 76 - P_2\\) and joint total cost \\(C = 3Q_1^2 + 2Q_1 Q_2 + 2Q_2^2 + 55\\). Find the profit-maximizing quantities, prices, and maximum profit. [4]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (1) — Market Structure Comparison Table [3 Marks]:</strong></p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Feature</th><th>Perfect Competition</th><th>Monopolistic Competition</th><th>Pure Monopoly</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Number of Sellers</strong></td><td>Very many small firms</td><td>Many sellers</td><td>Single seller (1 firm = industry)</td></tr>
                      <tr><td><strong>Product Nature</strong></td><td>Identical / homogeneous</td><td>Differentiated (branding, quality)</td><td>Unique product, no close substitutes</td></tr>
                      <tr><td><strong>Control over Price</strong></td><td>None (price-taker, \\(P = MC\\))</td><td>Limited local price-setting power</td><td>Considerable price-maker (\\(P &gt; MR = MC\\))</td></tr>
                      <tr><td><strong>Barriers to Entry</strong></td><td>Free entry and exit</td><td>Free / low entry and exit</td><td>Complete barriers (legal franchise, patent, scale)</td></tr>
                      <tr><td><strong>Long-Run Economic Profit</strong></td><td>Zero (\\(\\pi = 0\\) at \\(\\min AC\\))</td><td>Zero (\\(\\pi = 0\\), tangency above \\(\\min AC\\))</td><td>Can sustain positive supernormal profit (\\(\\pi &gt; 0\\))</td></tr>
                    </tbody>
                  </table>
                  <p><strong>Answer to (3) — Graphical Monopoly Equilibrium (\\(MR = MC\\)) [3 Marks]:</strong></p>
                  <figure class="exam-svg-fig">
                    <svg viewBox="0 0 360 205" width="360" height="205" role="img" aria-label="Monopoly equilibrium diagram showing downward demand D, steeper MR, MC intersecting MR at E to fix q*, price P* read up on demand at G, and shaded profit rectangle">
                      <line x1="46" y1="175" x2="335" y2="175" stroke="currentColor" stroke-width="1.3"/>
                      <line x1="46" y1="175" x2="46" y2="18" stroke="currentColor" stroke-width="1.3"/>
                      <rect x="46" y="68" width="118" height="32" fill="#1E5B5A" fill-opacity="0.16" stroke="#1E5B5A" stroke-dasharray="3,2"/>
                      <!-- D and MR -->
                      <line x1="58" y1="28" x2="310" y2="165" stroke="#1E5B5A" stroke-width="2.2"/>
                      <line x1="58" y1="28" x2="195" y2="175" stroke="#A66A17" stroke-width="2"/>
                      <!-- MC and AC -->
                      <path d="M 70 148 Q 130 155, 255 34" fill="none" stroke="#9E3F2E" stroke-width="2.2"/>
                      <path d="M 75 72 Q 175 122, 290 64" fill="none" stroke="currentColor" stroke-width="1.8"/>
                      <line x1="164" y1="175" x2="164" y2="68" stroke="currentColor" stroke-opacity="0.5" stroke-dasharray="3,3"/>
                      <circle cx="164" cy="127" r="4" fill="#9E3F2E"/>
                      <circle cx="164" cy="86" r="4" fill="#1E5B5A"/>
                      <text x="171" y="133" font-size="10.5" font-weight="700" fill="#9E3F2E">E (MR = MC)</text>
                      <text x="171" y="82" font-size="10.5" font-weight="700" fill="#1E5B5A">G (P* on Demand)</text>
                      <text x="313" y="164" font-size="11" font-weight="700" fill="#1E5B5A">D = AR</text>
                      <text x="198" y="170" font-size="11" font-weight="700" fill="#A66A17">MR</text>
                      <text x="258" y="36" font-size="11" font-weight="700" fill="#9E3F2E">MC</text>
                      <text x="293" y="66" font-size="11" fill="currentColor">AC</text>
                      <text x="24" y="88" font-size="10.5" fill="currentColor">P*</text>
                      <text x="164" y="192" font-size="11" text-anchor="middle" fill="currentColor">q*</text>
                    </svg>
                  </figure>
                  <p>Because the monopolist must cut price on all units to sell more, \\(MR\\) lies strictly below demand \\(D\\). Profit is maximized at output \\(q^*\\) where \\(MR = MC\\) (point \\(E\\)): for \\(q &lt; q^*\\), \\(MR &gt; MC\\) so expanding output adds to profit; for \\(q &gt; q^*\\), \\(MC &gt; MR\\) so extra units reduce profit. Projecting vertically from \\(q^*\\) up to the demand curve \\(D\\) at point \\(G\\) determines the optimal monopoly price \\(P^* &gt; MC\\), yielding supernormal profit \\((P^* - AC(q^*))q^*\\).</p>
                  <p><strong>Answer to (4) — Two-Product Monopoly Optimization [4 Marks]:</strong></p>
                  <p><strong>Step 1 (Invert Demands &amp; Form Profit Function):</strong> \\(P_1 = 100 - 2Q_1 \\implies TR_1 = 100Q_1 - 2Q_1^2\\); \\(P_2 = 76 - Q_2 \\implies TR_2 = 76Q_2 - Q_2^2\\). Total profit \\(\\pi(Q_1, Q_2) = TR_1 + TR_2 - C\\):</p>
                  <p>\\[\\pi = (100Q_1 - 2Q_1^2) + (76Q_2 - Q_2^2) - (3Q_1^2 + 2Q_1 Q_2 + 2Q_2^2 + 55) = 100Q_1 + 76Q_2 - 5Q_1^2 - 2Q_1 Q_2 - 3Q_2^2 - 55.\\]</p>
                  <p><strong>Step 2 (First-Order Conditions):</strong></p>
                  <p>\\[\\begin{cases} \\dfrac{\\partial \\pi}{\\partial Q_1} = 100 - 10Q_1 - 2Q_2 = 0 \\implies 5Q_1 + Q_2 = 50 \\\\ \\dfrac{\\partial \\pi}{\\partial Q_2} = 76 - 2Q_1 - 6Q_2 = 0 \\implies Q_1 + 3Q_2 = 38 \\end{cases}\\]</p>
                  <p>From the first equation \\(Q_2 = 50 - 5Q_1\\); substituting into the second gives \\(Q_1 + 3(50 - 5Q_1) = 38 \\implies -14Q_1 = -112 \\implies \\mathbf{Q_1^* = 8}\\) and \\(\\mathbf{Q_2^* = 10}\\).</p>
                  <p><strong>Step 3 (Second-Order Hessian Verification, Prices &amp; Maximum Profit):</strong> \\(\\pi_{11} = -10 &lt; 0\\), \\(\\pi_{22} = -6 &lt; 0\\), and \\(\\det(H) = (-10)(-6) - (-2)^2 = 56 &gt; 0\\) (strict global maximum). Optimal prices are \\(P_1^* = 100 - 2(8) = \\mathbf{\\$84}\\) and \\(P_2^* = 76 - 10 = \\mathbf{\\$66}\\), giving maximum profit \\(\\pi^* = 100(8) + 76(10) - 5(64) - 2(80) - 3(100) - 55 = \\mathbf{\\$725}\\).</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l13': [
    {
      label: 'ECON107 L13 Final 2025 Q7 & Final 2024 Q7 Complete Macro Scripts + Bread Value-Added Table',
      find: /<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-primary">Final 2025 • Q7\(a–d\) &amp; Q1\(4\) \[14 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<div class="acc-item">\s*<button class="acc-btn" type="button">\s*<span><span class="pill pill-accent">Final 2024 • Q7\(a–d\) \[12 Marks\]<\/span>[\s\S]*?<\/div>\s*<\/div>/,
      replace: `<div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q7(a–d) &amp; Q1(4) [14 Marks]</span> GDP vs. NDP vs. GNP; Transfer payments exclusion; Value-Added numeric table; MPC &amp; Consumption; Monetary/Fiscal investment policy.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q1(d) [2m] &amp; Q7(a–d) [12m]</span>
                  <strong>Q1(d):</strong> Why are government transfer payments excluded when computing GDP? [2]<br>
                  <strong>Q7(a):</strong> Distinguish clearly among GDP, NDP, and GNP with formulas and examples. [3]<br>
                  <strong>Q7(b):</strong> Explain the problem of double counting and demonstrate the Value-Added approach using a multi-stage numerical example. [3]<br>
                  <strong>Q7(c):</strong> Discuss the major determinants of aggregate consumption and define the Marginal Propensity to Consume (MPC). [3]<br>
                  <strong>Q7(d):</strong> How can monetary policy and fiscal policy be used to stimulate private investment? [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to Q1(d) — Exclusion of Government Transfer Payments [2 Marks]:</strong> GDP measures the market value of <em>currently produced</em> final goods and services. Government transfer payments (such as old-age pensions, unemployment benefits, or student stipends) redistribute purchasing power from taxpayers to recipients <strong>without any contemporaneous good or service being produced in exchange</strong>; including them would overstate national output.</p>
                  <p><strong>Answer to Q7(a) — GDP vs. NDP vs. GNP [3 Marks]:</strong><br>
                  &bull; <strong>Gross Domestic Product (GDP):</strong> Total market value of all final goods and services produced <em>within the geographical borders</em> of a country during a year, regardless of who owns the factors (e.g., output of a foreign-owned garment factory operating in Dhaka is in Bangladesh's GDP).<br>
                  &bull; <strong>Net Domestic Product (\\(\\text{NDP} = \\text{GDP} - \\text{Depreciation}\\)):</strong> Subtracts capital consumption allowance (wear and tear on machinery/buildings) from GDP to measure net sustainable output.<br>
                  &bull; <strong>Gross National Product (\\(\\text{GNP} = \\text{GDP} + \\text{NFIA}\\)):</strong> Total output produced by factors owned by <em>nationals/residents</em> of a country anywhere in the world, adding factor income earned abroad by citizens and subtracting factor income paid to foreigners domestically.</p>
                  <p><strong>Answer to Q7(b) — Avoiding Double Counting via the Value-Added Table [3 Marks]:</strong> Summing gross sales across intermediate production stages counts raw materials multiple times. The <strong>Value-Added approach</strong> subtracts intermediate input purchases from sales revenue at every stage (illustrated below for a \\(\\$0.90\\) loaf of bread):</p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Production Stage</th><th>Sales Receipts ($)</th><th>Cost of Intermediate Inputs ($)</th><th>Value Added = Sales − Inputs ($)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1. Farmer (Wheat)</td><td>0.24</td><td>0.00</td><td>0.24</td></tr>
                      <tr><td>2. Miller (Flour)</td><td>0.33</td><td>0.24</td><td>0.09</td></tr>
                      <tr><td>3. Baker (Wholesale Bread)</td><td>0.60</td><td>0.33</td><td>0.27</td></tr>
                      <tr><td>4. Grocer (Retail Bread)</td><td>0.90</td><td>0.60</td><td>0.30</td></tr>
                      <tr class="exam-total-row"><td>Total</td><td>$2.07 (Double-Counted!)</td><td>$1.17</td><td><strong>$0.90 = Final Retail Price</strong></td></tr>
                    </tbody>
                  </table>
                  <p><strong>Answer to Q7(c) — Determinants of Consumption &amp; MPC [3 Marks]:</strong> National consumption (\\(C\\)) is driven primarily by (1) current <em>disposable income</em> (\\(DI = Y - T\\)), (2) <em>permanent/expected lifetime income</em>, (3) <em>household net wealth</em> (stocks, real estate), and (4) <em>real interest rates &amp; credit availability</em>. The <strong>Marginal Propensity to Consume</strong> is \\(\\text{MPC} = \\dfrac{\\Delta C}{\\Delta DI} \\in (0, 1)\\)—the extra Taka of consumption induced by \\(1\\) extra Taka of disposable income, representing the slope of \\(C = C_0 + \\text{MPC} \\cdot DI\\).</p>
                  <p><strong>Answer to Q7(d) — Monetary &amp; Fiscal Policies to Boost Investment [3 Marks]:</strong><br>
                  &bull; <strong>Expansionary Monetary Policy:</strong> The central bank purchases government securities via open-market operations and lowers policy rates, expanding bank reserves and lowering real interest rates (\\(r \\downarrow\\)); cheaper borrowing makes more capital projects have positive net present value, raising \\(I\\).<br>
                  &bull; <strong>Pro-Investment Fiscal Policy:</strong> The government enacts <em>investment tax credits</em>, accelerated depreciation allowances, or lower corporate profit tax rates (raising after-tax returns on capital), or reduces structural budget deficits to increase national saving and prevent crowding out of private borrowers.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q7(a–d) [12 Marks]</span> Macroeconomic goals &amp; indicators; Product vs. Income GDP approaches; Four GDP components (C, I, G, NX); Fiscal vs. Monetary policy.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q7(a–d) [3 + 3 + 3 + 3 = 12 Marks]</span>
                  <strong>(a)</strong> State the three central objectives of macroeconomics and how each is measured statistically. [3]<br>
                  <strong>(b)</strong> Compare the Flow-of-Product approach and the Earnings/Income approach to measuring GDP, explaining why both give the same result. [3]<br>
                  <strong>(c)</strong> Define and explain the four expenditure components of GDP. [3]<br>
                  <strong>(d)</strong> Distinguish between Fiscal Policy and Monetary Policy and explain their macroeconomic stabilization roles. [3]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — Three Macroeconomic Goals &amp; Indicators [3 Marks]:</strong><br>
                  1. <em>High &amp; Growing Output:</em> Measured by <strong>Real GDP</strong> (inflation-adjusted final output) and its annual growth rate.<br>
                  2. <em>High Employment / Low Unemployment:</em> Measured by the <strong>Unemployment Rate</strong> (unemployed job-seekers as a percentage of the labor force).<br>
                  3. <em>Price-Level Stability:</em> Measured by the <strong>Consumer Price Index (CPI)</strong> and annual percentage <strong>Inflation Rate</strong>.</p>
                  <p><strong>Answer to (b) — Product Approach vs. Income Approach [3 Marks]:</strong> The <em>Flow-of-Product (Expenditure) Approach</em> sums spending on final goods and services (\\(\\text{GDP} = C + I + G + NX\\)), excluding intermediate goods. The <em>Earnings (Income/Cost) Approach</em> sums all factor incomes generated in domestic production—wages, rent, interest, corporate profits—plus indirect business taxes and depreciation. Because accounting profit is defined as residual sales revenue minus wages, rent, interest, depreciation, and intermediate purchases, total value added across all firms is <strong>identically equal</strong> to final product expenditure.</p>
                  <p><strong>Answer to (c) — Four Expenditure Components (\\(\\text{GDP} = C + I + G + (X - M)\\)) [3 Marks]:</strong><br>
                  &bull; <strong>Consumption (\\(C\\)):</strong> Household spending on nondurable goods (food), durable goods (appliances, cars), and services (healthcare, education).<br>
                  &bull; <strong>Gross Private Domestic Investment (\\(I\\)):</strong> Additions to physical capital stock—new factory/equipment purchases, residential construction, and net inventory changes (<em>not</em> financial stock/bond transfers).<br>
                  &bull; <strong>Government Purchases (\\(G\\)):</strong> Government spending on public goods, infrastructure, defense, and civil-servant salaries (excluding transfer payments).<br>
                  &bull; <strong>Net Exports (\\(NX = X - M\\)):</strong> Domestic exports sold to foreigners (\\(X\\)) minus imports produced abroad (\\(M\\)).</p>
                  <p><strong>Answer to (d) — Fiscal vs. Monetary Policy [3 Marks]:</strong> <strong>Fiscal policy</strong> is conducted by the Ministry of Finance/Parliament via <em>government purchases (\\(G\\)) and taxation (\\(T\\))</em>, directly shifting Aggregate Demand and disposable income. <strong>Monetary policy</strong> is conducted by the <em>Central Bank</em> via open-market operations, reserve requirements, and discount/repo rates to control money supply and interest rates (affecting interest-sensitive \\(I\\) and \\(C\\)). Together, they smooth business-cycle recessions, curb overheating inflation, and support sustainable long-run growth.</p>
                </div>
              </div>
            </div>
          </div>`,
    },
  ],

  'econ107-l14': [
    {
      label: 'ECON107 L14 Final 2025 Q8 & Final 2024 Q8 Complete Commodity Tables & Working Sum Tables',
      find: /<div class="accordion">[\s\S]*?<\/section>/,
      replace: `<div class="accordion">
          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-primary">Final 2025 • Q8(a,b,c) [12 Marks]</span> CPI &amp; accuracy tests; Base shifting &amp; deflating with examples; Full Laspeyres &amp; Paasche table for 2020 (Base Year = 2025).</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2025, Q8(a,b,c) [4 + 3 + 5 = 12 Marks]</span>
                  <strong>(a)</strong> Define the Consumer Price Index (CPI) and state the mathematical tests used to judge the theoretical accuracy of an index number. [4]<br>
                  <strong>(b)</strong> Explain <em>base shifting</em> and <em>deflating</em> of index numbers with brief numerical examples. [3]<br>
                  <strong>(c)</strong> From the following data for four commodities, calculate the <strong>Laspeyres</strong> and <strong>Paasche</strong> price index numbers for the year <strong>2020 taking 2025 as the base year</strong>: [5]<br>
                  Commodity A: (2020: \\(P=118, Q=18\\); 2025: \\(P=126, Q=16\\)) &middot;
                  Commodity B: (2020: \\(P=110, Q=10\\); 2025: \\(P=125, Q=8\\)) &middot;
                  Commodity C: (2020: \\(P=75, Q=15\\); 2025: \\(P=90, Q=12\\)) &middot;
                  Commodity D: (2020: \\(P=220, Q=20\\); 2025: \\(P=250, Q=17\\)).
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (a) — CPI &amp; Four Mathematical Accuracy Tests [4 Marks]:</strong></p>
                  <p>The <strong>Consumer Price Index (CPI)</strong> measures the percentage change over time in the cost of purchasing a fixed representative market basket of goods and services consumed by typical households relative to a designated base period (\\(\\text{Base} = 100\\)). Irving Fisher's four consistency tests (written in ratio form without the \\(\\times 100\\) factor) are:<br>
                  1. <em>Unit Test:</em> Index value must be invariant to the physical units in which prices/quantities are quoted (e.g., kg vs. quintal).<br>
                  2. <em>Time Reversal Test (TRT):</em> Interchanging base period \\(0\\) and current period \\(1\\) yields the exact reciprocal: \\(P_{01} \\times P_{10} = 1\\).<br>
                  3. <em>Factor Reversal Test (FRT):</em> Multiplying the price index \\(P_{01}\\) by the corresponding quantity index \\(Q_{01}\\) yields the true value ratio: \\(P_{01} \\times Q_{01} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_0} = V_{01}\\). (Fisher's Ideal Index satisfies both TRT and FRT.)<br>
                  4. <em>Circular Test:</em> \\(P_{01} \\times P_{12} \\times P_{20} = 1\\).</p>
                  <p><strong>Answer to (b) — Base Shifting &amp; Deflating [3 Marks]:</strong><br>
                  &bull; <strong>Base Shifting:</strong> Re-expressing an existing index series on a more recent base year via \\(\\text{New Index}_t = \\frac{\\text{Old Index}_t}{\\text{Old Index}_{\\text{new base}}} \\times 100\\). <em>Example:</em> If CPI (Base 2015 = 100) is \\(125\\) in 2020 and \\(150\\) in 2024, shifting the base to 2020 gives \\(\\text{CPI}_{2024\\text{ (2020=100)}} = \\frac{150}{125} \\times 100 = 120\\).<br>
                  &bull; <strong>Deflating:</strong> Converting nominal monetary series into constant-purchasing-power real values via \\(\\text{Real Income}_t = \\frac{\\text{Nominal Income}_t}{\\text{CPI}_t} \\times 100\\). <em>Example:</em> If nominal salary rises from Tk. \\(30{,}000\\) to Tk. \\(36{,}000\\) while CPI rises from \\(100\\) to \\(125\\), real salary is \\(\\frac{36{,}000}{125} \\times 100 = \\text{Tk. }28{,}800\\) (a \\(4\\%\\) real decline).</p>
                  <p><strong>Answer to (c) — Laspeyres &amp; Paasche Price Indices for 2020 with Base Year = 2025 [5 Marks]:</strong></p>
                  <p><strong>Crucial Subscript Assignment:</strong> Because <strong>2025 is the Base Year</strong>, set \\((p_0, q_0) = (P_{2025}, Q_{2025})\\); because <strong>2020 is the Current/Comparison Year</strong>, set \\((p_1, q_1) = (P_{2020}, Q_{2020})\\):</p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Commodity</th><th>\\(p_0\\) (2025)</th><th>\\(q_0\\) (2025)</th><th>\\(p_1\\) (2020)</th><th>\\(q_1\\) (2020)</th><th>\\(p_0 q_0\\)</th><th>\\(p_1 q_0\\)</th><th>\\(p_0 q_1\\)</th><th>\\(p_1 q_1\\)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>A</td><td>126</td><td>16</td><td>118</td><td>18</td><td>2,016</td><td>1,888</td><td>2,268</td><td>2,124</td></tr>
                      <tr><td>B</td><td>125</td><td>8</td><td>110</td><td>10</td><td>1,000</td><td>880</td><td>1,250</td><td>1,100</td></tr>
                      <tr><td>C</td><td>90</td><td>12</td><td>75</td><td>15</td><td>1,080</td><td>900</td><td>1,350</td><td>1,125</td></tr>
                      <tr><td>D</td><td>250</td><td>17</td><td>220</td><td>20</td><td>4,250</td><td>3,740</td><td>5,000</td><td>4,400</td></tr>
                      <tr class="exam-total-row"><td colspan="5">Column Sums</td><td>\\(\\sum p_0 q_0 = 8{,}346\\)</td><td>\\(\\sum p_1 q_0 = 7{,}408\\)</td><td>\\(\\sum p_0 q_1 = 9{,}868\\)</td><td>\\(\\sum p_1 q_1 = 8{,}749\\)</td></tr>
                    </tbody>
                  </table>
                  <p>&bull; <strong>Laspeyres Price Index (\\(L_{2025 \\to 2020}\\)):</strong></p>
                  <p>\\[P_{01}^{L} = \\frac{\\sum p_1 q_0}{\\sum p_0 q_0} \\times 100 = \\frac{7{,}408}{8{,}346} \\times 100 = \\mathbf{88.76}.\\]</p>
                  <p>&bull; <strong>Paasche Price Index (\\(P_{2025 \\to 2020}\\)):</strong></p>
                  <p>\\[P_{01}^{P} = \\frac{\\sum p_1 q_1}{\\sum p_0 q_1} \\times 100 = \\frac{8{,}749}{9{,}868} \\times 100 = \\mathbf{88.66}.\\]</p>
                  <p><em>Economic Interpretation:</em> Relative to the 2025 base (\\(= 100\\)), general prices in 2020 were \\(11.24\\%\\) lower under Laspeyres weights and \\(11.34\\%\\) lower under Paasche weights.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="acc-item">
            <button class="acc-btn" type="button">
              <span><span class="pill pill-accent">Final 2024 • Q8(1–4) [12 Marks]</span> 3-Good Fisher Ideal Index &amp; Time Reversal Test; Substitution bias; Sensitivity when Q₂ = 35; Real-time index accuracy.</span>
              <span class="acc-chevron">▼</span>
            </button>
            <div class="acc-body">
              <div class="exam-script-block">
                <div class="exam-script-q">
                  <span class="exam-script-q__label">Exam Paper Question &middot; ECON107 Year Final 2024, Q8(1–4) [12 Marks]</span>
                  Given three goods in Base Year 2022 \\((p_0, q_0)\\) and Current Year 2023 \\((p_1, q_1)\\): Good 1 \\((100, 50 \\to 120, 60)\\), Good 2 \\((20, 30 \\to 25, 25)\\), Good 3 \\((30, 20 \\to 28, 25)\\).<br>
                  <strong>(1)</strong> Compute Fisher's Ideal Price Index and verify that it satisfies the Time Reversal Test. [5]<br>
                  <strong>(2)</strong> Explain why Fisher's Ideal Index avoids the opposing biases of Laspeyres and Paasche. [2]<br>
                  <strong>(3)</strong> How is Fisher's index biased if 2023 quantity of Good 2 is misrecorded as \\(35\\) instead of \\(25\\)? [3]<br>
                  <strong>(4)</strong> Suggest modern data methods to improve real-time CPI accuracy. [2]
                </div>
                <div class="exam-script-ans">
                  <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                  <p><strong>Answer to (1) — Computation Table, Fisher's Ideal Index &amp; Time Reversal Test [5 Marks]:</strong></p>
                  <table class="exam-script-table">
                    <thead>
                      <tr><th>Good</th><th>\\(p_0\\) (2022)</th><th>\\(q_0\\) (2022)</th><th>\\(p_1\\) (2023)</th><th>\\(q_1\\) (2023)</th><th>\\(p_0 q_0\\)</th><th>\\(p_1 q_0\\)</th><th>\\(p_0 q_1\\)</th><th>\\(p_1 q_1\\)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Good 1</td><td>100</td><td>50</td><td>120</td><td>60</td><td>5,000</td><td>6,000</td><td>6,000</td><td>7,200</td></tr>
                      <tr><td>Good 2</td><td>20</td><td>30</td><td>25</td><td>25</td><td>600</td><td>750</td><td>500</td><td>625</td></tr>
                      <tr><td>Good 3</td><td>30</td><td>20</td><td>28</td><td>25</td><td>600</td><td>560</td><td>750</td><td>700</td></tr>
                      <tr class="exam-total-row"><td colspan="5">Column Sums</td><td>\\(\\sum p_0 q_0 = 6{,}200\\)</td><td>\\(\\sum p_1 q_0 = 7{,}310\\)</td><td>\\(\\sum p_0 q_1 = 7{,}250\\)</td><td>\\(\\sum p_1 q_1 = 8{,}525\\)</td></tr>
                    </tbody>
                  </table>
                  <p>\\[L_{01} = \\frac{7{,}310}{6{,}200}\\times 100 = 117.903, \\quad P_{01} = \\frac{8{,}525}{7{,}250}\\times 100 = 117.586 \\implies F_{01} = \\sqrt{L_{01} \\times P_{01}} = \\mathbf{117.74}.\\]</p>
                  <p><em>Time Reversal Verification (in unscaled ratio form):</em> Reversing \\(0 \\leftrightarrow 1\\) gives \\(F_{10} = \\sqrt{\\frac{\\sum p_0 q_1}{\\sum p_1 q_1} \\cdot \\frac{\\sum p_0 q_0}{\\sum p_1 q_0}}\\). Multiplying:</p>
                  <p>\\[F_{01} \\times F_{10} = \\sqrt{\\frac{7{,}310}{6{,}200} \\cdot \\frac{8{,}525}{7{,}250} \\cdot \\frac{7{,}250}{8{,}525} \\cdot \\frac{6{,}200}{7{,}310}} = \\sqrt{1} = \\mathbf{1}. \\;\\checkmark\\]</p>
                  <p><strong>Answer to (2) — Cancellation of Substitution Biases [2 Marks]:</strong> When relative prices change, consumers substitute away from goods whose prices rose sharply (like Good 2, \\(+25\\%\\)) toward relatively cheaper goods (Good 3, \\(-6.7\\%\\)). Laspeyres holds base quantities fixed, over-weighting expensive goods (<strong>upward bias</strong>), whereas Paasche uses post-substitution current quantities, over-weighting cheaper substitutes (<strong>downward bias</strong>). Fisher's geometric mean symmetrically averages both bounds.</p>
                  <p><strong>Answer to (3) — Sensitivity When \\(q_{1,\\text{Good 2}} = 35\\) (Instead of \\(25\\)) [3 Marks]:</strong> Increasing \\(q_1\\) of Good 2 by \\(+10\\) units leaves \\(L_{01} = 117.903\\) unchanged, adds \\(10 \\times 20 = 200\\) to \\(\\sum p_0 q_1\\) (\\(= 7{,}450\\)), and adds \\(10 \\times 25 = 250\\) to \\(\\sum p_1 q_1\\) (\\(= 8{,}775\\)):</p>
                  <p>\\[P'_{01} = \\frac{8{,}775}{7{,}450}\\times 100 = 117.785 \\;(\\text{up from }117.586), \\qquad F'_{01} = \\sqrt{117.903 \\times 117.785} = \\mathbf{117.84} \\;(\\text{upward bias of }+0.10).\\]</p>
                  <p>Because Good 2 experienced the steepest inflation (\\(+25\\%\\), above the basket average of \\(+17.7\\%\\)), overstating its current-year quantity inflates its expenditure weight in Paasche and biases Fisher's index <strong>upward</strong>.</p>
                  <p><strong>Answer to (4) — Real-Time Accuracy Improvements [2 Marks]:</strong> Statistical agencies can integrate retail <em>point-of-sale barcode scanner data</em> (providing exact real-time prices and quantities), automated <em>e-commerce web scraping</em>, chained superlative (Törnqvist/Fisher) monthly re-weighting, and <em>hedonic quality regressions</em> for rapid tech improvements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
    },
  ],
};
