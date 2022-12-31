import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./landingPage/landingPage";
import GamePage from "./gamePage/gamePage";
import "./App.css";



function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
        <button className="App-link" onClick={() => navigate("/game")}>
          Start New Game
        </button>
      </header>
    </div>
  );
}

export default App;
