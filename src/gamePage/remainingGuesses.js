import { React } from "react";
import "./remainingGuesses.css";

function RemainingGuesses(props) {

  return (
    <div className="guessesRemaining">
      guesses remaining: <span className="guessesRemainingProps">{props.remainingGuesses}</span>
    </div>
  );
}

export default RemainingGuesses;
