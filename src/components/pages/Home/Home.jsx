import React from "react";
import Hero from "../../features/Hero/Hero";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../../features/Footer/Footer";
import About from "../About/About";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
