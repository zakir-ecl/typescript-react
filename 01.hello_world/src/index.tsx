import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render('What to show', 'Where to show','CallbackFunction');
ReactDOM.render(
  <React.Fragment>
  {/* This is not HTML Code. This is JSX(JavaScript Extension) */}
    <div className="headLine">
      <h1 >Hello World!</h1> 
      <p>I am Zakir Hossain from Expert Consortium ltd</p>
    </div>
  </React.Fragment>, document.getElementById('root')

);