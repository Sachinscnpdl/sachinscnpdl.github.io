import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;
  const [isHovered, setIsHovered] = useState(false);

  // --- Color Logic Refinement ---
  const matchingCategoryColors = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color);

  // Use the first category color as the primary for the gradient start
  const primaryCategoryColor = matchingCategoryColors.length > 0
    ? matchingCategoryColors[0]
    : '#ccc'; // Fallback to gray

  const getExpertiseColor = (comp) => {
    // Adjust hue, saturation, and lightness for a pleasant gradient end color
    const hue = 240 - (comp * 40); // Shifts from blue (240) towards orange/red (0)
    const saturation = 85 + (comp * 2); // Slightly higher saturation
    const lightness = 45 + (comp * 5); // Brighter as competency increases
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const expertiseEndColor = getExpertiseColor(competency);

  // --- Layout & Style Calculations ---

  const pulseAnimation = competency >= 4 ? 'pulse 1.5s infinite' : 'none';

  // Define the maximum visual length for the bar. This also influences the max width of the skill card.
  const MAX_VISUAL_BAR_LENGTH = 250; // Adjust this value to control the overall length of the bars

  // Styles for the main skill card container
  const skillCardStyle = { // Renamed from skillBoxStyle for clarity
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
    alignItems: 'flex-start', // Left-align all children (text row and bar container)
    marginBottom: '1rem', // Space between skill cards
    width: '100%', // Allows the card to take full width in its grid/column
    // Calculate maxWidth based on the bar length plus percentage text width and internal padding/margins
    maxWidth: `${MAX_VISUAL_BAR_LENGTH + 70 + (2 * 16)}px`, // Bar Max + Percent MinWidth + (2 * Padding)
    boxSizing: 'border-box',
    padding: '16px', // Internal padding for the entire card
    background: '#fff', // Clean white background for the card
    borderRadius: '12px', // Softer, more modern corners
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)', // More pronounced but soft shadow
    transition: 'transform 0.2s ease-in-out', // Added hover transition for the card
    cursor: 'default', // Indicate it's not clickable by default
    ':hover': {
      transform: 'translateY(-3px)', // Slight lift on hover for the card
    },
  };

  // Styles for the row containing title and percentage
  const skillInfoRowStyle = {
    display: 'flex',
    width: '100%', // Ensure text row spans full width within the card
    justifyContent: 'space-between', // Push title left, percentage right
    alignItems: 'center',
    marginBottom: '12px', // Space between text row and bar
  };

  const titleStyle = {
    background: 'transparent', // **KEY CHANGE:** Make title background transparent
    color: '#333', // Darker text color for better contrast on white background
    fontWeight: '700',
    fontSize: '1rem', // Slightly larger font for titles
    whiteSpace: 'nowrap', // Prevent text from wrapping
    overflow: 'hidden',
    textOverflow: 'ellipsis', // Add ellipsis (...) for long titles
    flexGrow: 1, // Allow title to take available space
    flexShrink: 1, // Allow title to shrink (and show ellipsis)
    textAlign: 'left',
    paddingRight: '10px', // Small padding to separate from percentage if title is long
  };

  const percentTextStyle = {
    minWidth: '60px', // Slightly smaller min-width for percentage
    padding: '4px 8px', // Adjusted padding
    background: '#f0f0f0', // Light gray background for percentage display
    borderRadius: '6px', // Rounded corners for the percentage box
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)', // Softer shadow for percentage
    color: '#555', // Slightly softer text color
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '0.85rem', // Slightly smaller font for percentage
    flexShrink: 0,
    flexGrow: 0,
  };

  const barContainerStyle = {
    width: `${MAX_VISUAL_BAR_LENGTH}px`, // Fixed width for the bar container (the 100% reference)
    height: '16px', // Slightly thinner bar for elegance
    background: '#e0e0e0', // Light gray background for the empty part of the bar (the "track")
    borderRadius: '8px', // Rounded corners for the bar track
    overflow: 'hidden', // Crucial to clip the inner bar
    flexShrink: 0,
    flexGrow: 0,
    position: 'relative',
    animation: pulseAnimation,
  };

  const barStyle = {
    background: `linear-gradient(90deg, ${primaryCategoryColor}, ${expertiseEndColor})`, // Single, continuous gradient
    width: `${(competency / 5) * 100}%`, // Length based on expertise
    height: '100%', // Fill the container's height
    transition: 'width 0.5s ease-in-out', // Only width transitions for smoothness
    borderRadius: '8px', // Match container for full fill
    minWidth: '0px',
    // Removed scaleY transform here; it's better on the overall card or for a more subtle effect.
  };

  return (
    <div
      className="skill-card" // Class name for better semantics
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={skillCardStyle}
    >
      <div className="skill-info-row" style={skillInfoRowStyle}>
        <div className="skill-title" style={titleStyle}> {/* Class name for clarity */}
          <span>{title}</span>
        </div>
        <div className="skill-percent" style={percentTextStyle}> {/* Class name for clarity */}
          {isHovered ? `${Math.round((competency / 5) * 100)}%` : `${competency} / 5`}
        </div>
      </div>
      <div className="skill-bar-container" style={barContainerStyle}>
        <div className="skill-bar" style={barStyle} /> {/* Class name for clarity */}
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;