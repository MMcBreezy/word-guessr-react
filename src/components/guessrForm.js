import React from "react";
import "./styles.css";
import RemainingGuesses from "./remainingGuesses";
import { submitGuess } from "../helpers/apiHelper";

function GuessrForm(props) {
  const gameState = props.data;

  const handleChange = (e) => {
    const val = e.target.value;
    const lettersOnly = new RegExp(/[A-Za-z]/);
    if (!lettersOnly.test(val)) {
      e.target.value = "";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const handleApiData = (data) => {
      console.log(data);
      props.setGameState(data);
    };

    submitGuess(props.data.id, e.target.guess.value, handleApiData);

    if (!props.guessedLetters.includes(e.target.guess.value)) {
      props.setGuessedLetters([...props.guessedLetters, e.target.guess.value]);
    } else {
      alert("Already guessed that letter! Stop it.");
    }
    e.target.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div>
          <RemainingGuesses remainingGuesses={gameState.guessesRemaining} />
        </div>
        <div className="inputBox">
          <input
            autoFocus
            type="text"
            name="guess"
            className="inputField"
            onChange={handleChange}
            maxLength={props.maxLength}
            disabled={gameState.userFinished}
            autoComplete="off"
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </div>
  );
}

export default GuessrForm;
