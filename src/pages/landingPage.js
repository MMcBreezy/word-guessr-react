import React from "react";
import LogoSpin from "../components/logoSpin";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css";
import "./styles.scss";
import { useNavigate } from "react-router";

function LandingPage() {
  const navigate = useNavigate();


  return (
    <div className="landingPageWrapper">
      <LogoSpin />
      <div className="title">Word Guessr</div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          navigate("/game")
          // Handle successful login here, e.g., redirect to "/game"
        }}
        onError={() => {
          console.log('Login Failed');
          // Handle login failure here, if needed
        }}
      />
    </div>
  );
}

export default LandingPage;
