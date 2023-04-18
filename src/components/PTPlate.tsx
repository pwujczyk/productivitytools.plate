import React, { useState } from "react";
import { Plate, TEditableProps } from "@udecode/plate";


export interface IPTPlate extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  label?: string;
}

export const PTPlate: React.FunctionComponent<IPTPlate> = (props) => {

    const editableProps: TEditableProps = {
        placeholder: 'Type...',
      };
  return (
    <p>
      <Plate editableProps={editableProps} />
    </p>
  );
};
