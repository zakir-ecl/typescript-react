import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App firstEvent={(e)=>{
      e.preventDefault();
      console.log(e)
    }}
        secondEvent={(e)=>{
            // console.log(e.target)
            console.log(e.key)
         }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
