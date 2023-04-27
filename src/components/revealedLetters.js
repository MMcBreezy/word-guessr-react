import React from "react";
import "./styles.css";

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
