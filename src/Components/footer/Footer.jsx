import React from "react";
import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineFacebook } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <a href="#Home" className="footer-logo">
        Code To Tech
      </a>
      <ul className="parmalinks">
        <li className="links">
          <a href="#Home">Home</a>
        </li>
        <li className="links">
          <a href="#About">About</a>
        </li>
        <li className="links">
          <a href="#Experiance">Experience</a>
        </li>
        <li className="links">
          <a href="#Service">Service</a>
        </li>
        <li className="links">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="footer-social">
        <a
          href="https://web.facebook.com/profile.php?id=100069678930838"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoInstagram className="social-icons" />
        </a>
        <a
          href="https://www.instagram.com/code_totech/"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook className="social-icons" />
        </a>
      </div>
      <div className="footer-copy-right">
        <small>Design by Muhammad Sohail</small>
        <br />
        <small> &copy; All Rights Reservied</small>
      </div>
    </footer>
  );
}

export default Footer;
