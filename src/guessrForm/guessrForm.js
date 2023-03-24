import React, { useState } from "react";
import "./guessrForm.css";
import RevealedLetters from "../gamePage/revealedLetters";
import RemainingGuesses from "../gamePage/remainingGuesses";
import GameResultModal from "../gameResult/gameResultModal";
import GuessedLetters from "../gamePage/guessedLetters";

function GuessrForm(props) {
  const [revealedLetters, setRevealedLetters] = useState(props.data.letters);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.data.guessesRemaining
  );
  const [userLost, setUserLost] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const [userFinished, setUserFinished] = useState(false);
  const [revealedWord, setRevealedWord] = useState(props.data.revealedWord);

  const handleChange = (e) => {
    const val = e.target.value;
    const lettersOnly = new RegExp(/[A-Za-z]/);
    if (!lettersOnly.test(val)) {
      e.target.value = "";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guess: e.target.guess.value }),
    };

    fetch(`http://localhost:3001/game/${props.data.id}/guess`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRevealedLetters(data.letters);
        setRemainingGuesses(data.guessesRemaining);
        setUserLost(data.userLost);
        setUserWon(data.userWon);
        setUserFinished(data.userFinished);
        setRevealedWord(data.revealedWord);
      });
    if (!guessedLetters.includes(e.target.guess.value)) {
      setGuessedLetters([...guessedLetters, e.target.guess.value]);
    } else {
      alert("Already guessed that letter! Stop it.");
    }
    e.target.reset();
  };


  return (
    <div>
      <RevealedLetters revealedLetters={revealedLetters} />
      <GameResultModal
        userLost={userLost}
        userWon={userWon}
        userFinished={userFinished}
        revealedWord={revealedWord}
      />
      <form className="form" onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div>
          <RemainingGuesses remainingGuesses={remainingGuesses} />
        </div>
        <div className="inputBox">
          <input
            autoFocus
            type="text"
            name="guess"
            className="inputField"
            onChange={handleChange}
            maxLength={props.maxLength}
            disabled={userFinished}
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
      <GuessedLetters guessedLetters={guessedLetters} />
    </div>
  );
}

export default GuessrForm;
