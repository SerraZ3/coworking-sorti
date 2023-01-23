import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga";
const TRACKING_ID = "G-ML4LGCNR96"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
