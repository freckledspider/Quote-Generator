import React, { FC } from 'react';

export interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: 'Quote 1', author: 'Author 1' },
  { text: 'Quote 2', author: 'Author 2' }
];

const QuoteComponent: FC<Quote> = ({ text, author }) => (
  <div className="quote">
    <p>"{text}"</p>
    <p>- {author}</p>
  </div>
);

export { QuoteComponent as Quote, quotes };