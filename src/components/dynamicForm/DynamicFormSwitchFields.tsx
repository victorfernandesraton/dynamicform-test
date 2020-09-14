import React from 'react';

// TODO: fazer funcionar compoentes nativos
// import {Text} from 'react-native';

// import SubmitField from '../layout/formItem/SubmitField';
// import TextInput from '../layout/formItem/TextField';
// import SelectField from '../layout/formItem/SelectField';
// import DatePickerField from '../layout/formItem/DatePickerField';
// import PlaceField from '../layout/formItem/PlaceField';
// import SwitchField from '../layout/formItem/SwitchField';

const DynamicFormSwitchFields = ({formData, ...restProps}) => {
  return formData.map((item: any) => {
    switch (item.field) {
      case 'submit_button':
      case 'submit':
        return <button type='submit' value={item.label} name={item.name} />
      case 'text':
      case 'password':
      case 'textarea':
      case 'email':
      case 'date':
      case 'date-picker':
        return (
          <>
            {item.label && <label>{item.label}</label>}
            <input type={item.field} value={item.initialValue} />
          </> 
        ) 
      case 'select':
        return (
          <>
            <select name={item.name}>
              {item.options.map((el: any, key: number) => {
                return <option key={key} value={el.value}>{el.label}</option>
              })}
            </select>
          </>
        ) 
      case 'switch':
        return (
          <>
            {item.options.map((el: any, key: number) => <input key={key}type='radio' value={el.value} />)}
          </>)
        ;
      default:
        return (
          <>
            {`tipo ${item.type} não implementado`}
          </>
        );
    }
  });
};

export default DynamicFormSwitchFields;
