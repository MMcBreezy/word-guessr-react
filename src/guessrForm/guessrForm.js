import React, { useState } from "react";
import "./guessrForm.css";
import LoseGame from "../gameResult/loseGame";
import WonGame from "../gameResult/wonGame";

function GuessrForm(props) {
  const [revealedLetters, setRevealedLetters] = useState(props.data.letters);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(
    props.data.guessesRemaining
  );
  const [userLost, setUserLost] = useState(false);
  const [userWon, setUserWon] = useState(false);

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
        setUserWon(data.userWon)
      });
    setGuessedLetters([...guessedLetters, e.target.guess.value]);
    console.log(guessedLetters);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: ".25em",
          fontSize: "6rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "Roboto, system-ui, sans-serif",
          padding: "20px",
        }}
      >
        {revealedLetters.map((letter, index) => (
          <span
            style={{ borderBottom: ".1em solid beige", borderRadius: "1px" }}
            key={index}
          >
            <span
              style={{
                visibility: letter ? "visible" : "hidden",
              }}
            >
              {letter ? letter : "_"}
            </span>
          </span>
        ))}
      </div>
      <div>{userLost ? <LoseGame /> : ""}</div>
      <div>{userWon ? <WonGame /> : ""}</div>
      <form className="form" onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div className="inputBox">
          <input
            type="text"
            name="guess"
            className="inputField"
            onChange={handleChange}
            maxLength={props.maxLength}
          />
        </div>
        <div className="remainingGuesses">
          remaining guesses: {remainingGuesses}
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
      <div
        style={{
          display: "flex",
          gap: ".25em",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "Roboto, system-ui, sans-serif",
          height: "30px",
        }}
      >
        {guessedLetters.map((letters, index) => (
          <p key={index}>{letters}</p>
        ))}
      </div>
    </div>
  );
}

export default GuessrForm;
