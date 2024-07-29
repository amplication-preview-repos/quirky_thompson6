import { Event } from "../event/Event";

export type EventType = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
