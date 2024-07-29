import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EventManagementService } from "./eventmanagement.service";
import { FilterEventsByDateInput } from "../eventManagement/FilterEventsByDateInput";
import { EventDto } from "../eventManagement/EventDto";

@swagger.ApiTags("eventManagements")
@common.Controller("eventManagements")
export class EventManagementController {
  constructor(protected readonly service: EventManagementService) {}

  @common.Post("/add-event")
  @swagger.ApiOkResponse({
    type: EventDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddEvent(
    @common.Body()
    body: FilterEventsByDateInput
  ): Promise<EventDto> {
        return this.service.AddEvent(body);
      }

  @common.Get("/filter-events-by-date")
  @swagger.ApiOkResponse({
    type: EventDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FilterEventsByDate(
    @common.Body()
    body: FilterEventsByDateInput
  ): Promise<EventDto[]> {
        return this.service.FilterEventsByDate(body);
      }
}
