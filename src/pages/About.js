import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import '../static/css/pages/_home_page.scss';

const About = () => (
  <Main
    title="About Sachin Poudel"
    description="Learn about Sachin Poudel, a PhD candidate in Mechanical Engineering specializing in computational materials science."
  >
    <article className="post" id="about">
      <header>
        <div className="title">
          <h1 className="section-title">About Me</h1>
        </div>
      </header>
      <div className="about-wrapper">
        <nav className="toc-sidebar">
          <h3>Contents</h3>
          <ul className="toc-list">
            <li><a href="#biography">Biography</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#research">Research Interests</a></li>
            <li><a href="#resume">Resume Overview</a></li>
          </ul>
        </nav>
        <main className="overview">
          <section id="biography">
            <h2>Biography</h2>
            <p>
              I’m a PhD candidate in Mechanical Engineering at Silesian University of Technology, Poland, passionate about computational materials science. My research, funded by the National Science Centre, Poland, uses phase-field modeling and machine learning to design advanced materials for energy and manufacturing. I’ve published in top journals, presented at international conferences, and taught engineering courses in Nepal.
            </p>
          </section>
          <section id="expertise">
            <h2>Expertise</h2>
            <ul className="expertise-list">
              <li>🔬 Microstructural Evolution</li>
              <li>🌐 Phase-Field Modeling</li>
              <li>🧪 Multi-Principal Element Alloys</li>
              <li>🤖 Machine Learning</li>
              <li>🌈 Functional Materials</li>
              <li>⚛️ Density Functional Theory</li>
            </ul>
          </section>
          <section id="research">
            <h2>Research Interests</h2>
            <p>
              My work focuses on multi-scale material behavior, aiming to:
            </p>
            <ul>
              <li>Predict microstructural evolution in alloys using phase-field models.</li>
              <li>Accelerate materials discovery with machine learning.</li>
              <li>Design materials for energy storage and piezoelectric applications.</li>
              <li>Bridge atomistic and macroscopic simulations.</li>
            </ul>
            <p>
              Explore my work in the <Link to="/research">Research</Link> tab.
            </p>
          </section>
          <section id="resume">
            <h2>Resume Overview</h2>
            <p>
              I hold a PhD candidacy from Silesian University of Technology, an M.Sc. and B.E. from Tribhuvan University, Nepal. My career includes research, teaching, and engineering roles. I’ve earned awards like the Rector’s Grant (2024) and contributed to workshops like the Swiss-Nepal Technology Transfer (2019). For details, visit my <Link to="/resume">Resume</Link>, <Link to="/publications">Publications</Link>, <Link to="/presentations">Presentations</Link>, or download my <a href="/SachinCV.pdf" download>CV</a>.
            </p>
          </section>
        </main>
        <aside className="profiles-sidebar">
          <h3>Connect</h3>
          <ul className="profiles-list">
            <li>
              <a href="https://scholar.google.com/citations?user=your-profile" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            </li>
            <li>
              <a href="https://github.com/sachinscnpdl" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sachin-poudel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </aside>
      </div>
    </article>
  </Main>
);

export default About;