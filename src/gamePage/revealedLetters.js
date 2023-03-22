import React from "react";
import "./revealedLetters.css";

function RevealedLetters(props) {
  return (
    <div className="letters">
      {props.revealedLetters.map((letter, index) => (
        <span className="spaces" key={index}>
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
  );
}

export default RevealedLetters;
