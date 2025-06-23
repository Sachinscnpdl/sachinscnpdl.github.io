import React from 'react';

const StatCard = ({ label, value, icon, link, format }) => {
  const displayValue = format ? format(value) : value;
  const content = link ? (
    <a href={link} className="value">{displayValue}</a>
  ) : (
    <p className="value">{displayValue}</p>
  );

  return (
    <div className="stat-card">
      <i className={`fa fa-${icon}`}></i>
      <p className="label">{label}</p>
      {content}
    </div>
  );
};

export default StatCard;