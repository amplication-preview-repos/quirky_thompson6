import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";
import { InputJsonValue } from "../../types";

export type VenueCreateInput = {
  address?: string | null;
  events?: EventCreateNestedManyWithoutVenuesInput;
  location?: InputJsonValue;
  name?: string | null;
};
