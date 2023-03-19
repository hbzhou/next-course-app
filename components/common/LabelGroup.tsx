import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
  separator?: string;
}

const LabelGroup = ({ label, children, separator = ":" }: Props) => {
  return (
    <div className='inline-flex my-1'>
      <label className='font-bold'>{label}</label>
      <div className='ml-1 mr-2'>{separator}</div>
      <div>{children}</div>
    </div>
  );
};

export default LabelGroup;
