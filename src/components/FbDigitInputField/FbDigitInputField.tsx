import React from 'react';
import {TextInput} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {FBDigitInputFieldProps} from './typesFile';

const FBDigitInputField = (props: FBDigitInputFieldProps) => {
  const {
    testID,
    digitValue,
    setDigitValue,
    refValue,
    backPressEvent,
    autofocus = false,
  } = props;
  return (
    <TextInput
      // testID={'digit_field_' + testID && testID}
      // HOW do I mock the components that use this which internally has its testID?
      testID={'digit_field'}
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
/**
 * NOTE:
 * See how to mock the test id here which will take id from screens also.
 * Do the same for other components in other screens also.
 * Add interace and types for all components and functions and screens.
 * Need to write test cases for screens also next
 * OTP TEXT Input fields need to be better.
 * The ShortButton -> useRef position moving ahead and backpress scenarios
 * Implement Native Module for sending SMS and then integrate it to RN via Native Bridging
 */
