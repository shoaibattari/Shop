import { type SchemaTypeDefinition } from "sanity";
import { product} from "./product";
import { subject} from "./subject"
import { classes } from "./classes";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, subject, classes ],
};
