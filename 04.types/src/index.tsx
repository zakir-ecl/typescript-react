import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App name="Zakir Hossain" age={26} colors={["green","yellow","red"]}
    mobile="feature" func={ ()=> {return "Bangladesh"}}
    obj2={{hello:"Hello"}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
