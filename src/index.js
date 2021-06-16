import React, { Suspense } from 'react';
import "./i18next"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/NavBar/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={(<div>loading ~~~</div>)}>
      <Provider store={store}>
        <App />
      </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
