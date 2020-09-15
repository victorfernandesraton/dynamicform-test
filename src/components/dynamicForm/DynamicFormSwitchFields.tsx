import React from "react";
// import {Field, Form} from 'formik';
// TODO: fazer funcionar compoentes nativos
// import {Text} from 'react-native';

// import SubmitField from '../layout/formItem/SubmitField';
// import TextInput from '../layout/formItem/TextField';
// import SelectField from '../layout/formItem/SelectField';
// import DatePickerField from '../layout/formItem/DatePickerField';
// import PlaceField from '../layout/formItem/PlaceField';
// import SwitchField from '../layout/formItem/SwitchField';

const DynamicFormSwitchFields = (props: any) => {
  const { form, formProps } = props;
  const { values, handleChange, errors } = formProps;

  return (
    <>
      {form.map((item: any) => {
        switch (item.type) {
          case "submit_button":
          case "submit":
            return (
              <button
                disabled={Object.keys(errors).length > 0}
                onClick={item.onSubmit}
                type="submit"
                value={values[item.label]}
                name={item.name}
              >
                {item.label}
              </button>
            );
          case "text":
          case "password":
          case "textarea":
          case "email":
          case "date":
          case "date-picker":
            return (
              <>
                {item.label && <label>{item.label}</label>}
                <input
                  required={item.required}
                  name={item.name}
                  type={item.type}
                  value={values[item.name]}
                  onChange={(e: any) => handleChange(item.name)(e)}
                />
                {errors && errors[item.name] && <span>{errors[item.name]}</span>}
              </>
            );
          case "select":
            return (
              <>
                <select name={item.name}>
                  {item.options.map((el: any) => {
                    return (
                      <option value={el.value} selected={el.default}>
                        {el.label}
                      </option>
                    );
                  })}
                </select>
                {errors && errors[item.name] && <p>{errors[item.name]}</p>}
              </>
            );
          case "switch":
            return (
              <>
                {item.options.map((el: any, key: number) => (
                  <input
                    type="radio"
                    value={el.value}
                    onChange={handleChange}
                  />
                ))}
                {errors[item.name] && <p>{errors[item.name]}</p>}
              </>
            );
          default:
            return <>{`tipo ${item.type} não implementado`}</>;
        }
      })}
    </>
  )
};

export default DynamicFormSwitchFields;
