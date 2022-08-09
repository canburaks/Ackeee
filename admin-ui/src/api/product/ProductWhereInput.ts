import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { VariantListRelationFilter } from "../variant/VariantListRelationFilter";

export type ProductWhereInput = {
  artist?: ArtistWhereUniqueInput;
  artistName?: StringNullableFilter;
  artistWikidata?: StringNullableFilter;
  artworkWikidata?: StringNullableFilter;
  collections?: CollectionListRelationFilter;
  description?: StringNullableFilter;
  featuredImage?: JsonFilter;
  handle?: StringNullableFilter;
  hasOnlyDefaultVariant?: BooleanNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  metaDescription?: StringNullableFilter;
  metafields?: JsonFilter;
  metaTitle?: StringNullableFilter;
  storefrontId?: StringNullableFilter;
  tags?: TagListRelationFilter;
  title?: StringNullableFilter;
  translations?: JsonFilter;
  variants?: VariantListRelationFilter;
};
