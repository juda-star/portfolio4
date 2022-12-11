import React from "react";
import { NavLink } from "react-router-dom";
import "./portfolio.css";
import moviePic from "../../assets/moviePic.png";
const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-header"></h1>
      <div className="portfolio-container">
        <div className="card">
          <img src={props.img} alt="" />
          <h2 className="title">{props.title}</h2>
          <div className="description">
            <p>{props.description}</p>
            <div className="btns">
              <NavLink to={props.view} className="btn">
                Link
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
