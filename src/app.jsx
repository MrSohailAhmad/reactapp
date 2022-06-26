import React from "react";
import "./style/style.css";
import { Routes, Route } from "react-router-dom";
// Component file imported here
import Header from "./Components/header/Header";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Experiance from "./Components/experiance/Experiance";
import Portfolio from "./Components/portfolio/Portfolio";
function app() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Experiance" element={<Experiance />}></Route>
      <Route path="/Portfolio" element={<Portfolio />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default app;
