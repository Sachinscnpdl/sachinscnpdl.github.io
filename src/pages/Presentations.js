import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Main from '../layouts/Main';
import Cell from '../components/Presentations/Cell';
import data from '../data/Presentations';

// Helper function to group presentations by year
const groupPresentationsByYear = (presentations) => {
  const groups = {};
  presentations.forEach((p) => {
    const year = p.date ? p.date.split('-')[0] : 'Other';
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(p);
  });
  return groups;
};

const Presentations = () => {
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    console.log('URL ID in Presentations:', id);

    if (id) {
      const presentation = data.find(
        (p) => (p.id || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) === id
      );
      if (presentation) {
        console.log('Found presentation:', presentation.title);
        setSelectedPresentation(presentation);
      } else {
        console.warn('No presentation found for ID:', id);
      }
    } else {
      setSelectedPresentation(null);
    }
  }, [location.search]);

  // Determine og:image based on presentation ID
  const getOgImage = (presentation) => {
    if (presentation && (presentation.id === 'amm2025' ||
        (!presentation.id && presentation.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === 'thermal-structural-modeling-of-additively-manufactured-ni-ysz-layers-for-sofc-electrodes'))) {
      return 'https://sachinscnpdl.github.io/presentations/presentations/images/poster_amm_2025.jpg';
    }
    return presentation?.image
      ? `https://sachinscnpdl.github.io/presentations${presentation.image}`
      : 'https://sachinscnpdl.github.io/presentations/presentations/images/default.jpg';
  };

  const groupedPresentations = groupPresentationsByYear(data);
  const years = Object.keys(groupedPresentations).sort((a, b) => b.localeCompare(a));

  return (
    <Main
      title="Materials Research Presentations"
      description="Conference presentations by Sachin Poudel on multiscale materials modeling, additive manufacturing, piezoelectrics, and materials informatics."
    >
      <Helmet>
        <title>{selectedPresentation ? selectedPresentation.title : 'Presentations'}</title>
        <meta
          property="og:title"
          content={selectedPresentation ? selectedPresentation.title : 'Presentations'}
        />
        <meta
          property="og:description"
          content={
            selectedPresentation
              ? selectedPresentation.description || `Presentation at ${selectedPresentation.conference}`
              : 'Materials research presentations by Sachin Poudel'
          }
        />
        <meta property="og:image" content={getOgImage(selectedPresentation)} />
        <meta
          property="og:url"
          content={`https://sachinscnpdl.github.io/presentations${location.search}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <article className="post" id="presentations">
        <header>
          <div className="title">
            <h2>
              <Link to="/presentations">Presentations</Link>
            </h2>
            <p>
              Oral and poster presentations on multiscale materials modeling, functional
              materials, additive manufacturing, and data-driven materials research.
            </p>
          </div>
        </header>
        {years.map((year) => (
          <div key={year} style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.8rem',
              borderBottom: '2px solid #5c6ac4',
              paddingBottom: '0.4rem',
              marginBottom: '1.5rem',
              color: '#3c3b3b',
              fontWeight: 'bold',
              letterSpacing: '1px',
              fontFamily: '"Outfit", sans-serif'
            }}>
              {year}
            </h3>
            {groupedPresentations[year].map((presentation) => (
              <Cell data={presentation} key={presentation.id || presentation.title} />
            ))}
          </div>
        ))}
      </article>
    </Main>
  );
};

export default Presentations;
