import React from "react";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import "./style/style.css";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
