/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ProductUpdateManyWithoutArtistsInput {
  @Field(() => [ProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductWhereUniqueInput],
  })
  connect?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductWhereUniqueInput],
  })
  disconnect?: Array<ProductWhereUniqueInput>;

  @Field(() => [ProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductWhereUniqueInput],
  })
  set?: Array<ProductWhereUniqueInput>;
}
export { ProductUpdateManyWithoutArtistsInput };
