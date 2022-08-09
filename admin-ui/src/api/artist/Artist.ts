import { JsonValue } from "type-fest";
import { Product } from "../product/Product";
import { Tag } from "../tag/Tag";

export type Artist = {
  createdAt: Date;
  data: JsonValue;
  description: string | null;
  handle: string | null;
  id: string;
  metaDescription: string | null;
  metaTitle: string | null;
  products?: Array<Product>;
  tag?: Array<Tag>;
  title: string | null;
  translations: JsonValue;
  updatedAt: Date;
  wikidata: string | null;
};
