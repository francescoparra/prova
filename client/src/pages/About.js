import React from "react";
import "../style/pages/about.scss";
import chicago from "../images/chicago.png";

export default function About() {
  return (
    <section className="about">
      <div className="about-div">
        <div className="left-side">
            <div className="test">

          <div className="line"></div>
          <h3>Who We Are</h3>
            </div>
          <img src={chicago} alt="chicago_skyline" />
        </div>
        <div className="right-side">
          <div className="text-div">
            <h3>Our Company</h3>
            <p>
              Born in Chicago, uTravel is a company that deals with the
              travel experience of the person. We are a team of young
              people, lovers of IT, travel and who do not want to leave
              anything to chance.
            </p>
          </div>
          <div className="line"></div>
          <div className="text-div">
            <h3>Our Mission</h3>
            <p>
              We improve your travel experience, leaving nothing to chance,
              making your experience even better than you thought. People are at
              the heart of our service, we always try to listen to your
              criticisms to improve the service for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
