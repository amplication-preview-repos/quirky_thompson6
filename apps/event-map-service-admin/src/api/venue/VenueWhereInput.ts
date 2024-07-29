import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VenueWhereInput = {
  address?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
};
