import { ReactNode, MouseEventHandler } from "react";

export interface IButtonProps {
  link?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
