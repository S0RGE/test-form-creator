const addpost = {
  name: "addpost",
  fields: [
    {
      label: "Title",
      tabIndex: 1,
      name: "title",
      input: {
        type: "text",
        required: true,
      },
    },
    {
      label: "Date",
      tabIndex: 2,
      name: "date",
      input: {
        type: "text",
        required: true,
      },
    },
    {
      label: "Author",
      tabIndex: 3,
      name: "author",
      input: {
        type: "text",
      },
    },
  ],
};

export default addpost;
