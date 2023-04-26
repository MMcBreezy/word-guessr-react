import React, { useState } from "react";
import "./guessrForm.css";
import RevealedLetters from "../gamePage/revealedLetters";
import RemainingGuesses from "../gamePage/remainingGuesses";
import GameResultModal from "../gameResult/gameResultModal";
import GuessedLetters from "../gamePage/guessedLetters";
import { submitGuess } from "../helpers/apiHelper";

function GuessrForm(props) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameState, setGameState] = useState(props.data);

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
      setGameState(data);
    };

    submitGuess(props.data.id, e.target.guess.value, handleApiData);

    if (!guessedLetters.includes(e.target.guess.value)) {
      setGuessedLetters([...guessedLetters, e.target.guess.value]);
    } else {
      alert("Already guessed that letter! Stop it.");
    }
    e.target.reset();
  };

  return (
    <div>
      <RevealedLetters revealedLetters={gameState.letters} />
      <GameResultModal gameState={gameState} />
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
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
      <GuessedLetters guessedLetters={guessedLetters} />
    </div>
  );
}

export default GuessrForm;
