import React from "react";

import FormUser from "./DynamicFrom/form/business/FormUser";
import DynamicForm from "./components/dynamicForm/DynamicFormView-container";

const formSkeleton = [
  { label: "Nome", name: "username", type: "single", field: "text" },
  { label: "Sobrenome", name: "lastname", type: "single", field: "text" },
  { label: "Email", name: "usermail", type: "single", field: "email", required: true},
  {
    label: "Gênero",
    name: "gender",
    type: "multi",
    field: "select",
    options: [
      { label: "Masculino", value: 1 },
      { label: "Feminino", value: 2 },
    ],
  },
  {name: 'save', type: 'single', field: 'submit', label: 'Enviar', onSubmit: (value: any, sec: any) => console.log(value, sec)}
];
const user = { username: "Ana", gender: 2 };
const formUser = new FormUser(
  {
    formSkeleton,
    mutation: "",
  },
  user
);

formUser.wrap({ field: "edit" });

function App() {
  return (
    <div className="App">
      <DynamicForm formData={formUser.getForm()} validationSchema={formUser.validateSchema()} enableRenitialize />
    </div>
  );
}

export default App;
