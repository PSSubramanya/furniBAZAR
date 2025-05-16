import React from 'react';
import {render} from '@testing-library/react-native';
import FBBottomDrawerImage from './FBBottomDrawerImage';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FBBottomDrawerImage correctly", () => {
  it('render the snapshot of the component FBBottomDrawerImage', () => {
    const snapshot = render(
      <FBBottomDrawerImage/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
