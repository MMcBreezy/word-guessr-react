import React, { useState } from "react";
import "./guessrForm.css";
// import { WordGuessrWord } from "../Word/wordGuessrWord";

function GuessrForm(props) {
  const word = "test";

  const [guessedLetters, setLetters] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLetters([...guessedLetters, e.target.guess.value]);
    console.log(guessedLetters);
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "Roboto, system-ui, sans-serif",
          }}
        >
          {word.split("").map((letter, index) => (
            <span
              style={{ borderBottom: ".1em solid beige", borderRadius: "1px" }}
              key={index}
            >
              <span
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
              >
                {letter}
              </span>
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div>
          <input
            type="text"
            name="guess"
            className="inputField"
            maxLength={props.maxLength}
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </div>
  );
}

export default GuessrForm;
