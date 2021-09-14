import React from 'react';
import PropTypes from 'prop-types';

const QuoteDisplay = ({ quoteText, image, character }) => (
  <>
    <p>
      <img src={image} alt={character} />
    </p>
    <h2>
      {quoteText}
    </h2>
    <h3>
      {character}
    </h3>
  </>
);

QuoteDisplay.propTypes = {
  quoteText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default QuoteDisplay;
