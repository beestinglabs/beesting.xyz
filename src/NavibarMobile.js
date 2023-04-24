import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import './styles/Navibar.css'
import logo from "./assets/logo.png"

const NavibarMobile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(!open);};

  return (
    <div className="navibar-mobile">
    <div className="beesting-text">
      <h3>BEESTING</h3>
      </div>
    <div className="dropdown">
      <button onClick={handleOpen}><div className="menu-dot"></div></button>
    {open ? (
    <ul className="menu">
      <li className="menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item">
        <Link to="/Projects">Projects</Link>
      </li>
      <li className="menu-item">
        <Link to="/Services">Services</Link>
      </li>
      <li className="menu-item">
        <Link to="/Team">Team</Link>
      </li>
      <li className="menu-item">
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    ) : null}
    </div>
    </div>
  );
}

export default NavibarMobile;