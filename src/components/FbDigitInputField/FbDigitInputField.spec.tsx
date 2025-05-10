import React, {RefObject} from 'react';
import {render} from '@testing-library/react-native';
import FBDigitInputField from './FBDigitInputField';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

describe('render FBDigitInputField correctly', () => {
  let autofocus: boolean;
  beforeEach(() => {
    autofocus = true;
  });

  it('render the FBDigitInputField with mock functions', () => {
    const mockFunction = jest.fn();
    const mockFunctionWithParam = jest.fn(
      (ev: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (ev?.nativeEvent?.key === 'Backspace') {
          console.log('Backspace Pressed');
        } else {
          console.log('Backspace Not Pressed');
        }
      },
    );
    const mockRef = {
      current: {
        focus: jest.fn(),
        isFocused: jest.fn(),
      },
    } as unknown as RefObject<TextInput | null>;
    const {getByTestId} = render(
      <FBDigitInputField
        digitValue={'0'}
        setDigitValue={mockFunction}
        refValue={mockRef}
        backPressEvent={mockFunctionWithParam}
        handInputFields={mockFunction}
        autofocus={autofocus}
      />,
    );
    const otpDigit = getByTestId('digit_field');
    expect(otpDigit)?.toBeDefined();
  });

  it('render the snapshot of the component FBDigitInputField', () => {
    const mockFunction = jest.fn();
    const mockFunctionWithParam = jest.fn(
      (ev: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (ev?.nativeEvent?.key === 'Backspace') {
          console.log('Backspace Pressed');
        } else {
          console.log('Backspace Not Pressed');
        }
      },
    );
    const mockRef = {
      current: {
        focus: jest.fn(),
        isFocused: jest.fn(),
      },
    } as unknown as RefObject<TextInput | null>;
    const snapshot = render(
      <FBDigitInputField
        digitValue={'0'}
        setDigitValue={mockFunction}
        refValue={mockRef}
        backPressEvent={mockFunctionWithParam}
        handInputFields={mockFunction}
        autofocus={autofocus}
      />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
