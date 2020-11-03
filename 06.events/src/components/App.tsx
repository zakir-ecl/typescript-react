import React from 'react';

type Props={
    firstEvent: (e : React.MouseEvent<HTMLButtonElement>)=> void;
    secondEvent:(e : React.KeyboardEvent) => void;
}

export const App=({firstEvent,secondEvent}:Props)=>{
    return(
        <div>
            <button onClick={firstEvent}>Button</button>
            <input onKeyDown={secondEvent} type="text" name="" id=""/>
        </div>
    );

}