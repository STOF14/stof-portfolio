export type ProjectStatus = 'in-progress' | 'planned' | 'complete';
export type ProjectDomain = 'quant' | 'quantum' | 'app' | 'research';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  domain: ProjectDomain;
  status: ProjectStatus;
  year: string;
  stack: string[];
  layers: string[];
  pitch: string;
}

export interface RoadmapPhase {
  id: string;
  period: string;
  title: string;
  items: { label: string; detail: string }[];
  status: 'done' | 'active' | 'upcoming';
}

export interface Book {
  title: string;
  author: string;
  when: string;
  why: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'trading-engine',
    title: 'Systematic Trading Engine',
    subtitle: 'Research-to-execution pipeline from first principles',
    description:
      'A full quantitative trading system covering every layer: market data pipeline with corporate action adjustments, alpha signal research with walk-forward validation, mean-variance portfolio optimisation, risk management with drawdown controls and volatility targeting, execution simulation with realistic transaction costs, and a production-grade analytics dashboard. Documented as a formal research paper.',
    domain: 'quant',
    status: 'in-progress',
    year: '2026',
    stack: ['Python', 'pandas', 'numpy', 'cvxpy', 'statsmodels', 'React', 'SQLite', 'Parquet'],
    layers: [
      'Data pipeline + corporate action adjustment',
      'Alpha signal research + walk-forward validation',
      'Mean-variance portfolio optimisation (cvxpy)',
      'Risk layer: drawdown controls + volatility targeting',
      'Execution simulation + transaction cost modelling',
      'Analytics dashboard (React, dark theme)',
      'LaTeX research paper: one signal, full methodology',
    ],
    pitch:
      'Most students learn the theory. A few build a script. Almost none build the full system. This is the full system.',
  },
  {
    id: '2',
    slug: 'quantum-platform',
    title: 'Quantum Computing Research Platform',
    subtitle: 'From one qubit to surface code error correction',
    description:
      "An 18-month platform spanning the full quantum computing stack. Year one: state vector simulator, entanglement, Bell inequality violation, Grover, QFT, Shor&#39;s algorithm. Year two: density matrix formalism, noise models (Lindblad), three-qubit code, and surface code error correction with threshold characterisation. Two research papers. One visually striking React dashboard.",
    domain: 'quantum',
    status: 'in-progress',
    year: '2026–2027',
    stack: ['Python', 'numpy', 'Qiskit', 'QuTiP', 'React', 'TypeScript'],
    layers: [
      'State vector simulator from scratch',
      'Entanglement + Bell inequality (CHSH)',
      "Deutsch-Jozsa, Grover, QFT, Shor&#39;s algorithm",
      'Density matrix formalism + noise models',
      'Three-qubit error correcting code',
      'Surface code with syndrome extraction',
      'Threshold characterisation + LaTeX paper',
    ],
    pitch:
      'One qubit in a Python file. A surface code threshold on a research dashboard. Two papers. Eighteen months.',
  },
  {
    id: '3',
    slug: 'unilife',
    title: 'UniLife',
    subtitle: 'University life management app — deployed',
    description:
      'A full-stack university management application built over a holiday. Class scheduling, assignment tracking, grade analysis, and task management. Live on Vercel with a Supabase backend. Built because the tools I was using weren&#39;t working and I figured I&#39;d just build the one I wanted.',
    domain: 'app',
    status: 'complete',
    year: '2025',
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Vercel'],
    layers: [
      'Full authentication (JWT/Supabase)',
      'Class timetable + calendar integration',
      'Assignment + deadline tracker',
      'Grade tracking + performance analytics',
      'Mobile-responsive, deployed on Vercel',
    ],
    pitch:
      "Not because it was assigned. Because the tools I was using weren&#39;t working and I figured I&#39;d just build the one I wanted.",
  },
];

export const roadmap: RoadmapPhase[] = [
  {
    id: 'now',
    period: 'Mar – Apr 2026',
    title: 'Foundation',
    status: 'active',
    items: [
      { label: 'Repo architecture', detail: 'Clean structure. Design doc. Research log from day one.' },
      { label: 'Data pipeline', detail: 'API ingestion, corporate action adjustment, Parquet storage.' },
      { label: 'First qubit', detail: 'Twenty lines of numpy. Matrix multiplication. Born rule.' },
      { label: 'LinkedIn launch', detail: 'Updated headline. UniLife launch post. Intro post.' },
    ],
  },
  {
    id: 'may-jun',
    period: 'May – Jun 2026',
    title: 'Signal Research',
    status: 'upcoming',
    items: [
      { label: 'Alpha factors', detail: 'Momentum, mean reversion, volume anomaly.' },
      { label: 'Walk-forward validation', detail: 'Purged k-fold. Deflated Sharpe Ratio.' },
      { label: 'Bell inequality', detail: 'CHSH simulation. 10,000 trials. First research result.' },
      { label: 'Quantum gates', detail: 'Hadamard, Pauli, CNOT. Entanglement. Bloch sphere.' },
    ],
  },
  {
    id: 'jul',
    period: 'Jul 2026',
    title: 'Winter Sprint',
    status: 'upcoming',
    items: [
      { label: 'Portfolio construction', detail: 'Markowitz + Ledoit-Wolf shrinkage via cvxpy.' },
      { label: 'Grover&#39;s algorithm', detail: 'Amplitude amplification. Animated visualisation.' },
      { label: 'QFT implementation', detail: 'Quantum Fourier Transform. Verified. Visualised.' },
      { label: 'Research log audit', detail: 'Kill anything that doesn\'t survive OOS.' },
    ],
  },
  {
    id: 'aug-sep',
    period: 'Aug – Sep 2026',
    title: 'Risk + Execution',
    status: 'upcoming',
    items: [
      { label: 'Risk layer', detail: 'Drawdown controls, volatility targeting, stress tests.' },
      { label: 'Execution simulation', detail: 'Slippage, transaction costs, realistic fills.' },
      { label: "Shor&#39;s algorithm", detail: 'Period finding, continued fractions, RSA implications.' },
      { label: 'Dashboard v1', detail: 'React dark theme. Tearsheet. Signal attribution.' },
    ],
  },
  {
    id: 'oct-nov',
    period: 'Oct – Nov 2026',
    title: 'Dashboard + Papers',
    status: 'upcoming',
    items: [
      { label: 'Trading dashboard final', detail: 'Rolling Sharpe, drawdown viz, risk monitor.' },
      { label: 'Quantum dashboard v1', detail: 'Algorithm gallery. Bloch sphere. Interactive circuits.' },
      { label: 'Research paper 1', detail: 'Momentum signal. LaTeX. Full methodology.' },
      { label: 'Quantum paper 1', detail: 'Bell inequality violation. Statistical analysis.' },
    ],
  },
  {
    id: '2027',
    period: '2027',
    title: 'Deep Layer',
    status: 'upcoming',
    items: [
      { label: 'Density matrices', detail: 'Mixed states, Lindblad, decoherence visualised.' },
      { label: 'Surface code', detail: 'Distance-3. Syndrome extraction. Threshold characterisation.' },
      { label: 'Honours prep', detail: 'Supervisor email. Portfolio. Masters shortlist.' },
      { label: 'Research paper 2', detail: 'Surface code threshold. LaTeX. Target journal.' },
    ],
  },
];

export const books: Book[] = [
  { title: 'Python for Finance', author: 'Hilpisch', when: 'Now', why: 'Practical foundation. Start here.' },
  { title: 'Algorithmic Trading', author: 'Ernie Chan', when: 'April', why: 'Backtesting rigor. Chapter by chapter with the pipeline.' },
  { title: 'Advances in Financial Machine Learning', author: 'López de Prado', when: 'May', why: 'The most important modern quant text. Deflated Sharpe. Walk-forward.' },
  { title: 'Nielsen & Chuang', author: 'Nielsen, Chuang', when: 'June', why: 'Quantum computing bible. Chapters 1–2 first.' },
  { title: 'Stochastic Calculus for Finance I & II', author: 'Shreve', when: 'June gaps', why: 'Rigorous. Read during exam gaps. No screen required.' },
  { title: 'Active Portfolio Management', author: 'Grinold & Kahn', when: 'July', why: 'Factor models. Information Ratio. IC. The framework.' },
  { title: 'Heard on the Street', author: 'Crack', when: 'December', why: "Interview prep while it&#39;s fresh. Probability puzzles, expected value." },
  { title: 'The Concepts and Practice of Mathematical Finance', author: 'Joshi', when: 'When options hit', why: 'Derivatives and pricing. Exactly when the project demands it.' },
];
