import React, { Component } from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="ft">
        <p>
          &copy; {new Date().getFullYear()} Faculty of Sciences. All Rights
          Reserved.
        </p>
        <div className="ftt">
          <span className="fttt">
            <BsFacebook size={30} />
          </span>
          <span className="fttt">
            <BsInstagram size={30} />
          </span>
          <span className="fttt">
            <BsLinkedin size={30} />
          </span>
        </div>
      </footer>
    );
  }
}
export default Footer;
