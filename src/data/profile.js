const profile = {
  name: 'Sachin Poudel',
  title: 'Ph.D. Candidate in Mechanical Engineering',
  affiliation: 'Silesian University of Technology · Gliwice, Poland',
  photo: '/images/me.jpg',
  emails: ['sachinscnpdl@gmail.com', 'sachin.poudel@polsl.pl'],
  cvPath: '/sachinCV.pdf',
  cvFilename: 'Sachin_Poudel_CV.pdf',
  googleScholar: 'https://scholar.google.com/citations?user=AY4OacUAAAAJ&hl=en',
  ncnProjectUrl: 'https://projekty.ncn.gov.pl/en/index.php?projekt_id=526876',
  ncnProjectId: 'UMO-2021/42/E/ST5/00339',
  thesis:
    'Scale-Bridging Computational and Data-Driven Design of Microstructures in Multicomponent Alloys for Advanced Functional Materials',

  heroPhrases: [
    'Bridging atomistic, microstructure, and device scales',
    'Designing functional materials with AI and physics',
    'Connecting descriptors to performance',
  ],

  intro:
    'I develop scale-bridging frameworks that link DFT-derived parameters, phase-field microstructure evolution, continuum mechanics, finite element simulations, and data-driven materials design.',

  researchPillars: [
    {
      icon: '⚗️',
      title: 'Microstructure Modeling',
      summary:
        'DFT-informed and MOOSE-based phase-field models for alloy microstructures, lithium dendrites, and coupled physical fields.',
    },
    {
      icon: '🤖',
      title: 'Materials Informatics',
      summary:
        'Physics-guided machine learning for alloy property prediction, piezoelectric tensor design, and inverse materials screening.',
    },
    {
      icon: '🔋',
      title: 'Functional Materials',
      summary:
        'Piezoelectric materials, battery interfaces, multicomponent alloys, and process-structure-performance relationships.',
    },
  ],

  quickLinks: [
    { label: 'Research Projects', path: '/projects', desc: 'Alloys, piezoelectrics, and materials tools' },
    { label: 'Publications', path: '/publications', desc: 'Journal articles in functional materials' },
    { label: 'Presentations', path: '/presentations', desc: 'Materials research conference talks' },
    { label: 'Resume', path: '/resume', desc: 'Research experience and methods' },
  ],

  expertise: [
    'Phase-field modeling',
    'DFT & multiscale simulation',
    'Machine learning',
    'MOOSE · Quantum ESPRESSO',
    'Python · C++ · FEM',
  ],
};

export default profile;
