import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import App from "./components/App";

import "./style.css";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="wrapper">
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
