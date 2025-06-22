// src/components/Publications/PublicationCell.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// Helper function to generate social share links
const getShareLinks = (title, url, researchGateLink) => {
  const encodedTitle = encodeURIComponent(title);
  // No need for encodedQuery if only using title for Google Scholar search
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeURIComponent(url)}`,
    googleScholar: `https://scholar.google.com/scholar?q=${encodedTitle}`, // Using encodedTitle for search query
    researchgate: researchGateLink, // Use direct link if provided
  };
};

const PublicationCell = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const shareUrl = data.link || (data.doi ? `https://doi.org/${data.doi}` : window.location.href);
  const shareLinks = getShareLinks(data.title, shareUrl, data.researchGateLink);

  // Function to highlight the author
  const highlightAuthor = (authorsString, authorToHighlight) => {
    const escapedAuthor = authorToHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedAuthor})`, 'gi');
    return authorsString.replace(regex, '<span class="highlight-author">$1</span>');
  };

  // Fallback image if data.image is not provided
  const imageSrc = data.image ? `${process.env.PUBLIC_URL}${data.image}` : `${process.env.PUBLIC_URL}/placeholder.jpg`;

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header onClick={toggleOpen} style={{ cursor: 'pointer' }}>
          <div className="left-panel">
            <h3>
              {data.link ? (
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  {data.title}
                </a>
              ) : (
                data.title
              )}
            </h3>
            {data.authors && (
              <p
                className="authors"
                dangerouslySetInnerHTML={{ __html: highlightAuthor(data.authors, 'Poudel, Sachin') }}
              />
            )}
          </div>

          <div className="right-panel">
            {(data.journal || data.conference) && (
              data.journalHomepage ? (
                <a href={data.journalHomepage} target="_blank" rel="noopener noreferrer" className="journal-conf-link">
                  <p className="journal-conf">
                    {data.journal || data.conference}
                  </p>
                </a>
              ) : (
                <p className="journal-conf">
                  {data.journal || data.conference}
                </p>
              )
            )}
            <div className="date-arrow-row">
              <time className="published">
                {dayjs(data.date).format('MMMM, YYYY')} {/* Restored YYYY for clarity, adjust if 'MMMM' only is desired */}
              </time>
              <span className="dropdown-arrow">
                {isOpen ? '▲' : '▼'}
              </span>
            </div>
          </div>
        </header>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="dropdown-content">
            {/* THIS CONTAINER HOLDS IMAGE (TOP) AND DESCRIPTION (BOTTOM) */}
            {/* The CSS for this container should make its children stack vertically if not already */}
            <div className="image-description-container">
              <div className="image">
                <a href={data.link || shareUrl} target="_blank" rel="noopener noreferrer">
                  <img src={imageSrc} alt={data.title} />
                </a>
              </div>
              <div className="description">
                <p>{data.desc}</p>
              </div>
            </div> {/* END .image-description-container */}

            {/* Social Media Share Links - These will now appear consistently BELOW the image and description */}
            <div className="social-share-links">
              <span>News and Social Media: </span>
              {shareLinks.researchgate && (
                <a href={shareLinks.researchgate} target="_blank" rel="noopener noreferrer" className="social-icon researchgate">
                  ResearchGate
                </a>
              )}
              {shareLinks.googleScholar && (
                <a href={shareLinks.googleScholar} target="_blank" rel="noopener noreferrer" className="social-icon google-scholar">
                  Google Scholar
                </a>
              )}
              {/* Removed LinkedIn and Facebook share links as they were not in your provided code */}
              {shareLinks.twitter && (
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                  Twitter
                </a>
              )}
              {data.link && (
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="social-icon paper-link">
                  Paper Link
                </a>
              )}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

PublicationCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string,
    journal: PropTypes.string,
    conference: PropTypes.string,
    journalHomepage: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string, // image is now optional due to fallback
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    doi: PropTypes.string,
    researchGateLink: PropTypes.string,
    // Removed specific array propTypes for facebookShareLinks and linkedinShareLinks
  }).isRequired,
};

export default PublicationCell;