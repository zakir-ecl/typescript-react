import React,{useReducer} from 'react';

const initialState="Chatmohar";
const initialState2="Sylhet";
const reducer=(state:string ,action:string)=>{
    switch (action) {
        case "CHANGE_NAME":
            return "Dhaka";
        default:
            return state;
    }
}

export const App=()=>{
    const [name,dispatch]=useReducer(reducer,initialState);
    const [name2,dispatch2]=useReducer(reducer,initialState2);
    return(
        <div>
            <h1>City Name:{name}</h1>
            <button onClick={()=>dispatch("CHANGE_NAME")}>Change City</button>
            <br/><hr/>
            <h1>City Name:{name2}</h1>
            <button onClick={()=>dispatch2("CHANGE_NAME")}>Change City</button>
        </div>
    );

}


