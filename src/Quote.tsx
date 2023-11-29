import React, { FC } from 'react';

interface QuoteProps {
  text: string;
  author: string;
}

const Quote: FC<QuoteProps> = ({ text, author }) => (
  <div className="quote">
    <p>"{text}"</p>
    <p>- {author}</p>
  </div>
);

export default Quote;