import React from 'react';
import {render} from '@testing-library/react-native';
import FavouriteScreen from './FavouriteScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FavouriteScreen correctly", () => {
  it('render the snapshot of the component FavouriteScreen', () => {
    const snapshot = render(
      <FavouriteScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
