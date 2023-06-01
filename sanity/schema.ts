import { type SchemaTypeDefinition } from "sanity";
import { product} from "./product";
import { subject} from "./subject"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, subject ],
};
