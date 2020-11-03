import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App func1={()=> console.log("Hello World")} 
         func2={()=> {
               console.log("Function 2");
               return "Hello"
               }}
          func3={(value)=>{
                console.log(value);
                return "Function 3";
          }}
          func4={(value)=>{
                console.log(value);
                return "Function 4";
          
          }}
          />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
