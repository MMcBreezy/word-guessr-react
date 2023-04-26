import React from "react";
import "./revealedLetters.css";

function RevealedLetters(props) {
  return (
    <div className="letters">
      {props.revealedLetters.map((letter, index) => (
        <span className="spaces" key={index}>
          <span className={letter ? "visible" : "hidden"}>{letter || "_"}</span>
        </span>
      ))}
    </div>
  );
}

export default RevealedLetters;
