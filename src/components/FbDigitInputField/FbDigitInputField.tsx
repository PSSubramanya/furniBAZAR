import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

interface FBDigitInputFieldProps {
  digitValue: string;
  setDigitValue: Dispatch<SetStateAction<string>>;
  refValue: RefObject<TextInput | null>;
  backPressEvent: (
    ev: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  handInputFields: () => void;
  autofocus?: boolean;
  testID?: string;
}

const FBDigitInputField = (props: FBDigitInputFieldProps) => {
  const {
    testID,
    digitValue,
    setDigitValue,
    refValue,
    backPressEvent,
    handInputFields,
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
/**
 * NOTE:
 * See how to mock the test id here which will take id from screens also.
 * Do the same for other components in other screens also.
 * Add interace and types for all components and functions and screens.
 */
