import React from 'react';
import {Text} from 'react-native';
import {Button} from 'native-base';

const SubmitField = (props) => {
  const {item, formProps, extraProps} = props;
  const {values, handleChange} = formProps;
  const {loading} = extraProps;

  switch (item.type) {
    case 'submit_button':
    case 'submit':
    default:
      return (
        <Button
          disabled={loading || item.disabled}
          onPress={() =>
            item.onSubmit ? item.onSubmit(values, handleChange) : null
          }>
          {item.label && <Text>{item.label}</Text>}
        </Button>
      );
  }
};

export default SubmitField;
