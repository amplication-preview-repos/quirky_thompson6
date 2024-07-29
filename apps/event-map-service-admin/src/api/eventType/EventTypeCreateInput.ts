import { EventCreateNestedManyWithoutEventTypesInput } from "./EventCreateNestedManyWithoutEventTypesInput";

export type EventTypeCreateInput = {
  events?: EventCreateNestedManyWithoutEventTypesInput;
  name?: string | null;
};
