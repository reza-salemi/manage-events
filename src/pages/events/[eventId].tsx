import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";

import {
  EventSummary,
  EventContent,
  EventLogistics,
  LogisticsItem,
} from "../../components/event-detail";

const EventDetails = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetails;
