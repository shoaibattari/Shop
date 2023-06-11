import { defineType, defineField } from "sanity";

export const subject = defineType({
  name: "subject",
  title: "Subject",
  type: "document",
  fields: [
    defineField({
      name: "Subject",
      title: "Subject",
      type: "string",
    }), {
      name: "image",
      title: "Subjects Image",
      type: "image",
    },
  ]
})
