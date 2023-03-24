import React from "react";

function RemainingGuesses(props) {
  return (
    <div className="remainingGuesses">
      Remaining Guesses: {props.remainingGuesses}
    </div>
  );
}

export default RemainingGuesses;
