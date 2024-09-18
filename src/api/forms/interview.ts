const interview = {
  name: "interview",
  fields: [
    {
      label: "Введите своё ФИО",
      input: {
        type: "text",
        required: true,
        placeholder: "Иванов Иван Иванович",
      },
    },
    {
      label: "Введите Номер телефона",
      input: {
        type: "number",
        required: true,
        mask: "+7 (999) 99-99-999",
      },
    },
    {
      label: "Введите свою Почту",
      input: {
        type: "email",
        required: true,
        placeholder: "example@mail.com",
      },
    },
    {
      label: "Введите свой возраст",
      input: {
        type: "number",
        required: true,
      },
    },
    {
      label: "Введите вашу специальность",
      input: {
        type: "text",
        required: true,
      },
    },
    {
      label: "Выберете технологии, с которыми вы работали",
      input: {
        type: "select",
        required: true,
        options: [
          "JavaScript",
          "Angular",
          "Vue",
          "TypeScript",
          "HTML",
          "CSS",
          "React",
        ],
        multiple: true,
      },
    },
    {
      label: "Ваш срок работы",
      input: {
        type: "number",
        required: true,
      },
    },
    {
      label: "Ваша фотография",
      input: {
        type: "file",
        required: true,
      },
    },
    {
      label: "Серия, номер",
      input: {
        type: "number",
        required: true,
        mask: "99-99 999999",
      },
    },
    {
      label: "Код подразделения",
      input: {
        type: "number",
        required: true,
        mask: "999-999",
      },
    },
    {
      label: "Скан / Фото паспорта (1 страница)",
      input: {
        type: "file",
        required: true,
        multiple: true,
        filetype: ["png", "jpeg", "pdf"],
      },
    },
  ],
  buttons: [
    {
      text: "Send",
      type: "submit",
    },
    {
      text: "Cancel",
      type: "button",
    },
  ],
};

export default interview;
