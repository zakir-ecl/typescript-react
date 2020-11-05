import React,{useState, useEffect} from 'react';
import axios from 'axios';

export const App=()=>{
    const [num, setNum]=useState("");
    const [name, setName]=useState("");
    const [move, setMove]=useState(0);
    
    useEffect(()=>{
         const getData=async ()=>{
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);     
        }
        getData()
    })
    return(
        <div>
            <h1>Number: {num}</h1>
            <h1>Name: {name}</h1>
            <h1>Moves: {move}</h1>
            <select name="" id="" onChange={(event)=>setNum(event.target.value)}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
        </div>
    
    );

}