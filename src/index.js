import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import QuestionContext from "./context/QuestionContext";
import App from "./App";

ReactDOM.render(
  <QuestionContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuestionContext>,
  document.getElementById("root")
);
