import {useState} from 'react';

export const useCustomHook=()=>{
    const [count, setCount]=useState(0);
    
    const IncreaseCount=()=>{
        return setCount(count+1);
    
    }
    const DecreaseCount=()=>{
        return setCount(count-1);
    }

    return{
        count,
        IncreaseCount,
        DecreaseCount
    
    }
}