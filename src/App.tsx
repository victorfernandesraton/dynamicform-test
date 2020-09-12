import React from 'react';

import FormUser from './DynamicFrom/business/form/FormUser'; 
import FormUserLanguage from './DynamicFrom/business/form/FormUserLanguage' 

import App1 from './DynamicFrom/business/App';
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

const users = [
  {
    st_fisrtname: 'paulo',
    st_lastname: 'jose',
    st_language: 'pt-Br',
    fk_country: 1,
    nm_cep: 41366678
  },
  {
    st_fisrtname: 'ana',
    st_country: 'br',
    email: 'ana@ana.com',
  }
]



function App() {
  return (
    <div className="App">
      <App1 />
    </div>
  );
}

export default App;
