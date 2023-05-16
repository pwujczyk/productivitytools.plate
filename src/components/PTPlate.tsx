import React, { useState, useEffect } from "react";
import { Plate, TEditableProps } from "@udecode/plate";
import { MyParagraphElement } from "./typescript/plateTypes";


const initialValue = (content: string) => [
  {
    type: "p",
    children: [
      {
        text: content,
      },
    ],
  } as MyParagraphElement,
];
export interface PTPlateProps {
  content:string;
};

export const PTPlate: React.FunctionComponent<PTPlateProps>=({ content }: PTPlateProps)=> {
  const [formatedValue, setFormatedValue] = useState<MyParagraphElement[]>(initialValue(content));

  useEffect(() => {
    setFormatedValue(initialValue(content));
  }, [content]);

  const editableProps: TEditableProps = {
    placeholder: "Type2...",
  };
  return (
    <p>
      <Plate editableProps={editableProps} initialValue={formatedValue} />
    </p>
  );
};
