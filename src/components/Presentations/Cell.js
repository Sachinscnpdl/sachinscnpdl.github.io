import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getShareLinks = (title, id) => {
  // Base URL for your GitHub Pages site
  const baseUrl = 'https://sachinscnpdl.github.io/presentations';
  const shareUrl = `${baseUrl}?id=${id}&open=true`;
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };
};

const Cell = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate a unique ID: use data.id if available, else create from title
  const presentationId = data.id || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // Check URL for id and open parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const shouldOpen = params.get('open') === 'true';

    // Debugging logs to inspect values
    console.log('Presentation ID:', presentationId);
    console.log('URL ID:', id);
    console.log('Should Open:', shouldOpen);

    if (id && id === presentationId && shouldOpen) {
      console.log(`Opening dropdown for presentation: ${presentationId}`);
      setOpen(true);
      // Scroll to the presentation after a slight delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById(`presentation-${presentationId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`Scrolled to presentation-${presentationId}`);
        } else {
          console.warn(`Element presentation-${presentationId} not found`);
        }
      }, 100);
    }
  }, [presentationId]);

  const toggle = () => {
    setOpen(!open);
    console.log('Toggled dropdown:', !open);
  };

  // Share URL for your website with query parameters
  const shareUrl = `https://sachinscnpdl.github.io/presentations?id=${presentationId}&open=true`;
  const share = getShareLinks(data.title, presentationId);
  const pdfSrc = data.link ? `${process.env.PUBLIC_URL}${data.link}` : null;

  // Prevent toggling when clicking links
  const stopToggle = (e) => {
    e.stopPropagation();
    console.log('Stopped toggle propagation');
  };

  // Copy link to clipboard
  const copyLink = () => {
    console.log('Copying link:', shareUrl);
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      id={`presentation-${presentationId}`}
      className="cell-container presentation-cell"
      role="region"
      aria-label={`Presentation: ${data.title}`}
      style={{
        marginBottom: '1.5rem',
        padding: '0.5rem',
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
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: open ? '#eef2ff' : '#f9f9f9',
            transition: 'background-color 0.3s ease',
            flexWrap: 'wrap',
          }}
        >
          <div className="left-panel" style={{ flex: '1', minWidth: 0, maxWidth: '90%' }}>
            <h3
              className="presentation-title"
              style={{
                margin: 0,
                fontSize: '1.2rem',
                color: '#333',
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
                lineHeight: '1.4',
                maxHeight: '3.6rem',
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
                fontSize: '0.85rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
              }}
            >
              {data.conference}
            </p>
            {data.authors && (
              <p
                style={{
                  margin: '0.3rem 0',
                  color: '#555',
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                }}
              >
                {data.authors}
              </p>
            )}
          </div>
          <div className="right-panel" style={{ textAlign: 'right', minWidth: 'fit-content', marginTop: '0.15rem' }}>
            <time style={{ display: 'block', color: '#999', fontSize: '0.9rem' }} dateTime={data.date}>
              {dayjs(data.date).format('MMM D, YYYY')}
            </time>
            <span
              style={{
                fontSize: '1.5rem',
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
              padding: '1rem',
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
                gap: '1rem',
              }}
            >
              <div className="presentation-content" style={{ maxWidth: '80%', width: '100%', position: 'relative' }}>
                {pdfSrc && (
                  <iframe
                    src={pdfSrc}
                    title={data.title}
                    style={{
                      width: '100%',
                      height: '800px',
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
                  maxWidth: '100%',
                  textAlign: 'justify',
                  fontSize: '0.9rem',
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
                gap: '1rem',
                minWidth: 'auto',
                flexWrap: 'wrap',
                visibility: 'visible',
                opacity: 1,
                padding: '8px',
                backgroundColor: '#EEF1FC',
              }}
            >
              <strong style={{ marginRight: '0.5rem', color: '#555', fontSize: '0.9rem' }}>Share:</strong>
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
                  style={{ color: '#444', textDecoration: 'underline', fontSize: '0.9rem' }}
                  aria-label={`${data.title} PDF (external link)`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> View Original PDF
                </a>
              </div>
            )}
          </div>
        )}
      </article>

      <style jsx>{`
        @media (max-width: 768px) {
          .presentation-cell {
            padding: 0.5rem;
          }
          .presentation-header {
            padding: 0.8rem;
            flex-direction: column;
            alignItems: flex-start;
          }
          .left-panel {
            maxWidth: 100%;
          }
          .right-panel {
            margin-top: 0.5rem;
            align-self: flex-end;
          }
          .presentation-title {
            font-size: 1.1rem;
            max-height: none;
          }
          .dropdown-content {
            padding: 0.8rem;
          }
          .presentation-content iframe {
            height: 300px;
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
            height: 250px;
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
    id: PropTypes.string, // Optional
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    date: PropTypes.string,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    authors: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string, // Optional
  }).isRequired,
};

export default Cell;