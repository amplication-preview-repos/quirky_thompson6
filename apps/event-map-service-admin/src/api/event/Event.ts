import { EventType } from "../eventType/EventType";
import { Venue } from "../venue/Venue";

export type Event = {
  createdAt: Date;
  dateTime: Date | null;
  description: string | null;
  eventType?: EventType | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  venue?: Venue | null;
};
