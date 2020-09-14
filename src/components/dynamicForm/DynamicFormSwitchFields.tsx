import React from 'react';
import {Text} from 'react-native';

import SubmitField from '../layout/formItem/SubmitField';
import TextInput from '../layout/formItem/TextField';
import SelectField from '../layout/formItem/SelectField';
import DatePickerField from '../layout/formItem/DatePickerField';
import PlaceField from '../layout/formItem/PlaceField';
import SwitchField from '../layout/formItem/SwitchField';

const DynamicFormSwitchFields = ({formData, ...restProps}) => {
  return formData.map((item) => {
    switch (item.field) {
      case 'submit_button':
      case 'submit':
        return <SubmitField item={item} {...restProps} />;
      case 'text':
      case 'password':
      case 'textarea':
      case 'email':
        return <TextInput item={item} {...restProps} />;
      case 'select':
        return <SelectField item={item} {...restProps} />;
      case 'select_place':
        return <PlaceField item={item} {...restProps} />;
      case 'switch':
        return <SwitchField item={item} {...restProps} />;
      case 'date':
      case 'date-picker':
        return <DatePickerField item={item} {...restProps} />;
      default:
        return (
          <>
            <Text>{`tipo ${item.type} não implementado`}</Text>
          </>
        );
    }
  });
};

export default DynamicFormSwitchFields;
