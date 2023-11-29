import React from 'react';

interface QuoteProps {
  text: string;
  author: string;
}

const Quote = ({ text, author }: QuoteProps) => (
  <div className="quote">
    <p>"{text}"</p>
    <p>- {author}</p>
  </div>
);

export default Quote;