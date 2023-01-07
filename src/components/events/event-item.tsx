import Link from "next/link";
import React from "react";
import { EventItem } from "./type";

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
    <li>
      <img src={"/" + image} alt={title} />

      <div>
        <div>
          <h2>{title}</h2>
        </div>

        <div>
          <time>{humanReadableDate}</time>
        </div>

        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>

      <div>
        <Link href="/">{exploreLink}</Link>
      </div>
    </li>
  );
};

export default EventItem;
