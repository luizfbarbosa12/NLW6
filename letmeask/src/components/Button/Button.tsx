import { ButtonHTMLAttributes } from "react";
import {MainButton} from './Button.styled'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return (
    <MainButton isOutlined={isOutlined} {...props} />
  );
};
