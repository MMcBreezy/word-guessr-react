import React from "react";
import "./gameResultModal.css";
import LoseGame from "../gameResult/loseGame";
import WonGame from "../gameResult/wonGame";

function GameResultModal(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    props.userFinished && (
      <div className="gameResultModal">
        <h2>{props.userLost ? <LoseGame /> : <WonGame />}</h2>
        <p className="line">The word was:</p> 
        <p className="word">{props.revealedWord}</p>
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
