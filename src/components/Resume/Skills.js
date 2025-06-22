import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const Skills = ({ skills, categories }) => {
  const initialButtons = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChildClick = (label) => {
    const newButtons = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {},
    );
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    const actCat = Object.keys(buttons).reduce(
      (cat, key) => (buttons[key] ? key : cat),
      'All',
    );

    const comparator = (a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    const filteredSkills = skills
      .sort(comparator)
      .filter((skill) => actCat === 'All' || skill.category.includes(actCat));

    const third = Math.ceil(filteredSkills.length / 3);
    return [
      filteredSkills.slice(0, third),
      filteredSkills.slice(third, third * 2),
      filteredSkills.slice(third * 2),
    ];
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in' }}>
        <h3 style={{ color: '#007bff', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.5rem' }}>My Expertise Unleashed</h3>
        <p style={{ color: '#666', fontStyle: 'italic', textAlign: 'center', fontSize: '1.1rem' }}>
          *A playful take on my skills—real mastery happens in the lab and code! Explore my strengths below.
        </p>
      </div>
      <div className="skill-button-container" style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        {getButtons()}
      </div>
      <div className="skill-row-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
        <div>
          {getRows()[0].map((skill) => (
            <div key={skill.title} className="skill-card">
              <SkillBar categories={categories} data={skill} />
            </div>
          ))}
        </div>
        <div>
          {getRows()[1].map((skill) => (
            <div key={skill.title} className="skill-card">
              <SkillBar categories={categories} data={skill} />
            </div>
          ))}
        </div>
        <div>
          {getRows()[2].map((skill) => (
            <div key={skill.title} className="skill-card">
              <SkillBar categories={categories} data={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;