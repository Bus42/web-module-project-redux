import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import reducer from "./reducers";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
