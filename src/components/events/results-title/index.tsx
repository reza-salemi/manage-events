import { Button } from "components/ui";
import classes from "./results-title.module.css";
import { ResultsTitleDateProp } from "./type";

export const ResultsTitle = (props: ResultsTitleDateProp) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};
