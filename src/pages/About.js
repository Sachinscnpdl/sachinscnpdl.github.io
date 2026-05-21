import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import '../static/css/pages/_home_page.scss';

const About = () => (
  <Main
    title="About Sachin Poudel"
    description="About Sachin Poudel, a doctoral researcher in multiscale materials design, multicomponent alloys, piezoelectrics, and materials informatics."
  >
    <article className="post" id="about">
      <header>
        <div className="title">
          <h1 className="section-title">About Me</h1>
          <p>Doctoral researcher in multiscale materials design and functional materials.</p>
        </div>
      </header>

      <main className="about-page">
        <section className="about-lead">
          <div className="about-lead-copy">
            <h2>From Material Descriptors to Functional Performance</h2>
            <p>
              I am <strong>Sachin Poudel</strong>, a doctoral researcher in Mechanical Engineering
              at Silesian University of Technology, Poland. I study multicomponent alloys,
              piezoelectric materials, and electrochemical interfaces using multiscale simulations,
              machine learning, and materials informatics.
            </p>
            <p>
              My research connects composition, processing, crystal symmetry, morphology,
              phase evolution, and interfaces with measurable material and device performance.
            </p>
          </div>
          <aside className="about-thesis">
            <p className="about-label">Doctoral Dissertation</p>
            <p>
              <em>Scale-Bridging Computational and Data-Driven Design of Microstructures
                in Multicomponent Alloys for Advanced Functional Materials</em>
            </p>
          </aside>
        </section>

        <section className="about-section">
          <h2>Research Approach</h2>
          <div className="about-path">
            <div>
              <h3>Describe</h3>
              <p>Build meaningful descriptors from chemistry, structure, processing, and morphology.</p>
            </div>
            <div>
              <h3>Model</h3>
              <p>Use phase-field modeling, finite element analysis, and machine learning across scales.</p>
            </div>
            <div>
              <h3>Evaluate</h3>
              <p>Translate microstructure-sensitive properties into material, interface, or device performance.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Focus Areas</h2>
          <div className="about-focus-grid">
            <div>
              <h3>Multicomponent Alloys</h3>
              <p>Composition, processing, microstructure evolution, and mechanical response.</p>
            </div>
            <div>
              <h3>Functional Symmetry</h3>
              <p>Crystal-symmetry-guided screening for piezoelectric, polar, and related responses.</p>
            </div>
            <div>
              <h3>Electromechanical Materials</h3>
              <p>Tensor-aware piezoelectric prediction, nanofiber morphology, and device response.</p>
            </div>
            <div>
              <h3>Electrochemical Interfaces</h3>
              <p>Dendrite morphology, battery-interface stability, and corrosion response.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Methods</h2>
          <ul className="about-methods">
            <li>Density functional theory</li>
            <li>Phase-field modeling</li>
            <li>Finite element analysis</li>
            <li>Finite-strain mechanics</li>
            <li>Machine learning</li>
            <li>Materials web tools</li>
          </ul>
        </section>

        <section className="about-section about-links">
          <h2>Explore</h2>
          <Link to="/projects" className="button">Research</Link>
          <Link to="/publications" className="button">Publications</Link>
          <Link to="/resume" className="button">Resume</Link>
          <a href="/SachinCV.pdf" className="button" download>Download CV</a>
        </section>
      </main>
    </article>
  </Main>
);

export default About;
