import React from 'react';
import {render} from '@testing-library/react-native';
import FBSlider from './FBSlider';

describe('render FBSlider correctly', () => {
  it('render the snapshot of the component FBSlider', () => {
    const snapshot = render(<FBSlider />).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
