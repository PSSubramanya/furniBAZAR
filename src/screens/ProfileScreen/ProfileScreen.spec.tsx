import React from 'react';
import {render} from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render ProfileScreen correctly", () => {
  it('render the snapshot of the component ProfileScreen', () => {
    const snapshot = render(
      <ProfileScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
