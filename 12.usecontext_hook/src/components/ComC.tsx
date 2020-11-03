import React,{useContext} from 'react';
import {FirstName, LastName, NickName} from './App';

export const ComC=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    const nickName=useContext(NickName);
    
    return <h1>{fname} {lname} {nickName}</h1>;

}