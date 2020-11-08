import React from 'react';

type Props={
    name:any
}

export const SearchResult=({name}:Props)=>{
     const img=`https://source.unsplash.com/900x300/?${name}`;
    return (
        <>
         {name===""?null:<img src={img} alt=""/> }
        </>
    );
    
}