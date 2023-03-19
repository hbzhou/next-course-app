import React from "react";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("text-xl", className)}>{children}</div>;
};

export default Label;
