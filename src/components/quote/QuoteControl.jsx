import React from 'react';
import PropTypes from 'prop-types';

const LoadQuoteButton = ({ onClick }) => (
  <button onClick={onClick} aria-label="Load Quote">
    Load Quote
  </button>
);

LoadQuoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadQuoteButton;
