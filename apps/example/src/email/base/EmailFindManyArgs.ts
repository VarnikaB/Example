/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmailWhereInput } from "./EmailWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmailOrderByInput } from "./EmailOrderByInput";

@ArgsType()
class EmailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmailWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmailWhereInput, { nullable: true })
  @Type(() => EmailWhereInput)
  where?: EmailWhereInput;

  @ApiProperty({
    required: false,
    type: [EmailOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmailOrderByInput], { nullable: true })
  @Type(() => EmailOrderByInput)
  orderBy?: Array<EmailOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmailFindManyArgs as EmailFindManyArgs };
