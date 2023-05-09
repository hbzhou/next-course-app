import React from "react";
import { TextArea as SmtTextArea, TextAreaProps } from "semantic-ui-react";
import cn from "classnames";

const TextArea: React.FC<TextAreaProps> = ({ className, placeholder, rows, value, ...rest }) => {
  return (
    <SmtTextArea
      className={cn(className, "border border-solid border-blue-400 focus:border-blue-400 selection:border-blue-400")}
      value={value}
      placeholder={placeholder}
      rows={rows}
      {...rest}
    />
  );
};

export default TextArea;
