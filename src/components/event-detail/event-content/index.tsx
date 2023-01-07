import classes from "./event-content.module.css";
import { IEventContentProps } from "./type";

function EventContent(props: IEventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
