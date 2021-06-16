import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import './i18next'


ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={(<div>loading ~~~</div>)}>
         <App />
       </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
