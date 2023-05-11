import React, { forwardRef } from "react";
import cn from "classnames";
import { Button as SmtButton, ButtonProps } from "semantic-ui-react";

export type Props = {
  size?: "medium" | "small" | "large";
} & ButtonProps;

const Button = forwardRef(({ size = "medium", children, className, ...rest }: Props, ref: any) => {
  return (
    <SmtButton size={size} className={cn(className, "!mx-2")} {...rest}>
      {children}
    </SmtButton>
  );
});

Button.displayName = "button";

export default Button;
