/* ==========================================================================
   AST101 & AST102 — Exam-Script Answer Upgrades
   Replaces every outline, checklist, and section-reference deflection with
   complete, self-contained ISRT exam-paper scripts.
   ========================================================================== */

export const AST_UPGRADES = {
  'ast101-l01': [
    {
      label: 'AST101 L1 Final 2024 Q4, Final 2023 Q1, Final 2019 Q2',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2024 • Q4\(a\),\(b\),\(c\) \[8 Marks\]<\/span>[\s\S]*?<details>\s*<summary><span><span class="exam-badge">1st Incourse 2023 • Q2\(a\)/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2024 • Q4(a),(b),(c) [8 Marks]</span> Four Levels of Measurement &amp; Data Ethics</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2024, Q4 [8 Marks]</span>
                <strong>(a)</strong> Explain the four levels of measurement: nominal, ordinal, interval, and ratio with appropriate examples. [4]<br>
                <strong>(b)</strong> Identify and justify the most appropriate level of measurement for: (i) Blood type (A, B, AB, O), (ii) Temperature in Celsius, (iii) Student ID number, (iv) Rankings in a singing competition. [2]<br>
                <strong>(c)</strong> Describe one ethical issue in data collection. [2]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Answer to (a) — Four Levels of Measurement [4 Marks]:</strong></p>
                <ol>
                  <li><strong>Nominal Scale:</strong> Classifies observations into mutually exclusive and exhaustive qualitative categories with <em>no natural order or numerical magnitude</em>. Only counting frequencies and finding the mode ($=$ vs. $\\ne$) are meaningful.<br><em>Examples:</em> Blood group (A, B, AB, O), marital status, religion.</li>
                  <li><strong>Ordinal Scale:</strong> Classifies observations into categories that possess a meaningful <em>rank or natural ordering</em> ($&lt;$ or $&gt;$), but differences between adjacent ranks are neither equal nor numerically measurable.<br><em>Examples:</em> Socioeconomic class (Low, Middle, High), letter grades (A, B, C, D, F), competition rank (1st, 2nd, 3rd).</li>
                  <li><strong>Interval Scale:</strong> Quantitative measurement with ordered values and <em>equal, constant unit intervals</em> ($+$ and $-$ of differences are meaningful), but <em>no true (absolute) zero point</em>—zero is arbitrary, so ratios such as &ldquo;twice as much&rdquo; are meaningless.<br><em>Examples:</em> Temperature in $^{\\circ}\\text{C}$ or $^{\\circ}\\text{F}$, standardized IQ score, calendar year.</li>
                  <li><strong>Ratio Scale:</strong> Highest level of quantitative measurement possessing order, equal intervals, and a <em>true (absolute) zero</em> representing complete absence of the attribute. All arithmetic operations ($+, -, \\times, \\div$) and ratio comparisons are valid.<br><em>Examples:</em> Monthly income in Taka, height in cm, weight in kg, number of siblings.</li>
                </ol>
                <p><strong>Answer to (b) — Identification &amp; Justification [2 Marks]:</strong></p>
                <ul>
                  <li><strong>(i) Blood type (A, B, AB, O): Nominal scale</strong> — distinct, unordered biological categories where no blood group is higher or lower than another.</li>
                  <li><strong>(ii) Temperature in Celsius: Interval scale</strong> — each $1^{\\circ}\\text{C}$ increment represents an equal thermal difference, but $0^{\\circ}\\text{C}$ is an arbitrary freezing point of water rather than the complete absence of heat ($40^{\\circ}\\text{C}$ is not twice as hot as $20^{\\circ}\\text{C}$).</li>
                  <li><strong>(iii) Student ID number: Nominal scale</strong> — digits serve purely as unique identification labels; subtracting or averaging ID numbers has no statistical meaning.</li>
                  <li><strong>(iv) Rankings in a singing competition: Ordinal scale</strong> — contestants are ordered (1st, 2nd, 3rd), but the performance gap between 1st and 2nd need not equal the gap between 2nd and 3rd.</li>
                </ul>
                <p><strong>Answer to (c) — Ethical Issue in Data Collection [2 Marks]:</strong></p>
                <p><strong>Violation of Informed Consent and Confidentiality:</strong> Collecting sensitive personal information (such as medical history, household income, or political views) without clearly explaining the study's purpose to respondents, obtaining their voluntary informed consent, or anonymizing records exposes participants to privacy breaches and social or financial harm. Ethical statistical practice requires voluntary participation, strict anonymization, and secure storage.</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2023 • Q1(a),(b) [4 Marks]</span> Variable Scales &amp; Central Tendency Compatibility Table</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2023, Q1(a,b) [4 Marks]</span>
                <strong>(a)</strong> At what level are the following variables measured? <em>(i) SAT score, (ii) Blood Pressure, (iii) Types of soft drinks, (iv) Number of pages in books.</em> [1]<br>
                <strong>(b)</strong> Complete the YES/NO compatibility table showing which measures of central tendency (Mode, Median, Arithmetic Mean, Harmonic Mean, Geometric Mean) are valid for each level of measurement and sign domain. [3]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Answer to (a) [1 Mark]:</strong></p>
                <ul>
                  <li><strong>(i) SAT score:</strong> Interval scale (equal score units; minimum score is arbitrary, no true zero of aptitude).</li>
                  <li><strong>(ii) Blood Pressure (mmHg):</strong> Ratio scale ($0\\text{ mmHg}$ represents complete absence of pressure; ratios are meaningful).</li>
                  <li><strong>(iii) Types of soft drinks:</strong> Nominal scale (unordered brand/flavor categories).</li>
                  <li><strong>(iv) Number of pages in books:</strong> Ratio scale (discrete count with true zero; $200$ pages is twice $100$ pages).</li>
                </ul>
                <p><strong>Answer to (b) — Central Tendency Compatibility Table [3 Marks]:</strong></p>
                <table class="exam-script-table">
                  <thead>
                    <tr>
                      <th>Scale &amp; Value Domain</th>
                      <th>Mode</th>
                      <th>Median</th>
                      <th>Arithmetic Mean (AM)</th>
                      <th>Harmonic Mean (HM)</th>
                      <th>Geometric Mean (GM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Nominal</strong></td><td>YES</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td></tr>
                    <tr><td><strong>Ordinal</strong></td><td>YES</td><td>YES</td><td>NO</td><td>NO</td><td>NO</td></tr>
                    <tr><td><strong>Interval / Ratio (Any real values, incl. $0$)</strong></td><td>YES</td><td>YES</td><td>YES</td><td>NO</td><td>NO</td></tr>
                    <tr><td><strong>Interval / Ratio (Strictly negative values $&lt; 0$)</strong></td><td>YES</td><td>YES</td><td>YES</td><td>YES</td><td>NO</td></tr>
                    <tr><td><strong>Ratio (Strictly positive values $&gt; 0$)</strong></td><td>YES</td><td>YES</td><td>YES</td><td>YES</td><td>YES</td></tr>
                  </tbody>
                </table>
                <p><em>Justification Note:</em> HM requires non-zero values of uniform sign (since $0$ causes division by $1/0$ and mixed signs can cancel in $\\sum(1/x_i)$), while real-valued GM $= (\\prod x_i)^{1/n}$ requires strictly positive observations ($x_i &gt; 0$).</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2019 • Q2(a),(b),(c) [12 Marks]</span> Scope &amp; Abuses, Primary vs. Secondary Data &amp; Core Distinctions</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2019, Q2 [12 Marks]</span>
                <strong>(a)</strong> Define &lsquo;Statistics&rsquo; and discuss the nature, scope, uses, and abuses of Applied Statistics. [4]<br>
                <strong>(b)</strong> Define primary and secondary data with examples; discuss primary data collection techniques with their merits and demerits. [5]<br>
                <strong>(c)</strong> Distinguish with examples between: (i) Population and sample, (ii) Parameter and statistic, (iii) Descriptive and inferential statistics. [3]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Answer to (a) — Definition, Scope, Uses &amp; Abuses of Statistics [4 Marks]:</strong></p>
                <p><strong>Definition &amp; Nature:</strong> Statistics is the science of collecting, organizing, summarizing, presenting, and analyzing numerical data under uncertainty in order to draw valid inferences and make evidence-based decisions. Applied Statistics studies aggregate patterns rather than isolated individuals and quantifies random variation.</p>
                <p><strong>Scope &amp; Uses:</strong> (1) <em>Public Health &amp; Medicine:</em> clinical trials testing vaccine/drug efficacy; (2) <em>Economics &amp; Policy:</em> measuring inflation (CPI), unemployment, and poverty via national household surveys; (3) <em>Industry &amp; Engineering:</em> statistical quality control and reliability testing; (4) <em>Agriculture &amp; Environment:</em> experimental design (ANOVA) for crop yields and climate modeling; (5) <em>Data Science &amp; Business:</em> demand forecasting and risk modeling.</p>
                <p><strong>Common Abuses (Misuses):</strong> (1) Drawing generalizations from small or unrepresentative convenience samples; (2) Confusing observational correlation with causation; (3) Distorting visual perception via truncated graph axes; and (4) Using an inappropriate average (e.g., Arithmetic Mean instead of Median on heavily skewed income data).</p>

                <p><strong>Answer to (b) — Primary vs. Secondary Data &amp; Collection Methods [5 Marks]:</strong></p>
                <p>&bull; <strong>Primary Data:</strong> Original, first-hand data collected directly by the investigator for the specific research objective at hand (<em>Example:</em> ISRT students conducting a household nutrition survey in Dhaka).<br>
                &bull; <strong>Secondary Data:</strong> Pre-existing data collected earlier by another agency and reused by the researcher (<em>Example:</em> Utilizing published BBS Population Census or BDHS datasets).</p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Primary Collection Technique</th><th>Procedure</th><th>Key Merits</th><th>Key Demerits</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>1. Direct Personal Interview</strong></td><td>Trained enumerator interviews respondents face-to-face.</td><td>High response rate; clarifies ambiguous questions; accurate.</td><td>Expensive, slow over wide areas, risk of interviewer bias.</td></tr>
                    <tr><td><strong>2. Telephone / Mobile Survey</strong></td><td>Enumerator conducts structured interviews via phone.</td><td>Fast, low travel cost, reaches dispersed areas quickly.</td><td>Excludes households without phones; must keep questionnaire short.</td></tr>
                    <tr><td><strong>3. Mailed / Online Questionnaire</strong></td><td>Self-administered form sent via email, web link, or post.</td><td>Lowest cost per respondent; zero interviewer bias; wide reach.</td><td>High non-response bias; unusable for illiterate populations.</td></tr>
                    <tr><td><strong>4. Controlled Experiment</strong></td><td>Investigator randomly assigns treatments and records outcomes.</td><td>Gold standard for establishing causal effects.</td><td>Costly; laboratory settings may be ethically or practically infeasible.</td></tr>
                  </tbody>
                </table>

                <p><strong>Answer to (c) — Three Fundamental Distinctions [3 Marks]:</strong></p>
                <ol>
                  <li><strong>Population vs. Sample:</strong> A <em>population</em> is the complete collection of all units of interest in a study (e.g., all $38{,}000$ students enrolled at the University of Dhaka), whereas a <em>sample</em> is a representative subset selected from that population for actual measurement (e.g., $400$ randomly selected DU students).</li>
                  <li><strong>Parameter vs. Statistic:</strong> A <em>parameter</em> is a fixed numerical summary characterizing an entire population, usually denoted by Greek letters (e.g., population mean $\\mu$, population variance $\\sigma^2$). A <em>statistic</em> is a random numerical summary computed from sample data to estimate a parameter, denoted by Roman letters (e.g., sample mean $\\bar{x}$, sample variance $s^2$).</li>
                  <li><strong>Descriptive vs. Inferential Statistics:</strong> <em>Descriptive statistics</em> organizes and summarizes observed data through tables, graphs, and summary numbers without generalizing beyond the dataset (e.g., reporting that our sample of $400$ students has $\\bar{x} = 3.42$ CGPA). <em>Inferential statistics</em> uses probability theory on sample data to estimate unknown population parameters and test hypotheses (e.g., constructing a $95\\%$ confidence interval for the mean CGPA of all DU students).</li>
                </ol>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">1st Incourse 2023 • Q2(a)`,
    },
  ],

  'ast101-l02': [
    {
      label: 'AST101 L2 Density Histogram & Ogive Exam Tables',
      find: /<details>\s*<summary><span><span class="exam-badge">1st Incourse 2023 • Q3\(b\) \[4\.5 Marks\]<\/span>[\s\S]*?<\/details>\s*<details>\s*<summary><span><span class="exam-badge">Final 2017 • Q2\(d\) \[5 Marks\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">1st Incourse 2023 • Q3(b) [4.5 Marks]</span> Reverse-Engineering an Unequal-Width Density Histogram</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 1st Incourse 2023, Q3(b) [4.5 Marks]</span>
                A teacher studied the number of A+ grades secured by $N = 50$ students. A chart plots Class Interval on the horizontal axis against Class Density on the vertical axis: <code>0–6 (0.05)</code>, <code>6–10 (0.075)</code>, <code>10–14 (0.04)</code>, <code>14–20 (0.02)</code>, <code>20–28 (0.01)</code>, and <code>28–30 (0.02)</code>.<br>
                <strong>(i)</strong> Name the graph and explain what is special about its vertical axis. [1]<br>
                <strong>(ii)</strong> Reconstruct the complete frequency distribution table. [2]<br>
                <strong>(iii)</strong> Compute the arithmetic mean number of A+ grades. [1.5]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>(i) Identification &amp; Special Property:</strong> The graph is a <strong>Relative Frequency Density Histogram</strong> for unequal class intervals. Because class widths $c_i$ are unequal ($6, 4, 4, 6, 8, 2$), plotting raw frequencies would visually exaggerate wider classes; instead, plotting $\\text{Class Density} = \\text{Relative Frequency} / c_i$ ensures the <strong>area</strong> of each bar equals the class relative frequency.</p>
                <p><strong>(ii) Reconstructed Frequency Table</strong> (using $\\text{Rel. Freq.} = \\text{Density} \\times c_i$ and $f_i = N \\times \\text{Rel. Freq.}$ with $N = 50$):</p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Class Interval</th><th>Width ($c_i$)</th><th>Midpoint ($m_i$)</th><th>Class Density</th><th>Rel. Freq. ($rf_i = d_i c_i$)</th><th>Frequency ($f_i = 50 rf_i$)</th><th>$f_i m_i$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>$0\\text{–}6$</td><td>$6$</td><td>$3$</td><td>$0.050$</td><td>$0.30$</td><td>$15$</td><td>$45$</td></tr>
                    <tr><td>$6\\text{–}10$</td><td>$4$</td><td>$8$</td><td>$0.075$</td><td>$0.30$</td><td>$15$</td><td>$120$</td></tr>
                    <tr><td>$10\\text{–}14$</td><td>$4$</td><td>$12$</td><td>$0.040$</td><td>$0.16$</td><td>$8$</td><td>$96$</td></tr>
                    <tr><td>$14\\text{–}20$</td><td>$6$</td><td>$17$</td><td>$0.020$</td><td>$0.12$</td><td>$6$</td><td>$102$</td></tr>
                    <tr><td>$20\\text{–}28$</td><td>$8$</td><td>$24$</td><td>$0.010$</td><td>$0.08$</td><td>$4$</td><td>$96$</td></tr>
                    <tr><td>$28\\text{–}30$</td><td>$2$</td><td>$29$</td><td>$0.020$</td><td>$0.04$</td><td>$2$</td><td>$58$</td></tr>
                    <tr class="exam-total-row"><td>Total</td><td>—</td><td>—</td><td>—</td><td>$\\sum rf_i = 1.00$</td><td>$N = 50$</td><td>$\\sum f_i m_i = 517$</td></tr>
                  </tbody>
                </table>
                <p><strong>(iii) Arithmetic Mean:</strong></p>
                <p>$$\\bar{x} = \\frac{\\sum f_i m_i}{N} = \\frac{517}{50} = \\mathbf{10.34\\text{ A+ grades per student}}.$$</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2017 • Q2(d) [5 Marks]</span> Drawing an Ogive &amp; Finding Observations Between 255 and 547</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2017, Q2(d) [5 Marks]</span>
                From the grouped distribution below ($N = 3{,}400$), construct a less-than Ogive and determine the estimated number of observations lying between $255$ and $547$:
                <code>100–200 (100)</code>, <code>200–300 (500)</code>, <code>300–400 (700)</code>, <code>400–500 (800)</code>, <code>500–600 (700)</code>, <code>600–700 (500)</code>, <code>700–800 (100)</code>.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Step 1 (Less-Than Cumulative Frequency Table):</strong> Anchor the Ogive at $(100, 0)$ and accumulate frequencies at each upper boundary:</p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Upper Class Boundary ($X$)</th><th>$&lt;100$</th><th>$&lt;200$</th><th>$&lt;300$</th><th>$&lt;400$</th><th>$&lt;500$</th><th>$&lt;600$</th><th>$&lt;700$</th><th>$&lt;800$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Less-Than Cum. Freq. ($CF$)</strong></td><td>$0$</td><td>$100$</td><td>$600$</td><td>$1{,}300$</td><td>$2{,}100$</td><td>$2{,}800$</td><td>$3{,}300$</td><td>$3{,}400$</td></tr>
                  </tbody>
                </table>
                <p><strong>Step 2 (Ogive Construction on Graph Paper):</strong> Plot Upper Boundaries ($100$ to $800$) on the horizontal $X$-axis and Cumulative Frequency ($0$ to $3{,}400$) on the vertical $Y$-axis; join consecutive points $(100,0), (200,100), \\dots, (800,3400)$ by straight line segments (S-shaped curve).</p>
                <p><strong>Step 3 (Linear Interpolation along Ogive Segments):</strong></p>
                <ul>
                  <li><strong>At $X = 255$ (lies in $200\\text{–}300$, where $L = 200, c = 100, f = 500, CF_{\\text{prev}} = 100$):</strong>
                    $$CF(255) = 100 + \\frac{255 - 200}{100} \\times 500 = 100 + 0.55 \\times 500 = 375.$$</li>
                  <li><strong>At $X = 547$ (lies in $500\\text{–}600$, where $L = 500, c = 100, f = 700, CF_{\\text{prev}} = 2{,}100$):</strong>
                    $$CF(547) = 2{,}100 + \\frac{547 - 500}{100} \\times 700 = 2{,}100 + 0.47 \\times 700 = 2{,}429.$$</li>
                </ul>
                <p><strong>Step 4 (Required Count):</strong> Number of observations between $255$ and $547 = CF(547) - CF(255) = 2{,}429 - 375 = \\mathbf{2{,}054\\text{ observations}}$.</p>
              </div>
            </div>
          </div>
        </details>`,
    },
  ],

  'ast101-l06': [
    {
      label: 'AST101 L6 Complete Rewrite of Part B Checklist into Full Exam Scripts',
      find: /<h3>Part B: Past ISRT Exam Checklist &amp; Model Answers<\/h3>[\s\S]*?<\/section>/,
      replace: `<h3>Part B: Past ISRT Exam Questions &amp; Step-by-Step Model Answers</h3>

        <details>
          <summary><span><span class="exam-badge">2nd Incourse 2025 • Q4(a) [3.5 Marks]</span> Definition, Uses &amp; Full Derivation of Spearman's Rank Correlation</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 2nd Incourse 2025, Q4(a) [3.5 Marks]</span>
                Define Spearman's rank correlation coefficient and mention three situations where it is used. Assuming there are no tied ranks among $n$ pairs of observations, derive the formula:
                $$r_s = 1 - \\frac{6\\sum_{i=1}^{n} d_i^2}{n(n^2 - 1)}.$$
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>1. Definition &amp; Three Uses [1 Mark]:</strong> Spearman's rank correlation coefficient ($r_s$) is a non-parametric measure of the strength and direction of <em>monotonic</em> association between two variables, defined as Karl Pearson's product-moment correlation applied to the ranks $R(X_i)$ and $R(Y_i)$ of the observations. It is used when: (i) both variables are measured on an ordinal scale (e.g., judge rankings), (ii) one variable is quantitative and the other is ordinal, or (iii) both variables are quantitative but exhibit nonlinear monotonic relationships or extreme outliers.</p>
                <p><strong>2. Algebraic Derivation (No Ties) [2.5 Marks]:</strong></p>
                <p>Let $(u_i, v_i) = (R(X_i), R(Y_i))$ for $i = 1, 2, \\dots, n$. With no ties, both $\\{u_1, \\dots, u_n\\}$ and $\\{v_1, \\dots, v_n\\}$ are permutations of $\\{1, 2, \\dots, n\\}$.</p>
                <p><strong>Step 1 (Mean and Sum of Squares of Ranks):</strong> Using $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$ and $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$:</p>
                <p>$$\\bar{u} = \\bar{v} = \\frac{n + 1}{2}, \\qquad S_{uu} = S_{vv} = \\sum_{k=1}^n k^2 - n\\bar{u}^2 = \\frac{n(n+1)(2n+1)}{6} - \\frac{n(n+1)^2}{4} = \\frac{n(n^2 - 1)}{12}.$$</p>
                <p><strong>Step 2 (Express Sum of Cross-Products $S_{uv}$ via Rank Differences $d_i = u_i - v_i$):</strong> Note $d_i = (u_i - \\bar{u}) - (v_i - \\bar{v})$ since $\\bar{u} = \\bar{v}$. Squaring and summing over $i = 1, \\dots, n$:</p>
                <p>$$\\sum_{i=1}^n d_i^2 = \\sum_{i=1}^n \\big[(u_i - \\bar{u}) - (v_i - \\bar{v})\\big]^2 = S_{uu} + S_{vv} - 2S_{uv} = 2S_{uu} - 2S_{uv}.$$</p>
                <p>Solving for $S_{uv}$ gives $S_{uv} = S_{uu} - \\frac{1}{2}\\sum_{i=1}^n d_i^2$.</p>
                <p><strong>Step 3 (Substitute into Pearson's Correlation Formula):</strong></p>
                <p>$$r_s = \\frac{S_{uv}}{\\sqrt{S_{uu} S_{vv}}} = \\frac{S_{uu} - \\frac{1}{2}\\sum d_i^2}{S_{uu}} = 1 - \\frac{\\frac{1}{2}\\sum_{i=1}^n d_i^2}{\\dfrac{n(n^2 - 1)}{12}} = 1 - \\frac{6\\sum_{i=1}^n d_i^2}{n(n^2 - 1)}. \\quad \\blacksquare$$</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">2nd Incourse 2025 • Q4(b) [3 Marks]</span> Proving Extreme Values $r_s = +1$ (Perfect Agreement) &amp; $r_s = -1$ (Reverse Order)</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 2nd Incourse 2025, Q4(b) [3 Marks]</span>
                State the conditions under which Spearman's rank correlation coefficient attains its maximum ($+1$) and minimum ($-1$) values, and prove both algebraically.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Case 1 — Maximum Value $r_s = +1$ (Perfect Concordance / Identical Rankings) [1.5 Marks]:</strong></p>
                <p>Suppose every item receives the exact same rank on both variables: $R(X_i) = R(Y_i)$ for all $i = 1, 2, \\dots, n$. Then $d_i = R(X_i) - R(Y_i) = 0$ for every $i$, so $\\sum_{i=1}^n d_i^2 = 0$. Substituting into Spearman's formula:</p>
                <p>$$r_s = 1 - \\frac{6(0)}{n(n^2 - 1)} = 1 - 0 = \\mathbf{+1}.$$</p>
                <p><strong>Case 2 — Minimum Value $r_s = -1$ (Perfect Discordance / Exact Reverse Rankings) [1.5 Marks]:</strong></p>
                <p>Suppose the two rankings are in exact opposite order. Re-indexing items so $R(X_i) = i$, the reverse rank is $R(Y_i) = n + 1 - i$ for $i = 1, 2, \\dots, n$. Then $d_i = i - (n + 1 - i) = 2i - (n + 1)$. Summing $d_i^2$:</p>
                <p>$$\\begin{aligned} \\sum_{i=1}^n d_i^2 &amp;= \\sum_{i=1}^n \\big[2i - (n + 1)\\big]^2 = 4\\sum_{i=1}^n i^2 - 4(n + 1)\\sum_{i=1}^n i + n(n + 1)^2 \\\\ &amp;= \\frac{4n(n + 1)(2n + 1)}{6} - \\frac{4n(n + 1)^2}{2} + n(n + 1)^2 \\\\ &amp;= n(n + 1)\\left[\\frac{2(2n + 1) - 3(n + 1)}{3}\\right] = \\frac{n(n + 1)(n - 1)}{3} = \\frac{n(n^2 - 1)}{3}. \\end{aligned}$$</p>
                <p>Substituting $\\sum d_i^2 = \\frac{n(n^2 - 1)}{3}$ into Spearman's formula yields:</p>
                <p>$$r_s = 1 - \\frac{6 \\cdot \\dfrac{n(n^2 - 1)}{3}}{n(n^2 - 1)} = 1 - 2 = \\mathbf{-1}. \\quad \\blacksquare$$</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">2nd Incourse 2025 • Q5(a) [2.5 Marks]</span> Coefficient of Concurrent Deviation: Definition, Steps &amp; Formula</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 2nd Incourse 2025, Q5(a) [2.5 Marks]</span>
                Define the Coefficient of Concurrent Deviation and write down the step-by-step procedure and formula to compute it.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Definition:</strong> The <strong>Coefficient of Concurrent Deviation ($r_c$)</strong> is a rapid, non-parametric measure of short-term co-movement between two paired series $(X_1, Y_1), \\dots, (X_n, Y_n)$ based solely on the <em>signs of first differences</em> (direction of change from the preceding observation), ignoring the magnitude of fluctuations.</p>
                <p><strong>Step-by-Step Computational Procedure:</strong></p>
                <ol>
                  <li><strong>Assign Direction Signs ($dx_i, dy_i$):</strong> For each $i = 2, 3, \\dots, n$ (giving $m = n - 1$ comparison pairs), compare $X_i$ with $X_{i-1}$: record $+$ if $X_i &gt; X_{i-1}$, $-$ if $X_i &lt; X_{i-1}$, and $0$ ($=$) if $X_i = X_{i-1}$. Repeat identically for $Y_i$ vs. $Y_{i-1}$.</li>
                  <li><strong>Identify Concurrent Deviations:</strong> A pair $i$ is <em>concurrent</em> if $X$ and $Y$ move in the exact same direction ($++$ or $--$, or both $==$).</li>
                  <li><strong>Count $c$:</strong> Let $c$ denote the total number of concurrent pairs out of $m = n - 1$ transitions.</li>
                  <li><strong>Apply Formula with Sign Preservation:</strong>
                    $$r_c = \\pm\\sqrt{\\pm\\frac{2c - m}{m}}, \\qquad \\text{where } m = n - 1 \\text{ and } -1 \\le r_c \\le +1.$$
                    <em>Sign Rule:</em> If $\\frac{2c - m}{m} &gt; 0$, take $+$ inside and $+$ outside ($r_c = +\\sqrt{\\frac{2c-m}{m}}$). If $\\frac{2c - m}{m} &lt; 0$, negate inside the radical to make it positive and place a $-$ sign outside ($r_c = -\\sqrt{-\\frac{2c-m}{m}}$). If $2c = m$, then $r_c = 0$.</li>
                </ol>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">2nd Incourse 2025 • Q5(b) [1.5 Marks]</span> Proving Somers' D Is an Asymmetric Ordinal Measure</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 2nd Incourse 2025, Q5(b) [1.5 Marks]</span>
                Show algebraically why Somers' $D$ is an asymmetric measure of ordinal association between $X$ and $Y$.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p>Among all $\\binom{n}{2}$ observation pairs $(i, j)$, let $N_C$ = concordant pairs, $N_D$ = discordant pairs, $T_X$ = pairs tied on $X$ only ($X_i = X_j,\\; Y_i \\ne Y_j$), and $T_Y$ = pairs tied on $Y$ only ($Y_i = Y_j,\\; X_i \\ne X_j$).</p>
                <p>&bull; Treating $X$ as predictor and $Y$ as response, Somers' $D$ conditions on pairs untied on $X$:</p>
                <p>$$D_{Y \\mid X} = \\frac{N_C - N_D}{N_C + N_D + T_Y}.$$</p>
                <p>&bull; Reversing roles (treating $Y$ as predictor and $X$ as response) conditions on pairs untied on $Y$:</p>
                <p>$$D_{X \\mid Y} = \\frac{N_C - N_D}{N_C + N_D + T_X}.$$</p>
                <p><strong>Conclusion:</strong> Although both formulas share the same numerator $(N_C - N_D)$, their denominators penalize different tie counts ($T_Y$ vs. $T_X$). Whenever $T_Y \\ne T_X$ (and $N_C \\ne N_D$), we have $D_{Y \\mid X} \\ne D_{X \\mid Y}$, proving that Somers' $D$ is <strong>asymmetric</strong>. $\\blacksquare$</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">2nd Incourse 2022 • Q5 &amp; 2024 [4 Marks]</span> Spearman's Rank Correlation with Tied Ranks (Formula &amp; Worked Example)</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 2nd Incourse 2022 Q5 / 2024 [4 Marks]</span>
                State the tied-rank adjustment formula for Spearman's rank correlation coefficient and compute $r_s$ for $n = 6$ students with Quiz marks $X = \\{12, 15, 15, 18, 20, 10\\}$ and Viva marks $Y = \\{14, 16, 13, 16, 19, 11\\}$.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>1. Tied-Rank Formula:</strong> Assign each group of $m$ tied observations the arithmetic mean of the rank positions they jointly occupy. For every tie group of multiplicity $m_k \\ge 2$ in $X$ and in $Y$, define the tie-correction factor $C_k = \\frac{m_k(m_k^2 - 1)}{12}$ and compute:</p>
                <p>$$r_s = 1 - \\frac{6\\left(\\sum_{i=1}^n d_i^2 + \\sum C_X + \\sum C_Y\\right)}{n(n^2 - 1)}.$$</p>
                <p><strong>2. Worked Rank Table ($n = 6$, ascending ranks $1$ to $6$):</strong></p>
                <ul>
                  <li>In $X = \\{10, 12, 15, 15, 18, 20\\}$: two values tie at $15$ (positions $3, 4 \\implies$ average rank $3.5$), so $m_X = 2 \\implies C_X = \\frac{2(4-1)}{12} = 0.5$.</li>
                  <li>In $Y = \\{11, 13, 14, 16, 16, 19\\}$: two values tie at $16$ (positions $4, 5 \\implies$ average rank $4.5$), so $m_Y = 2 \\implies C_Y = \\frac{2(4-1)}{12} = 0.5$.</li>
                </ul>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Student</th><th>$X_i$</th><th>$Y_i$</th><th>$R(X_i)$</th><th>$R(Y_i)$</th><th>$d_i = R(X_i) - R(Y_i)$</th><th>$d_i^2$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>$12$</td><td>$14$</td><td>$2$</td><td>$3$</td><td>$-1.0$</td><td>$1.00$</td></tr>
                    <tr><td>2</td><td>$15$</td><td>$16$</td><td>$3.5$</td><td>$4.5$</td><td>$-1.0$</td><td>$1.00$</td></tr>
                    <tr><td>3</td><td>$15$</td><td>$13$</td><td>$3.5$</td><td>$2$</td><td>$+1.5$</td><td>$2.25$</td></tr>
                    <tr><td>4</td><td>$18$</td><td>$16$</td><td>$5$</td><td>$4.5$</td><td>$+0.5$</td><td>$0.25$</td></tr>
                    <tr><td>5</td><td>$20$</td><td>$19$</td><td>$6$</td><td>$6$</td><td>$0.0$</td><td>$0.00$</td></tr>
                    <tr><td>6</td><td>$10$</td><td>$11$</td><td>$1$</td><td>$1$</td><td>$0.0$</td><td>$0.00$</td></tr>
                    <tr class="exam-total-row"><td colspan="6">Total $\\sum d_i^2$</td><td>$4.50$</td></tr>
                  </tbody>
                </table>
                <p><strong>3. Final Calculation:</strong></p>
                <p>$$r_s = 1 - \\frac{6(4.50 + 0.50 + 0.50)}{6(6^2 - 1)} = 1 - \\frac{6(5.50)}{210} = 1 - \\frac{33}{210} = 1 - 0.1571 = \\mathbf{+0.8429}.$$</p>
              </div>
            </div>
          </div>
        </details>
      </section>`,
    },
  ],

  'ast101-l08': [
    {
      label: 'AST101 L8 Final 2019 Q7(c,d) & Final 2017 Q6(c) Full Proofs',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2019 • Q7\(c\),\(d\) \[5 Marks\] &amp; Final 2017 • Q6\(c\) \[1 Mark\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2019 • Q7(c),(d) [5 Marks] &amp; Final 2017 • Q6(c) [1 Mark]</span> Symmetry of r vs. Asymmetry of Slopes &amp; Geometric Mean Proof</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2019 Q7(c,d) &amp; 2017 Q6(c) [6 Marks]</span>
                <strong>(a)</strong> Show algebraically that Pearson's correlation coefficient is symmetric ($r_{xy} = r_{yx}$), whereas the OLS regression slopes are asymmetric ($\\hat{\\beta}_{yx} \\ne \\hat{\\beta}_{xy}$ in general). [3]<br>
                <strong>(b)</strong> Prove that $r$, $\\hat{\\beta}_{yx}$ ($Y$ on $X$), and $\\hat{\\beta}_{xy}$ ($X$ on $Y$) always share the exact same algebraic sign, and establish $r = \\pm\\sqrt{\\hat{\\beta}_{yx} \\cdot \\hat{\\beta}_{xy}}$. [3]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Proof of (a) — Symmetry of $r$ vs. Asymmetry of Regression Slopes [3 Marks]:</strong></p>
                <p>Let $S_{xx} = \\sum_{i=1}^n (x_i - \\bar{x})^2 &gt; 0$, $S_{yy} = \\sum_{i=1}^n (y_i - \\bar{y})^2 &gt; 0$, and $S_{xy} = \\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})$. Because multiplication of real numbers is commutative, $S_{xy} = S_{yx}$ and $\\sqrt{S_{xx} S_{yy}} = \\sqrt{S_{yy} S_{xx}}$. Hence:</p>
                <p>$$r_{xy} = \\frac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} = \\frac{S_{yx}}{\\sqrt{S_{yy} S_{xx}}} = r_{yx} \\quad (\\text{Symmetric}).$$</p>
                <p>By contrast, minimizing vertical squared errors $\\sum(y_i - \\hat{\\alpha} - \\hat{\\beta}x_i)^2$ gives the slope of $Y$ on $X$ as $\\hat{\\beta}_{Y|X} = \\frac{S_{xy}}{S_{xx}}$, while minimizing horizontal squared errors $\\sum(x_i - \\hat{\\alpha}' - \\hat{\\beta}'y_i)^2$ gives the slope of $X$ on $Y$ as $\\hat{\\beta}_{X|Y} = \\frac{S_{xy}}{S_{yy}}$. Since $S_{xx} \\ne S_{yy}$ whenever $s_x \\ne s_y$ (assuming $S_{xy} \\ne 0$), we have $\\hat{\\beta}_{Y|X} \\ne \\hat{\\beta}_{X|Y}$ (asymmetric).</p>
                <p><strong>Proof of (b) — Common Sign &amp; Geometric Mean Relationship [3 Marks]:</strong></p>
                <p>For any non-constant variables $X$ and $Y$, the denominators $S_{xx} &gt; 0$, $S_{yy} &gt; 0$, and $\\sqrt{S_{xx} S_{yy}} &gt; 0$ are all strictly positive. Therefore the signs of $r$, $\\hat{\\beta}_{Y|X}$, and $\\hat{\\beta}_{X|Y}$ are governed solely by their identical numerator $S_{xy}$:</p>
                <p>$$\\operatorname{sign}(r) = \\operatorname{sign}(\\hat{\\beta}_{Y|X}) = \\operatorname{sign}(\\hat{\\beta}_{X|Y}) = \\operatorname{sign}(S_{xy}).$$</p>
                <p>Multiplying the two regression slopes together yields:</p>
                <p>$$\\hat{\\beta}_{Y|X} \\cdot \\hat{\\beta}_{X|Y} = \\left(\\frac{S_{xy}}{S_{xx}}\\right)\\left(\\frac{S_{xy}}{S_{yy}}\\right) = \\frac{S_{xy}^2}{S_{xx} S_{yy}} = r^2 \\implies r = \\pm\\sqrt{\\hat{\\beta}_{Y|X} \\cdot \\hat{\\beta}_{X|Y}},$$</p>
                <p>where the $+$ sign is taken if both slopes are positive and the $-$ sign if both slopes are negative. Also, writing $s_x = \\sqrt{S_{xx}/(n-1)}$ and $s_y = \\sqrt{S_{yy}/(n-1)}$ directly gives $\\hat{\\beta}_{Y|X} = r\\dfrac{s_y}{s_x}$. $\\blacksquare$</p>
              </div>
            </div>
          </div>
        </details>`,
    },
  ],

  'ast101-l11': [
    {
      label: 'AST101 L11 Final 2020 Q8(b) Full Exam Answer',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2020 • Q8\(b\) \[6 Marks\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2020 • Q8(b) [6 Marks]</span> Limitations of χ² &amp; Standardized Alternatives</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2020, Q8(b) [6 Marks]</span>
                Why is Pearson's Chi-square ($\\chi^2$) statistic alone unsuitable as a direct measure of the strength of association in a contingency table? Define and compare the standardized $\\chi^2$-based measures of association that overcome these limitations.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Part 1 — Four Limitations of Raw $\\chi^2$ as a Measure of Strength [2.5 Marks]:</strong></p>
                <ol>
                  <li><strong>Direct Dependence on Sample Size ($N$):</strong> If every cell count $O_{ij}$ in a table is multiplied by a constant $k$, every expected count $E_{ij}$ is also multiplied by $k$, so $\\chi^2_{\\text{new}} = \\sum \\frac{(kO_{ij}-kE_{ij})^2}{kE_{ij}} = k\\chi^2_{\\text{old}}$. Thus doubling $N$ doubles $\\chi^2$ even though the underlying pattern of association is completely unchanged.</li>
                  <li><strong>Sensitivity to Table Dimensions ($r \\times c$):</strong> Larger tables sum over more cells and achieve larger maximum $\\chi^2 = N \\cdot \\min(r-1, c-1)$, preventing direct comparison across differently sized tables.</li>
                  <li><strong>Lack of a Unit Upper Bound $[0, 1]$:</strong> Because $\\chi^2 \\in [0, N(k-1)]$, a raw value like $\\chi^2 = 18.4$ cannot be judged &ldquo;weak&rdquo; or &ldquo;strong&rdquo; without knowing $N$, $r$, and $c$.</li>
                  <li><strong>Direction-Blindness:</strong> Squared deviations $(O_{ij} - E_{ij})^2 \\ge 0$ discard algebraic signs, so $\\chi^2$ never indicates positive vs. negative association.</li>
                </ol>
                <p><strong>Part 2 — Standardized $\\chi^2$-Based Measures ($N$ = total sample size, $k = \\min(r, c)$) [3.5 Marks]:</strong></p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Measure</th><th>Formula</th><th>Range &amp; Applicability</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>1. Phi Coefficient ($\\Phi$)</strong></td><td>$\\Phi = \\sqrt{\\dfrac{\\chi^2}{N}}$</td><td>For $2 \\times 2$ tables, $0 \\le \\Phi \\le 1$ ($\\Phi = |r|$ on binary $0/1$ codes). For larger tables, $\\Phi$ can exceed $1$.</td></tr>
                    <tr><td><strong>2. Pearson's Contingency Coeff. ($C$)</strong></td><td>$C = \\sqrt{\\dfrac{\\chi^2}{\\chi^2 + N}}$</td><td>Always satisfies $0 \\le C &lt; 1$, but never reaches $1$; for a $k \\times k$ table, $C_{\\max} = \\sqrt{(k-1)/k}$ (e.g., $0.707$ for $2 \\times 2$).</td></tr>
                    <tr><td><strong>3. Tschuprow's $T$</strong></td><td>$T = \\sqrt{\\dfrac{\\chi^2}{N\\sqrt{(r-1)(c-1)}}}$</td><td>Attains the full $[0, 1]$ range if and only if the table is square ($r = c$); strictly $&lt; 1$ when $r \\ne c$.</td></tr>
                    <tr><td><strong>4. Cramér's $V$ (Preferred)</strong></td><td>$V = \\sqrt{\\dfrac{\\chi^2}{N(\\min(r, c) - 1)}}$</td><td>Spans the exact unit interval $0 \\le V \\le 1$ for <strong>any</strong> $r \\times c$ contingency table ($0$ = exact independence, $1$ = perfect association).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>`,
    },
  ],

  'ast102-l09': [
    {
      label: 'AST102 L9 Exam 3 Q5 Full Law of Total Variance Proof',
      find: /<p class="font-bold text-slate-900">Solution to Q5:<\/p>\s*<p>\$E\[V\(Y \\mid X\)\][\s\S]*?<\/p>/,
      replace: `<p class="font-bold text-slate-900">Solution to Q5 — Law of Total Variance Proof:</p>
              <p><strong>Step 1 (Conditional Variance Identity):</strong> By definition of conditional variance given $X$, $V(Y \\mid X) = E(Y^2 \\mid X) - \\big(E(Y \\mid X)\\big)^2$. Taking expectations of both sides with respect to $X$ and applying the Law of Iterated Expectations $E[E(Y^2 \\mid X)] = E(Y^2)$:</p>
              <p>$$E\\big[V(Y \\mid X)\\big] = E\\big[E(Y^2 \\mid X)\\big] - E\\Big[\\big(E(Y \\mid X)\\big)^2\\Big] = E(Y^2) - E\\Big[\\big(E(Y \\mid X)\\big)^2\\Big]. \\quad (1)$$</p>
              <p><strong>Step 2 (Variance of Conditional Expectation):</strong> Let $g(X) = E(Y \\mid X)$. Its mean is $E[g(X)] = E[E(Y \\mid X)] = E(Y)$, so its variance is:</p>
              <p>$$V\\big(E(Y \\mid X)\\big) = E\\Big[\\big(E(Y \\mid X)\\big)^2\\Big] - \\big(E(Y)\\big)^2. \\quad (2)$$</p>
              <p><strong>Step 3 (Add (1) and (2)):</strong></p>
              <p>$$E\\big[V(Y \\mid X)\\big] + V\\big(E(Y \\mid X)\\big) = E(Y^2) - \\cancel{E\\big[(E(Y \\mid X))^2\\big]} + \\cancel{E\\big[(E(Y \\mid X))^2\\big]} - \\big(E(Y)\\big)^2 = E(Y^2) - \\big(E(Y)\\big)^2 = V(Y). \\quad \\blacksquare$$</p>`,
    },
  ],

  'ast102-l13': [
    {
      label: 'AST102 L13 Exam 2(c) Full Poisson Central Moment Recurrence Proof',
      find: /<p><strong>\(c\)<\/strong> Differentiate \$\\mu_r = \\sum_\{x=0\}\^\{\\infty\}[\s\S]*?<\/p>/,
      replace: `<p><strong>(c) Full Proof of $\\mu_{r+1} = r\\lambda\\mu_{r-1} + \\lambda\\dfrac{d\\mu_r}{d\\lambda}$ ($r \\ge 1$):</strong><br>
              By definition, for $X \\sim \\text{Poisson}(\\lambda)$ (with $E[X] = \\lambda$), the $r$-th central moment is $\\mu_r = \\sum_{x=0}^{\\infty} (x - \\lambda)^r \\frac{e^{-\\lambda}\\lambda^x}{x!}$. Differentiating term-by-term with respect to $\\lambda$ via the product rule on $(x - \\lambda)^r$, $e^{-\\lambda}$, and $\\lambda^x$:</p>
              <p>$$\\begin{aligned}
              \\frac{d\\mu_r}{d\\lambda} &= \\sum_{x=0}^{\\infty} \\left[ -r(x - \\lambda)^{r-1} \\frac{e^{-\\lambda}\\lambda^x}{x!} + (x - \\lambda)^r \\frac{e^{-\\lambda}(x\\lambda^{x-1} - \\lambda^x)}{x!} \\right] \\\\
              &= -r \\sum_{x=0}^{\\infty} (x - \\lambda)^{r-1} \\frac{e^{-\\lambda}\\lambda^x}{x!} + \\frac{1}{\\lambda} \\sum_{x=0}^{\\infty} (x - \\lambda)^{r+1} \\frac{e^{-\\lambda}\\lambda^x}{x!} \\\\
              &= -r\\mu_{r-1} + \\frac{\\mu_{r+1}}{\\lambda}.
              \\end{aligned}$$</p>
              <p>Multiplying both sides by $\\lambda$ and rearranging immediately gives $\\mathbf{\\mu_{r+1} = r\\lambda\\mu_{r-1} + \\lambda\\dfrac{d\\mu_r}{d\\lambda}}$. <em>(Quick check with $\\mu_0 = 1, \\mu_1 = 0$: for $r=1$, $\\mu_2 = \\lambda(1) + 0 = \\lambda$; for $r=2$, $\\mu_3 = 2\\lambda(0) + \\lambda(1) = \\lambda$; for $r=3$, $\\mu_4 = 3\\lambda(\\lambda) + \\lambda(1) = 3\\lambda^2 + \\lambda$.)</em> $\\blacksquare$</p>`,
    },
  ],
};
