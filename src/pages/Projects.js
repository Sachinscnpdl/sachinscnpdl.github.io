import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Materials Research Projects"
    description="Research projects by Sachin Poudel on multicomponent alloys, crystal-symmetry-guided materials, piezoelectrics, battery interfaces, and materials web tools."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>
            I combine materials informatics, physics-based modeling, and crystallographic
            insight to study microstructure-sensitive multicomponent and functional
            materials, from composition and morphology to material and device response.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
