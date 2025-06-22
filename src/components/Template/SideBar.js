import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Sachin Poudel" />
      </Link>
      <header>
        <h2>Hi, I’m Sachin Poudel</h2>
        <p>PhD Candidate in Mechanical Engineering</p>
        <p>Silesian University of Technology</p>
        <p>
          <a href="mailto:sachinscnpdl@gmail.com">sachinscnpdl@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>
        I specialize in <strong>Material Informatics</strong>, <strong>Phase-field Modeling</strong>,
        and <strong>Multi-physics, Multi-scale Functional Materials</strong>.
      </p>
      <p>
        As a computational research engineer, I focus on understanding, modeling,
        and optimizing the mechanical response of materials through advanced simulations
        and data-driven methods.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Sachin Poudel <Link to="/">sachinscnpdl.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
