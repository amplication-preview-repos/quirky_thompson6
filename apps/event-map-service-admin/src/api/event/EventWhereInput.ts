import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventWhereInput = {
  dateTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  eventType?: EventTypeWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  venue?: VenueWhereUniqueInput;
};
