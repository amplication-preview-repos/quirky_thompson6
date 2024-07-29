import { EventUpdateManyWithoutVenuesInput } from "./EventUpdateManyWithoutVenuesInput";
import { InputJsonValue } from "../../types";

export type VenueUpdateInput = {
  address?: string | null;
  events?: EventUpdateManyWithoutVenuesInput;
  location?: InputJsonValue;
  name?: string | null;
};
