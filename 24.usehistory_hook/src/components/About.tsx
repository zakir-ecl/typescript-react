import React from 'react';
import {useHistory} from 'react-router-dom'
export const About=()=>{
    const history=useHistory();
    return( 
    <>
    <h1>This is About Page</h1>
    <button onClick={()=> history.goBack()}>Back</button>
    <button onClick={()=> history.goForward()}>Forward</button>
    </>
    );

}