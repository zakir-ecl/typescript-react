import React from 'react';
import {NavLink} from 'react-router-dom';

export const Menu=()=>{
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Service">Service</NavLink>
            <NavLink to="/About">About</NavLink>
        </>
    
    );

}