import React,{useRef, useEffect} from 'react';


//useRef Hook is alternative of getElementById, getElementsByClass etc 
export const App=()=>{

    const myHeading=useRef(null);
    const myInput=useRef(null);
    
    useEffect(()=>{
        console.log(myHeading.current);
        console.log(myInput.current);
        
    });
    return(
        <div>
        <h1 ref={myHeading}>This is Heading</h1>
        <input ref={myInput}  type="text"/>
        </div>
    );

}