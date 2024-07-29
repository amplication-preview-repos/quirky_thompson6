import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type Venue = {
  address: string | null;
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  location: JsonValue;
  name: string | null;
  updatedAt: Date;
};
