import React,{useState, useEffect} from 'react';
import '../index.css';

export const App=()=>{
    const [count, setCount]=useState(0);
    const [counts, setCounts]=useState(0);
    
    useEffect(()=>{
        alert("alert for useEffect");
    },[counts]);
    
    return(
        <>
        <div className="container">
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div><br/>
        <hr/>
        <div className="container">
            <h1>Count: {counts}</h1>
            <button onClick={()=> setCounts(counts+1)}>Increase</button>
            <button onClick={()=> setCounts(counts-1)}>Decrease</button>
        </div>
        </>
    
    );

}