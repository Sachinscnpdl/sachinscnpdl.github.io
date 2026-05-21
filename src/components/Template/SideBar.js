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
        <h2>Sachin Poudel</h2>
        <p>Doctoral Researcher</p>
        <p>Silesian University of Technology</p>
        <p>
          <a href="mailto:sachinscnpdl@gmail.com">sachinscnpdl@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb sidebar-summary">
      <h2>Research Focus</h2>
      <p>
        Scale-bridging simulations and data-driven materials design.
      </p>
      <p>
        Read more about my background, research direction, and academic work.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            About Me
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
