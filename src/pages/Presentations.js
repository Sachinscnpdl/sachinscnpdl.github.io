import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Presentations/Cell';
import data from '../data/Presentations';

const Presentations = () => (
  <Main title="Research Highlights" description="Learn about Sachin Poudel's presentations.">
    <article className="post" id="presentations">
      <header>
        <div className="title">
          <h2>
            <Link to="/presentations">Presentations</Link>
          </h2>
          <p>Research area and key findings from my interdisciplinary research presentations. For full details, follow the links to the corresponding publications.</p>
        </div>
      </header>
      {data.map((presentation) => (
        <Cell data={presentation} key={presentation.title} />
      ))}
    </article>
  </Main>
);

export default Presentations;