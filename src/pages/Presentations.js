import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Presentations/Cell';
import data from '../data/Presentations';

const Presentations = () => (
  <Main title="Presentations" description="Learn about Sachin Poudel's presentations.">
    <article className="post" id="presentations">
      <header>
        <div className="title">
          <h2>
            <Link to="/presentations">Presentations</Link>
          </h2>
          <p>Oral and poster presentations showcase research and innovative ideas at leading conferences worldwide. For full details, go through each presentations.</p>
        </div>
      </header>
      {data.map((presentation) => (
        <Cell data={presentation} key={presentation.title} />
      ))}
    </article>
  </Main>
);

export default Presentations;