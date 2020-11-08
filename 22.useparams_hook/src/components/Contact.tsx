import React from 'react';
import {useParams} from 'react-router-dom';
// Without useParams
// export const Contact=({match}: any)=>{
//     return(
//         <h1>This is{match.params.fname} Contact Page</h1>
//     );
// }


export const Contact=()=>{
    type paramsType={
        fname:string;
        lname: string
    }
    const {fname, lname}=useParams<paramsType>();
    return(
        <h1>This is {fname} {lname} Contact Page</h1>
    );
}