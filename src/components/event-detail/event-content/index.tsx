import classes from "./event-content.module.css";
import { IEventContentProps } from "./type";

export const EventContent = (props: IEventContentProps) => {
  return <section className={classes.content}>{props.children}</section>;
};
