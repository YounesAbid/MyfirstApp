import React, { Component } from "react";
import i26 from "../img/26.png";
import "./About.css";
const About = () => {
  return (
    <div className="container row   ">
      <div className="ab">
        <img style={{ maxWidth: "50%" }} className="col" src={i26} alt="" />
        <div className="col ">
          <h1>About</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            amet aut minima minus voluptatum facere suscipit reprehenderit quod
            ipsam tenetur alias culpa magni voluptates tempore quidem adipisci,
            doloremque nobis error. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Rerum, amet aut minima minus voluptatum facere
            suscipit reprehenderit quod ipsam tenetur alias culpa magni
            voluptates tempore quidem adipisci, doloremque nobis error.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
