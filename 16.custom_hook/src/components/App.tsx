import React from 'react';
import {useCustomHook} from '../customhook/useCustomHook';

export const App=()=>{
    const obj=useCustomHook();
    const obj2=useCustomHook();
    
    return(
        <div>
            <h1>Count Up: {obj.count}</h1>
            <button onClick={obj.IncreaseCount}>Increase</button>
            <br/>
            <hr/>
            <h1>Count Down: {obj2.count}</h1>
            <button onClick={obj2.DecreaseCount}>Decrease</button>
        </div>
    
    );

}