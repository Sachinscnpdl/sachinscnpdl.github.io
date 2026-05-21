import React from 'react';
import PropTypes from 'prop-types';

import Table from './Table';

const StatsSection = ({ title, description, data, id }) => (
  <section className="stats-panel" id={id}>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    <Table data={data} />
  </section>
);

StatsSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    link: PropTypes.string,
    format: PropTypes.func,
  })).isRequired,
};

StatsSection.defaultProps = {
  id: null,
  description: null,
};

export default StatsSection;
