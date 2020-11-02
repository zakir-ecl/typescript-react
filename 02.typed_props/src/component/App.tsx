import React from 'react';


type Props={
    name: string,
    age: number,
    weight: number,
    isActive:boolean
    
}

export const App=({name,age,weight,isActive}:Props)=>{
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>weight: {weight}</h1>
             {isActive && <h1>Active</h1> }
        </div>
    );
    
    

}

