import React from 'react';
import {render} from '@testing-library/react-native';
import FBSlider from './FBSlider';
import testID from '../../constants/testIdConstants';

describe('render FBSlider correctly', () => {
  it('mocking the features of FBSlider component', () => {
    const {getByTestId} = render(<FBSlider />);

    const sliderView = getByTestId(testID?.slider?.view);
    const sliderLine = getByTestId(testID?.slider?.line);
    const sliderDot = getByTestId(testID?.slider?.dot);

    expect(sliderView)?.toBeTruthy();
    expect(sliderLine)?.toBeTruthy();
    expect(sliderDot)?.toBeTruthy();
  });

  it('render the snapshot of the component FBSlider', () => {
    const snapshot = render(<FBSlider />).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
