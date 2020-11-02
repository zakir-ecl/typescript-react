import React from 'react';


type Props={
    name?: string, //Optional
    age?: number,  //Optional
    height: number //Required
}

//Here name is default
export const App=({age, height,name="Zakir Hossain"}:Props)=>{
    
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age:{age}</h1>
            <h1>Height: {height}</h1>
        </div>
    );

}