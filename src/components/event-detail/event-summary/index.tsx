import classes from "./event-summary.module.css";
import { IEventSummary } from "./type";

function EventSummary(props: IEventSummary) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
