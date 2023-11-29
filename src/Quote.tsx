import React, { FC } from 'react';

interface Quote {
    text: string;
    author: string;
  }
  
  const quotes: Quote[] = [
    { text: 'Quote 1', author: 'Author 1' },
  ];

const Quote: FC<Quote> = ({ text, author }) => (
  <div className="quote">
    <p>"{text}"</p>
    <p>- {author}</p>
  </div>
);

export default Quote;