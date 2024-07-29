import { Injectable } from "@nestjs/common";
import { CreateEventInput } from "../eventManagement/CreateEventInput";
import { EventDto } from "../eventManagement/EventDto";
import { FilterEventsByDateInput } from "../eventManagement/FilterEventsByDateInput";

@Injectable()
export class EventManagementService {
  constructor() {}
  async AddEvent(args: CreateEventInput): Promise<EventDto> {
    throw new Error("Not implemented");
  }
  async FilterEventsByDate(args: FilterEventsByDateInput): Promise<EventDto[]> {
    throw new Error("Not implemented");
  }
}
