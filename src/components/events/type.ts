export interface EventItem {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

export interface IEventListProps {
  items: EventItem[];
}
