import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <div className="degree-card">
      <div className="degree-header">
        <div className="degree-title-group">
          <h3 className="degree-text">{data.degree}</h3>
          <p className="school">
            <a href={data.link} className="link">{data.school}</a>
          </p>
        </div>
        <span className="year">{data.year}</span>
      </div>
      <div className="degree-details">
        {data.thesis && (
          <p className="thesis">{data.thesis}</p>
        )}
        {(data.highlights1 || data.highlights2) && (
          <ul className="degree-highlights">
            {data.highlights1 && <li>{data.highlights1}</li>}
            {data.highlights2 && <li>{data.highlights2}</li>}
          </ul>
        )}
      </div>
    </div>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    thesis: PropTypes.string,
    highlights1: PropTypes.string,
    highlights2: PropTypes.string,
  }).isRequired,
};

export default Degree;