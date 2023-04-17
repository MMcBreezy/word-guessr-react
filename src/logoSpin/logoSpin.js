import React, { useState } from 'react';
import logo from './logo.svg';
import '../App.css';


const LogoSpin = () => {
    const [toggleSpin, setToggleSpin] = useState(false);
    
    const toggleSpinDirection = () => {
        setToggleSpin(!toggleSpin);
    };

    return (
    <div onClick={toggleSpinDirection}>
        <img
            src={logo} 
            className= {toggleSpin ? "App-logo-spin-left" : "App-logo-spin-right"}
            alt="logo" 
            onError={(e) => console.log('Failed to load logo', e)}
        />
    </div>
    )
};



export default LogoSpin;
