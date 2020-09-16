import React from "react";

import FormUser from "./DynamicFrom/form/business/FormUser";
import Dyamicform from "./components/dynamicForm/DynamicFormView-container";

import FormJson from "./Form.json";
import FormJson2 from "./Form.json";
import * as Yup from "yup";

function App() {
  const formSkeleton = [
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

  // Composição de objeto usuário
  const user = { username: "Ana", gender: 2, usermail: "ana@teste.com" };
  // // Não possui dados padrões para preencher o formulário
  const formUser1 = new FormUser(
    { formSkeleton: FormJson.form, mutation: "" },
    user
  );
  // // Possui dados padrões para preencher o formulário
  const formUser2 = new FormUser({
    formSkeleton: FormJson2.form,
    mutation: "",
  });

  formUser1.wrap();
  formUser2.wrap({ gender: 2 });

  const validationYup = Yup.object().shape({
    username: Yup.string()
      .min(3, "Nome não possui caracteres suficiente")
      .required("Nome is required"),
    lastname: Yup.string()
      .min(3, "SObrenome não possui caracteres suficiente")
      .required("Sobrenome is required"),
    usermail: Yup.string()
      .email("Email inválido")
      .required("Email é obrigatório"),
  });

  // TODO: email não está validando
  return (
    <div className="App">
      <h1>Sem uso de entidade</h1>
      <h2>Apenas pelo JSON</h2>
      <Dyamicform form={formSkeleton} />
      <h2>JSON + esquema de vlidação (yup)</h2>
      <Dyamicform form={formSkeleton} validations={validationYup} />
      <h1>Usando Strategy</h1>
      <h2>Apenas strategy</h2>
      <Dyamicform form={formUser1.getForm()} />
      <h2>Usando Strategy + validation (yup)</h2>
      <Dyamicform form={formUser1.getForm()} validations={validationYup} />
      <h2>Usando Strategy + validation (da entidade)</h2>
      <Dyamicform
        form={formUser1.getForm()}
        validations={formUser1.validateSchema()}
      />
      <h1>Uso de entidade</h1>
      <h2>Com entidade e auto validação</h2>
      <Dyamicform entity={formUser2} />
      <h2>Com entidade e validação externa</h2>;
      <Dyamicform entity={formUser2} validations={validationYup} />
      <h2>Com entidade e valor padrão (editar) </h2>
      <Dyamicform entity={formUser2} />
    </div>
  );
}

export default App;
