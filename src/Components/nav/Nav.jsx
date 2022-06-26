import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import "./Nav.css";
import { useState } from "react";
function Nav() {
  const { activeNav, setActiveNav } = useState("#Home");
  return (
    <nav>
      <NavLink
        to="/"
        onClick={() => setActiveNav("#Home")}
        className={activeNav === "#Home" ? "active" : ""}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="/About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#Home" ? "active" : ""}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="/Experiance"
        onClick={() => setActiveNav("#Experiance")}
        className={activeNav === "#Experiance" ? "active" : ""}
      >
        <BsBook />
      </NavLink>
      <NavLink
        to="/Portfolio"
        onClick={() => setActiveNav("#Service")}
        className={activeNav === "#Service" ? "active" : ""}
      >
        <RiServiceLine />
      </NavLink>
      <NavLink
        to="/Contact"
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact " ? "active" : ""}
      >
        <AiOutlineContacts />
      </NavLink>
    </nav>
  );
}

export default Nav;
