import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Publications/Cell';
import { getActivePublications } from '../data/Publications';

const groupPublicationsByYear = (publications) => {
  const groups = {};
  publications.forEach((pub) => {
    const year = pub.date ? pub.date.split('-')[0] : 'Other';
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(pub);
  });
  return groups;
};

const Publications = () => {
  const activeData = getActivePublications();
  const groupedPublications = groupPublicationsByYear(activeData);
  const years = Object.keys(groupedPublications).sort((a, b) => b.localeCompare(a));

  let publicationNumber = 0;

  return (
    <Main
      title="Materials Research Publications"
      description="Publications by Sachin Poudel on materials informatics, piezoelectric materials, phase-field modeling, multicomponent alloys, and battery interfaces."
    >
      <article className="post" id="publications">
        <header>
          <div className="title">
            <h2>
              <Link to="/publications">Publications</Link>
            </h2>
            <p>Journal articles on materials informatics, multicomponent alloys, piezoelectric materials, phase-field microstructure modeling, and electrochemical interfaces.</p>
          </div>
        </header>
        {years.map((year) => (
          <section className="publication-year" key={year}>
            <h3>{year}</h3>
            {groupedPublications[year].map((publication) => {
              publicationNumber += 1;
              return (
                <Cell
                  data={publication}
                  key={publication.title}
                  number={publicationNumber}
                />
              );
            })}
          </section>
        ))}
      </article>
    </Main>
  );
};

export default Publications;
