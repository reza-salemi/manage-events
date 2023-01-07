import Link from "next/link";
import { IButtonProps } from "./type";

import classes from "./button.module.css";

const Button = (props: IButtonProps) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
