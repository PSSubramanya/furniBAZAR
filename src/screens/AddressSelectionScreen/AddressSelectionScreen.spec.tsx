import React from 'react';
import {render} from '@testing-library/react-native';
import AddressSelectionScreen from './AddressSelectionScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render AddressSelectionScreen correctly", () => {
  it('render the snapshot of the component AddressSelectionScreen', () => {
    const snapshot = render(
      <AddressSelectionScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
