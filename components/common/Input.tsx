import React, { ChangeEventHandler, forwardRef } from "react";
import cn from "classnames";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input name='' ref={ref} {...props} className={cn(props.className, "border-solid border-2 p-2 h-12 rounded-md w-full")} />;
});

Input.displayName = "Input";

export default Input;
