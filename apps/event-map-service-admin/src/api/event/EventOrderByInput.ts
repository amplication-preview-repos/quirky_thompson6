import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  description?: SortOrder;
  eventTypeId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
