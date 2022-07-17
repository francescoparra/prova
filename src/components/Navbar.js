import React from "react";
import logo from "../images/logo.png";
import "../style/components/navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-div">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
      </div>
        <div className="header-links-div">
          <h4><a href="#">Plan A Trip</a></h4>
          <h4><a href="/about">About Us</a></h4>
          <h4><a href="#">Contact Us</a></h4>
        </div>
      <div className="header-user-links-div">
        <h4><a href="/user">Sign Up</a></h4>
      </div>
    </header>
  );
}
