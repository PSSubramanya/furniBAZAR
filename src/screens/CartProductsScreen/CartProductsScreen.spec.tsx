import React from 'react';
import {render} from '@testing-library/react-native';
import CartProductsScreen from './CartProductsScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render CartProductsScreen correctly", () => {
  it('render the snapshot of the component CartProductsScreen', () => {
    const snapshot = render(
      <CartProductsScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
