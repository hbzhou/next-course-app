import React from "react";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ className, children }) => {
  return <button className={cn("btn", className)}>{children}</button>;
};

export default Button;
