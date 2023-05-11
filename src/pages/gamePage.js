import { React, useEffect, useState } from "react";
import LogoSpin from "../components/logoSpin";
import "./styles.scss";
import GuessrForm from "../components/guessrForm";
import { newGame } from "../helpers/apiHelper";
import RevealedLetters from "../components/revealedLetters";
import GameResultModal from "../components/gameResultModal";
import GuessedLetters from "../components/guessedLetters";
import ToastMessage from "../components/toastMessage";

function GamePage() {
  const [gameState, setGameState] = useState({});
  const [loading, setLoading] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const resetGame = () => {
    setLoading(true);
    setGuessedLetters([]);
    setToastMessage("");
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

  const handleGuess = (guess) => {
    const uppercaseGuess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
      setToastMessage(`You've already guessed "${uppercaseGuess}"!`);
    } else {
      setGuessedLetters(prevLetters => [...prevLetters, guess]);
    }
  };

  return (
    <div className="gamePageWrapper">
      <ToastMessage message={toastMessage} />
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
                handleGuess={handleGuess}
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
