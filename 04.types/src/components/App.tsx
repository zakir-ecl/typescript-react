import React from 'react';

type Props={
    name: string;
    age: number;
    colors: string[];
    mobile: "feature" | "smartphone";
    func: ()=>string //It will return a string value
    obj1?:{};
    obj2:{
        hello: string;
    }
    
}

export const App=({name,age,colors,mobile,func,obj1,obj2}: Props)=>{
    
    return(
        <div>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Colors:{colors[0]}</h1>
        <h1>Mobile:{mobile}</h1>
        <h1>Country:{func()}</h1>
        <h1>Obj2:{obj2.hello}</h1>
        
        </div>
    
    );
}