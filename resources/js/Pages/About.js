import React from "react";
import "../../sass/About.scss"; // moved to sass folder

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title"> About Us </h1>
        <p className="about-text">
          Hello! My name is <strong>Ryan Rosales</strong>. <br />
          I am <strong>20 years old</strong> and I live in 
          <strong> P-2 Maon, Butuan City</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;
