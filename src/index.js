import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/Home.css";
import "./assets/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Store from "./redux/Store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
