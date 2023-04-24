import React from 'react';
import {  Link } from "react-router-dom";
import './styles/Navibar.css'
import logo from "./assets/logo.png"

const NavibarDesktop = () => {
  return (
    <div className="navibar">
      <div className="bar">
        <h3>BEESTING</h3>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Team">Team</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </div>
      </div>
      <div className="logo">
        <img src={logo} style={{height:40, width:40}}/>
      </div>
    </div>
  );
}

export default NavibarDesktop;