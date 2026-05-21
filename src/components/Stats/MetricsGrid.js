import React from 'react';
import PropTypes from 'prop-types';

import StatCard from './StatCard';

const MetricsGrid = ({ metrics }) => (
  <section className="stats-metrics" aria-label="Key metrics">
    <div className="stats-metrics__grid">
      {metrics.map((metric) => (
        <StatCard
          key={metric.label}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          link={metric.link}
        />
      ))}
    </div>
  </section>
);

MetricsGrid.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    icon: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default MetricsGrid;
