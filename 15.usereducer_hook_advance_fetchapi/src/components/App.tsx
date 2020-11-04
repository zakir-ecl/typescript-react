import React,{useReducer} from 'react';

const initialState={
    name:"Zakir",
    colors:['green','yellow','red']
}

const reducer=(state:any,action:any)=>{
        switch (action.type) {
            case "CHANGE_VALUE":
                return{
                    ...state,
                    name:action.payload
                }
            default:
                return state;
        }

}

export const App=()=>{
const [state, dispatch] = useReducer(reducer, initialState)

const getName=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resolve=>resolve.json())
    .then(resolve2=>{
        dispatch({type:"CHANGE_VALUE", payload:resolve2[0].name})
    }
    )
    
}
    return(
        <div>
        <h1>Name: {state.name}</h1>
        <button onClick={()=>getName()}>Change Value</button>
        </div>
    );

}