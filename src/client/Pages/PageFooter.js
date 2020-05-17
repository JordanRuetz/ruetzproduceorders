import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";

function PageFooter() {
  return (
    <div id="footer-container">
      <div id="footer">
        <div id="footer-contact" className="footer-section">
          <h4 className="parallax-link">
            <Link to="/contact">Contact Us</Link>
          </h4>
        </div>
        <div id="footer-middle" className="footer-section">
          <h4>Ruetz's Farm Fresh Produce</h4>
          <h6 id="copyright-container">
            <span>
              <img
                src={require("../resources/icons/copyright-white.png")}
                alt="copyright icon"
                width="8"
                height="8"
              ></img>
            </span>
            Ruetz's Farm Fresh Produce 2020
          </h6>
        </div>
        <div className="footer-section">
          <a href="https://www.facebook.com/Ruetzs-Farm-Fresh-Produce-Greenhouses-and-CSA-626008304089679">
            <img
              src={require("../resources/icons/facebook.png")}
              alt="facebook icon"
              width="40"
              height="40"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
