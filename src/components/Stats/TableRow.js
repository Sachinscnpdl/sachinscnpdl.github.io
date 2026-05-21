import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableRow = ({
  label, link, value, format,
}) => {
  const display = format ? format(value) : value;

  let valueCell = display;
  if (link) {
    const isInternal = link.startsWith('/');
    valueCell = isInternal ? (
      <Link to={link}>{display}</Link>
    ) : (
      <a href={link} target="_blank" rel="noopener noreferrer">{display}</a>
    );
  }

  return (
    <tr>
      <td>{label}</td>
      <td>{valueCell}</td>
    </tr>
  );
};

TableRow.propTypes = {
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
};

export default TableRow;
