// import React,{useReducer} from 'react';

// const initialState={
//         name:"Zakir",
//         favLanguages:["JavaScript","Python","C++"]
// }
// const reducer=(state:any, action:string)=>{
//     switch (action) {
//         case "CHANGE_VALUE":
//             return {
//                 ...state,
//                 name: "Zakir Hossain Jewel"   
//             }
//         default:
//             return state;
//     }
// }

// export const App=()=>{
//     const [data, dispatch]=useReducer(reducer, initialState)
//     return(
//         <div>   
//             <h1>Name: {data.name}</h1>
//              <h1>Favorite Language: {data.favLanguages[1]}</h1>
//             <button onClick={()=>dispatch("CHANGE_VALUE")}>Change Value</button>
//         </div>
//     );
// }


import React,{useReducer} from 'react';

const initialState={
    name:'Zakir',
    favLanguages:["JavaScript","Python","C++"]
}

const reducer=(state:any, action: any)=>{
    switch (action.type) {
        case "CHANGE_VALUE":
            return{
                name: action.payload,
                favLanguages:["C#","Typescript","PHP"]
            }
    
        default:
            return state;
    }
}

export const App=()=>{
    const [data, dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <h1>Name: {data.name}</h1>
            <h1>Favorit Language: {data.favLanguages[1]}</h1>
            <button onClick={()=>dispatch({type:"CHANGE_VALUE", payload:"Zahid Hasan"})}>Change Value</button>
        </div>
    );

}

