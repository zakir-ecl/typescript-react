import React from 'react';
import {FirstName, LastName, NickName} from './App';
export const ComC=()=>{
    return (
    <FirstName.Consumer>{(fname)=>
        {
        return <LastName.Consumer>
            {(lname)=>{
                return <NickName.Consumer>
                    {(nickName)=>{
                        return <h1>{fname} {lname} {nickName}</h1>
                    }}
                </NickName.Consumer>
            }}
        </LastName.Consumer>
        }
    }</FirstName.Consumer>
    );

}