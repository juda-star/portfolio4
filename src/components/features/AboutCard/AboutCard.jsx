import React from "react";
import { Link } from "react-router-dom";
import "./AboutCard.css";
import useReducerPic from "../../assets/useReducer.jpeg"
const AboutCard = () => {
  return (
    <div className="aboutMe">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Im a react front-end developer. I create responsive secure websitr for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="pic">
            <div className="img-top">
                <img src={useReducerPic} className="useReducerPic" alt="true" />
            </div>
            <div className="img-bottom">
                <img src={useReducerPic} className="useReducerPic" alt="true" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
