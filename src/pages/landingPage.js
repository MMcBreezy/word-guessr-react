import React from "react";
import { useNavigate } from "react-router-dom";
import LogoSpin from "../components/logoSpin";
import "../App.css";
import "./styles.scss";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPageWrapper">
      <LogoSpin />
      <div className="title">Word Guessr</div>
      <input
        type="submit"
        className="App-link start-game-button"
        value="START"
        onClick={() => navigate("/game")}
      ></input>
    </div>
  );
}

export default LandingPage;
