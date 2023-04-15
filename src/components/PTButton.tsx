import React, { useState } from "react";

export interface IPTButtonProps
extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    initialValue?:Number,
    label?:string
}

export const PTButtom: React.FunctionComponent<IPTButtonProps>=(props)=>{
    const{initialValue,label}=props;

    const [count,setCount]=useState(initialValue||0);

    const clickButton=()=>{setCount(count+1)}

    return(
        <p>
            <span>Counter: {count}</span>
        <button onClick={clickButton}>{label||"Click me!"}</button>
        </p>
    )
}