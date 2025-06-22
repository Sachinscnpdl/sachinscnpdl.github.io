const data = [
  {
    title: 'Scale-Bridging Multiphysics Modeling in Al-Cu-Ni Alloys',
    subtitle: 'From First-Principles to Mesoscale Integration',
    image: '/images/projects/phasefieldmodeling.jpg',
    date: '2023-06-15',
    desc: 'This project develops a comprehensive computational framework that integrates <a href="https://en.wikipedia.org/wiki/Density_functional_theory" target="_blank" rel="noopener noreferrer">DFT</a> calculations to derive temperature-dependent elastic constants for FCC Al, Al₃Cu, and Al₃Ni phases, seamlessly coupled with a <a href="https://mooseframework.org/" target="_blank" rel="noopener noreferrer">MOOSE</a> phase-field model. At 723 K, simulations demonstrate that elastic mismatch significantly influences precipitate morphology and stress-field evolution, revealing an 18.2% error in grain-area predictions when thermal effects are neglected. This approach enhances predictive accuracy for alloy design under varying thermal conditions.',
    impact: 'The difference in area evolution in phase was deviated by 18.2% through thermal effect integration on the elastic behaviour in comparison to the o K elastic behaviour .',
    tools: ['DFT', 'MOOSE', 'Phase-Field Modeling'],
    publications: [
      { label: 'Phase-Field Modeling of Multi-Component Alloy Behavior', link: '/publications#paper1' }
    ]
  },
  {
    title: 'Crystallographic Influence on Piezoelectric Performance',
    subtitle: 'Symmetry Constraints and Tensor Analysis',
    image: '/images/projects/crystal_piezo.jpg',
    date: '2023-03-10',
    desc: 'Applying <a href="https://en.wikipedia.org/wiki/Neumann%27s_principle" target="_blank" rel="noopener noreferrer">Neumann’s principle</a>, this study classifies crystals into 20 piezoelectric point groups, analyzing symmetry impacts on tensor properties. High-symmetry cubic lattices simplify tensor forms, while lower-symmetry systems (trigonal, tetragonal, orthorhombic) reveal complex components. These insights guide material selection for optimizing electromechanical responses in advanced devices.',
    impact: 'Enabled targeted material selection for enhanced piezoelectric efficiency based on crystal point group.',
    tools: ['Tensor Analysis', 'Crystallography'],
    publications: [
      { label: 'Hierarchical Tensor Classification for Piezoelectric Materials', link: '/publications#paper4' }
    ]
  },
  {
    title: 'Hierarchical ML Framework for Piezoelectric Material Design',
    subtitle: 'Multi-Level Classification and Ensemble Regression',
    image: '/images/projects/modular_ml.jpg',
    date: '2022-11-20',
    desc: 'Introducing <strong>HierCrystalNet</strong>, a novel framework that groups crystal point classes by tensor symmetry, followed by <strong>ModularEnsembleNet</strong> regression modules activated dynamically to predict piezoelectric coefficients. This two-stage approach surpasses traditional monolithic models, offering scalability for predicting diverse tensorial properties across material systems.',
    impact: 'Rapidness in piezoelectric coefficient prediction.',
    tools: ['Machine Learning', 'HierCrystalNet', 'ModularEnsembleNet'],
    publications: [
      { label: 'A Multi-Scale Simulation Framework for Functional Materials', link: '/publications#paper3' }
    ]
  },
  {
    title: 'Data-Driven Pipeline for Alloy Property Prediction',
    subtitle: 'Optimization of Multi-Principal Element Alloys',
    image: '/images/projects/mpeaoptimization.jpg',
    date: '2022-08-05',
    desc: 'This end-to-end pipeline aggregates heterogeneous datasets, employs PCA for dimensionality reduction, and uses Pearson correlation for feature selection. Ensemble ML models achieve R² > 0.88 for hardness and elongation predictions. Cluster analysis identifies synergistic dual-dopant combinations, validated experimentally in ZrHfNb and Cr-W-VNbTa alloys, yielding over 15% performance improvement.',
    impact: 'Achieved alloy system with optimized strength-ductility synergitic in alloy properties through data-driven optimization.',
    tools: ['PCA', 'Ensemble ML', 'Cluster Analysis'],
    publications: [
      { label: 'Data-Driven Materials Design Pipeline', link: '/publications#paper5' }
    ]
  },
  {
    title: 'Interactive Web Applications for Material Science',
    subtitle: 'AlloyManufacturingNet & PiezoTensorNet Development',
    image: '/images/projects/webapp.jpg',
    date: '2023-01-15',
    desc: 'Developed two <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">Streamlit</a> applications: <a href="https://mpeanet.streamlit.app/" target="_blank" rel="noopener noreferrer">AlloyManufacturingNet</a> and <a href="https://piezotensornet.streamlit.app/" target="_blank" rel="noopener noreferrer">PiezoTensorNet</a>. These apps integrate phase-field simulations with ML surrogates, allowing users to upload custom alloy compositions, visualize results, and access real-time forecasts via RESTful APIs, enhancing accessibility for material scientists.',
    impact: 'Improved material design accessibility with real-time simulation tools.',
    tools: ['Streamlit', 'RESTful APIs', 'Python libraries'],
    publications: []
  },
  {
    title: 'Functional Device Optimization in Energy Systems',
    subtitle: 'Dendrite Suppression and MEMS Actuator Enhancement',
    image: '/images/projects/functionalmaterials.jpg',
    date: '2023-04-25',
    desc: 'Utilizing multiscale modeling, this project optimizes lithium-ion battery anodes to suppress dendrite growth by simulating stress evolution during cycling. Simultaneously, piezoelectric MEMS actuators are refined through coupled electro-mechanical simulations, adjusting crystal orientation and electrode geometry to boost longevity and energy efficiency in energy systems.',
    impact: 'Enhanced battery and MEMS device performance by optimizing stress and geometry.',
    tools: ['Multiscale Modeling', 'Electro-Mechanical Simulation'],
    publications: []
  }
];

export default data;