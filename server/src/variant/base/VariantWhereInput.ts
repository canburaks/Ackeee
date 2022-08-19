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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumVariantMaterial } from "./EnumVariantMaterial";
import { EnumVariantOption } from "./EnumVariantOption";
import { FloatFilter } from "../../util/FloatFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { EnumVariantSize } from "./EnumVariantSize";
@InputType()
class VariantWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumVariantMaterial,
  })
  @IsEnum(EnumVariantMaterial)
  @IsOptional()
  @Field(() => EnumVariantMaterial, {
    nullable: true,
  })
  material?: "basic" | "wooden";

  @ApiProperty({
    required: false,
    enum: EnumVariantOption,
  })
  @IsEnum(EnumVariantOption)
  @IsOptional()
  @Field(() => EnumVariantOption, {
    nullable: true,
  })
  option?: "size" | "material";

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  price?: FloatFilter;

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
  product?: ProductWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumVariantSize,
  })
  @IsEnum(EnumVariantSize)
  @IsOptional()
  @Field(() => EnumVariantSize, {
    nullable: true,
  })
  size?: "S70x50" | "S50x40" | "S40x30" | "S30x21";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  sku?: StringFilter;
}
export { VariantWhereInput };
