import React, {useState, useEffect, useRef, memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Button} from 'native-base';

import {getLocation} from './services/locale-action';

const PlaceField = (props) => {
  const {item, formProps} = props;
  const {setFieldValue} = formProps;

  // timer utilizado para controlar o delay para realizar o fetch quando usuário digita
  const timer = useRef(0);
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('');
  const [showList, setShowList] = useState(false);
  const [state, setState] = useState({
    loadingLocale: false,
    places: [],
  });

  const handlePress = (place) => () => {
    setShowList(false);
    setSelected(place.label);

    setText(place.label);
    setFieldValue(item.name, place.value);
  };

  useEffect(() => {
    if (!text.trim() || selected === text) {
      text === '' && setShowList(false);
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      setState({...state, loadingLocale: true});
      timer.current = setTimeout(() => {
        getLocation(text, 1)
          .then((places) => {
            if (places.length > 0) {
              setState({...state, loadingLocale: false, places});
              setShowList(true);
            }
          })
          .catch((e) => setState({...state, loadingLocale: false}));
      }, 300);
    }
  }, [text]);

  return (
    <View>
      {item.label && <Text>{item.label}</Text>}
      <TextInput
        disabled={item.disabled}
        placeholder={item.placeholder}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      {showList && (
        <View>
          {state.places.map((place) => (
            <Button
              onPress={handlePress(place)}
              style={{width: 300, height: 50, backgroundColor: '#fff'}}>
              <Text>{place.label}</Text>
            </Button>
          ))}
        </View>
      )}
    </View>
  );
};

export default memo(PlaceField);
