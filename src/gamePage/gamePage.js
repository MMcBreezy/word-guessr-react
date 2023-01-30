import { React, useEffect } from "react";
import "./gamePage.css";
import GuessrForm from "../guessrForm/guessrForm";


function GamePage() {

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch('http://localhost:3001/game', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <GuessrForm maxLength="1" />
        </div>
      </header>
    </div>
  );
}

export default GamePage;
