import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryButton = ({ handleClick, active, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
      type="button"
      onClick={() => handleClick(label)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: '0 0.5rem',
        padding: '0.3rem 0.7rem',
        border: '1px solid #007bff',
        borderRadius: '15px',
        background: active[label] ? '#007bff' : 'transparent',
        color: active[label] ? '#fff' : '#007bff',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: isHovered || active[label] ? '0' : '100%',
          width: '100%',
          height: '2px',
          background: '#007bff',
          transition: 'left 0.3s ease',
        }}
      />
    </button>
  );
};

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default CategoryButton;