import React from 'react';
import PropTypes from 'prop-types';

const QuoteDisplay = ({ quote, image, character }) => (
  <figure>
    <img src={image} alt={character} />
    <figcapation>
      {quote} -By: {character}
    </figcapation>
  </figure>
);

QuoteDisplay.PropTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default QuoteDisplay;

