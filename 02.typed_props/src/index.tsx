import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './component/App';

ReactDOM.render(
  <React.StrictMode>
    <App name="Zakir Hossain"  age={26} weight={72.4} isActive={true} />
  </React.StrictMode>,
  document.getElementById('root')
);

