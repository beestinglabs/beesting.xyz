import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import Duckyverb from "../assets/projects/Duckyverb.png"
import Djaminn from "../assets/projects/Djaminn.png"

const ServicesDesktop = () => {
return (
<div className="services-container">
    <div className="title flex-box">
        <div className="left-text">
                <h3>“ Write a quote here by one of your clients or yourselves summarising the core values of Beesting Labs”</h3>
        </div>
        <div className="centre-parting"></div>
        <div className="right-text">
            <h1>Services</h1>
            <p>As well as producing our own software, we also provide services and systems for your software and end to end software development.
                <br/>
                <br/>
                We can create the audio software you need, custom to your requirements. We can create your DAW audio plugins, standalone software, DSP code for existing software, audio algorithms, iOS and Android audio applications and libraries, and much more.
                <br/>
                <br/>
                Check out our services and some of the projects we have been a part of below. If there is something you need to develop, let us know.
            </p>
            <Link to="/contact">Get in Touch</Link>
        </div>
    </div>
    <div className="title-row">
        <h3 className="title-object">Previous Projects</h3>
    </div>
    <div className="flex-box">
            <div className="service-row">
                {/* <div className="serviceBox">
                    <img src={projectImage1} alt="Plugin Security Services"/>
                        <h3>Plugin Security System</h3>
                        <p>We can implement and manage the security system for your plugin, generating a license key which is checked against an online database to allow for maximum software security.</p>
                        <Link to="/Contact">Learn More</Link>
                </div> */}
                {/* <div className="serviceBox">
                    <img src={projectImage1} alt="Xvox">
                        <h3>Xvox</h3>
                        <p>Working closely with the team at Nuro Audio, we created and built out DSP algorithms and the user interface according to tight specifications, to deliver a top of the range vocal effect plugin for mixing.</p> 
                        <Link to="https://www.google.com">Learn More</Link>
                </div> */}
                <div className="serviceBox">
                    <img src={Duckyverb} alt="Duckyverb"/>
                        <h3>Duckyverb</h3>
                        <p>Duckyverb combines reverb and ducking into one process.</p>
                        <Link to="https://www.parametricaudio.io">Learn More</Link>
                </div>
                <div className="serviceBox">
                    <img src={Djaminn} alt="Djaminn"/>
                        <h3>Djaminn</h3>
                        <p>Djaminn is a mobile app for collaborating and sharing music. We worked on the multi-track recorder in the app.</p>
                        <Link to="https://www.djaminn.com">Learn More</Link>
                </div>
            </div>
    </div> 
</div>
);
}

export default ServicesDesktop;