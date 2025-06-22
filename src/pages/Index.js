import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import '../static/css/pages/_home_page.scss';

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent!'); // Replace with Formspree if desired
    }, 1000);
  };

  return (
    <Main
      description={
        "Dive into the computational multi-physics world of Sachin Poudel: innovating materials through data-driven models and simulations."
      }
    >
      <article className="post" id="index">
        <header>
          <div
            className="title hero"
            style={{ backgroundImage: `url('/images/hero-bg.png')`, backgroundColor: '#1a2a44' }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1>AI & computational Multi-physics</h1>
              <p className="subtitle">
                Harnessing Multi-physics Simulations for Next-Gen Materials
              </p>
            </div>
          </div>
        </header>

        <section className="overview">
          <div className="about-container">
            <div className="about-text">
              <p>
                Welcome! I’m <strong>Sachin Poudel</strong>. I’m passionate about using data science and AI to understand and explore materials engineering through computational multi-physics research.
              </p>
              <p>
                As a PhD candidate, I focus on designing advanced materials using computational tools. My thesis, <em>Scale-Bridging Computational and Data-Driven Design of Microstructures in Multicomponent Alloys for Advanced Functional Materials</em>, aims to design and discovery of new materials by simulating how their tiny structures behave and evolve.
              </p>
              <p>
                My PhD work is part of a project funded by{' '}
                <a
                  href="https://projekty.ncn.gov.pl/en/index.php?projekt_id=526876"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>National Science Centre</strong>
                </a>
                , where I develop computational toolsframework to design materials with multi-physics interactions at atomistic and microscopic scales, with a focus on functional materials.
              </p>
            </div>
          </div>
        </section>

        <div className="research-button-container">
          <Link to="/research" className="button primary hero-button">
            Explore Research
          </Link>
        </div>

        <section className="collaboration-section">
          <h2 className="section-title">Let’s Collaborate!</h2>
          <p>I’m always excited to collaborate on projects that push the boundaries of materials science. If you have an idea or a project in mind, let’s chat!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required aria-label="Your Message"></textarea>
            </div>
            <button
              type="submit"
              className="button primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>

        {/* <section className="cta-buttons">
          <Link to="/contact" className="button primary cta-button">
            Collaborate With Me
          </Link>
          <Link to="/resume" className="button cta-button">
            Download Resume
          </Link>
        </section> */}

        <footer className="footer">
          <p>Connect with me:</p>
          <div className="social-icons">
            <a href="https://github.com/sachinscnpdl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sachin-poudel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>© 2025 Sachin Poudel. All rights reserved.</p>
        </footer>
      </article>
    </Main>
  );
};

export default Index;