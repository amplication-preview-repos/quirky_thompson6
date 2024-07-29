import { Module } from "@nestjs/common";
import { EventManagementService } from "./eventmanagement.service";
import { EventManagementController } from "./eventmanagement.controller";
import { EventManagementResolver } from "./eventmanagement.resolver";

@Module({
  controllers: [EventManagementController],
  providers: [EventManagementService, EventManagementResolver],
  exports: [EventManagementService],
})
export class EventManagementModule {}
