import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-items">
      <h2>Binary Beast</h2>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
