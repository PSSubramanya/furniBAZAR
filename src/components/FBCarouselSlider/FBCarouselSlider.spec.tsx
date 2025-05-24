import React from 'react';
import {render} from '@testing-library/react-native';
import FBCarouselSlider from './FBCarouselSlider';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';


describe("render FBCarouselSlider correctly", () => {
  it('render the snapshot of the component FBCarouselSlider', () => {
    const snapshot = render(
      <FBCarouselSlider/>,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
})
