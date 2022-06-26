import React from "react";
import CTA from "./CTA";
import Social from "./HeaderSocial";
import ME from "../../assets/profile.png";
import Nav from "../nav/Nav";

import "./Header.css";
function Header() {
  return (
    <header id="Home">
      <Nav />
      <div className="container header_container">
        <div className="header-content">
          <h5>Hello I'm</h5>
          <h1>MUHAMMAD SOHAIL</h1>
          <h5 className="text-light"> NODE JS DEVELOPER</h5>
          <CTA />
          <Social />
        </div>
        <div className="header-img">
          <div className="me">
            <img src={ME} alt="profile_image" />
          </div>
        </div>
        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
}

export default Header;
