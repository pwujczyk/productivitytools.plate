import React, { useState } from "react";

export interface IPTPlate
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    label?:string
}

export const PTPlate: React.FunctionComponent<IPTPlate>=(props)=>{

    return(
        <p>
          <span>plate</span>
        </p>
    )
}