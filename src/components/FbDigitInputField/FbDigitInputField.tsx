import React from 'react';
import {TextInput, View} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import colors from '../../constants/colors';
import styles from './styles';

const FBDigitInputField = (props: any) => {
  const {
    digitValue,
    setDigitValue,
    refValue,
    backPressEvent,
    handInputFields,
    autofocus = false,
  } = props;
  return (
    <TextInput
      value={digitValue}
      style={[
        styles?.textInputStyle,
        {
          borderWidth: refValue?.current?.isFocused() ? 2 : 1,
          backgroundColor: refValue?.current?.isFocused()
            ? colors?.skyBlue
            : colors?.lightSkyBlue,
          borderColor: refValue?.current?.isFocused()
            ? colors?.secondaryColor
            : colors?.black,
        },
      ]}
      ref={refValue}
      autoFocus={autofocus}
      returnKeyType="next"
      onChangeText={val => {
        handInputFields();
        setDigitValue(val);
      }}
      onKeyPress={ev => {
        backPressEvent(ev);
      }}
      keyboardType="numeric"
      maxLength={1}
    />
  );
};
export default FBDigitInputField;
