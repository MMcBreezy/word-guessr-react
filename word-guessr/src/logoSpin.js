import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const LogoSpin = () => {
    const [toggleSpin, setToggleSpin] = useState("false");
    
    const ToggleClass = () => {
        setToggleSpin(!toggleSpin);
    };

    return (
    <div onClick={ToggleClass}>
        <img
            src={logo} 
            className= {toggleSpin ? "App-logo-spin-left" : "App-logo-spin-right"}
            alt="logo" 
        />
    </div>
    )
};



export default LogoSpin;