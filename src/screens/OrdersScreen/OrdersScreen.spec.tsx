import React from 'react';
import {render} from '@testing-library/react-native';
import OrdersScreen from './OrdersScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render OrdersScreen correctly", () => {
  it('render the snapshot of the component OrdersScreen', () => {
    const snapshot = render(
      <OrdersScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
