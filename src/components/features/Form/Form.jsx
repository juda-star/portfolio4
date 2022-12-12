import React from "react";
import "./from.css";
const Form = () => {
  return (
    <div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message here"></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
