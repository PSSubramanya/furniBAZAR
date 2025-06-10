import React from 'react';
import {render} from '@testing-library/react-native';
import ProductViewScreen from './ProductViewScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render ProductViewScreen correctly", () => {
  it('render the snapshot of the component ProductViewScreen', () => {
    const snapshot = render(
      <ProductViewScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
