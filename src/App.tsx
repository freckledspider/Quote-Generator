import React, { useState } from 'react';
import './App.css';
import { Quote, quotes } from './Quote';

function App() {
  
  // Manage state of current quote, null if no quote is generated

  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  // Generate a random quote from the list of quotes. It gives a random index number depending on how long the quotes array is. Then it uses that index number to get the quote from the array and set it as the current quote.

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setCurrentQuote(randomQuote);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
      </header>

      <div className="App-body">

        {/* Checks if currentQuote is truth and renders the quote in the Quote component. */}

        {currentQuote ? (

          // JSX syntax for rendering a random quote

          <Quote text={currentQuote.text} author={currentQuote.author} />
        ) : (

          // blank paragraph before a quote is generated
          <p></p>

        )}

        {/* onclick event */}

        <button onClick={handleRandomQuote}>Generate Random Quote</button>
        </div>
    </div>
  );
}

export default App;