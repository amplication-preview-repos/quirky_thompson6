import * as graphql from "@nestjs/graphql";
import { CreateEventInput } from "../eventManagement/CreateEventInput";
import { EventDto } from "../eventManagement/EventDto";
import { FilterEventsByDateInput } from "../eventManagement/FilterEventsByDateInput";
import { EventManagementService } from "./eventmanagement.service";

export class EventManagementResolver {
  constructor(protected readonly service: EventManagementService) {}

  @graphql.Mutation(() => EventDto)
  async AddEvent(
    @graphql.Args()
    args: CreateEventInput
  ): Promise<EventDto> {
    return this.service.AddEvent(args);
  }

  @graphql.Query(() => [EventDto])
  async FilterEventsByDate(
    @graphql.Args()
    args: FilterEventsByDateInput
  ): Promise<EventDto[]> {
    return this.service.FilterEventsByDate(args);
  }
}
