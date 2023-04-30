import { React, useEffect, useState } from "react";
import LogoSpin from "../components/logoSpin";
import "./styles.scss";
import GuessrForm from "../components/guessrForm";
import { newGame } from "../helpers/apiHelper";
import RevealedLetters from "../components/revealedLetters";
import GameResultModal from "../components/gameResultModal";
import GuessedLetters from "../components/guessedLetters";

function GamePage() {
  const [gameState, setGameState] = useState({});
  const [loading, setLoading] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const resetGame = () => {
    setLoading(true);
    setGuessedLetters([]);
    const handleData = (data) => {
      if (data.error) {
        setGameState(data);
        setLoading(false);
      } else {
        setGameState(data);
        setLoading(false);
      }
    };

    newGame(handleData);
  };

  useEffect(() => {
    resetGame();
  }, []);


  return (
    <div className="gamePageWrapper">
      {loading ? (
        <LogoSpin />
      ) : (
        <>
          {gameState.error ? (
            <div className="error-message">{gameState.error}</div>
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
              <GameResultModal gameState={gameState} onReset={resetGame} />
              <GuessedLetters guessedLetters={guessedLetters} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default GamePage;
