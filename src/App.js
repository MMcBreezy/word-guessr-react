import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import GamePage from "./pages/gamePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
