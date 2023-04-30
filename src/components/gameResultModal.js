import React from "react";
import "./styles.css";

function GameResultModal({ gameState, onReset }) {
  const { userLost, userFinished, revealedWord } = gameState;

  const WonGame = () => <div className="wonGame">YOU WIN!</div>;
  const LoseGame = () => <div className="lostGame">YOU LOST!</div>;

  return (
    userFinished && (
      <div className="gameResultModal">
        <h2>{userLost ? <LoseGame /> : <WonGame />}</h2>
        <p className="wordWas">The word was:</p>
        <p className="word">{revealedWord}</p>
        <button
          autoFocus
          className="playAgainButton"
          onClick={onReset}>
          Play again!
          </button>
      </div>
    )
  );
}

export default GameResultModal;
