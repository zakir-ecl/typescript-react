import React,{createContext} from 'react';
import {ComA} from './ComA';

const FirstName= createContext("");
const LastName= createContext("");
const NickName= createContext("");

export const App=()=>{
    return (
        <FirstName.Provider value="Zakir">
        <LastName.Provider value="Hossain">
        <NickName.Provider value="Jewel">
        <ComA/>
        </NickName.Provider>
        </LastName.Provider>
        </FirstName.Provider>
    
    );
}
export {FirstName, LastName, NickName};