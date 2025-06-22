import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faSpinner, faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getShareLinks = (title, link) => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(link || window.location.href)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link || window.location.href)}`,
});

const ProjectCell = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const toggle = () => setOpen(!open);

  const shareUrl = data.link || window.location.href;
  const share = getShareLinks(data.title, data.link);
  const imgSrc = data.image
    ? `${process.env.PUBLIC_URL}${data.image}`
    : `${process.env.PUBLIC_URL}/images/projects/placeholder.jpg`;

  // Prevent toggling when clicking links
  const stopToggle = (e) => e.stopPropagation();

  // Handle image load and error
  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `${process.env.PUBLIC_URL}/images/projects/placeholder.jpg`;
    setImageLoaded(true);
  };

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="cell-container project-cell"
      role="region"
      aria-label={`Project: ${data.title}`}
      style={{ marginBottom: '1.5rem' }}
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
          className="project-header"
          style={{
            padding: '1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: open ? '#eef2ff' : '#f9f9f9',
            transition: 'background-color 0.3s ease',
          }}
        >
          <div className="left-panel" style={{ flex: '1', minWidth: 0 }}>
            <h3
              className="project-title"
              style={{
                margin: 0,
                fontSize: '1.3rem',
                color: '#333',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {data.link ? (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopToggle}
                  style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}
                  aria-label={`${data.title} (external link)`}
                >
                  {data.title} <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : (
                <span style={{ fontWeight: 600 }}>{data.title}</span>
              )}
            </h3>
            <p
              style={{
                margin: '0.6rem 0',
                color: '#666',
                fontSize: '0.9rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {data.subtitle}
            </p>
          </div>
          <div className="right-panel" style={{ textAlign: 'right', minWidth: 'fit-content' }}>

            <span
              style={{
                fontSize: '1.8rem',
                color: '#555',
                transition: 'transform 0.3s ease',
                display: 'inline-block',
              }}
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {open ? '▲' : '▼'}
            </span>
          </div>
        </header>

        {open && (
          <div
            className="dropdown-content"
            style={{
              padding: '1.5rem',
              backgroundColor: '#eef2ff',
              borderTop: '2px solid #5c6ac4',
              borderBottom: '2px solid #5c6ac4',
              animation: 'fadeIn 0.3s ease',
            }}
            onClick={stopToggle}
          >
            <div
              className="image-description-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <div
                className="project-image"
                style={{
                  maxWidth: '70%',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {!imageLoaded && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#5c6ac4',
                    }}
                  >
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </div>
                )}
                <img
                  src={imgSrc}
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '6px',
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
              <div
                className="project-description"
                style={{
                  lineHeight: '1.6',
                  marginTop: '0',
                  color: '#333',
                  maxWidth: '1000px',
                  textAlign: 'justify',
                }}
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              {data.impact && (
                <p
                  style={{
                    margin: '1rem 0',
                    color: '#444',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    backgroundColor: '#f0f4ff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                  }}
                >
                  <strong>Impact:</strong> {data.impact}
                </p>
              )}
              {data.tools && data.tools.length > 0 && (
                <p
                  style={{
                    margin: '0.5rem 0',
                    color: '#555',
                    fontSize: '1.29rem',
                  }}
                >
                  <strong>Tools:</strong> {data.tools.join(', ')}
                </p>
              )}
            </div>

            {data.publications && data.publications.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Related Publications</h4>
                <ul style={{ paddingLeft: '1.5em', margin: 0 }}>
                  {data.publications.map((pub) => (
                    <li key={pub.link} style={{ marginBottom: '0.4em' }}>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#5c6ac4', textDecoration: 'underline' }}
                        aria-label={`${pub.label} (external link)`}
                      >
                        {pub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className="share-links"
              style={{
                marginTop: '1.5rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                minWidth: '300px',
                flexWrap: 'wrap',
                visibility: 'visible',
                opacity: 1,
                padding: '10px',
                backgroundColor: '#EEF1FC',
              }}
            >
              <strong style={{ marginRight: '0.5em', color: '#555' }}>Share:</strong>
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
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#444', textDecoration: 'underline' }}
                  aria-label={`${data.title} details (external link)`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Details
                </a>
              )}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

ProjectCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string,
    impact: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
    publications: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, link: PropTypes.string })
    ),
  }).isRequired,
};

export default ProjectCell;