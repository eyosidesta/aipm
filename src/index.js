import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducers from "./store/modules/admin/reducers";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
