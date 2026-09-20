export interface Project {
  id: string
  number: string
  category: string
  title: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  caption: string
  repository: string
  question: string
  approach: string
  next: string
}
export const projects: Project[] = [
  {
    id: 'n-body',
    number: '01',
    category: 'COMPUTATIONAL PHYSICS',
    title: 'Gravity, one interaction at a time.',
    description: 'An N-body gravitational simulation built in C++, with Python tools for exploring orbital trajectories and examining the numerical behavior of the system.',
    technologies: ['C++', 'Python', 'NumPy', 'Matplotlib'],
    image: '/images/orbital-trajectories.svg',
    imageAlt: 'Inner-planet trajectories plotted from saved N-body simulation coordinates, in astronomical units.',
    caption: 'FIG. 01 — INNER-PLANET TRAJECTORIES · SAVED SIMULATION OUTPUT',
    repository: 'https://github.com/Avipatel1/High-Performance-N-Body-Gravitational-Dynamics-Engine',
    question: 'How can pairwise gravitational interactions be translated into a numerical model of planetary motion?',
    approach: 'The C++ core calculates pairwise accelerations and advances positions with Euler–Cromer integration. Python reads the saved coordinates for orbital visualization and an exploratory Kepler-law analysis.',
    next: 'Refine the orbital measurements and validation, reconcile the documentation with the current run settings, and quantify numerical error before making performance or accuracy claims.',
  },
  {
    id: 'chaos',
    number: '02',
    category: 'SCIENTIFIC MACHINE LEARNING',
    title: 'Learning the motion of chaos.',
    description: 'An ongoing exploration of double-pendulum dynamics, using generated physical states to investigate data-driven prediction and energy-based neural-network training.',
    technologies: ['C++', 'Python', 'PyTorch'],
    image: '/images/pendulum-trajectory.svg',
    imageAlt: 'Trajectory of the second double-pendulum bob, computed from saved simulated angles with unit-length rods.',
    caption: 'FIG. 02 — DOUBLE-PENDULUM PATH · SAVED SIMULATION OUTPUT',
    repository: 'https://github.com/Avipatel1/Chaos-Deep-Learning-Physics-Predictor',
    question: 'What can a neural network learn about the next state of a double pendulum, and how might physical constraints affect its predictions?',
    approach: 'A C++ generator supplies angular states to PyTorch networks. The current scripts explore one-step prediction using a data-fitting objective and a separate energy-based objective.',
    next: 'Refine the physics loss, document the experiment, and evaluate prediction error and longer rollouts. The current work does not establish an advantage for either training approach.',
  },
]