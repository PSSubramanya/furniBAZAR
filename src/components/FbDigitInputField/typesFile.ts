import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

export interface FBDigitInputFieldProps {
  digitValue: string;
  setDigitValue: Dispatch<SetStateAction<string>>;
  refValue: RefObject<TextInput | null>;
  backPressEvent: (
    ev: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  autofocus?: boolean;
  testID?: string;
}
