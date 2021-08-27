import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./styles/style.scss";
import { Price } from "./context/Price";
import reportWebVitals from "./reportWebVitals";
import Main from "./pages/Main";

ReactDOM.render(
  <Price.Provider value={295.95}>
    <Main />
  </Price.Provider>,
  document.getElementById("root")
);

reportWebVitals();
