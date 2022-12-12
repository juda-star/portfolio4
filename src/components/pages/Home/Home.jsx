import React from "react";
import Hero from "../../features/Hero/Hero";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import Project from "../Project/Project";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
