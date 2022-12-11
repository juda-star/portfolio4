import React from "react";
import "./Hero.css";
import blue from "../../assets/blue.jpg";
import att from "../../assets/at&t.jpeg";
import linkdinBack from "../../assets/LinkedIn-banner-12.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={att} alt="" />
      </div>
      <div className="content">
        <p>FREELANCER YEHOODA ISHTA</p>
        <h1>React Developer</h1>
        <div>
          <Link to={"/project"} className="btn">
            Projects
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
