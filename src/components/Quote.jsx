import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://wf-backend.onrender.com/quotes/random');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  useEffect(() => {
    
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <blockquote>{quote}</blockquote>
      <button onClick={fetchQuote}>Get Another</button>
    </div>
  );
};

export default RandomQuote;
