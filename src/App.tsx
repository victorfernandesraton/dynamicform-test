import React from "react";

import FormUser from "./DynamicFrom/form/business/FormUser";
import Dyamicform from "./components/dynamicForm/DynamicFormView-container";

import FormJson from "./Form.json";
import * as Yup from "yup";

function App() {
  const formjson = {
    username: {
      label: "Nome",
      // Pode omitir o nome se usar um json onde a propriedade pode equivaler o nome
      // name: "username",
      field: "single",
      type: "text",
      required: true,
      minLength: 3,
    },
    lastname: {
      label: "Sobrenome",
      field: "single",
      type: "text",
      required: true,
    },
    usermai: {
      label: "Email",
      field: "single",
      type: "email",
      required: true,
    },
    gender: {
      label: "Gênero",
      field: "multi",
      type: "select",
      options: [
        { label: "Masculino", value: 1, default: true },
        { label: "Feminino", value: 2 },
      ],
    },
    save: { field: "single", type: "submit", label: "Enviar" }
  };

 
  // Possui dados padrões para preencher o formulário
  const formUser1 = new FormUser(
    { formSkeleton: FormJson.form, mutation: "" },
    { username: "Ana", gender: 2, usermail: "ana@teste.com" }
    );
    formUser1.build();
    
  // Não possui dados padrões para preencher o formulário
  const formUser2 = new FormUser({
    formSkeleton: FormJson.form,
    mutation: "",
  });
  formUser2.build()

  // Função wrap
  formUser2.wrap({ gender: 1, username: "Fabio" });

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

  return (
    <div className="App">
      <h1>Sem uso de entidade</h1>
      <h2>Apenas pelo JSON</h2>
      <Dyamicform form={FormJson.form} />
      <h2>JSON + esquema de vlidação (yup)</h2>
      <Dyamicform form={FormJson.form} validations={validationYup} />
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
      <h1>Uso de json</h1>
      <Dyamicform
        form={formjson}
      />
    </div>
  );
}

export default App;
