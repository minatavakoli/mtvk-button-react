import * as React from "react";
export interface ButtonProps {
  variant?: string;
  label?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: Function;
}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<unknown>
>;
export default Button;
