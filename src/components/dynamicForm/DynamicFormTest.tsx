import React from 'react';

import Dynamicform from './DynamicFormView-container';

const DynamicFormTest = (props: any) => {
  return (
    <div>
      <Dynamicform
        formData={[
          {
            name: 'texto',
            label: 'Texto:',
            type: 'email',
            initialValue: 'teste_value',
            placeholder: 'teste',
          },
          {type: 'password', label: 'Senha:', name: 'senha'},
          {
            type: 'date',
            label: 'uma data',
            name: 'date-user',
            initialValue: new Date('2012/04/16'),
            format: 'dd/MMM/yyyy h:mm aa',
          },
          {
            type: 'select',
            label: 'Teste Select:',
            name: 'select',
            options: [
              {label: 'Select 1', value: 'select_1'},
              {label: 'Select 2', value: 'select_2', default: true},
            ],
          },
          {
            type: 'switch',
            label: 'Sexo:',
            name: 'gender',
            buttonColor: 'blue',
            options: [
              {
                label: 'Masculino',
                value: 'M',
                default: true,
                iconName: 'male',
                iconColor: 'black',
                iconSize: 24
              },
              {
                label: 'Feminino',
                value: 'F',
                iconName: 'female',
                iconColor: 'black',
                iconSize: 24
              },
            ],
          },
          {
            type: 'select_place',
            label: 'Cidade: ',
            name: 'place',
            initialValue: {},
          },
          {
            name: 'submit',
            type: 'submit',
            label: 'Enviar',
            onSubmit: (values: any, handleChange: Function) => {
              console.log(values, 'teste', handleChange('texto')('mudei'));
            },
          },
        ]}
      />
    </div>
  );
};

export default DynamicFormTest;
