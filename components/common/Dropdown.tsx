import React from "react";
import { Dropdown as SmtDropDown, DropdownProps } from "semantic-ui-react";
import cn from "classnames";

const Dropdown: React.FC<DropdownProps> = ({ placeholder, options, className, ...rest }) => {
  return (
    <SmtDropDown
      className={cn(className, "h-12 border-blue-400 border-solid border")}
      placeholder={placeholder}
      options={options}
      {...rest}
      fluid
      multiple
      selection
    />
  );
};

export default Dropdown;
