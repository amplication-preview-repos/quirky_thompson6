import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";

@ArgsType()
class FilterEventsByDateInput {
    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;
}

export { FilterEventsByDateInput as FilterEventsByDateInput };