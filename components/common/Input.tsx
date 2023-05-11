import cn from "classnames";
import { InputProps, Input as SmtInput } from "semantic-ui-react";

const Input = ({ className, ...rest }: InputProps) => {
  return <SmtInput focus className={cn(className, "rounded-md w-full h-12")} {...rest} />;
};

export default Input;
