import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreenContent from './HomeScreenContent';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render HomeScreenContent correctly", () => {
  it('render the snapshot of the component HomeScreenContent', () => {
    const snapshot = render(
      <HomeScreenContent/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
