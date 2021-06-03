import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18next"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>loading ~~~</div>)}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


