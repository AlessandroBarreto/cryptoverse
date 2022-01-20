import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "./styles/globals.scss";

// @ts-ignore
import App from "./App.tsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
