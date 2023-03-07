import React from "react";
import { useLocation } from "react-router";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./landingPage/landingPage";
import GamePage from "./gamePage/gamePage";
import "./App.css";


function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <input
        type="submit"
        className="App-link"
        value="START"
        onClick={() => navigate("/game")}
      ></input>
      </header>
    </div>
  );
}

export default App;
