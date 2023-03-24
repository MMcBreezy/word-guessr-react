import { React } from "react";
import "./remainingGuesses.css";

function RemainingGuesses(props) {

  return (
    <div className="guessesRemaining">
      guesses remaining: {props.remainingGuesses}
    </div>
  );
}

export default RemainingGuesses;
