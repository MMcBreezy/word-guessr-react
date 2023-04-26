import { React, useEffect, useState } from "react";
import LogoSpin from "../logoSpin/logoSpin";
import "./gamePage.css";
import GuessrForm from "../guessrForm/guessrForm";
import { newGame } from "../helpers/apiHelper";

function GamePage() {
  const [gameState, setGameState] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    const handleData = (data) => {
      setGameState(data);
      setLoading(false);
    }

    newGame(handleData);
  }, []);

  return (
    <div className="wrapper">
      {loading ? (
        <LogoSpin /> /*"loading..."*/
      ) : (
        <GuessrForm maxLength="1" data={gameState} />
      )}
    </div>
  );
}

export default GamePage;
