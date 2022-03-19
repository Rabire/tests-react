import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssReset, Theme } from "styles/globals";

ReactDOM.render(
  <React.StrictMode>
    <CssReset />
    <Theme />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
