import React from "react";
import Navbar from "../../features/Navbar/Navbar";
import HeroProject from "../../features/HeroProject/HeroProject";
import Footer from "../../features/Footer/Footer";
import PriceCard from "../../features/PriceCard/PriceCard";
import Portfolio from "../../features/Portfolio/Portfolio";
import PortpolioCard from "../../features/PortpolioCard/PortpolioCard";
function Project() {
  return (
    <div>
      <Navbar />
      <HeroProject heading="PROJECT." text="Some of my most recent works" />
      <PortpolioCard />
      <PriceCard />
      <Footer />
    </div>
  );
}

export default Project;
