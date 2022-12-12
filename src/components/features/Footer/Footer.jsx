import React from "react";
import "./footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>hashlosha 21, Petah Tikva</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              052-664-8599
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              juda.ishta@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>You can visit me At </h4>
          <div className="social">
            <a href="https://www.facebook.com/yehooda/">
              {" "}
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/yehooda-ishta-ba9a9a202/">
              {" "}
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://github.com/juda-star">
              {" "}
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
