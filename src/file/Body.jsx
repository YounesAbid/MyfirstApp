import React, { Component } from "react";
import Hero from "./NavBar/hero";
import Cards from "./NavBar/Cards";
import Header from "./Header";
class Cont extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Hero />
        <Cards />
      </div>
    );
  }
}

export default Cont;
