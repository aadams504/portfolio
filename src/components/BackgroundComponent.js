import React from "react";
import "../styles/Background.scss";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// import Spaceship from '../assets/images/ufo.png';
import bgImage from "../assets/images/bg.jpg";

const BackgroundComponent = () => {
  return (
    <div className="hero">
      <img id="image" src={bgImage} alt="" />

      <div className="social">
        <a
          href="https://www.linkedin.com/in/adams-arianna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="social-icon"
            size={40}
            style={{ color: "#fff", marginRight: "1rem", padding: "10px" }}
          />
        </a>
        <a
          href="https://github.com/aadams504"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="social-icon"
            size={40}
            style={{ color: "#fff", marginRight: "1rem", padding: "10px" }}
          />
        </a>
      </div>

      <div className="content">
        <h1>Hi, I'm Arianna</h1>
        <p>I'm a software developer</p>
        <div className="buttons">
          <Link to="portfolio" smooth={true} className="btn">
            Check Out My Work
          </Link>
          <Link to="contact-form" smooth={true} className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
