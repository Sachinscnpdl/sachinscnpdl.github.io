import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Publications/Cell';
import data from '../data/Publications';

const Publications = () => (
  <Main title="Publications" description="Explore Sachin Poudel's publications.">
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2>
            <Link to="/publications">Publications</Link>
          </h2>
          <p>A selection of my research publications and contributions</p>
        </div>
      </header>
      {data.map((publication) => (
        <Cell data={publication} key={publication.title} />
      ))}
    </article>
  </Main>
);

export default Publications;

