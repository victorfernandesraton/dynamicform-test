import React from 'react';

import DatePicker from '../../datepicker/DatePicker';
import {Text} from 'react-native';

function DatePickerField(props) {
  const {item, formProps} = props;
  const {values, setFieldValue} = formProps;

  return (
    <>
      {item.label && <Text>{item.label}</Text>}
      <DatePicker
        value={values[item.name]}
        onDateChange={(date) => setFieldValue(item.name, date)}
        disabled={item.disabled}
        placeholder={item.placeholder}
        formatString={item.format || 'dd/MM/yyyy h:mm aa'}
      />
    </>
  );
}

export default DatePickerField;
