import React from 'react';
import {render} from '@testing-library/react-native';
import FBPagination from './FBPagination';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FBPagination correctly", () => {
  it('render the snapshot of the component FBPagination', () => {
    const snapshot = render(
      <FBPagination/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
