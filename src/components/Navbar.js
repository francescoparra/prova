import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../style/components/navbar.scss";

export default function Navbar() {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-div">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="header-links-div">
        <h4>
        {auth ? (
            <Link to="/plan">
              Plan a Trip
            </Link>
          ) : (
            <Link to="/signin">Plan a Trip</Link>
          )}
        </h4>
        <h4>
          <Link to="/about">About Us</Link>
        </h4>
      </div>
      <div className="header-user-links-div">
        <h4>
          {auth ? (
            <Link onClick={logout} to="/">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </h4>
      </div>
    </header>
  );
}
