import React from 'react';

import FormUser from './DynamicFrom/strategy/form/FormUser'; 
import FormUserLanguage from './DynamicFrom/strategy/form/FormUserLanguage' 

const formUser = [
  {label: 'Nome', type:'text', name: 'st_firstname'},
  {label: 'Sobrenome', type:'text', name: 'st_lastname'},
  {label: "Gênero", name:"fk_gender", type: "select", options: [
    {label: 'Masculino', value: 1},
    {label: 'Feminino', value: 2}
  ]},
]
const fromUserConfiguration = [
  {label: "Pais", name:"fk_country", type: "select", options: [
    {label: 'Brasil', value: 1},
    {label: 'Estados Unidos', value: 2}
  ]},
  {label: 'email', type:'email', name:'st_mail'},
  {label: 'CEP', type:'number', name:'nm_cep'}
]

const user1 = {
  st_fisrtname: 'paulo',
  st_lastname: 'jose',
  st_language: 'pt-Br',
  fk_country: 1,
  nm_cep: 41366678
}

const user2 = {
  st_fisrtname: 'ana',
  st_country: 'br',
  email: 'ana@ana.com',
}


const form1User1 = new FormUser({formSkeleton: formUser, mutation: 'teste'}, user1);
const form1User2 = new FormUser({formSkeleton: formUser, mutation: 'teste'}, user2);
const form2User1 = new FormUserLanguage({formSkeleton: fromUserConfiguration, mutation: 'teste'}, user1);
const form2User2 = new FormUserLanguage({formSkeleton: fromUserConfiguration, mutation: 'teste'}, user2);

form1User1.wrap({}, 'edit')
form1User2.wrap({}, 'edit')
form2User1.wrap({}, 'edit')
form2User1.wrap({}, 'edit')

console.log(form1User1.getForm(), form1User2.getForm(), form2User2.getForm(), form2User1.getForm())
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
