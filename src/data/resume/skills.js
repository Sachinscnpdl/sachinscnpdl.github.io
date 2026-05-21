const skills = [
  {
    title: 'Phase-Field Modeling',
    competency: 4,
    category: ['Simulation', 'Materials'],
  },
  {
    title: 'DFT',
    competency: 3,
    category: ['Simulation', 'Materials'],
  },
  {
    title: 'FEM & Computational Mechanics',
    competency: 4,
    category: ['Simulation', 'Mechanics'],
  },
  {
    title: 'Microstructure & Thermodynamics',
    competency: 4,
    category: ['Simulation', 'Materials'],
  },
  {
    title: 'Machine Learning',
    competency: 5,
    category: ['AI & Informatics'],
  },
  {
    title: 'Materials Informatics',
    competency: 4,
    category: ['AI & Informatics', 'Materials'],
  },
  {
    title: 'Data Analysis',
    competency: 4,
    category: ['AI & Informatics'],
  },
  {
    title: 'Scientific Programming',
    competency: 5,
    category: ['AI & Informatics'],
  },
  {
    title: 'HPC & Fortran',
    competency: 3,
    category: ['AI & Informatics', 'Simulation'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const categories = [
  { name: 'Simulation', color: '#2f7d68' },
  { name: 'AI & Informatics', color: '#3178b5' },
  { name: 'Materials', color: '#a85a40' },
  { name: 'Mechanics', color: '#8b6f2f' },
];

export { categories, skills };
