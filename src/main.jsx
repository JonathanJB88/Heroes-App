import React from "react";
import ReactDOM from "react-dom/client";
import { HeroesApp } from "./HeroesApp";

import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <HeroesApp />
    </React.StrictMode>
  </BrowserRouter>
);
