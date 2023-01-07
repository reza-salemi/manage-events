import Link from "next/link";
import { IButtonProps } from "./type";

import classes from "./button.module.css";

const Button = (props: IButtonProps) => {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
