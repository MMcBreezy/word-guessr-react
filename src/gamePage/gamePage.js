import { React, useEffect, useState } from "react";
import LogoSpin from "../logoSpin/logoSpin";
import "./gamePage.css";
import GuessrForm from "../guessrForm/guessrForm";
import { newGame } from "../helpers/apiHelper";
import RevealedLetters from "./revealedLetters";
import GameResultModal from "../gameResult/gameResultModal";
import GuessedLetters from "./guessedLetters";

function GamePage() {
  const [gameState, setGameState] = useState({});
  const [loading, setLoading] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);

  useEffect(() => {
    setLoading(true);
    const handleData = (data) => {
      setGameState(data);
      setLoading(false);
    };

    newGame(handleData);
  }, []);

  return (
    <div className="wrapper">
      {loading ? (
        <LogoSpin aria-label="Loading" />
      ) : (
        <>
          <RevealedLetters revealedLetters={gameState.letters} />
          <GuessrForm
            maxLength="1"
            data={gameState}
            setGameState={setGameState}
            setGuessedLetters={setGuessedLetters}
            guessedLetters={guessedLetters}
          />
          <GameResultModal gameState={gameState} />
          <GuessedLetters guessedLetters={guessedLetters} />
        </>
      )}
    </div>
  );
}

export default GamePage;
