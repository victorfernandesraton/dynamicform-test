import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import {Button} from 'native-base';
import {AwesomeBaseIcon} from '../../../styles/baseCSS';

const TextField = (props) => {
  const [hidePass, setHidePass] = useState(true);

  const {item, formProps} = props;
  const {values, handleChange} = formProps;
  return (
    <>
      {item.label && <Text>{item.label}</Text>}
      <TextInput
        disabled={item.disabled}
        secureTextEntry={item.type === 'password' && hidePass}
        placeholder={item.placeholder}
        autoCompleteType={item.type}
        value={values[item.name] || ''}
        onChangeText={(text) => {
          if (item.onChange) {
            item.onChange(text);
          }
          handleChange(item.name)(text);
        }}
      />
      {item.type === 'password' && (
        <Button onClick={() => setHidePass(!hidePass)}>
          <AwesomeBaseIcon
            name={hidePass ? 'eye' : 'eye-slash'}
            size={18}
            color="black"
          />
        </Button>
      )}
    </>
  );
};

export default TextField;
