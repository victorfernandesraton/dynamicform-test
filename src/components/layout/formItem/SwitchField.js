import React, {useMemo} from 'react';
import {Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import {AwesomeBaseIcon} from '../../../styles/baseCSS';

const SwitchField = (props) => {
  const {item, formProps} = props;
  const {values, handleChange} = formProps;

  const handlePress = (value) => handleChange(item.name)(value);

  const memoOptions = useMemo(() => {
    return item.options.map(
      ({iconName, iconColor = 'black', iconSize = 20, ...option}) => {
        if (iconName) {
          option.customIcon = (
            <AwesomeBaseIcon
              name={iconName}
              color={iconColor}
              size={iconSize}
            />
          );
        }
        return option;
      },
    );
  }, [item.option]);

  return (
    <>
      {item.label && <Text>{item.label}</Text>}
      <SwitchSelector
        initial={memoOptions.findIndex((val) => val.default || val.isDefault)}
        onPress={handlePress}
        borderRadius={0}
        textColor={item.textColor}
        selectedColor={item.selectedColor}
        buttonColor={item.buttonColor}
        borderColor={item.borderColor}
        hasPadding
        options={memoOptions}
      />
    </>
  );
};

/*
{
    name: ...,
    type: 'radio_button',
    options: []
}
*/

export default SwitchField;
