import React from "react";
import { Link } from "react-router-dom";
import "../style/pages/home.scss";
import logo from "../images/prova.png";

export default function Home() {
  const auth = localStorage.getItem("user");
  return (
    <section className="home">
      <div className="home-div">
        <div className="left">
          {auth ? (
            <><h1>Welcome {JSON.parse(auth).username}</h1><h2>
              Hope you're all good!<br /> Go to see your <Link to={"/myTrips?userId=" + JSON.parse(auth).id}>planned trips!</Link>
            </h2></>
          ) : (
            <><h1>uTravel.</h1><h2>
                Are you planning a trip?<br /> Mark the places you want to visit,
                <br />
                restaurants, hotels, all in one site!
              </h2></>
          )}
        </div>
        <div className="right">
          <img src={logo} alt="airplane" />
        </div>
      </div>
    </section>
  );
}
