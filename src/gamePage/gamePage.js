import { React, useEffect, useState } from "react";
import LogoSpin from "../logoSpin/logoSpin";
import "./gamePage.css";
import GuessrForm from "../guessrForm/guessrForm";

function GamePage() {
  const [gameState, setGameState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    setLoading(true);
    fetch("http://localhost:3001/game", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setGameState(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          {loading ? (
            <LogoSpin /> /*"loading..."*/
          ) : (
            <GuessrForm maxLength="1" data={gameState} />
          )}
        </div>
      </header>
    </div>
  );
}

export default GamePage;