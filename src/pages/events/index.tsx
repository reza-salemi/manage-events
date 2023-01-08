import { useRouter } from "next/router";
import { getAllEvents } from "../../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (year: string, month: string) => {
    const fullPath = `events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
};

export default Events;
