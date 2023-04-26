import React from "react";
import "./gameResultModal.css";
import LoseGame from "../gameResult/loseGame";
import WonGame from "../gameResult/wonGame";

function GameResultModal({ gameState }) {
  const { userLost, userFinished, revealedWord } = gameState;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    userFinished && (
      <div className="gameResultModal">
        <h2>{userLost ? <LoseGame /> : <WonGame />}</h2>
        <p className="line">The word was:</p>
        <p className="word">{revealedWord}</p>
        <input
          autoFocus
          type="submit"
          className="playAgainButton"
          value="Play again!"
          onClick={refreshPage}
        />
      </div>
    )
  );
}

export default GameResultModal;
