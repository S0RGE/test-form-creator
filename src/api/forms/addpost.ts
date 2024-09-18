const addpost = {
  name: "addpost",
  fields: [
    {
      label: "Title",
      input: {
        type: "text",
        required: true,
      },
    },
    {
      label: "Image",
      input: {
        type: "file",
        required: true,
      },
    },
    {
      label: "Author",
      input: {
        type: "text",
      },
    },
  ],
  buttons: [
    {
      text: "Create Post",
    },
  ],
};

export default addpost;
