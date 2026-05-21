import { counts } from './helpers';

const metrics = [
  {
    label: 'Publications',
    value: counts.publications,
    icon: 'book',
    link: '/publications',
  },
  {
    label: 'First-author papers',
    value: counts.firstAuthor,
    icon: 'user',
    link: '/publications',
  },
  {
    label: 'Research projects',
    value: counts.projects,
    icon: 'flask',
    link: '/projects',
  },
  {
    label: 'Presentations',
    value: counts.presentations,
    icon: 'microphone',
    link: '/presentations',
  },
];

export default metrics;
