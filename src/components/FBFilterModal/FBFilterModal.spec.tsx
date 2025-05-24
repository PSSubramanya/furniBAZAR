import React from 'react';
import {render} from '@testing-library/react-native';
import FBFilterModal from './FBFilterModal';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FBFilterModal correctly", () => {
  it('render the snapshot of the component FBFilterModal', () => {
    const snapshot = render(
      <FBFilterModal/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
