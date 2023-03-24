import React from "react";
import "./guessedLetters.css";

function GuessedLetters (props) {
    

return (
    <div className="guessedLetters">
        {props.guessedLetters.map((letters, index) => (
          <p key={index}>{letters}</p>
        ))}
      </div>
)

}

export default GuessedLetters;



