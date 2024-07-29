import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  dateTime?: Date | null;
  description?: string | null;
  eventType?: EventTypeWhereUniqueInput | null;
  name?: string | null;
  venue?: VenueWhereUniqueInput | null;
};
