export interface LaboratoryReport {
  readonly id: string
  readonly category: string
  readonly title: string
  readonly summary: string
  readonly result: string
  readonly skills: readonly string[]
  readonly url: `https://${string}`
}

export const laboratoryRepository = 'https://github.com/Avipatel1/Lab_reports'

export const research: readonly LaboratoryReport[] = [
  {
    id: 'speed-of-light',
    category: 'Experimental Optics',
    title: 'Measuring the Speed of Light',
    summary: 'Used rotating-mirror and time-of-flight methods to experimentally determine the speed of light. The rotating-mirror measurement was consistent with the accepted value.',
    result: '(3.01 ± 0.18) × 10⁸ m/s',
    skills: ['Optics', 'Linear Regression', 'Uncertainty Analysis', 'Experimental Design'],
    url: 'https://github.com/Avipatel1/Lab_reports/blob/main/Experiment_7__Speed_of_Light.pdf',
  },
  {
    id: 'cantilever-displacement',
    category: 'Holographic Interferometry',
    title: 'Holographic Measurement of Cantilever Displacement',
    summary: 'Created holographic interference patterns to measure the displacement of a cantilever under 2.2 g and 5.3 g loads. Compared fringe-derived measurements with theoretical beam-deflection curves, with the lighter load producing closer agreement.',
    result: 'Theory–experiment comparison under two applied loads',
    skills: ['Holography', 'Python', 'Optical Measurement', 'Model Validation'],
    url: 'https://github.com/Avipatel1/Lab_reports/blob/main/Experiment_11__Holographic_Interferometry_of_a_Cantilever_using_Instant_Holographic_Film.pdf',
  },
  {
    id: 'moving-magnets',
    category: 'Electromagnetism',
    title: 'Electromagnetic Response to Moving Magnets',
    summary: 'Analyzed voltage signals generated as magnets moved through four stationary conductive coils. Used field measurements, signal integration, and model comparison to estimate magnetic dipole moments and examine discrepancies between measurement methods.',
    result: 'Four-coil induced-voltage and magnetic-flux analysis',
    skills: ['Electromagnetism', 'Signal Analysis', 'Numerical Integration', 'Data Visualization'],
    url: 'https://github.com/Avipatel1/Lab_reports/blob/main/Experiment_33__Electromotive_Response_to_Moving_Magnetic_Sources.pdf',
  },
  {
    id: 'zeeman-effect',
    category: 'Atomic Physics',
    title: 'Measuring the Zeeman Effect',
    summary: 'Observed magnetic-field-induced splitting of a 585.2 nm spectral line and used fringe measurements to estimate the Bohr magneton. The experimental value differed from the accepted value by approximately 20.7%.',
    result: 'μB = 1.17 × 10⁻²³ J/T',
    skills: ['Atomic Physics', 'Spectroscopy', 'Interferometry', 'Error Analysis'],
    url: 'https://github.com/Avipatel1/Lab_reports/blob/main/Experiment_47__Zeeman_Effect.pdf',
  },
]
