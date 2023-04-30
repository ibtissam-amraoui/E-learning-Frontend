import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul className="footer-links">
              <li className="footer-link">
                <a href="/">Home</a>
              </li>
              <li className="footer-link">
                <a href="/about">About</a>
              </li>
              <li className="footer-link">
                <h1>IBRA</h1>
              </li>
              <li className="footer-link">
                <a href="#">Terms and Policy</a>
              </li>
              <li className="footer-link">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
<hr/>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
export default Footer;
