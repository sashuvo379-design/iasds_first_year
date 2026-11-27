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
      label: 'AST101 L2 Density Histogram SVG + Ogive Question Table & SVG',
      find: /<details>\s*<summary><span><span class="exam-badge">1st Incourse 2023 • Q3\(b\) \[4\.5 Marks\]<\/span>[\s\S]*?<\/details>\s*<details>\s*<summary><span><span class="exam-badge">Final 2017 • Q2\(d\) \[5 Marks\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">1st Incourse 2023 • Q3(b) [4.5 Marks]</span> Reverse-Engineering an Unequal-Width Density Histogram</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 1st Incourse 2023, Q3(b) [4.5 Marks]</span>
                A teacher studied the number of A+ grades secured by $N = 50$ students. The chart shown below plots Class Interval on the horizontal axis against Class Density on the vertical axis:<br>
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 420 220" width="420" height="220" role="img" aria-label="Unequal-width Relative Frequency Density Histogram with bar heights 0.050, 0.075, 0.040, 0.020, 0.010, and 0.020">
                    <line x1="56" y1="178" x2="395" y2="178" stroke="currentColor" stroke-width="1.4"/>
                    <line x1="56" y1="178" x2="56" y2="20" stroke="currentColor" stroke-width="1.4"/>
                    <!-- Bars: x from 56 to 386 -> scale 11px per grade unit; y from 178 up 140px at 0.08 -> 1750px per unit density -->
                    <!-- 0-6: w=66, d=0.050 -> h=87.5 -->
                    <rect x="56" y="90.5" width="66" height="87.5" fill="#0F5E59" fill-opacity="0.22" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="89" y="84" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.050</text>
                    <!-- 6-10: w=44, d=0.075 -> h=131.25 -->
                    <rect x="122" y="46.75" width="44" height="131.25" fill="#0F5E59" fill-opacity="0.34" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="144" y="40" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.075</text>
                    <!-- 10-14: w=44, d=0.040 -> h=70 -->
                    <rect x="166" y="108" width="44" height="70" fill="#0F5E59" fill-opacity="0.22" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="188" y="102" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.040</text>
                    <!-- 14-20: w=66, d=0.020 -> h=35 -->
                    <rect x="210" y="143" width="66" height="35" fill="#0F5E59" fill-opacity="0.22" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="243" y="137" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.020</text>
                    <!-- 20-28: w=88, d=0.010 -> h=17.5 -->
                    <rect x="276" y="160.5" width="88" height="17.5" fill="#0F5E59" fill-opacity="0.22" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="320" y="154" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.010</text>
                    <!-- 28-30: w=22, d=0.020 -> h=35 -->
                    <rect x="364" y="143" width="22" height="35" fill="#0F5E59" fill-opacity="0.22" stroke="#0F5E59" stroke-width="1.8"/>
                    <text x="375" y="137" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0F5E59">0.020</text>
                    <!-- Axis labels -->
                    <text x="56" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">0</text>
                    <text x="122" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">6</text>
                    <text x="166" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">10</text>
                    <text x="210" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">14</text>
                    <text x="276" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">20</text>
                    <text x="364" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">28</text>
                    <text x="386" y="193" font-size="10.5" text-anchor="middle" fill="currentColor">30</text>
                    <text x="225" y="210" font-size="11" font-weight="600" text-anchor="middle" fill="currentColor">Number of A+ Grades (Class Boundaries)</text>
                    <text x="48" y="47" font-size="10" text-anchor="end" fill="currentColor">0.075</text>
                    <text x="48" y="91" font-size="10" text-anchor="end" fill="currentColor">0.050</text>
                    <text x="48" y="143" font-size="10" text-anchor="end" fill="currentColor">0.020</text>
                    <text x="15" y="102" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 102)" fill="currentColor">Density (rf / c)</text>
                  </svg>
                  <figcaption>Given Chart (AST101 1st Incourse 2023 Q3b): Heights plot Class Density, so bar area equals class relative frequency.</figcaption>
                </figure>
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
                From the grouped distribution below ($N = 3{,}400$), draw a less-than Ogive and determine the estimated number of observations lying between $255$ and $547$:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Class Interval</th><th>$100\\text{–}200$</th><th>$200\\text{–}300$</th><th>$300\\text{–}400$</th><th>$400\\text{–}500$</th><th>$500\\text{–}600$</th><th>$600\\text{–}700$</th><th>$700\\text{–}800$</th><th>Total</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Frequency ($f_i$)</strong></td><td>$100$</td><td>$500$</td><td>$700$</td><td>$800$</td><td>$700$</td><td>$500$</td><td>$100$</td><td>$N = 3{,}400$</td></tr>
                  </tbody>
                </table>
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
                <p><strong>Step 2 (Less-Than Ogive Diagram):</strong> Plot Upper Boundaries ($100$ to $800$) on the $X$-axis and Cumulative Frequency ($0$ to $3{,}400$) on the $Y$-axis, joining consecutive points $(100,0)$ through $(800,3400)$ by straight line segments:</p>
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 420 220" width="420" height="220" role="img" aria-label="Less-than Ogive from (100, 0) to (800, 3400) with dashed interpolation lines at X = 255 giving 375 and X = 547 giving 2429">
                    <line x1="60" y1="178" x2="390" y2="178" stroke="currentColor" stroke-width="1.4"/>
                    <line x1="60" y1="178" x2="60" y2="20" stroke="currentColor" stroke-width="1.4"/>
                    <!-- X scale: 100..800 -> x = 60 + (X-100)*0.45 ; Y scale: 0..3400 -> y = 178 - CF*(145/3400) -->
                    <polyline points="60,178 105,173.7 150,152.4 195,122.6 240,88.4 285,58.6 330,37.3 375,33.0" fill="none" stroke="#0F5E59" stroke-width="2.5"/>
                    <!-- Vertices -->
                    <circle cx="60" cy="178" r="3" fill="#0F5E59"/><circle cx="105" cy="173.7" r="3" fill="#0F5E59"/>
                    <circle cx="150" cy="152.4" r="3" fill="#0F5E59"/><circle cx="195" cy="122.6" r="3" fill="#0F5E59"/>
                    <circle cx="240" cy="88.4" r="3" fill="#0F5E59"/><circle cx="285" cy="58.6" r="3" fill="#0F5E59"/>
                    <circle cx="330" cy="37.3" r="3" fill="#0F5E59"/><circle cx="375" cy="33.0" r="3" fill="#0F5E59"/>
                    <!-- X=255 -> x=129.75, CF=375 -> y=162.0 -->
                    <line x1="129.8" y1="178" x2="129.8" y2="162" stroke="#C27803" stroke-width="1.4" stroke-dasharray="4,3"/>
                    <line x1="60" y1="162" x2="129.8" y2="162" stroke="#C27803" stroke-width="1.4" stroke-dasharray="4,3"/>
                    <circle cx="129.8" cy="162" r="4" fill="#C27803"/>
                    <!-- X=547 -> x=261.15, CF=2429 -> y=74.4 -->
                    <line x1="261.2" y1="178" x2="261.2" y2="74.4" stroke="#BE123C" stroke-width="1.4" stroke-dasharray="4,3"/>
                    <line x1="60" y1="74.4" x2="261.2" y2="74.4" stroke="#BE123C" stroke-width="1.4" stroke-dasharray="4,3"/>
                    <circle cx="261.2" cy="74.4" r="4" fill="#BE123C"/>
                    <!-- Labels -->
                    <text x="129.8" y="191" font-size="9.5" font-weight="700" text-anchor="middle" fill="#C27803">255</text>
                    <text x="261.2" y="191" font-size="9.5" font-weight="700" text-anchor="middle" fill="#BE123C">547</text>
                    <text x="60" y="193" font-size="9.5" text-anchor="middle" fill="currentColor">100</text>
                    <text x="150" y="193" font-size="9.5" text-anchor="middle" fill="currentColor">300</text>
                    <text x="240" y="193" font-size="9.5" text-anchor="middle" fill="currentColor">500</text>
                    <text x="375" y="193" font-size="9.5" text-anchor="middle" fill="currentColor">800</text>
                    <text x="53" y="165" font-size="9.5" font-weight="700" text-anchor="end" fill="#C27803">375</text>
                    <text x="53" y="78" font-size="9.5" font-weight="700" text-anchor="end" fill="#BE123C">2,429</text>
                    <text x="53" y="36" font-size="9.5" text-anchor="end" fill="currentColor">3,400</text>
                    <text x="225" y="210" font-size="11" font-weight="600" text-anchor="middle" fill="currentColor">Upper Class Boundary (X)</text>
                    <text x="14" y="102" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 14 102)" fill="currentColor">Less-Than CF</text>
                  </svg>
                </figure>
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
    {
      label: 'AST101 L2 Stem-and-Leaf & Final 2025 Radar Chart SVG',
      find: /<details>\s*<summary><span><span class="exam-badge">1st Incourse 2022 • Q1 \[2 Marks\]<\/span>[\s\S]*?<details>\s*<summary><span><span class="exam-badge">Final 2025 • Radar Chart &amp; Q2\(a\)<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">1st Incourse 2022 • Q1 [2 Marks]</span> Reading a Stem-and-Leaf Plot with Leaf Unit = 0.1</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 1st Incourse 2022, Q1 [2 Marks]</span>
                Consider the Stem-and-Leaf plot below (where $\\text{Leaf Unit} = 0.1$, e.g., $1 \\mid 1 = 1.1$):
                <pre class="stem-leaf-pre">1 | 1 2
2 | 2 3 5 5 9
3 | 3 4 4 5 5 7 7 8
4 | 3 4 5 6 7 7 8 8 9 9
5 | 2 2 3 3 4 6 6 6 7 7 7 8 8 8 9</pre>
                Find: <strong>(a)</strong> Total number of observations ($n$), <strong>(b)</strong> Maximum value, <strong>(c)</strong> Median, and <strong>(d)</strong> Shape of the distribution.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <ul>
                  <li><strong>(a) Total Observations ($n$):</strong> Summing row leaf counts gives $n = 2 + 5 + 8 + 10 + 15 = \\mathbf{40}$.</li>
                  <li><strong>(b) Maximum Value:</strong> Highest stem is $5$ and largest leaf is $9$; with Leaf Unit $= 0.1$, Maximum $= \\mathbf{5.9}$.</li>
                  <li><strong>(c) Median:</strong> Since $n = 40$ is even, the median is the average of the $20\\text{th}$ and $21\\text{st}$ ordered values. Rows 1–3 contain $2 + 5 + 8 = 15$ observations. Counting into Row 4 (<code>3, 4, 5, 6, 7, 7, 8, 8, 9, 9</code>): the $20\\text{th}$ value is the $5\\text{th}$ leaf ($4.7$) and the $21\\text{st}$ value is the $6\\text{th}$ leaf ($4.7$), giving $\\text{Median} = \\frac{4.7 + 4.7}{2} = \\mathbf{4.7}$.</li>
                  <li><strong>(d) Shape of Distribution:</strong> Row frequencies rise monotonically ($2 \\to 5 \\to 8 \\to 10 \\to 15$) while trailing off toward smaller stems, so the distribution is <strong>negatively (left) skewed</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">1st Incourse 2023 • Q2(b) [2 Marks]</span> Constructing a Split Stem-and-Leaf Plot</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 1st Incourse 2023, Q2(b) [2 Marks]</span>
                Construct an appropriate Stem-and-Leaf plot for the $n = 20$ observations below:<br>
                <code>57, 58, 44, 55, 52, 54, 45, 51, 52, 54, 58, 48, 51, 58, 47, 50, 52, 53, 52, 49</code>.
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Step 1 (Choose Split Stems):</strong> All $20$ observations fall within stems $4$ and $5$; a single row per stem would overcrowd the plot. Split each stem into <strong>2 rows</strong> ($\\text{Stem Unit} = 10,\\; \\text{Leaf Unit} = 1$): <code>.</code> holds leaves $0\\text{–}4$ and <code>*</code> holds leaves $5\\text{–}9$.</p>
                <p><strong>Step 2 (Ordered Split Stem-and-Leaf Plot):</strong></p>
                <pre class="stem-leaf-pre">4 . | 4
4 * | 5 7 8 9
5 . | 0 1 1 2 2 2 2 3 4 4
5 * | 5 7 8 8 8</pre>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2025 • Radar Chart &amp; Q2(a)</span> Interpreting a Radar Chart &amp; Class Boundaries</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2025, Radar Chart &amp; Q2(a)</span>
                Examine the 5-subject student performance Radar Chart shown below (radial scale $0$ to $100$ in rings of $20$):<br>
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 340 270" width="340" height="270" role="img" aria-label="5-subject Radar Chart showing Statistics 80, Mathematics 72, Economics 72, Computer Science 65, and English 60 on rings of 20 to 100">
                    <!-- Center (170, 142), max radius R = 95 for score 100. Angles: Stats=-90deg, Math=-18deg, Econ=54deg, CS=126deg, Eng=198deg -->
                    <!-- Rings 20,40,60,80,100 -->
                    <polygon points="170,123 188.1,136.1 181.2,157.4 158.8,157.4 151.9,136.1" fill="none" stroke="#CBD5E1" stroke-width="1"/>
                    <polygon points="170,104 206.1,130.3 192.3,172.7 147.7,172.7 133.9,130.3" fill="none" stroke="#CBD5E1" stroke-width="1"/>
                    <polygon points="170,85 224.2,124.4 203.5,188.1 136.5,188.1 115.8,124.4" fill="none" stroke="#CBD5E1" stroke-width="1"/>
                    <polygon points="170,66 242.3,118.5 214.7,203.5 125.3,203.5 97.7,118.5" fill="none" stroke="#CBD5E1" stroke-width="1"/>
                    <polygon points="170,47 260.4,112.6 225.8,218.9 114.2,218.9 79.6,112.6" fill="none" stroke="#94A3B8" stroke-width="1.3"/>
                    <!-- Spokes -->
                    <line x1="170" y1="142" x2="170" y2="47" stroke="#94A3B8" stroke-width="1"/>
                    <line x1="170" y1="142" x2="260.4" y2="112.6" stroke="#94A3B8" stroke-width="1"/>
                    <line x1="170" y1="142" x2="225.8" y2="218.9" stroke="#94A3B8" stroke-width="1"/>
                    <line x1="170" y1="142" x2="114.2" y2="218.9" stroke="#94A3B8" stroke-width="1"/>
                    <line x1="170" y1="142" x2="79.6" y2="112.6" stroke="#94A3B8" stroke-width="1"/>
                    <!-- Score Polygon: Stats 80 (r=76: 170,66), Math 72 (r=68.4: 235.1,120.9), Econ 72 (r=68.4: 210.2,197.3), CS 65 (r=61.75: 133.7,192.0), Eng 60 (r=57: 115.8,124.4) -->
                    <polygon points="170,66 235.1,120.9 210.2,197.3 133.7,192.0 115.8,124.4" fill="#0F5E59" fill-opacity="0.24" stroke="#0F5E59" stroke-width="2.4"/>
                    <circle cx="170" cy="66" r="4" fill="#0F5E59"/><circle cx="235.1" cy="120.9" r="3.5" fill="#0F5E59"/>
                    <circle cx="210.2" cy="197.3" r="3.5" fill="#0F5E59"/><circle cx="133.7" cy="192.0" r="3.5" fill="#0F5E59"/>
                    <circle cx="115.8" cy="124.4" r="3.5" fill="#0F5E59"/>
                    <!-- Ring numbers -->
                    <text x="174" y="102" font-size="8.5" fill="#64748B">40</text>
                    <text x="174" y="83" font-size="8.5" fill="#64748B">60</text>
                    <text x="174" y="64" font-size="8.5" fill="#64748B">80</text>
                    <text x="174" y="45" font-size="8.5" fill="#64748B">100</text>
                    <!-- Labels -->
                    <text x="170" y="28" font-size="11" font-weight="700" text-anchor="middle" fill="#0F5E59">Statistics (80)</text>
                    <text x="270" y="112" font-size="10.5" font-weight="600" text-anchor="start" fill="currentColor">Math (72)</text>
                    <text x="230" y="236" font-size="10.5" font-weight="600" text-anchor="start" fill="currentColor">Economics (72)</text>
                    <text x="110" y="236" font-size="10.5" font-weight="600" text-anchor="end" fill="currentColor">CS (65)</text>
                    <text x="72" y="112" font-size="10.5" font-weight="600" text-anchor="end" fill="currentColor">English (60)</text>
                  </svg>
                </figure>
                <strong>(i)</strong> Identify the strongest subject and comment on the overall balance of performance.<br>
                <strong>(ii) (Final 2025 Q2a)</strong> Why are true class boundaries preferred over class limits for continuous data?
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>(i) Radar Chart Interpretation:</strong> The outer polygon extends farthest along the <strong>Statistics</strong> spoke ($80$), indicating the highest performance, followed evenly by Mathematics ($72$) and Economics ($72$), Computer Science ($65$), and English ($60$). Because no spoke collapses inward and all five scores cluster cleanly between $60$ and $80$, overall performance is <strong>fairly balanced</strong> with mild strength in quantitative subjects.</p>
                <p><strong>(ii) Why Class Boundaries over Class Limits [Final 2025 Q2a]:</strong> A continuous variable can take fractional values lying inside the gaps between integer class limits (for instance, $19.6$ falls between limits $10\\text{–}19$ and $20\\text{–}29$). True class boundaries ($9.5\\text{–}19.5,\\; 19.5\\text{–}29.5$) close those gaps so every real observation belongs uniquely to a class and adjacent histogram bars touch seamlessly.</p>
              </div>
            </div>
          </div>
        </details>`,
    },
  ],

  'ast101-l05': [
    {
      label: 'AST101 L5 Midterm/Final Data Table, Working Table & Scatter Plot SVGs',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2022 Q6\(b\) &amp; Final 2025 \[9 Marks\]<\/span>[\s\S]*?<details>\s*<summary><span><span class="exam-badge">Final 2025 Q5 \[3 Marks\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2022 Q6(b) &amp; Final 2025 [9 Marks]</span> Midterm vs. Final Exam Scores (Compute Pearson's r)</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2022 Q6(b) / 2025 [9 Marks]</span>
                The table below records the Midterm scores ($X$) and Final Exam scores ($Y$) of $n = 7$ students:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Student</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Midterm ($X$)</strong></td><td>$79$</td><td>$95$</td><td>$81$</td><td>$66$</td><td>$87$</td><td>$94$</td><td>$59$</td></tr>
                    <tr><td><strong>Final ($Y$)</strong></td><td>$85$</td><td>$97$</td><td>$78$</td><td>$76$</td><td>$94$</td><td>$84$</td><td>$67$</td></tr>
                  </tbody>
                </table>
                <strong>(i)</strong> What kind of relationship do you expect between $X$ and $Y$? [1]<br>
                <strong>(ii)</strong> Draw a scatter diagram and comment on the linear trend. [3]<br>
                <strong>(iii)</strong> Compute Karl Pearson's correlation coefficient ($r$) using a full working table and verify consistency with parts (i) and (ii). [5]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>(i) Expected Relationship:</strong> We expect a <strong>positive linear relationship</strong>—students who score higher on the Midterm generally have stronger command of the material and score higher on the Final exam.</p>
                <p><strong>(ii) Scatter Diagram:</strong> Plotting Midterm ($X$) horizontally and Final ($Y$) vertically shows points rising tightly from bottom-left $(59, 67)$ toward top-right $(95, 97)$, indicating a strong positive linear association ($r$ near $+1$):</p>
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 380 220" width="380" height="220" role="img" aria-label="Scatter plot of 7 student Midterm X and Final Y scores rising positively from (59, 67) to (95, 97)">
                    <line x1="54" y1="180" x2="355" y2="180" stroke="currentColor" stroke-width="1.4"/>
                    <line x1="54" y1="180" x2="54" y2="18" stroke="currentColor" stroke-width="1.4"/>
                    <!-- X domain 55..100 -> x = 54 + (X-55)*6.4 ; Y domain 60..102 -> y = 180 - (Y-60)*3.6 -->
                    <!-- Dashed trend guide (59, 68.7)->y=148.7, (95, 92.3)->y=63.7 -->
                    <line x1="79.6" y1="148.7" x2="310" y2="63.7" stroke="#0F5E59" stroke-opacity="0.45" stroke-width="1.6" stroke-dasharray="5,3"/>
                    <!-- Points: (79,85)->(207.6,90), (95,97)->(310,46.8), (81,78)->(220.4,115.2), (66,76)->(124.4,122.4), (87,94)->(258.8,57.6), (94,84)->(303.6,93.6), (59,67)->(79.6,154.8) -->
                    <circle cx="79.6" cy="154.8" r="4.5" fill="#0F5E59"/><circle cx="124.4" cy="122.4" r="4.5" fill="#0F5E59"/>
                    <circle cx="207.6" cy="90" r="4.5" fill="#0F5E59"/><circle cx="220.4" cy="115.2" r="4.5" fill="#0F5E59"/>
                    <circle cx="258.8" cy="57.6" r="4.5" fill="#0F5E59"/><circle cx="303.6" cy="93.6" r="4.5" fill="#0F5E59"/>
                    <circle cx="310" cy="46.8" r="4.5" fill="#0F5E59"/>
                    <text x="86" y="164" font-size="9" fill="currentColor">(59,67)</text>
                    <text x="310" y="40" font-size="9" text-anchor="middle" fill="currentColor">(95,97)</text>
                    <text x="86" y="194" font-size="10" text-anchor="middle" fill="currentColor">60</text>
                    <text x="214" y="194" font-size="10" text-anchor="middle" fill="currentColor">80</text>
                    <text x="342" y="194" font-size="10" text-anchor="middle" fill="currentColor">100</text>
                    <text x="46" y="144" font-size="10" text-anchor="end" fill="currentColor">70</text>
                    <text x="46" y="90" font-size="10" text-anchor="end" fill="currentColor">85</text>
                    <text x="46" y="36" font-size="10" text-anchor="end" fill="currentColor">100</text>
                    <text x="205" y="211" font-size="11" font-weight="600" text-anchor="middle" fill="currentColor">Midterm Score (X)</text>
                    <text x="15" y="102" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 102)" fill="currentColor">Final Score (Y)</text>
                  </svg>
                </figure>
                <p><strong>(iii) Complete Working Table &amp; Pearson's $r$:</strong></p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>$X$ (Midterm)</th><th>$Y$ (Final)</th><th>$X^2$</th><th>$Y^2$</th><th>$XY$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>$79$</td><td>$85$</td><td>$6{,}241$</td><td>$7{,}225$</td><td>$6{,}715$</td></tr>
                    <tr><td>$95$</td><td>$97$</td><td>$9{,}025$</td><td>$9{,}409$</td><td>$9{,}215$</td></tr>
                    <tr><td>$81$</td><td>$78$</td><td>$6{,}561$</td><td>$6{,}084$</td><td>$6{,}318$</td></tr>
                    <tr><td>$66$</td><td>$76$</td><td>$4{,}356$</td><td>$5{,}776$</td><td>$5{,}016$</td></tr>
                    <tr><td>$87$</td><td>$94$</td><td>$7{,}569$</td><td>$8{,}836$</td><td>$8{,}178$</td></tr>
                    <tr><td>$94$</td><td>$84$</td><td>$8{,}836$</td><td>$7{,}056$</td><td>$7{,}896$</td></tr>
                    <tr><td>$59$</td><td>$67$</td><td>$3{,}481$</td><td>$4{,}489$</td><td>$3{,}953$</td></tr>
                    <tr class="exam-total-row"><td>$\\sum X = 561$</td><td>$\\sum Y = 581$</td><td>$\\sum X^2 = 46{,}069$</td><td>$\\sum Y^2 = 48{,}875$</td><td>$\\sum XY = 47{,}291$</td></tr>
                  </tbody>
                </table>
                <p>$$S_{xy} = 47{,}291 - \\frac{561 \\times 581}{7} = 47{,}291 - 46{,}563 = 728, \\quad S_{xx} = 46{,}069 - \\frac{561^2}{7} = 1{,}108.857, \\quad S_{yy} = 48{,}875 - \\frac{581^2}{7} = 652.$$
                $$r = \\frac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} = \\frac{728}{\\sqrt{1{,}108.857 \\times 652}} = \\frac{728}{850.28} = \\mathbf{+0.8562}.$$</p>
                <p><em>Verification:</em> $r = +0.8562$ confirms the strong positive linear correlation predicted in parts (i) and (ii).</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2025 Q5 [3 Marks]</span> Years of Schooling vs. Income: r = 0.64 vs. η = 0.80</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2025, Q5 [3 Marks]</span>
                The scatter diagram below plots Monthly Income ($Y$, in thousand Taka) against Years of Schooling ($X$), together with summary statistics $r = 0.64$, $\\eta = 0.80$, and fitted OLS line $\\hat{Y} = -43.68 + 8.66X$:
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 380 210" width="380" height="210" role="img" aria-label="Curvilinear scatter diagram of Years of Schooling versus Monthly Income showing accelerating upward curve relative to straight OLS line">
                    <line x1="54" y1="175" x2="355" y2="175" stroke="currentColor" stroke-width="1.3"/>
                    <line x1="54" y1="175" x2="54" y2="20" stroke="currentColor" stroke-width="1.3"/>
                    <!-- OLS dashed line & convex nonlinear cloud -->
                    <line x1="72" y1="166" x2="340" y2="42" stroke="#C27803" stroke-width="1.8" stroke-dasharray="5,3"/>
                    <path d="M 75 152 Q 210 144, 338 30" fill="none" stroke="#0F5E59" stroke-width="2" stroke-opacity="0.55"/>
                    <circle cx="80" cy="148" r="3.5" fill="#0F5E59"/><circle cx="95" cy="156" r="3.5" fill="#0F5E59"/>
                    <circle cx="115" cy="144" r="3.5" fill="#0F5E59"/><circle cx="145" cy="148" r="3.5" fill="#0F5E59"/>
                    <circle cx="170" cy="136" r="3.5" fill="#0F5E59"/><circle cx="205" cy="128" r="3.5" fill="#0F5E59"/>
                    <circle cx="235" cy="112" r="3.5" fill="#0F5E59"/><circle cx="268" cy="96" r="3.5" fill="#0F5E59"/>
                    <circle cx="295" cy="70" r="3.5" fill="#0F5E59"/><circle cx="318" cy="54" r="3.5" fill="#0F5E59"/>
                    <circle cx="335" cy="36" r="3.5" fill="#0F5E59"/><circle cx="250" cy="124" r="3.5" fill="#0F5E59"/>
                    <text x="275" y="106" font-size="10" fill="#C27803">Linear OLS (r = 0.64)</text>
                    <text x="260" y="38" font-size="10" font-weight="700" fill="#0F5E59">Curved Trend (η = 0.80)</text>
                    <text x="205" y="198" font-size="11" font-weight="600" text-anchor="middle" fill="currentColor">Years of Schooling (X)</text>
                    <text x="18" y="98" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 18 98)" fill="currentColor">Income (Y, '000 Tk)</text>
                  </svg>
                </figure>
                <strong>(i)</strong> Describe the pattern visible in the scatter diagram. [1]<br>
                <strong>(ii)</strong> Interpret the slope of $\\hat{Y} = -43.68 + 8.66X$. [1]<br>
                <strong>(iii)</strong> Given $r = 0.64$ and $\\eta = 0.80$, should you revise a purely linear description? Justify. [1]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <ul>
                  <li><strong>(i) From Scatter Diagram:</strong> Overall positive upward association (more years of schooling generally correspond to higher monthly income), accompanied by visible vertical spread and upward curvature at higher education levels.</li>
                  <li><strong>(ii) Slope Interpretation:</strong> $\\hat{\\beta} = +8.66$ implies each additional year of schooling raises predicted monthly income by <strong>$8.66$ thousand Taka (Tk. $8{,}660$)</strong> on average under the linear approximation.</li>
                  <li><strong>(iii) Revising Linear Description ($r = 0.64$ vs. $\\eta = 0.80$):</strong> <strong>Yes.</strong> Because $\\eta^2 - r^2 = (0.80)^2 - (0.64)^2 = 0.6400 - 0.4096 = 0.2304 &gt; 0$, nonlinearity explains an additional $23.04\\%$ of income variance beyond a straight line. A curved (non-linear) model is required to capture the true association accurately.</li>
                </ul>
              </div>
            </div>
          </div>
        </details>`,
    },
  ],

  'ast101-l07': [
    {
      label: 'AST101 L7 Full OLS Data Tables, Working Tables & Scatter/Line SVG',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2023 • Q7 \[12 Marks\]<\/span>[\s\S]*?<details>\s*<summary><span><span class="exam-badge">Final 2024 • Q1\(a\)–\(d\)/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2023 • Q7 [12 Marks]</span> Car Depreciation: Age vs. Price (8 Cars)</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2023, Q7 [12 Marks]</span>
                The table below records Age ($X$, in years) and Selling Price ($Y$, in hundreds of dollars) for $n = 8$ used cars:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Car</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Age ($X$, yrs)</strong></td><td>$8$</td><td>$3$</td><td>$6$</td><td>$9$</td><td>$2$</td><td>$5$</td><td>$6$</td><td>$3$</td></tr>
                    <tr><td><strong>Price ($Y$, $100\\text{ USD}$)</strong></td><td>$45$</td><td>$210$</td><td>$100$</td><td>$33$</td><td>$267$</td><td>$134$</td><td>$109$</td><td>$235$</td></tr>
                  </tbody>
                </table>
                <strong>(a)</strong> Draw a scatter diagram and comment on the relationship. [3]<br>
                <strong>(b)</strong> Fit the OLS regression line of Price ($Y$) on Age ($X$). [5]<br>
                <strong>(c)</strong> Interpret the estimated intercept and slope. [2]<br>
                <strong>(d)</strong> Predict the price of a $7$-year-old car. [2]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>(a) Scatter Diagram &amp; Fitted Line:</strong> Plotting Age ($X$) on the horizontal axis and Price ($Y$) on the vertical axis shows observations falling closely around a downward-sloping straight line, indicating a strong negative linear relationship:</p>
                <figure class="exam-svg-fig">
                  <svg viewBox="0 0 390 220" width="390" height="220" role="img" aria-label="Scatter plot of 8 cars Age versus Price with downward-sloping OLS regression line Y-hat = 322.45 - 34.44X">
                    <line x1="54" y1="180" x2="365" y2="180" stroke="currentColor" stroke-width="1.4"/>
                    <line x1="54" y1="180" x2="54" y2="18" stroke="currentColor" stroke-width="1.4"/>
                    <!-- X: 0..10 -> x = 54 + X*30 ; Y: 0..330 -> y = 180 - Y*0.48 -->
                    <!-- Line: X=1 -> 288 -> y=41.8 ; X=9.5 -> -4.74 -> clamp X=9 -> 12.46 -> y=174 -->
                    <line x1="84" y1="41.8" x2="324" y2="174.0" stroke="#C27803" stroke-width="2.2"/>
                    <!-- Points: (8,45)->(294,158.4), (3,210)->(144,79.2), (6,100)->(234,132), (9,33)->(324,164.2), (2,267)->(114,51.8), (5,134)->(204,115.7), (6,109)->(234,127.7), (3,235)->(144,67.2) -->
                    <circle cx="114" cy="51.8" r="4.5" fill="#0F5E59"/><circle cx="144" cy="67.2" r="4.5" fill="#0F5E59"/>
                    <circle cx="144" cy="79.2" r="4.5" fill="#0F5E59"/><circle cx="204" cy="115.7" r="4.5" fill="#0F5E59"/>
                    <circle cx="234" cy="127.7" r="4.5" fill="#0F5E59"/><circle cx="234" cy="132" r="4.5" fill="#0F5E59"/>
                    <circle cx="294" cy="158.4" r="4.5" fill="#0F5E59"/><circle cx="324" cy="164.2" r="4.5" fill="#0F5E59"/>
                    <text x="114" y="194" font-size="10" text-anchor="middle" fill="currentColor">2</text>
                    <text x="174" y="194" font-size="10" text-anchor="middle" fill="currentColor">4</text>
                    <text x="234" y="194" font-size="10" text-anchor="middle" fill="currentColor">6</text>
                    <text x="294" y="194" font-size="10" text-anchor="middle" fill="currentColor">8</text>
                    <text x="354" y="194" font-size="10" text-anchor="middle" fill="currentColor">10</text>
                    <text x="46" y="132" font-size="10" text-anchor="end" fill="currentColor">100</text>
                    <text x="46" y="84" font-size="10" text-anchor="end" fill="currentColor">200</text>
                    <text x="46" y="36" font-size="10" text-anchor="end" fill="currentColor">300</text>
                    <text x="210" y="74" font-size="10.5" font-weight="700" fill="#C27803">Ŷ = 322.45 − 34.44X</text>
                    <text x="210" y="211" font-size="11" font-weight="600" text-anchor="middle" fill="currentColor">Age of Car (X, years)</text>
                    <text x="15" y="102" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 102)" fill="currentColor">Price (Y, $100s)</text>
                  </svg>
                </figure>
                <p><strong>(b) Working Table &amp; OLS Estimation:</strong></p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>$X$</th><th>$Y$</th><th>$X^2$</th><th>$XY$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>$8$</td><td>$45$</td><td>$64$</td><td>$360$</td></tr>
                    <tr><td>$3$</td><td>$210$</td><td>$9$</td><td>$630$</td></tr>
                    <tr><td>$6$</td><td>$100$</td><td>$36$</td><td>$600$</td></tr>
                    <tr><td>$9$</td><td>$33$</td><td>$81$</td><td>$297$</td></tr>
                    <tr><td>$2$</td><td>$267$</td><td>$4$</td><td>$534$</td></tr>
                    <tr><td>$5$</td><td>$134$</td><td>$25$</td><td>$670$</td></tr>
                    <tr><td>$6$</td><td>$109$</td><td>$36$</td><td>$654$</td></tr>
                    <tr><td>$3$</td><td>$235$</td><td>$9$</td><td>$705$</td></tr>
                    <tr class="exam-total-row"><td>$\\sum X = 42$</td><td>$\\sum Y = 1{,}133$</td><td>$\\sum X^2 = 264$</td><td>$\\sum XY = 4{,}450$</td></tr>
                  </tbody>
                </table>
                <p>$$\\bar{x} = \\frac{42}{8} = 5.25, \\qquad \\bar{y} = \\frac{1{,}133}{8} = 141.625,$$
                $$S_{xx} = 264 - \\frac{42^2}{8} = 43.5, \\qquad S_{xy} = 4{,}450 - \\frac{42 \\times 1{,}133}{8} = -1{,}498.25,$$
                $$\\hat{\\beta} = \\frac{-1{,}498.25}{43.5} = -34.4425, \\qquad \\hat{\\alpha} = 141.625 - (-34.4425)(5.25) = 322.448.$$
                Fitted OLS Line: $\\mathbf{\\hat{Y} = 322.45 - 34.44X}$.</p>
                <p><strong>(c) Interpretation:</strong> Slope $\\hat{\\beta} = -34.44$ shows each additional year of age lowers average car price by <strong>\\$3,444</strong>; intercept $\\hat{\\alpha} = 322.45$ estimates a brand-new ($0$-year-old) car's price at <strong>\\$32,245</strong>.</p>
                <p><strong>(d) Prediction for a $7$-Year-Old Car:</strong> $\\hat{Y} = 322.448 - 34.4425(7) = 81.35$ hundred dollars $= \\mathbf{\\$8{,}135}$.</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2020 • Q7(2) [6 Marks]</span> 5-Observation Regression &amp; Prediction at X = 7</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2020, Q7(2) [6 Marks]</span>
                Given the $n = 5$ paired observations in the table below:
                <table class="exam-script-table">
                  <thead><tr><th>$X$</th><td>$4$</td><td>$5$</td><td>$3$</td><td>$6$</td><td>$10$</td></thead>
                  <tbody><tr><th>$Y$</th><td>$4$</td><td>$6$</td><td>$5$</td><td>$7$</td><td>$7$</td></tr></tbody>
                </table>
                <strong>(i)</strong> Find the OLS regression line of $Y$ on $X$. [4] &nbsp;&nbsp; <strong>(ii)</strong> Predict $Y$ when $X = 7$. [2]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Working Table ($n = 5$):</strong></p>
                <table class="exam-script-table">
                  <thead><tr><th>$X$</th><th>$Y$</th><th>$X^2$</th><th>$XY$</th></tr></thead>
                  <tbody>
                    <tr><td>$4$</td><td>$4$</td><td>$16$</td><td>$16$</td></tr>
                    <tr><td>$5$</td><td>$6$</td><td>$25$</td><td>$30$</td></tr>
                    <tr><td>$3$</td><td>$5$</td><td>$9$</td><td>$15$</td></tr>
                    <tr><td>$6$</td><td>$7$</td><td>$36$</td><td>$42$</td></tr>
                    <tr><td>$10$</td><td>$7$</td><td>$100$</td><td>$70$</td></tr>
                    <tr class="exam-total-row"><td>$\\sum X = 28$</td><td>$\\sum Y = 29$</td><td>$\\sum X^2 = 186$</td><td>$\\sum XY = 173$</td></tr>
                  </tbody>
                </table>
                <p><strong>(i) OLS Regression Line:</strong> $\\bar{x} = 5.6,\\; \\bar{y} = 5.8$, $S_{xx} = 186 - \\frac{28^2}{5} = 29.2$, $S_{xy} = 173 - \\frac{28\\times 29}{5} = 10.6$.<br>
                $\\hat{\\beta} = \\frac{10.6}{29.2} = 0.3630$, $\\hat{\\alpha} = 5.8 - 0.3630(5.6) = 3.7671 \\implies \\mathbf{\\hat{Y} = 3.7671 + 0.3630X}$.</p>
                <p><strong>(ii) Prediction at $X = 7$:</strong> $\\hat{Y} = 3.7671 + 0.3630(7) = \\mathbf{6.308}$.</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2017 • Q7(b) [9 Marks]</span> Fleet Vehicle Weight (100s lbs) vs. Highway MPG</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2017, Q7(b) [9 Marks]</span>
                The table below reports Vehicle Weight ($X$, in $100\\text{ lbs}$) and Highway Fuel Economy ($Y$, in mpg) for $n = 10$ vehicles:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Vehicle</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Weight ($X$)</strong></td><td>$29$</td><td>$35$</td><td>$28$</td><td>$44$</td><td>$25$</td><td>$34$</td><td>$30$</td><td>$33$</td><td>$28$</td><td>$24$</td></tr>
                    <tr><td><strong>MPG ($Y$)</strong></td><td>$31$</td><td>$27$</td><td>$29$</td><td>$25$</td><td>$31$</td><td>$29$</td><td>$28$</td><td>$28$</td><td>$28$</td><td>$33$</td></tr>
                  </tbody>
                </table>
                <strong>(i)</strong> Fit the OLS line of MPG ($Y$) on Weight ($X$) and interpret the slope. [6] &nbsp;&nbsp; <strong>(ii)</strong> Predict highway MPG for a $4{,}200\\text{ lb}$ car ($X = 42$). [3]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <table class="exam-script-table">
                  <thead><tr><th>$X$</th><th>$Y$</th><th>$X^2$</th><th>$XY$</th></tr></thead>
                  <tbody>
                    <tr><td>$29$</td><td>$31$</td><td>$841$</td><td>$899$</td></tr>
                    <tr><td>$35$</td><td>$27$</td><td>$1{,}225$</td><td>$945$</td></tr>
                    <tr><td>$28$</td><td>$29$</td><td>$784$</td><td>$812$</td></tr>
                    <tr><td>$44$</td><td>$25$</td><td>$1{,}936$</td><td>$1{,}100$</td></tr>
                    <tr><td>$25$</td><td>$31$</td><td>$625$</td><td>$775$</td></tr>
                    <tr><td>$34$</td><td>$29$</td><td>$1{,}156$</td><td>$986$</td></tr>
                    <tr><td>$30$</td><td>$28$</td><td>$900$</td><td>$840$</td></tr>
                    <tr><td>$33$</td><td>$28$</td><td>$1{,}089$</td><td>$924$</td></tr>
                    <tr><td>$28$</td><td>$28$</td><td>$784$</td><td>$784$</td></tr>
                    <tr><td>$24$</td><td>$33$</td><td>$576$</td><td>$792$</td></tr>
                    <tr class="exam-total-row"><td>$\\sum X = 310$</td><td>$\\sum Y = 289$</td><td>$\\sum X^2 = 9{,}916$</td><td>$\\sum XY = 8{,}857$</td></tr>
                  </tbody>
                </table>
                <p><strong>(i) Fitted OLS Equation &amp; Slope:</strong> $\\bar{x} = 31,\\; \\bar{y} = 28.9$, $S_{xx} = 9{,}916 - \\frac{310^2}{10} = 306$, $S_{xy} = 8{,}857 - \\frac{310\\times 289}{10} = -102$.<br>
                $\\hat{\\beta} = \\frac{-102}{306} = -\\frac{1}{3} \\approx -0.3333$, $\\hat{\\alpha} = 28.9 - (-\\frac{1}{3})(31) = 39.2333$.<br>
                Fitted Line: $\\mathbf{\\widehat{\\text{MPG}} = 39.2333 - 0.3333X}$ (each additional $100\\text{ lbs}$ of weight reduces average fuel economy by $0.3333\\text{ mpg}$).</p>
                <p><strong>(ii) Prediction at $4{,}200\\text{ lbs}$ ($X = 42$):</strong> $\\widehat{\\text{MPG}} = 39.2333 - \\frac{1}{3}(42) = \\mathbf{25.23\\text{ mpg}}$.</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2024 • Q1(a)–(d)`,
    },
  ],

  'ast101-l10': [
    {
      label: 'AST101 L10 2x2 Contingency Tables for Final 2025 Q8(c) & Final 2024 Q8(c)',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2025 • Q8\(c\) \[7 Marks\]<\/span>[\s\S]*?<\/section>/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2025 • Q8(c) [7 Marks]</span> Preparatory Workshop vs. Admission Test Success</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2025, Q8(c) [7 Marks]</span>
                The $2 \\times 2$ contingency table below cross-classifies $n = 200$ applicants by preparatory workshop attendance and admission test outcome:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Workshop Attendance</th><th>Passed Admission Test</th><th>Failed Admission Test</th><th>Row Total</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Attended Workshop</strong></td><td>$84$</td><td>$36$</td><td>$120$</td></tr>
                    <tr><td><strong>Did Not Attend</strong></td><td>$36$</td><td>$44$</td><td>$80$</td></tr>
                    <tr class="exam-total-row"><td>Column Total</td><td>$120$</td><td>$80$</td><td>$n = 200$</td></tr>
                  </tbody>
                </table>
                <strong>(1)</strong> Compute the Odds Ratio ($OR$), Yule's $Q$, and Chi-square ($\\chi^2$), and interpret the association. [5]<br>
                <strong>(2)</strong> Does this prove attending the workshop <em>causes</em> admission success? Explain. [2]
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>(1) Measures of Association from Cells $a = 84,\\; b = 36,\\; c = 36,\\; d = 44$:</strong></p>
                <ul>
                  <li><strong>Odds Ratio ($OR$):</strong> $OR = \\dfrac{ad}{bc} = \\dfrac{84 \\times 44}{36 \\times 36} = \\dfrac{3{,}696}{1{,}296} = \\mathbf{2.852}$. Attendees have $2.85$ times higher odds of passing than non-attendees.</li>
                  <li><strong>Yule's $Q$:</strong> $Q = \\dfrac{ad - bc}{ad + bc} = \\dfrac{3{,}696 - 1{,}296}{3{,}696 + 1{,}296} = \\dfrac{2{,}400}{4{,}992} = \\mathbf{+0.4808}$ (check: $\\frac{2.852 - 1}{2.852 + 1} = 0.4808$).</li>
                  <li><strong>Chi-Square ($\\chi^2$):</strong> $\\chi^2 = \\dfrac{n(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)} = \\dfrac{200(2{,}400)^2}{120 \\times 80 \\times 120 \\times 80} = \\mathbf{12.50}$.</li>
                  <li><em>Comment:</em> Positive, moderate association between workshop attendance and admission success.</li>
                </ul>
                <p><strong>(2) Why This Does NOT Prove Causation:</strong> This is an <em>observational study</em>, not a randomized controlled trial. Students self-selected into the workshop; confounding factors such as prior preparation, academic motivation, or study hours can explain both workshop enrollment and higher pass rates.</p>
              </div>
            </div>
          </div>
        </details>

        <details>
          <summary><span><span class="exam-badge">Final 2024 • Q8(c) [6 Marks]</span> Tuition Fee Increase vs. Gender (N = 600)</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2024, Q8(c) [6 Marks]</span>
                In a survey of $N = 600$ students on a tuition fee increase, $200$ students supported the increase while $400$ opposed it. Of the $200$ female respondents, $50$ opposed it. Complete the $2 \\times 2$ table below, compute $OR$ and Yule's $Y$, and verify $Y = \\frac{\\sqrt{OR} - 1}{\\sqrt{OR} + 1}$:
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Gender</th><th>Support Increase</th><th>Against Increase</th><th>Row Total</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Female</strong></td><td>$a = ?$</td><td>$b = 50$</td><td>$200$</td></tr>
                    <tr><td><strong>Male</strong></td><td>$c = ?$</td><td>$d = ?$</td><td>$400$</td></tr>
                    <tr class="exam-total-row"><td>Column Total</td><td>$200$</td><td>$400$</td><td>$N = 600$</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>Step 1 — Reconstructed $2 \\times 2$ Table:</strong> By marginal subtraction ($a = 200 - 50 = 150$, $c = 200 - 150 = 50$, $d = 400 - 50 = 350$):</p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Gender</th><th>Support Increase</th><th>Against Increase</th><th>Row Total</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Female</strong></td><td>$a = 150$</td><td>$b = 50$</td><td>$200$</td></tr>
                    <tr><td><strong>Male</strong></td><td>$c = 50$</td><td>$d = 350$</td><td>$400$</td></tr>
                    <tr class="exam-total-row"><td>Column Total</td><td>$200$</td><td>$400$</td><td>$N = 600$</td></tr>
                  </tbody>
                </table>
                <p><strong>Step 2 — Odds Ratio &amp; Yule's $Y$ (Colligation):</strong></p>
                <p>$$OR = \\frac{150 \\times 350}{50 \\times 50} = \\frac{52{,}500}{2{,}500} = \\mathbf{21.0}, \\qquad Y = \\frac{\\sqrt{ad} - \\sqrt{bc}}{\\sqrt{ad} + \\sqrt{bc}} = \\frac{\\sqrt{52{,}500} - \\sqrt{2{,}500}}{\\sqrt{52{,}500} + \\sqrt{2{,}500}} = \\frac{229.129 - 50}{229.129 + 50} = \\mathbf{+0.6417}.$$</p>
                <p><strong>Step 3 — Algebraic Identity Check:</strong> $\\dfrac{\\sqrt{21} - 1}{\\sqrt{21} + 1} = \\dfrac{4.5826 - 1}{4.5826 + 1} = \\mathbf{+0.6417} \\;\\checkmark$ (Strong positive association: female students have $21\\times$ higher odds of supporting the policy than male students).</p>
              </div>
            </div>
          </div>
        </details>
      </section>`,
    },
  ],

  'ast101-l11': [
    {
      label: 'AST101 L11 Final 2019 Q8 Observed & Expected Contingency Tables',
      find: /<details>\s*<summary><span><span class="exam-badge">Final 2019 • Q8\(b\),\(c\) \[8 Marks\]<\/span>[\s\S]*?<\/details>/,
      replace: `<details>
          <summary><span><span class="exam-badge">Final 2019 • Q8(b),(c) [8 Marks]</span> Father's vs. Son's Eye Color $\\chi^2$ Test &amp; Degrees of Freedom</span></summary>
          <div class="details-body">
            <div class="exam-script-block">
              <div class="exam-script-q">
                <span class="exam-script-q__label">Exam Paper Question &middot; AST101 Year Final 2019, Q8(b,c) [8 Marks]</span>
                From the $2 \\times 2$ table of $N = 1{,}000$ father–son pairs classified by eye color, test at $\\alpha = 0.05$ and $\\alpha = 0.01$ whether father's eye color and son's eye color are independent, and state the degrees of freedom ($\\chi^2_{0.05,1} = 3.842,\\; \\chi^2_{0.01,1} = 6.635$):
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Father's Eye Color</th><th>Son: Black</th><th>Son: Not Black</th><th>Row Total ($R_i$)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Father: Black</strong></td><td>$230$</td><td>$148$</td><td>$378$</td></tr>
                    <tr><td><strong>Father: Not Black</strong></td><td>$151$</td><td>$471$</td><td>$622$</td></tr>
                    <tr class="exam-total-row"><td>Column Total ($C_j$)</td><td>$381$</td><td>$619$</td><td>$N = 1{,}000$</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="exam-script-ans">
                <span class="exam-script-ans__label">Model Exam-Script Answer</span>
                <p><strong>1. Hypotheses:</strong> $H_0$: Father's eye color and son's eye color are independent; $H_1$: They are associated.</p>
                <p><strong>2. Observed, Expected ($E_{ij} = R_i C_j / N$) &amp; $\\chi^2$ Contribution Table:</strong></p>
                <table class="exam-script-table">
                  <thead>
                    <tr><th>Cell (Father, Son)</th><th>Observed ($O$)</th><th>Expected ($E$)</th><th>$O - E$</th><th>$(O - E)^2 / E$</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>(Black, Black)</td><td>$230$</td><td>$(378 \\times 381)/1000 = 144.02$</td><td>$+85.98$</td><td>$51.33$</td></tr>
                    <tr><td>(Black, Not Black)</td><td>$148$</td><td>$(378 \\times 619)/1000 = 233.98$</td><td>$-85.98$</td><td>$31.59$</td></tr>
                    <tr><td>(Not Black, Black)</td><td>$151$</td><td>$(622 \\times 381)/1000 = 236.98$</td><td>$-85.98$</td><td>$31.19$</td></tr>
                    <tr><td>(Not Black, Not Black)</td><td>$471$</td><td>$(622 \\times 619)/1000 = 385.02$</td><td>$+85.98$</td><td>$19.20$</td></tr>
                    <tr class="exam-total-row"><td>Total ($N = 1{,}000$)</td><td>$1{,}000$</td><td>$1{,}000.00$</td><td>$0$</td><td>$\\chi^2 = 133.31$</td></tr>
                  </tbody>
                </table>
                <p><em>Shortcut check:</em> $\\chi^2 = \\dfrac{1000(230 \\times 471 - 148 \\times 151)^2}{378 \\times 622 \\times 381 \\times 619} = \\dfrac{1000(85{,}982)^2}{55{,}464{,}796{,}524} = \\mathbf{133.33}$.</p>
                <p><strong>3. Degrees of Freedom &amp; Decision:</strong> $df = (r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$. Since $\\chi^2_{\\text{cal}} = 133.33 &gt; 6.635 &gt; 3.842$, we <strong>reject $H_0$</strong> at both $5\\%$ and $1\\%$ significance levels: there is a highly significant inherited association ($\\Phi = V = \\sqrt{133.33/1000} = 0.365$).</p>
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
