import React from 'react';
import {useLocation} from 'react-router-dom';

export const App=()=>{
    const location=useLocation();
    return (
       <h1>{location.pathname}</h1> 
    );

}