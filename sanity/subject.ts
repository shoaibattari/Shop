import { defineType, defineField } from "sanity";

export const subject = defineType({
  name: "subject",
  title: "Subject",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Subject Name",
      type: "string",
    }),
  ]
})
