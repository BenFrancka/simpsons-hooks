import React, { useState } from 'react';
import LoadQuoteButton from '../../components/quote/QuoteControl';
import QuoteDisplay from '../../components/quote/QuoteDisplay';
import { fetchQuote } from '../../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <LoadQuoteButton onClick={handleClick} />
      {loading ? (
        <img
          // eslint-disable-next-line max-len
          src="https://giphy.com/gifs/thesimpsons-the-simpsons-3x14-xT5LMzIK1AdZJ4cYW4"
          alt="loading spinner"
        />
      ) : (
        quote && (
          <QuoteDisplay
            quoteText={quote.quote}
            image={quote.image}
            character={quote.character}
          />
        )
      )}
    </>
  );
};

export default SimpsonsQuote;

