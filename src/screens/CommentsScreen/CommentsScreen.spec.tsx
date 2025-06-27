import React from 'react';
import {render} from '@testing-library/react-native';
import CommentsScreen from './CommentsScreen';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render CommentsScreen correctly", () => {
  it('render the snapshot of the component CommentsScreen', () => {
    const snapshot = render(
      <CommentsScreen/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
