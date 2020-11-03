import React, {useState} from 'react';

export const App=()=>{
    // const [name, setName]=useState<string>("");
    //Or
    const [name, setName]=useState("");
    const [count, setCount]=useState(0)
    return(
    <div>
    <h1>Name:{name}</h1>
    <button onClick={()=>setName("Zakir")}>Name Changer</button><br/><hr/>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
);

}