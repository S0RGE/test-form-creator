const interview = {
  name: "interview",
  fields: [
    {
      label: "Введите своё ФИО",
      tabIndex: 0,
      name: "fio",
      input: {
        type: "text",
        required: true,
        placeholder: "Иванов Иван Иванович",
      },
    },
    {
      label: "Введите Номер телефона",
      tabIndex: 2,
      name: "phone",
      input: {
        type: "number",
        required: true,
        mask: "+7 (999) 99-99-999",
      },
    },
    {
      label: "Введите свою Почту",
      tabIndex: 1,
      name: "email",
      input: {
        type: "email",
        required: true,
        placeholder: "example@mail.com",
      },
    },
    {
      label: "Введите свой возраст",
      tabIndex: 3,
      name: "age",
      input: {
        type: "number",
        required: false,
      },
    },
    {
      label: "Введите вашу специальность",
      tabIndex: 4,
      name: "speciality",
      input: {
        type: "text",
        required: true,
      },
    },
    {
      label: "Выберете технологии, с которыми вы работали",
      tabIndex: 5,
      name: "technologies",
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
      tabIndex: 6,
      name: "experience",
      input: {
        type: "number",
        required: true,
      },
    },
    {
      label: "Готовы работать удаленно?",
      tabIndex: 6,
      name: "remote",
      input: {
        type: "checkbox",
        required: true,
      },
    },
    // {
    //   label: "Ваша фотография",
    //   tabIndex: 7,
    //   name: "photo",
    //   input: {
    //     type: "file",
    //     required: true,
    //   },
    // },
    {
      label: "Серия, номер",
      tabIndex: 8,
      name: "passport",
      input: {
        type: "number",
        required: true,
        mask: "99-99 999999",
      },
    },
    {
      label: "Код подразделения",
      tabIndex: 9,
      name: "code",
      input: {
        type: "number",
        required: true,
        mask: "999-999",
      },
    },
    // {
    //   label: "Скан / Фото паспорта (1 страница)",
    //   tabIndex: 10,
    //   name: "passportPhoto",
    //   input: {
    //     type: "file",
    //     required: true,
    //     multiple: true,
    //     filetype: ["png", "jpeg", "pdf"],
    //   },
    // },
  ],
};

export default interview;
