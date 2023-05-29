import React from "react";
import cn from "classnames";
import { Label as SmtLabel } from "semantic-ui-react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<Props> = ({ children, className }) => {
  return (
    <SmtLabel className={cn("text-xl", className)} basic color='red' pointing='above'>
      {children}
    </SmtLabel>
  );
};

export default Label;
