import React from "react";
import Footer from "../../features/Footer/Footer";
import Form from "../../features/Form/Form";
import HeroProject from "../../features/HeroProject/HeroProject";
import Navbar from "../../features/Navbar/Navbar";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroProject /> */}
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
