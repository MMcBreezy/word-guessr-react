import React from "react";
import "./styles.css";

function GuessedLetters(props) {

  return (
    <div className="guessedLettersContainer">
      {props.guessedLetters.length === 0 ? (
        <>
          {/* <div className="guessedLettersHeader">Guessed letters:</div> */}
          <div className="guessedLetters">
            <p></p>

          </div>
        </>
      ) : (
        <div>
          {/* <div className="guessedLettersHeader">Guessed letters:</div> */}
          <div className="guessedLetters">
            {props.guessedLetters.map((letters, index) => (
              <p key={index}>{letters}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GuessedLetters;
