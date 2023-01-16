import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './index.css';
import App from './App';
import App3 from './App3';
import Movies from './components/Movies'; 
import Counters from './components/Counters'; 
import Todos from './components/Todos'; 
import Budget from './components/Budget';

import reportWebVitals from './reportWebVitals'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Budget/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
