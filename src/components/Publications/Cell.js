import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const getShareLinks = (title, url, researchGateLink) => {
  const encodedTitle = encodeURIComponent(title);
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeURIComponent(url)}`,
    googleScholar: `https://scholar.google.com/scholar?q=${encodedTitle}`,
    researchgate: researchGateLink,
  };
};

const PublicationCell = ({ data, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const shareUrl = data.link || (data.doi ? `https://doi.org/${data.doi}` : window.location.href);
  const shareLinks = getShareLinks(data.title, shareUrl, data.researchGateLink);

  const highlightAuthor = (authorsString, authorToHighlight) => {
    const escapedAuthor = authorToHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedAuthor})`, 'gi');
    return authorsString.replace(regex, '<span class="highlight-author">$1</span>');
  };

  const imageSrc = data.image ? `${process.env.PUBLIC_URL}${data.image}` : null;

  return (
    <div className="cell-container publication-cell">
      <article className={`mini-post ${isOpen ? 'is-open' : ''}`}>
        <header
          onClick={toggleOpen}
          onKeyDown={(event) => {
            if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
              event.preventDefault();
              toggleOpen();
            }
          }}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
        >
          <div className="left-panel">
            <h3>
              {number != null && (
                <span className="publication-number">[{number}]</span>
              )}
              {data.link ? (
                <a
                  href={data.link}
                  onClick={(event) => event.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href={data.journalHomepage}
                  onClick={(event) => event.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-conf-link"
                >
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
                {dayjs(data.date).format('MMMM YYYY')}
              </time>
              <button
                aria-label={`${isOpen ? 'Close' : 'Open'} details for ${data.title}`}
                className="dropdown-arrow"
                type="button"
              >
                {isOpen ? 'Close' : 'Details'}
              </button>
            </div>
          </div>
        </header>

        {isOpen && (
          <div className="dropdown-content">
            <div className="image-description-container">
              {imageSrc && (
                <figure className="publication-figure">
                  <a href={data.link || shareUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageSrc} alt={data.title} />
                  </a>
                </figure>
              )}
              <div className="publication-summary">
                <p>{data.desc}</p>
                {data.doi && <p className="doi">DOI: {data.doi}</p>}
              </div>
            </div>

            <div className="social-share-links">
              <span>Explore</span>
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
              {shareLinks.twitter && (
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                  Share
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
  number: PropTypes.number,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.string,
    journal: PropTypes.string,
    conference: PropTypes.string,
    journalHomepage: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    doi: PropTypes.string,
    researchGateLink: PropTypes.string,
  }).isRequired,
};

PublicationCell.defaultProps = {
  number: null,
};

export default PublicationCell;
