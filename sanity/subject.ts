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
    }),
    {
      title: "slug",
      name: "Slug",
      type: "slug",
      options: { source: "subject" },
    },
    {
      name: "image",
      title: "Subjects Image",
      type: "image",
    },
  ],
});
