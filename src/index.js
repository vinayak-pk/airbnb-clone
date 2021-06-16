import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store} from "./Redux/store"
import { Provider } from "react-redux";
import {store} from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import './i18next'
import StateProvider from './Redux/Login/StateProvider'
import reducer, { initState } from './Redux/Login/reducer'


ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initState={initState} reducer={reducer}>
      <Provider store={store}>
        <Suspense fallback={(<div>loading ~~~</div>)}>
         <App />
       </Suspense>
      </Provider>
    </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
