import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render HomeScreen correctly", () => {
  it('render the snapshot of the component HomeScreen', () => {
    const snapshot = render(
      <HomeScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
