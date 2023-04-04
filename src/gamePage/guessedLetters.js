import React from "react";
import "./guessedLetters.css";

function GuessedLetters(props) {
  return (
    <div>
      <div className="guessedLettersHeader">Guessed letters:</div>
      <div className="guessedLetters">
        {props.guessedLetters.map((letters, index) => (
          <p key={index}>{letters}</p>
        ))}
      </div>
    </div>
  );
}

export default GuessedLetters;
