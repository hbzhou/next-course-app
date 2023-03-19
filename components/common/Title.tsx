import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <div className='text-3xl font-bold my-2 text-center'>{children}</div>;
};

export default Title;
