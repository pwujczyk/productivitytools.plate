import React, { useState, useEffect } from "react";
import { Plate, TEditableProps } from "@udecode/plate";
import { MyParagraphElement } from "./typescript/plateTypes";

export interface IPTPlate extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  content: string;
}


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

export const PTPlate: React.FunctionComponent<IPTPlate> = ({ content }) => {
  const [formatedValue, setFormatedValue] = useState<MyParagraphElement[]>(initialValue(content));

  useEffect(() => {
    setFormatedValue(initialValue(content));
  }, [content]);

  const editableProps: TEditableProps = {
    placeholder: "Type1...",
  };
  return (
    <p>
      <Plate editableProps={editableProps} initialValue={formatedValue} />
    </p>
  );
};
