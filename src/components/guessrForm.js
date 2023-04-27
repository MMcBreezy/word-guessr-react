import React, { useState } from "react";
import "./styles.css";
import RemainingGuesses from "./remainingGuesses";
import { submitGuess } from "../helpers/apiHelper";

function GuessrForm({
  data,
  setGameState,
  guessedLetters,
  setGuessedLetters,
  maxLength,
}) {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    const lettersOnly = new RegExp(/[A-Za-z]/);
    if (lettersOnly.test(e.target.value)) {
      setGuess(e.target.value);
    }
  };

  const handleApiData = (data) => {
    console.log(data);
    setGameState(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!guessedLetters.includes(guess)) {
      submitGuess(data.id, guess, handleApiData);
      setGuessedLetters([...guessedLetters, guess]);
    } else {
      alert("Already guessed that letter! Stop it.");
    }
    setGuess("");
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div>
          <RemainingGuesses remainingGuesses={data.guessesRemaining} />
        </div>
        <div className="inputBox">
          <input
            autoFocus
            type="text"
            name="guess"
            className="inputField"
            value={guess}
            onChange={handleChange}
            maxLength={maxLength}
            disabled={data.userFinished}
            autoComplete="off"
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </div>
  );
}

export default GuessrForm;
