import React from 'react';
import {render} from '@testing-library/react-native';
import FBModalView from './FBModalView';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FBModalView correctly", () => {
  it('render the snapshot of the component FBModalView', () => {
    const snapshot = render(
      <FBModalView/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
