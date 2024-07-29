import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { VenueTitle } from "../venue/VenueTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTime" source="dateTime" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="EventType"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceInput source="venue.id" reference="Venue" label="Venue">
          <SelectInput optionText={VenueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
