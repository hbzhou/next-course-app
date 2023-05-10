import cn from "classnames";
import { forwardRef } from "react";
import { InputProps, Input as SmtInput } from "semantic-ui-react";

const Input = forwardRef<SmtInput, InputProps>(({ className, ...rest }, ref) => {
  return <SmtInput focus className={cn(className, "rounded-md w-full h-12")} {...rest} />;
});

Input.displayName = "Input";

export default Input;
