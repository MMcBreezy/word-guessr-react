import React, { useState } from "react";
import "./guessrForm.css";

function GuessrForm(props) {
  const [revealedLetters, setRevealedLetters] = useState(
    props.data.data.letters
  );
  const [guessedLetters, setGuessedLetters] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value
    const lettersOnly = new RegExp(/[A-Za-z]/)
    if (!lettersOnly.test(val)) {
      e.target.value = ""
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "guess": e.target.guess.value })
    };
    /*Make another fetch
    grab ID out of props.data.data.id
    use ${} for id in URL 
    use e.target.guess.value in body
    */
    fetch(`http://localhost:3001/game/${props.data.data.id}/guess`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
    setGuessedLetters([...guessedLetters, e.target.guess.value]);
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
      </div>

      <form onSubmit={submitHandler}>
        <label className="guessTitle">Guess your letter:</label>
        <div>
          <input
            type="text"
            name="guess"
            className="inputField"
            onChange={handleChange}
            maxLength={props.maxLength}
          />
        </div>
        <input type="submit" className="submitButton" value="Submit" />
      </form>
    </div>
  );
}

export default GuessrForm;
