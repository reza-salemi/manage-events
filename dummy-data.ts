type DateFilter = {
  year: number;
  month: number;
};

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Morocco 0 - 0 Croatia",
    description:
      "Morocco and Croatia played out the third goalless draw in 24 hours at the 2022 World Cup as Qatar tournament threw up snoozefest on Wednesday",
    location: "Qatar",
    date: "2022-05-12",
    image: "images/morocco.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "France beat Morocco to reach World Cup Final",
    description:
      "France will Play Argentina in the World Cup final after surviving a breathless semi-final against Morocco",
    location: "Qatar",
    date: "2022-05-30",
    image: "images/france.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Emir of Qatar dressed Messi in Black",
    description:
      "Emir of Qatar dressed Messi in Black before handling over the World Cup",
    location: "Qatar",
    date: "2022-12-01",
    image: "images/messi.jpeg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: DateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
