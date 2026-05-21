import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StatCard = ({ label, value, icon, link, format }) => {
  const displayValue = format ? format(value) : value;

  let valueNode = <p className="value">{displayValue}</p>;
  if (link) {
    const isInternal = link.startsWith('/');
    valueNode = isInternal ? (
      <Link to={link} className="value">{displayValue}</Link>
    ) : (
      <a
        href={link}
        className="value"
        target="_blank"
        rel="noopener noreferrer"
      >
        {displayValue}
      </a>
    );
  }

  return (
    <div className="stat-card">
      {icon && <i className={`fa fa-${icon}`} aria-hidden="true" />}
      <p className="label">{label}</p>
      {valueNode}
    </div>
  );
};

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  format: PropTypes.func,
};

StatCard.defaultProps = {
  icon: null,
  link: null,
  format: null,
};

export default StatCard;
