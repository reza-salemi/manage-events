import Button from "../ui/button";
import { EventItem } from "./type";

import { ArrowRightIcon, AddressIcon, DateIcon } from "../icons";

import classes from "./event-item.module.css";

const EventItem = (props: EventItem) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>

        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>

        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
      </div>

      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
