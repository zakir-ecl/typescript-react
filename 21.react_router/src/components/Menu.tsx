import React from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
export const Menu=()=>{
    return(
        <>
        {/* <Link to="/">Home</Link>
        <Link to="/Contact">Contact </Link>
        <Link to="/About">About</Link>
        <Link to="/Error">Error</Link> */}
        
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/Contact">Contact </NavLink>
        <NavLink exact activeClassName="active" to="/About">About</NavLink>
        <NavLink exact activeClassName="active" to="/Error">Error</NavLink>
        </>
    );

}