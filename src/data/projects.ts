export interface Project {
  id: string
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  image: string
  imageWidth?: number
  imageHeight?: number
  imageAlt: string
  caption: string
  repository: string
  question: string
  approach: string
  next: string
  status?: string
  finding?: string
  results?: {
    context: string
    caption: string
    columns: string[]
    rows: { label: string; values: string[] }[]
    download?: { href: string; label: string }
    limitation: string
    figures: { label: string; image: string; alt: string; metrics: string }[]
  }
}
export const projects: Project[] = [
  {
    id: 'n-body',
    number: '01',
    category: 'COMPUTATIONAL PHYSICS',
    title: 'Gravity, one interaction at a time.',
    description: 'A C++ simulation of nine mutually gravitating bodies, paired with Python playback and Sun-relative orbital analysis. Explores direct gravitational interactions, numerical integration, and measurable scientific verification.',
    status: 'In development',
    finding: 'The default run yields inner-planet Kepler ratios from 0.999989 to 1.000030. These are orbital sanity checks; the 12.5-year run has insufficient coverage for outer-planet period estimates.',
    technologies: ['C++', 'Python', 'NumPy', 'Matplotlib'],
    image: '/images/nbody-orbits.png',
    imageWidth: 1920,
    imageHeight: 960,
    imageAlt: 'Inner and outer planetary trajectories relative to the moving Sun, from the default 12.5-year simulation. Outer-planet arcs are incomplete; marker sizes are illustrative.',
    caption: 'FIG. 01 — SUN-RELATIVE ORBITS · 12.5 YEARS · OPEN FOR FULL SIZE',
    repository: 'https://github.com/Avipatel1/High-Performance-N-Body-Gravitational-Dynamics-Engine',
    question: 'How can pairwise gravitational interactions be translated into a numerical model of planetary motion?',
    approach: 'The C++11 core uses direct O(N²) pairwise gravity, softened forces, and fixed-step Euler–Cromer integration. NumPy subtracts the moving Sun’s position, interpolates successive upward crossings, and estimates semi-major axes from radial extrema across complete periods. Analytic fixtures, a translation-invariance check, and inner-planet regression tests support the analysis. A GitHub Actions workflow rebuilds the simulator, runs tests, and renders a headless preview.',
    next: 'Export velocities and timestamps to measure conservation and timestep convergence; compare velocity Verlet with Euler–Cromer; add configurable scenarios and benchmarks separating computation from disk I/O.',
    results: {
      context: 'Reproduced from the saved default output: 25,000 samples, a 0.0005-year timestep, and 12.5 simulated years. In the model’s AU/year/solar-mass units, a Sun-dominated two-body orbit has T²/a³ near 1. Jupiter through Neptune lack the two upward crossings required by the estimator.',
      caption: 'Sun-relative orbital estimates',
      columns: ['Planet', 'a (AU)', 'T (years)', 'T²/a³'],
      rows: [
        { label: 'Mercury', values: ['0.387031', '0.240778', '0.999989'] },
        { label: 'Venus', values: ['0.722990', '0.614751', '1.000004'] },
        { label: 'Earth', values: ['0.999980', '0.999980', '1.000019'] },
        { label: 'Mars', values: ['1.523874', '1.881179', '1.000030'] },
      ],
      limitation: 'Initial conditions are approximate, circular, coplanar, and aligned, not observed planetary states. Perturbations, softening, and discretization affect these estimates. The 1% regression tolerance is not an accuracy guarantee, and these ratios do not measure energy conservation or prove long-term stability. No throughput or speedup benchmark is claimed.',
      download: { href: '/results/nbody-orbital-analysis.txt', label: 'Download analyzer report' },
      figures: [],
    },
  },
  {
    id: 'chaos',
    number: '02',
    category: 'SCIENTIFIC MACHINE LEARNING',
    title: 'Learning the motion of chaos.',
    description: 'A reproducible double-pendulum experiment testing whether energy regularization improves neural-network predictions. Compares a supervised DNN, an energy-regularized network, and a persistence baseline.',
    status: 'Research prototype',
    finding: 'The DNN achieved 14.7× lower one-step error than persistence in the documented run. Recursive forecasts remained weak; energy regularization did not improve results.',
    technologies: ['C++', 'Python', 'PyTorch'],
    image: '/images/pendulum-trajectory.svg',
    imageAlt: 'Trajectory of the second double-pendulum bob, computed from saved simulated angles with unit-length rods.',
    caption: 'FIG. 02 — DOUBLE-PENDULUM PATH · SAVED SIMULATION OUTPUT',
    repository: 'https://github.com/Avipatel1/Chaos-Deep-Learning-Physics-Predictor',
    question: 'Does adding an energy-conservation penalty improve next-state prediction and recursive forecasts of a double pendulum?',
    approach: 'A C++ Euler–Cromer simulator generates 10,000 states. PyTorch models share a 4 → 128 → 128 → 64 → 4 architecture and disjoint chronological 70/15/15 training, validation, and test splits. The energy-regularized variant combines supervised state MSE with a weighted energy penalty (0.05); it is not an ODE-residual PINN. Validation selects checkpoints. Saved metrics, seeds, dataset hashes, and regression tests support repeatable evaluation.',
    next: 'Validate a higher-accuracy integrator, evaluate independent initial conditions and multiple seeds, and tune the physics weight and feature scaling using validation data. Verify a clean installation and add continuous integration.',
    results: {
      context: 'Recorded experiment: 100 epochs, seed 42, 1,500 held-out states. One-step predictions receive each observed state; recursive forecasts feed predictions back for 200 steps (2 seconds). Persistence holds the last observed state fixed under the same input-access rules. Lower state MSE is better.',
      caption: 'Prediction error comparison (state MSE)',
      columns: ['Method', 'One-step', 'Recursive (2 s)'],
      rows: [
        { label: 'Persistence', values: ['0.005407', '7.240426'] },
        { label: 'DNN', values: ['0.000368', '7.091355'] },
        { label: 'Energy-regularized', values: ['0.005739', '10.708205'] },
      ],
      limitation: 'These single-seed results use one trajectory and do not establish generalization to new initial conditions or long-term chaos prediction. State MSE mixes angle and angular-velocity units and uses unwrapped angles. The numerical reference drifts by 25.892 J over the full dataset; that interval differs from the two-second forecast diagnostic, so the drift magnitudes are not directly comparable.',
      figures: [
        { label: 'DNN diagnostics', image: '/images/chaos-dnn-evaluation.png', alt: 'DNN diagnostics: close one-step angle predictions, divergent recursive forecasts, and substantial forecast energy drift.', metrics: '/results/chaos-dnn-metrics.json' },
        { label: 'Energy-regularized diagnostics', image: '/images/chaos-energy-evaluation.png', alt: 'Energy-regularized model diagnostics comparing one-step predictions, recursive forecasts, and energy change against the numerical reference.', metrics: '/results/chaos-energy-metrics.json' },
      ],
    },
  },
]
