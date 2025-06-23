import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getShareLinks = (title, link) => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(link || window.location.href)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link || window.location.href)}`,
});

const Cell = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const toggle = () => setOpen(!open);

  const shareUrl = data.link || window.location.href;
  const share = getShareLinks(data.title, data.link);
  const pdfSrc = data.link ? `${process.env.PUBLIC_URL}/presentations/${data.link.split('/').pop()}` : null;

  // Prevent toggling when clicking links
  const stopToggle = (e) => e.stopPropagation();

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="cell-container presentation-cell"
      role="region"
      aria-label={`Presentation: ${data.title}`}
      style={{ 
        marginBottom: '1.5rem',
        padding: '0.5rem', // Added padding for mobile
      }}
    >
      <article
        className={`mini-post ${open ? 'open' : ''}`}
        onClick={toggle}
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '0',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <header
          className="presentation-header"
          style={{
            padding: '0.5rem', // Reduced padding for mobile
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: open ? '#eef2ff' : '#f9f9f9',
            transition: 'background-color 0.3s ease',
            flexWrap: 'wrap', // Allow wrapping for mobile
          }}
        >
          <div 
            className="left-panel" 
            style={{ 
              flex: '1', 
              minWidth: 0, 
              maxWidth: '90%', // Limit width to prevent overflow
            }}
          >
            <h3
              className="presentation-title"
              style={{
                margin: 0,
                fontSize: '1.2rem', // Slightly smaller for mobile
                color: '#333',
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal', // Allow wrapping
                lineHeight: '1.4', // Improve readability
                maxHeight: '3.6rem', // Limit to 2 lines
              }}
            >
              {data.link ? (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopToggle}
                  style={{ textDecoration: 'none', color: '#333' }}
                  aria-label={`${data.title} (external link)`}
                >
                  {data.title} <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : (
                <span>{data.title}</span>
              )}
            </h3>
            <p
              style={{
                margin: '0.5rem 0',
                color: '#666',
                fontSize: '0.85rem', // Adjusted for mobile
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal', // Allow wrapping
              }}
            >
              {data.conference}
            </p>
            {data.authors && (
              <p
                style={{
                  margin: '0.3rem 0',
                  color: '#555',
                  fontSize: '0.8rem', // Adjusted for mobile
                  fontStyle: 'italic',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal', // Allow wrapping
                }}
              >
                {data.authors}
              </p>
            )}
          </div>
          <div 
            className="right-panel" 
            style={{ 
              textAlign: 'right', 
              minWidth: 'fit-content',
              marginTop: '0.15rem', // Space for wrapping on mobile
            }}
          >
            <time
              style={{ 
                display: 'block', 
                color: '#999', 
                fontSize: '0.9rem', // Smaller for mobile
              }}
              dateTime={data.date}
            >
              {dayjs(data.date).format('MMM D, YYYY')}
            </time>
            <span
              style={{
                fontSize: '1.5rem', // Smaller arrow for mobile
                color: '#555',
                transition: 'transform 0.3s ease',
                display: 'inline-block',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              {open ? '▲' : '▼'}
            </span>
          </div>
        </header>

        {open && (
          <div
            className="dropdown-content"
            style={{
              padding: '1rem', // Reduced padding
              backgroundColor: '#eef2ff',
              borderTop: '2px solid #5c6ac4',
              borderBottom: '2px solid #5c6ac4',
              animation: 'fadeIn 0.3s ease',
            }}
            onClick={stopToggle}
          >
            <div
              className="presentation-description-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem', // Reduced gap
              }}
            >
              <div
                className="presentation-content"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {pdfSrc && (
                  <iframe
                    src={pdfSrc}
                    title={data.title}
                    style={{
                      width: '100%',
                      height: '400px', // Reduced height for mobile
                      border: 'none',
                      borderRadius: '6px',
                    }}
                    frameBorder="0"
                  />
                )}
              </div>
              <div
                className="presentation-details"
                style={{
                  lineHeight: '1.6',
                  marginTop: '0',
                  color: '#333',
                  maxWidth: '100%', // Full width on mobile
                  textAlign: 'justify',
                  fontSize: '0.9rem', // Smaller text
                }}
              >
                <p><strong>Type:</strong> {data.type}</p>
                {data.description && <p><strong>Description:</strong> {data.description}</p>}
              </div>
            </div>

            <div
              className="share-links"
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem', // Reduced gap
                minWidth: 'auto', // Adjusted for mobile
                flexWrap: 'wrap',
                visibility: 'visible',
                opacity: 1,
                padding: '8px',
                backgroundColor: '#EEF1FC',
              }}
            >
              <strong style={{ marginRight: '0.5rem', color: '#555', fontSize: '0.9rem' }}>
                Share:
              </strong>
              <a
                href={share.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#1DA1F2' }}
                aria-label={`Share ${data.title} on Twitter`}
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href={share.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077B5' }}
                aria-label={`Share ${data.title} on LinkedIn`}
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <button
                onClick={copyLink}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#444' }}
                aria-label={`Copy ${data.title} link to clipboard`}
              >
                <FontAwesomeIcon icon={copied ? faCheck : faLink} size="lg" />
              </button>
            </div>

            {data.link && (
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#444', 
                    textDecoration: 'underline', 
                    fontSize: '0.9rem' // Smaller for mobile
                  }}
                  aria-label={`${data.title} PDF (external link)`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> View Original PDF
                </a>
              </div>
            )}
          </div>
        )}
      </article>

      {/* Media Queries for Additional Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .presentation-cell {
            padding: 0.5rem;
          }
          .presentation-header {
            padding: 0.8rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .left-panel {
            max-width: 100%;
          }
          .right-panel {
            margin-top: 0.5rem;
            align-self: flex-end;
          }
          .presentation-title {
            font-size: 1.1rem;
            max-height: none; /* Allow more lines on mobile if needed */
          }
          .dropdown-content {
            padding: 0.8rem;
          }
          .presentation-content iframe {
            height: 300px; /* Further reduced for smaller screens */
          }
          .share-links {
            gap: 0.8rem;
            padding: 0.5rem;
          }
        }
        @media (max-width: 480px) {
          .presentation-title {
            font-size: 1rem;
          }
          .presentation-content iframe {
            height: 250px; /* Even smaller for very small screens */
          }
          .presentation-details {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    date: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    authors: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Cell;