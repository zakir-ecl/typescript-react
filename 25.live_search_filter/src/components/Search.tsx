import React,{useState} from 'react';
import { SearchResult } from './SearchResult';
// import {SearchResult} from './SearchResult';

export const Search=()=>{
    const [letter, setLetter]=useState("");
    const inputEvent= (e:any) =>{
        const val=e.target.value;
        setLetter(val)
    }
    return(
        <>
            <input type="text" value={letter} onChange={inputEvent} placeholder="Search Any Picture" style={{margin:"50px auto", display:"block" }}/>
            <br/><br/><br/>
            <SearchResult name={letter}/>
        </>
    
    );

}