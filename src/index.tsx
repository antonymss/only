import React from "react";

import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global } from "styles/style";

ReactDOM.render(
  <HashRouter>
    <Global />
    <App />
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
