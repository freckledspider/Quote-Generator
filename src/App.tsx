import React from 'react';
import './App.css';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <Quote text="Quote 1" author="Author 1" />
      </header>
    </div>
  );
}

export default App;