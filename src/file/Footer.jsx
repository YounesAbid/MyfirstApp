import React, { Component } from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin,BsGithub } from "react-icons/bs";
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
            <a href="https://www.facebook.com/younes.abid.984" target="_blank"><BsFacebook size={30} />
           </a>            
          </span>
          <span className="fttt">
          <a href="https://instagram.com/younesabiid" target="_blank"><BsInstagram size={30} /> 
           </a>          
          </span>
          <span className="fttt">
          <a href="https://www.linkedin.com/in/younes-abid-b311a9280" target="_blank"><BsLinkedin size={30} />
           </a>         
          </span> <span className="fttt">
          <a href="https://github.com/YounesAbid" target="_blank"><BsGithub size={30} />
           </a>         
          </span>
        </div>
      </footer>
    );
  }
}
export default Footer;
