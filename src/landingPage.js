import React from "react";
import LogoSpin from "./logoSpin";
import './App.css';

function LandingPage() {
    return (
        <div className="App">
        <header className="App-header">
            <LogoSpin />
            <div className="title">
            Word Guessr
            </div>
            {/* <a
            className="App-link"
            href=" "
            target="_blank"
            // rel="noopener noreferrer"
            >
            Start Game
            </a> */}
        </header>
        </div>
    );
};

export default LandingPage;