const data = [
  {
    title: 'Multicomponent Alloy Behavior and Design',
    subtitle: 'From DFT-informed phase-field modeling to machine-learning alloy optimization',
    image: '/images/projects/phasefieldmodeling.jpg',
    date: '2024-05-23',
    desc: 'This research connects atomistic material parameters, mesoscale microstructure evolution, and data-driven alloy design. In Al-Cu-Ni alloys, density functional theory provides phase-specific elastic information for <a href="https://mooseframework.org/" target="_blank" rel="noopener noreferrer">MOOSE</a>-based phase-field simulations of elastochemical microstructure evolution. For multi-principal element alloys, <a href="https://mpeanet.streamlit.app/" target="_blank" rel="noopener noreferrer">AlloyManufacturingNet</a> links composition and manufacturing route to hardness-elongation synergy.',
    impact: 'Built a scale-bridging alloy-design pathway that connects composition, processing, elastic behavior, microstructure evolution, and mechanical performance.',
    tools: ['DFT', 'MOOSE', 'Phase-field modeling', 'Materials informatics', 'Ensemble neural networks'],
    highlights: [
      'AlloyManufacturingNet uses alloy descriptors, feature selection, principal-component analysis, manufacturing-route information, and ensemble neural networks to predict hardness and elongation together in multi-principal element alloys.',
      'The alloy design workflow searches ZrHfNb- and VNbTa-derived composition spaces for hardness-ductility synergy instead of optimizing a single mechanical property.',
      'The Al-Cu-Ni study links DFT-derived elastic information with multi-phase-field simulations of Al-rich FCC, Al2Cu, and Al3Ni evolution under elastochemical driving forces.',
    ],
    publications: [
      {
        label: 'Unraveling elastochemical effects in microstructural evolution of Al-Cu-Ni system',
        link: 'https://doi.org/10.1016/j.ijsolstr.2024.112894',
      },
      {
        label: 'AlloyManufacturingNet for discovery and design of hardness-elongation synergy',
        link: 'https://doi.org/10.1016/j.engappai.2024.107902',
      },
    ],
  },
  {
    title: 'Crystal-Symmetry-Guided Functional Behavior',
    subtitle: 'FuncGPT for physically gated functional materials discovery',
    image: '/images/projects/crystal_piezo.jpg',
    date: '2026-05-20',
    desc: 'This research uses crystal symmetry as a physical gate for functional materials discovery. FuncGPT estimates symmetry-derived functional eligibility from composition before property prediction, while PiezoTensorNet connects point-group information to piezoelectric tensor prediction. The workflow supports physically consistent screening of piezoelectric, polar, ferroelectric, dielectric, and optically active materials.',
    impact: 'Introduced a physically consistent screening logic where crystallographic symmetry controls whether a functional response is allowed before property magnitude is predicted.',
    tools: ['Crystal symmetry', 'Point-group prediction', 'Functional gating', 'Uncertainty-aware ML', 'Materials screening'],
    highlights: [
      'PiezoTensorNet combines hierarchical crystal point-group classification with modular regression models for complete piezoelectric tensor prediction.',
      'The tensor workflow supports dopant-aware screening, crystallographic transformations, and finite element evaluation for lead-free piezoelectric energy harvesting.',
      'FuncGPT extends the same symmetry-first idea by separating functional eligibility from property magnitude for piezoelectric, polar, ferroelectric, dielectric, and optical responses.',
    ],
    publications: [
      {
        label: 'FuncGPT: Crystallography as a Physical Gate for Functional Materials Discovery',
        link: '/publications',
      },
      {
        label: 'PiezoTensorNet: crystallography informed multi-scale hierarchical machine learning',
        link: 'https://doi.org/10.1016/j.apenergy.2024.122901',
      },
    ],
  },
  {
    title: 'Electromechanical Functional Response',
    subtitle: 'Tensor-aware piezoelectric prediction and physics-guided nanofiber design',
    image: '/images/projects/functionalmaterials.jpg',
    date: '2026-04-01',
    desc: 'This research studies piezoelectric systems where morphology and electromechanical coupling control device performance. <a href="https://pgmlpiezo.streamlit.app" target="_blank" rel="noopener noreferrer">PGMLpiezo</a> links electrospun PVDF/SnO<sub>2</sub> nanofiber morphology and electroactive &beta;-phase fraction to physics-guided property prediction, flexible energy harvesting, and actuation.',
    impact: 'Moved piezoelectric design from single-coefficient screening toward tensor-aware and morphology-aware device performance evaluation.',
    tools: ['Piezoelectric tensors', 'Physics-guided ML', 'Finite element modeling', 'Energy harvesting', 'PVDF/SnO2'],
    highlights: [
      'The PGMLpiezo study uses NLP-driven materials informatics to identify SnO2 as an underexplored filler for electrospun PVDF piezoelectric nanofibers.',
      'Electrospinning and SnO2 addition connect fiber diameter, electroactive beta-phase fraction, and predicted d33 response in PVDF/SnO2 nanofibers.',
      'Predicted material properties are transferred to finite element models for wearable energy harvesting and soft-actuator performance.',
    ],
    publications: [
      {
        label: 'Physics-guided machine learning for enhanced piezoelectric performance',
        link: 'https://doi.org/10.1016/j.susmat.2026.e02008',
      },
    ],
  },
  {
    title: 'Electrochemical Interfaces and Stability',
    subtitle: 'Dendrite morphology, latent-space analysis, and corrosion-response prediction',
    image: '/images/projects/modular_ml.jpg',
    date: '2026-03-01',
    desc: 'This research studies electrochemical systems where interfacial microstructure controls stability. For lithium-ion batteries, phase-field simulations generate dendrite morphologies that are encoded using latent-space models for reconstruction and battery-interface stability analysis. In corrosion studies, machine learning links processing, phase balance, and electrochemical response.',
    impact: 'Connected electrochemical performance to evolving interfaces, dendritic morphology, phase balance, and data-driven stability metrics.',
    tools: ['Phase-field simulation', 'Variational autoencoders', 'Battery informatics', 'Corrosion prediction', 'Neural networks'],
    highlights: [
      'Battery research treats lithium dendrite nucleation, growth, and suppression as a multiscale interface problem involving electrochemical, mechanical, transport, and microstructural descriptors.',
      'Phase-field-generated dendrite morphologies are encoded in latent representations for reconstruction, comparison, and morphology-based interfacial stability analysis.',
      'Corrosion informatics combines LPBF SDSS 2507 heat treatment, XRD phase information, electrochemical testing, physics-based modeling, and neural-network prediction.',
    ],
    publications: [
      {
        label: 'Roadmaps for dendrite suppression in next generation lithium-ion batteries',
        link: 'https://doi.org/10.1016/j.ensm.2026.105000',
      },
      {
        label: 'Latent space exploration to decode interfacial dendrites',
        link: '/publications',
      },
      {
        label: 'Integrating experiments and phase field method through informatics',
        link: 'https://doi.org/10.26434/chemrxiv-2025-sk6h5',
      },
    ],
  },
  {
    title: 'Interactive Functional Materials Platforms',
    subtitle: 'Live tools for alloy design, piezoelectric tensors, and PVDF nanofibers',
    image: '/images/projects/webapp.jpg',
    date: '2023-01-15',
    desc: 'This research translates materials informatics workflows into interactive web tools. AlloyManufacturingNet supports composition- and manufacturing-aware alloy exploration. PiezoTensorNet provides tensor-level piezoelectric screening. PGMLpiezo extends physics-guided prediction to electrospun PVDF/SnO<sub>2</sub> nanofibers for flexible electromechanical materials.',
    impact: 'Made alloy and piezoelectric research models accessible as live tools for screening, visualization, and research communication.',
    tools: ['Streamlit', 'Python', 'Model deployment', 'Materials web apps'],
    highlights: [
      'AlloyManufacturingNet makes composition- and manufacturing-aware MPEA hardness-elongation screening available as an interactive research platform.',
      'PiezoTensorNet exposes crystallography-informed piezoelectric tensor prediction for rapid functional materials exploration.',
      'PGMLpiezo presents a physics-guided PVDF/SnO2 nanofiber workflow that connects materials informatics with electromechanical device design.',
    ],
    platforms: [
      {
        name: 'AlloyManufacturingNet',
        focus: 'Hardness-elongation screening in multicomponent alloys',
        link: 'https://mpeanet.streamlit.app/',
      },
      {
        name: 'PiezoTensorNet',
        focus: 'Crystallography-informed piezoelectric tensor prediction',
        link: 'https://piezotensornet.streamlit.app/',
      },
      {
        name: 'PGMLpiezo',
        focus: 'Physics-guided PVDF/SnO2 nanofiber piezoelectric design',
        link: 'https://pgmlpiezo.streamlit.app',
      },
    ],
  },
];

export default data;
