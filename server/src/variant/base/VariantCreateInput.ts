/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumVariantName } from "./EnumVariantName";
import { IsEnum, IsOptional, ValidateNested, IsString } from "class-validator";
import { EnumVariantOption } from "./EnumVariantOption";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class VariantCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumVariantName,
  })
  @IsEnum(EnumVariantName)
  @Field(() => EnumVariantName)
  name!: "S70x50" | "S50x40" | "S40x30" | "S30x21";

  @ApiProperty({
    required: false,
    enum: EnumVariantOption,
  })
  @IsEnum(EnumVariantOption)
  @IsOptional()
  @Field(() => EnumVariantOption, {
    nullable: true,
  })
  option?: "Size" | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  sku!: string;
}
export { VariantCreateInput };
