import React from "react";
import "../styles/Home.css";
import background from "../assets/backgroundMobile.gif";

const HomeMobile = () => {
return (
<div className="mobile-home-container">
    <img src={background}/>
    <div className="home-mobile-text">
    <h3>BeeSting develops audio software. </h3>
        <p>
        We are a software development studio specializing in digital signal processing for audio, creating innovative plugins, standalone software, and digital instruments.
        </p>
    </div>
</div>
);
}

export default HomeMobile;
