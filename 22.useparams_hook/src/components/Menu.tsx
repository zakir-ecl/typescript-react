import React from 'react';
import {NavLink} from 'react-router-dom';

export const Menu=()=>{
    return(
    <>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/Contact/Zakir/hossain">Contact</NavLink>
        <NavLink exact to="/Service">Service</NavLink>
        <NavLink exact to="/Error">Error</NavLink>
        
    </>
    );
}