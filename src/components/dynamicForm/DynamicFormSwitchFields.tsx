import React from 'react';

// TODO: fazer funcionar compoentes nativos
// import {Text} from 'react-native';

// import SubmitField from '../layout/formItem/SubmitField';
// import TextInput from '../layout/formItem/TextField';
// import SelectField from '../layout/formItem/SelectField';
// import DatePickerField from '../layout/formItem/DatePickerField';
// import PlaceField from '../layout/formItem/PlaceField';
// import SwitchField from '../layout/formItem/SwitchField';


const DynamicFormSwitchFields = (props: any) => {
  const {formData, formProps} = props;
  const {error} = formProps;
  const {values, handleChange} = formProps;
  return formData.map((item: any) => {
    switch (item.field) {
      case 'submit_button':
      case 'submit':
        return <button onClick={item.onSubmit} type='submit' value={values[item.label]} name={item.name} >{item.label}</button>
      case 'text':
      case 'password':
      case 'textarea':
      case 'email':
      case 'date':
      case 'date-picker':
        return (
          <>
            {item.label && <label>{item.label}</label>}
            <input type={item.field} value={values[item.label]} onChange={(e) => {
              handleChange(item.name)(e.target.value)
            }}/>
            {error && error[item.name] && (<p>{error[item.name]}</p>)}
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
            {error && error[item.name] && (<p>{error[item.name]}</p>)}
          </>
        ) 
      case 'switch':
        return (
          <>
            {item.options.map((el: any, key: number) => <input key={key}type='radio' value={el.value} />)}
            {error[item.name] && (<p>{error[item.name]}</p>)}
          </>)
        ;
      default:
        return (
          <>
            {`tipo ${item.field} não implementado`}
          </>
        );
    }
  });
};

export default DynamicFormSwitchFields;
