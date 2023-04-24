import React from "react";
import "../styles/Projects.css";
import AutopiaImage from "../assets/projects/Autopia.png"
import HivesynthImage from "../assets/projects/HiveSynth.png"
import PulsarImage from "../assets/projects/Project_Images_PulsarSynth.png"
import ScorchImage from "../assets/projects/Project_Images_Scorch.png"
import { Link } from "react-router-dom";

const ProjectsDesktop = () => {
return (
<div className="services-container">
    <div className="title flex-box">
        <div className="left-text">
            <h3>Experimental audio software and research by BeeSting Labs.</h3>
        </div>
        <div className="centre-parting"></div>
        <div className="right-text">
            <h1>Projects</h1>
            <p>Discover our experimental software developed and released by BeeSting Labs, including both commercial products and research outcomes. Our software provides innovative tools for creative experimentation, while our research projects showcase our commitment to advancing audio software technology. Stay tuned for updates on our latest projects as we continue to push the boundaries of what's possible.</p>
        </div>
    </div>
    <div className="flex-box">
        <div>
            <div className="title-row">
                <div className="title-object">
                <h3>Plug-Ins</h3>
                </div>
                <div className="title-object">
                <h3>Research</h3>
                </div>
            </div>
            <div className="service-row">
                <div className="serviceBox">
                    <img src={ScorchImage} alt="Scorch Project Image"/>
                <h3>Scorch</h3>
                <p>A VST3 and AU plugin which allows users to write musically intuitive code to outputs MIDI, allowing the user to create sound with algorithms.</p>
                <Link to="https://www.scorch.live/">Learn More</Link>
                </div>
                <div className="serviceBox">
                <img src={PulsarImage} alt="EDS Pulsar Synth Image"/>
                <h3>EDS Pulsar Synth</h3>
                <p>A VST3 and AU synthesiser plugin that uses the Pulsar Synthesis, a synthesis method based on the generation of trains of sonic particles.</p>
                <Link>Coming Soon!</Link>
                </div>
                <div className="serviceBox">
                    <img src={AutopiaImage} alt="Autopia Project Image"/>
            <h3>Autopia</h3>
            <p>Collaborative live coding AI system for musical performance, which allows exploration of the implications of mixed-initiative computational creativity from the perspective of live coding.</p>
            <Link to="https://aimc2021.iem.at/wp-content/uploads/2021/06/AIMC_2021_Lorway_Powley_Wilson.pdf">Read Paper</Link>
                </div>
                <div className="serviceBox">
                    <img src={HivesynthImage} alt="Hive Synth Project IMage"/>
            <h3>Hive Synth</h3>
            <p>A virtual modular analogue synthesiser with a unique augmented reality interface. It gives musicians the ability to design and play synthesisers built out of limitless numbers of virtual components. In contrast to existing virtual modular synthesisers which are limited to the flat screen, hiveSynth uses room-scale virtual/augmented/mixed reality to provide an intuitive 3D interface.</p>
            <Link to="https://vimeo.com/336929104">Watch Hivesynth</Link>
                </div>
            </div>
        </div>
    </div> 
</div>
);
}

export default ProjectsDesktop;