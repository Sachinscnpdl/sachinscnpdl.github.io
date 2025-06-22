const skills = [
  // Simulation and Computational Physics
  {
    title: 'Finite Element Analysis (FEA)',
    competency: 4,
    category: ['Simulation ', 'Engineering Applications']
  },
  {
    title: 'Phase Field Modeling',
    competency: 4,
    category: ['Simulation ', 'Materials Science']
  },
  {
    title: 'DFT',
    competency: 3,
    category: ['Simulation ', 'Materials Science']
  },
  {
    title: 'Solid Mechanics',
    competency: 3,
    category: ['Simulation ', 'Engineering Applications']
  },
  {
    title: 'Computational Thermodynamics',
    competency: 3,
    category: ['Simulation ', 'Materials Science']
  },
  {
    title: 'Microstructure Modeling',
    competency: 4,
    category: ['Simulation ', 'Materials Science']
  },


  // Machine Learning and Data Science
  {
    title: 'Machine Learning (ML)',
    competency: 5,
    category: ['ML & Data Science', 'Programming ']
  },
  {
    title: 'Data Analysis',
    competency: 3,
    category: ['ML & Data Science']
  },

  {
    title: 'Data Visualization',
    competency: 4,
    category: ['ML & Data Science']
  },
  {
    title: 'Graph Theory',
    competency: 3,
    category: ['ML & Data Science']
  },
  {
    title: 'Statistical Modeling',
    competency: 3,
    category: ['ML & Data Science']
  },

  // Programming 
  {
    title: 'Python Programming',
    competency: 5,
    category: ['Programming ', 'ML & Data Science', 'Simulation ', 'Materials Informatics']
  },
  {
    title: 'MATLAB Scripting',
    competency: 3,
    category: ['Programming ', 'Simulation ']
  },
  {
    title: 'C++ Development',
    competency: 4,
    category: ['Programming ', 'Simulation ', 'Engineering Applications']
  },
  {
    title: 'Fortran 90',
    competency: 3,
    category: ['Programming ', 'Simulation ']
  },
  {
    title: 'HPC',
    competency: 3,
    category: ['Programming ', 'Simulation ']
  },

  // Materials Science
  {
    title: 'Crystallography',
    competency: 3,
    category: ['Materials Science', 'Simulation ']
  },
  {
    title: 'Characterization',
    competency: 3,
    category: ['Materials Science']
  },

  // Materials Informatics
  {
    title: 'Informatics & AI',
    competency: 4,
    category: ['Materials Informatics', 'ML & Data Science', 'Materials Science']
  },
  {
    title: 'Material Featurization',
    competency: 3,
    category: ['Materials Informatics', 'Programming ']
  },

  // Engineering Applications
  {
    title: 'Design & Optimization',
    competency: 3,
    category: ['Engineering Applications', 'Simulation ']
  },
  {
    title: 'Stress Analysis',
    competency: 3,
    category: ['Engineering Applications', 'Simulation ']
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3', // Simulation al
  '#37b1f5', // Machine Learning and Data Science
  '#40494e', // Programming 
  '#e47272', // Materials Science
  '#cc7b94', // Engineering Applications
  '#8a2be2'  // Materials Informatics (new color for the new category)
];

const categories = [
  { name: 'Simulation ', color: '#6968b3' },
  { name: 'ML & Data Science', color: '#37b1f5' },
  { name: 'Programming ', color: '#40494e' },
  { name: 'Materials Science', color: '#e47272' },
  { name: 'Engineering Applications', color: '#cc7b94' },
  { name: 'Materials Informatics', color: '#8a2be2' } // New category
];

export { categories, skills };