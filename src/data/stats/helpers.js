import publicationData, { getActivePublications } from '../Publications';
import projectData from '../projects';
import presentationData from '../Presentations';

const activePublications = getActivePublications();

export const isFirstAuthor = (publication) => {
  const authors = publication.authors || '';
  return authors.startsWith('Poudel, Sachin')
    || authors.startsWith('Sachin Poudel');
};

export const publicationYears = () => {
  const years = activePublications
    .map((pub) => pub.date?.split('-')[0])
    .filter(Boolean);
  return [...new Set(years)].sort((a, b) => b.localeCompare(a));
};

export const counts = {
  publications: activePublications.length,
  published: activePublications.length,
  firstAuthor: activePublications.filter(isFirstAuthor).length,
  projects: projectData.length,
  presentations: presentationData.length,
  oralPresentations: presentationData.filter((p) => (
    (p.type || '').toLowerCase().includes('oral')
  )).length,
};

export { publicationData, activePublications, projectData, presentationData };
