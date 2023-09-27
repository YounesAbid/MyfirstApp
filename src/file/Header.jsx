import React, { Component } from "react";
import NavItem, { NavItemDropdown } from "./NavBar/navItem";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg indigo navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img width="75px" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/pp">
                  Discover
                </Link>
              </NavItem>
              <NavItemDropdown>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Speciality
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="ds">
                      Computer Sciences
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="mt">
                      Math
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="ph">
                      Physics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="ch">
                      Chemistry
                    </Link>
                  </li>
                </ul>
              </NavItemDropdown>
              <NavItem>
                <Link className="nav-link " aria-current="page" to="ab">
                  About
                </Link>
              </NavItem>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/lg">
                <button className="btn btn-outline-light" type="submit">
                  Log in
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
