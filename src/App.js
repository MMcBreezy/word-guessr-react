import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GamePage from "./pages/gamePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
