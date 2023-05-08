import React, { ChangeEventHandler, forwardRef } from "react";
import cn from "classnames";
import { Input as SmtInput, InputProps } from "semantic-ui-react";

const Input = forwardRef<SmtInput, InputProps>(({ className, ...rest }, ref) => {
  return <SmtInput focus className={cn(className, "rounded-md w-full h-12")} {...rest} />;
});

Input.displayName = "Input";

export default Input;
