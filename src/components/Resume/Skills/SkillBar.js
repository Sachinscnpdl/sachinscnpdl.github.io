import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;
  const primaryCategory = categories.find((cat) => category.includes(cat.name));
  const primaryColor = primaryCategory ? primaryCategory.color : '#40916c';

  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <h4>{title}</h4>
        <span>{competency} / 5</span>
      </div>
      <div className="skill-track" aria-hidden="true">
        <div
          className="skill-fill"
          style={{ backgroundColor: primaryColor, width: `${(competency / 5) * 100}%` }}
        />
      </div>
      <p>{category.join(' | ')}</p>
    </article>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
