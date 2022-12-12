import React from "react";
import "./from.css";
import emailjs from "emailjs-com";
const Form = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_bq00tmv",
      "template_8awoubc",
      e.target,
      "user_F2sOkbXU6MFel9pj45ENo"
    );
  }
  return (
    <div>
      <div className="form" onSubmit={sendEmail}>
        <form>
          <label>Your Name</label>
          <input id="name" name="name" type="text"></input>
          <label>Email</label>
          <input id="userEmail" name="userEmail" type="email"></input>
          <label>Subject</label>
          <input id="subject" name="subject" type="text"></input>
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Type your message here ..."
          ></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
