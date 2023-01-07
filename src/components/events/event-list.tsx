import EventItem from "./event-item";
import { IEventListProps } from "./type";

import classes from "./event-list.module.css";

const EventList = (props: IEventListProps) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          image={event.image}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
