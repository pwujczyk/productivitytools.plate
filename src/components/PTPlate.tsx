import React, { useState, useEffect,useRef } from "react";
import { Plate, TEditableProps,useResetPlateEditor } from "@udecode/plate";
import { MyParagraphElement } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyParagraphElement[] }) => {
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);
  console.log("useffect2");
  useEffect(() => {
    if (isFirst.current) {
      console.log("useffect1");
      isFirst.current = false;
      return;
    }

    resetPlateEditor();
  }, [value, resetPlateEditor]);

  return null;
};

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
      {/* <Plate editableProps={editableProps} initialValue={formatedValue} /> */}
      <Plate<MyParagraphElement[]> editableProps={{ placeholder: "Type…" }} value={formatedValue}>
        <ResetEditorOnValueChange value={formatedValue} />
      </Plate>
    </p>
  );
};
