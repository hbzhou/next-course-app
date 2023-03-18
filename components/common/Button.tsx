import React from "react";
import cn from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <button className={cn("btn", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
