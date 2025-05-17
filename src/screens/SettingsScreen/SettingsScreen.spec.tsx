import React from 'react';
import {render} from '@testing-library/react-native';
import SettingsScreen from './SettingsScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render SettingsScreen correctly", () => {
  it('render the snapshot of the component SettingsScreen', () => {
    const snapshot = render(
      <SettingsScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
