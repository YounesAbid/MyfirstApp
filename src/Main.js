import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Main.css";
import "./App.css";
import { Body, Footer, Header } from "./file/index";
import Cards from "./file/NavBar/Cards";
import Login from "./file/Login/Login";
import Ds from "./file/Speciality/Ds";
import Ch from "./file/Speciality/Ch";
import Mt from "./file/Speciality/Mt";
import Ph from "./file/Speciality/Ph";
import About from "./file/About/About";
import Welcom from "./file/Welcom/Welcom";
class Main extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Router>
            <Header />
            <Routes>
              <></>
              <Route path="/" element={<Body />} />
              <Route path="/pp" element={<Cards />} />
              <Route path="lg" element={<Login />} />
              <Route path="ds" element={<Ds />} />
              <Route path="ch" element={<Ch />} />
              <Route path="mt" element={<Mt />} />
              <Route path="ph" element={<Ph />} />
              <Route path="ab" element={<About />} />
              <Route path="wl" element={<Welcom />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}

export default Main;
