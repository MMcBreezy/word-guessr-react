import React from 'react';
import LogoSpin from './logoSpin.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoSpin />
        <div className="title">
          Word Guessr!
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Game
        </a>
      </header>
    </div>
  );
}

export default App;
