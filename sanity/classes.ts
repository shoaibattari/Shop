import { defineType, defineField } from "sanity";

export const classes = defineType({
  name: "classes",
  title: "Classes",
  type: "document",
  fields: [
    defineField({
      name: "Classes",
      title: "Classes",
      type: "string",
    }),
    {
      title: "slug",
      name: "Slug",
      type: "slug",
      options: { source: "Classes" },
    },
    {
      name: "image",
      title: "Classes Image",
      type: "image",
    },
  ],
});
