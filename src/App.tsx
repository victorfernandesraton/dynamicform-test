import React from "react";

import FormUser from "./DynamicFrom/form/business/FormUser";
import Dyamicform from "./components/dynamicForm/DynamicFormView-container";

import * as Yup from 'yup';

const formSkeleton = [
  { label: "Nome", name: "username", field: "single", type: "text",required: true, minLength: 3 },
  { label: "Sobrenome", name: "lastname", field: "single", type: "text", required: true },
  { label: "Email", name: "usermail", field: "single", type: "email", required: true},
  {
    label: "Gênero",
    name: "gender",
    field: "multi",
    type: "select",
    options: [
      { label: "Masculino", value: 1 },
      { label: "Feminino", value: 2 },
    ],
  },
  {name: 'save', field: 'single', type: 'submit', label: 'Enviar', onSubmit: (values: any) => console.log(values)}
];

const user = { username: "Ana", gender: 2 };

const formUser1 = new FormUser({formSkeleton,mutation: ""});
const formUser2 = new FormUser({formSkeleton,mutation: ""}, user);

formUser1.wrap({ field: "edit" });

const vaidationYup = Yup.object().shape({
  username: Yup.string().min(3, "Nome não possui caracteres suficiente").required("Nome is required"),
  lastname: Yup.string().min(3, "Nome não possui caracteres suficiente").required("Nome is required"),
  email:Yup.string().email("Email inválido").required("Email é obrigatório")
});

function App() {
  return (
    <div className="App">
      <h1>Sem uso de entidade</h1>
      <h2>Apenas pelo JSON</h2>
      <Dyamicform form={formSkeleton} />
      <h2>JSON + esquema de vlidação (yup)</h2>
      <Dyamicform form={formSkeleton} validations={vaidationYup} />
      <h1>Usando Strategy</h1>
      <h2>Apenas strategy</h2>
      <Dyamicform form={formUser1.getForm()} />
      <h2>Usando Strategy + validation (yup)</h2>
      <Dyamicform form={formUser1.getForm()} validations={formUser1.validateSchema()} />
      <h2>Usando Strategy + validation (da entidade)</h2>
      <Dyamicform form={formUser1.getForm()} validations={formUser1.validateSchema()} />
      <h1>Uso de entidade</h1>
      <h2>Com entidade e auto validação</h2>
      <Dyamicform entity={formUser1}  />
      <h2>Com entidade e e validação externa</h2>
      <Dyamicform entity={formUser1} validations={vaidationYup}/>
    </div>
  );
}

export default App;
