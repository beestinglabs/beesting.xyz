import React from "react";
import "../styles/Team.css";
import { Link } from "react-router-dom";
import arthurImage from "../assets/team/arthur.png";
import edImage from "../assets/team/ed.png";
import norahImage from "../assets/team/norah.png"; 

const TeamDesktop = () => {
return (
<div className="team-container">
    <div className="team-title">
        <h1>Team</h1>
    </div>
    <div className="profile-row">
        <div className="profile">
        <div className="profile-image">
            <img src={arthurImage} alt="Arthur Wilson"/>
        </div>
            <h3>Arthur Wilson</h3>
            <p>Arthur Wilson is a software developer and electronic sound artist with a Masters degree in design from the Royal College of Art. Over the course of a decade, he has honed his skills in electronic audio production, working on a wide range of projects that have allowed him to develop an intuitive understanding of sound and its role in the creative process. Combining his research, programming experience, and deep interest in the crossover between technology and creativity, Arthur brings a unique perspective to software development.</p> 
            <Link to="https://www.arthurwilson.xyz">Learn More</Link>
        </div>
        <div className="profile">
            <img src={norahImage} alt="Norah Lorway"/>
            <h3>Dr Norah Lorway</h3>
            <p>Norah Lorway is a software engineer and artificial intelligence and music professor at Toronto Metropolitan University with expertise in software for audio and digital healthcare. She is experienced in a variety of languages including JavaScript, Python, Java, C++ amongst others. Prior to co-founding Beesting Ltd, Norah has founded and worked software companies in the UK and Canada since 2008. She holds a PhD in Music Computing from the University of Birmingham where she worked with the SuperCollider language on various audio software projects. For several years Norah has worked in both academia and industry, bringing a research informed perspective to software development.</p>
            <Link to="https://www.norahlorway.com/">Learn More</Link>
        </div>
        <div className="profile">
            <img src={edImage} alt="Ed Powley"/>
            <h3>Dr Ed Powley</h3>
            <p>Ed Powley is a highly skilled software engineer with expertise in audio DSP and graphics programming. He is experienced in a variety of languages including C++, Python, C#, Java, JavaScript, and Swift. Prior to co-founding Beesting Ltd, Ed spent 15 years in academia, researching game AI and teaching game development. He holds a PhD in Computer Science from the University of York. With his extensive background in both industry and academia, Ed is uniquely equipped to design and implement high-performance software solutions.</p>
            <Link to="https://edpowley.com/">Learn More</Link>
        </div>
    </div> 
</div>
);
}

export default TeamDesktop;