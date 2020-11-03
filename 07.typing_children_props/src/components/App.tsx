import React from 'react';

type Props={
    myEvent: (e: React.MouseEvent<HTMLButtonElement>)=> void;
}

export const Button:React.FC<Props>=({myEvent,children})=>{
    return(
        <div>
            <button onClick={myEvent}>{children}</button>
        </div>
    );      

}