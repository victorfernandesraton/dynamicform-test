import React from 'react';
import {Picker, Text} from 'react-native';

const SelectField = (props) => {
  const {item, formProps} = props;
  const {values, handleChange} = formProps;
  return (
    <>
      {item.label && <Text>{item.label}</Text>}
      <Picker
        disabled={item.disabled}
        selectedValue={values[item.name]}
        style={{height: 50, width: 100}}
        onValueChange={handleChange(item.name)}>
        {item.options.map((option) => (
          <Picker.Item label={option.label} value={option.value} />
        ))}
      </Picker>
    </>
  );
};

export default SelectField;
