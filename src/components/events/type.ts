export interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
}

export interface IEventListProps {
  items: EventItem[];
}
