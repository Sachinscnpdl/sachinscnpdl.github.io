const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering', 'Computational Materials Science'],
  },
  {
    title: 'Finite Element Analysis (FEA)',
    competency: 4,
    category: ['Computational Materials Science', 'Engineering'],
  },
  {
    title: 'Phase Field Modeling',
    competency: 4,
    category: ['Computational Materials Science', 'Simulation'],
  },
  {
    title: 'Material Informatics',
    competency: 4,
    category: ['Computational Materials Science', 'Data Science'],
  },
  {
    title: 'Density Functional Theory (DFT)',
    competency: 3,
    category: ['Computational Materials Science', 'Simulation', 'Physics'],
  },
  {
    title: 'Machine Learning in Materials Science',
    competency: 3,
    category: ['ML Engineering', 'Computational Materials Science'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'NumPy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'SciPy',
    competency: 3,
    category: ['Data Science', 'Python', 'Computational Materials Science'],
  },
  {
    title: 'Matlab',
    competency: 3,
    category: ['Languages', 'Simulation'],
  },
  {
    title: 'Solid Mechanics',
    competency: 3,
    category: ['Computational Materials Science', 'Engineering'],
  },
  {
    title: 'Computational Thermodynamics',
    competency: 3,
    category: ['Computational Materials Science', 'Physics'],
  },
  {
    title: 'Material Modeling',
    competency: 4,
    category: ['Computational Materials Science', 'Simulation'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Python', 'Visualization'],
  },
  {
    title: 'Graph Theory',
    competency: 3,
    category: ['Data Science', 'Computational Materials Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Color selection for categories
const colors = [
  '#6968b3', // Computational Materials Science
  '#37b1f5', // ML Engineering
  '#40494e', // Data Science
  '#515dd4', // Python
  '#e47272', // Simulation
  '#cc7b94', // Engineering
  '#3896e2', // Physics
  '#c3423f', // Visualization
  '#d75858', // Data Engineering
  '#747fff', // Material Informatics
  '#64cb7b', // Simulation
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
