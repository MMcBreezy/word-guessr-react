import React, { useState } from 'react';
import LandingPage from './landingPage';
import MainPage from './main'
import './App.css';

function App() {
  const [page, setPage] = useState("LandingPage")

  return (
    <div className="App">
      <header className="App-header">
          {page === "LandingPage" && <LandingPage />}
          {page === "MainPage" && <MainPage />}
          <button
            className="App-link"
            onClick={() => setPage("MainPage")}
            >
            Start New Game
            </button>
      </header>
    </div>
);
}

export default App;
