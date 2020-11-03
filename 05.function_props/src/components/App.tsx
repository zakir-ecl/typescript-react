import React from 'react';

type Props={
    //First Way
    func1(): void; //return nothing
    //Second Way
    func2:()=> string; //return string
    //With parameter
    func3(text: string): string; //return string
    //Popular Way
    func4: (text: string)=> string; //return string
}

export const App=({func1,func2,func3,func4}:Props)=>{
    return(
        <div>
            <button onClick={func1}>Button One</button>
            <button onClick={func2}>Button Two</button>
            <button onClick={()=>func3("hello")}>Button Three</button>
            <button onClick={()=>func4("Samsung")}>Button Four</button>
        </div>
    
    );
}