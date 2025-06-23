import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons flex flex-wrap justify-center gap-4">
    {data.map((s) => (
      <li key={s.label}>
        <a
          href={s.link}
          aria-label={s.label}
          className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={s.icon} size="lg" />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;