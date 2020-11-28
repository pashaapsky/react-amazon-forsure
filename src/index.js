import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./context/stateProvider";
import stateReducer , {initialState} from "./context/stateReducer";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={stateReducer}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
