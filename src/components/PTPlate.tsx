import React, { useState, useEffect, useRef } from "react";
import { Plate, TEditableProps, useResetPlateEditor } from "@udecode/plate";
import { MyParagraphElement } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyParagraphElement[] }) => {
  // console.log("ResetEditorOnValueChange");
  // console.log(value);
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);
  // console.log("isFirst");
  // console.log(isFirst.current);
  useEffect(() => {
    // console.log("useEffect");
    // console.log(isFirst);

    if (isFirst.current) {
      // console.log("isFirst.current");
      // console.log(isFirst.current);
      isFirst.current = false;
      return;
    }
    resetPlateEditor();
  }, [value, resetPlateEditor, isFirst]);
  // console.log("return null");

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

type PTPlateContentChanged = (content: MyParagraphElement[]) => void;

export interface PTPlateProps {
  content: MyParagraphElement[];
  contentChanged: PTPlateContentChanged;
}

export const PTPlate: React.FunctionComponent<PTPlateProps> = ({ content, contentChanged }: PTPlateProps) => {
  const [value, setValue] = useState<MyParagraphElement[]>(content);
  const [resetValue, setResetValue] = useState<MyParagraphElement[]>(content);

  //if we use directly prop value, there was a delay in updating field when propValue changed
  //if we used value, the restet field was invoked every time when we started writing, which make writing not possible
  useEffect(() => {
    setValue(content);
    setResetValue(content);
  }, [content]);

  const change = (e: MyParagraphElement[]) => {
    setValue(e);
    contentChanged(e);
  };

  const editableProps: TEditableProps = {
    placeholder: "Type2...",
  };
  return (
    <p>
      {/* <Plate editableProps={editableProps} initialValue={formatedValue} /> */}
      <Plate<MyParagraphElement[]> editableProps={{ placeholder: "Type…" }} value={value} onChange={change}>
        <ResetEditorOnValueChange value={resetValue} />
      </Plate>
    </p>
  );
};
