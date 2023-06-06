export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },

    {
      title: "slug",
      name: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "subject",
      title: "Subject",
      type: "reference",
      to: [
        {
          type: "subject",
        },
      ],
    },
    {
      name: "classes",
      title: "Classes",
      type: "reference",
      to: [
        {
          type: "classes",
        },
      ],
    },
  ],
};
