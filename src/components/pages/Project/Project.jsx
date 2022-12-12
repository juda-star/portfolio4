import React from "react";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import PriceCard from "../../features/PriceCard/PriceCard";
import Portfolio from "../../features/Portfolio/Portfolio";
import PortpolioCard from "../../features/PortpolioCard/PortpolioCard";
function Project() {
  return (
    <div>
      <Navbar />
      <PortpolioCard />
      <PriceCard />
      {/* <Footer /> */}
    </div>
  );
}

export default Project;
