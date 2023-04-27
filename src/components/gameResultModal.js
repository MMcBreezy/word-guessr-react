import React from "react";
import "./styles.css";

function GameResultModal({ gameState }) {
  const { userLost, userFinished, revealedWord } = gameState;

  function refreshPage() {
    window.location.reload(false);
  }

  const WonGame = () => <div className="wonGame">YOU WIN!</div>;

  const LoseGame = () => <div className="lostGame">YOU LOST!</div>;

  return (
    userFinished && (
      <div className="gameResultModal">
        <h2>{userLost ? <LoseGame /> : <WonGame />}</h2>
        <p className="wordWas">The word was:</p>
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
