export default [
  {
    label: "Nome",
    name: "username",
    field: "single",
    type: "text",
    required: true,
    minLength: 3,
  },
  {
    label: "Sobrenome",
    name: "lastname",
    field: "single",
    type: "text",
    required: true,
  },
  {
    label: "Email",
    name: "usermail",
    field: "single",
    type: "email",
    required: true,
  },
  {
    label: "Gênero",
    name: "gender",
    field: "multi",
    type: "select",
    options: [
      { label: "Masculino", value: 1, default: true },
      { label: "Feminino", value: 2 },
    ],
  },
  { name: "save", field: "single", type: "submit", label: "Enviar" },
];
