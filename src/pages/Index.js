import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import profile from '../data/profile';

const { PUBLIC_URL } = process.env;

const Index = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const phrase = profile.heroPhrases[currentPhraseIndex];
    let i = 0;
    const interval = setInterval(() => {
      if (i < phrase.length) {
        setCurrentText(phrase.slice(0, i + 1));
        i += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % profile.heroPhrases.length);
          setCurrentText('');
        }, 2200);
      }
    }, 75);
    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  return (
    <Main
      title="Materials Researcher"
      description="Sachin Poudel researches multicomponent alloys, piezoelectric materials, phase-field modeling, materials informatics, and battery interfaces."
    >
      <article className="post home-page" id="index">
        <section className="home-hero" style={{ backgroundImage: `url('${PUBLIC_URL}/images/hero-bg.png')` }}>
          <div className="home-hero__overlay" />
          <div className="home-hero__inner">
            <div className="home-hero__text">
              <p className="home-hero__eyebrow">{profile.title}</p>
              <h1>{profile.name}</h1>
              <p className="home-hero__subtitle">
                Scale-bridging materials design with multiscale modeling, materials informatics,
                and microstructure-aware functional materials research
              </p>
              <div className="home-hero__focus" aria-label="Research focus">
                <span>Multicomponent alloys</span>
                <span>Crystal-symmetry-guided materials</span>
                <span>Piezoelectric tensors</span>
                <span>Battery interfaces</span>
              </div>
              <p className="home-hero__typing" aria-live="polite">{currentText}</p>
            </div>
          </div>
        </section>
        <section className="home-collab" aria-label="Collaboration">
          <div className="home-collab__card">
            <div className="home-collab__copy">
              <p className="home-collab__eyebrow">Research Contact</p>
              <h2>Let&apos;s Collaborate</h2>
            </div>
            <div className="home-collab__actions">
              <Link to="/contact" className="button primary">Start a Conversation</Link>
              <a
                href={profile.googleScholar}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Index;
