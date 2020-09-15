import React from "react";

import FormUser from "./DynamicFrom/form/business/FormUser";
import DynamicForm from "./components/dynamicForm/DynamicFormView-container";

const formSkeleton = [
  { label: "Nome", name: "username", type: "single", field: "text",required: true, minLength: 3 },
  { label: "Sobrenome", name: "lastname", type: "single", field: "text", required: true },
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
  {name: 'save', type: 'single', field: 'submit', label: 'Enviar', onSubmit: (values: any) => console.log(values)}
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
