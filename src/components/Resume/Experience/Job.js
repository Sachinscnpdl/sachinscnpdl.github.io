import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="job-container">
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">
          <a href={url} className="link">{name}</a> - {position}
        </h3>
        <span className="daterange">
          {dayjs(startDate).format('MMMM YYYY')} -{' '}
          {endDate ? dayjs(endDate).format('MMMM YYYY') : 'Present'}
        </span>
      </div>
      {(summary || highlights) && (
        <div className="job-details">
          {summary && (
            <Markdown
              options={{
                overrides: {
                  p: {
                    props: {
                      className: 'summary',
                    },
                  },
                },
              }}
            >
              {summary}
            </Markdown>
          )}
          {highlights && (
            <ul className="highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;