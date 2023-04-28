import cn from "classnames";
import React from "react";

interface Props {
  className?: string;
  separator?: string;
}

const Divider: React.FC<Props> = ({ className, separator }) => {
  return <div className={cn("divider", className)}>{separator}</div>;
};

export default Divider;
