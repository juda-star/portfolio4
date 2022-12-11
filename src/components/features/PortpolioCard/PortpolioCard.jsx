import React from "react";
import DataProject from "../ApiData/ApiData";
import Portfolio from "../Portfolio/Portfolio";

const PortpolioCard = () => {
  return (
    <div className="container">
      <h1 className="portfolio-header">Projects</h1>
      <div className="portfolio-container">
        {DataProject.map((val, ind) => {
          return (
            <Portfolio
              key={ind}
              img={val.img}
              title={val.title}
              description={val.description}
              view={val.view}
            />
          );
        })}
      </div> 
    </div>
  );
};

export default PortpolioCard;
