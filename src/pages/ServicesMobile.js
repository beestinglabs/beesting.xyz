import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import Duckyverb from "../assets/projects/Duckyverb.png"
import Djaminn from "../assets/projects/Djaminn.png"

const ServicesMobile = () => {
return (
<div className="services-container-mobile">
    <h1>Services</h1>
    <h3>“ Write a quote here by one of your clients or yourselves summarising the core values of Beesting Labs”</h3>
    <p>As well as producing our own software, we also provide services and systems for your software and end to end software development.
        <br/>
        <br/>
        We can create the audio software you need, custom to your requirements. We can create your DAW audio plugins, standalone software, DSP code for existing software, audio algorithms, iOS and Android audio applications and libraries, and much more.
        <br/>
        <br/>
        Check out our services and some of the projects we have been a part of below. If there is something you need to develop, let us know.
    </p>
    <Link to="/contact">Get in Touch</Link>
    <div className="title-row">
        <h3 className="title-object">Previous Projects</h3>
    </div>
    {/* <div className="serviceBox-mobile">
        <img src={projectImage1} alt="Xvox"/>
        <h3>Xvox</h3>
        <p>Working closely with the team at Nuro Audio, we created and built out DSP algorithms and the user interface according to tight specifications, to deliver a top of the range vocal effect plugin for mixing.</p> 
        <Link to="https://www.google.com">Learn More</Link>
    </div> */}
    <div className="serviceBox-mobile">
        <img src={Duckyverb} alt="Duckyverb"/>
        <h3>Duckyverb</h3>
        <p>End to end prodction of audio plugin which combines reverb and ducking compression into one plugin.</p>
        <Link to="https://www.parametricaudio.io">Learn More</Link>
    </div>
    <div className="serviceBox-mobile">
        <img src={Djaminn} alt="Djaminn"/>
        <h3>Djaminn</h3>
        <p>Djaminn is a mobile app for collaborating and sharing music. We worked on the low-latency multi-track recorder in the app, for integration into existing mobile app. </p>
        <Link to="https://www.djaminn.com">Learn More</Link>
    </div>
</div>
);
}

export default ServicesMobile;