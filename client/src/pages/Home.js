import React from "react";
import Navbar from "../components/Navbar";
import "../style/pages/home.scss";
import logo from "../images/prova.png";

export default function Home() {
  return (
    <section className="home">
      <Navbar />
      <div className="home-div">
        <div className="left">
          <h1>uTravel.</h1>
          <h2>
            Are you planning a trip? <br /> Mark the places you want to visit, <br />
            restaurants, hotels, all in one site!
          </h2>
          <a href="/user">Try It Now</a>
        </div>
        <div className="right">
          <img src={logo} alt="airplane" />
        </div>
      </div>
    </section>
  );
}
