import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FBCarouselSlider from './FBCarouselSlider';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

/*
// This needs to be used in screens spec file

import {Provider} from "react-redux"
<Provider store={mockStore}>
... Add the Screen Component here
</Provider>

*/

const mockData = [
  {
    id: 0,
    header: 'Header',
    description: 'Description',
    discount: '10%',
    coverImage: imagePath?.furnitureIcon,
  },
];

describe('render FBCarouselSlider correctly', () => {
  const mockFunction = jest.fn();
  it('mocking the FBCarouselSlider component', () => {
    const {getByTestId} = render(
      <FBCarouselSlider carouselOfferData={mockData} />,
    );
    const carousalSliderView = getByTestId(
      testID?.carousalSlider?.view + mockData?.[0]?.id,
    );
    const carousalSliderHeader = getByTestId(
      testID?.carousalSlider?.header + mockData?.[0]?.id,
    );
    const carousalSliderImage = getByTestId(
      testID?.carousalSlider?.image + mockData?.[0]?.id,
    );
    const carousalSliderDescription = getByTestId(
      testID?.carousalSlider?.description + mockData?.[0]?.id,
    );
    const carousalSliderDiscountView = getByTestId(
      testID?.carousalSlider?.discountView + mockData?.[0]?.id,
    );
    const carousalSliderTagIcon = getByTestId(testID?.tagIcon);
    const carousalSliderDiscountValue = getByTestId(
      testID?.carousalSlider?.discountValue + mockData?.[0]?.id,
    );

    expect(carousalSliderView)?.toBeTruthy();
    expect(carousalSliderHeader)?.toBeTruthy();
    expect(carousalSliderImage)?.toBeTruthy();
    expect(carousalSliderDescription)?.toBeTruthy();
    expect(carousalSliderDiscountView)?.toBeTruthy();
    expect(carousalSliderTagIcon)?.toBeTruthy();
    expect(carousalSliderDiscountValue)?.toBeTruthy();
  });

  it('mocking the Flatlist and features of FBCarouselSlider component', () => {
    const {getByTestId} = render(
      <FBCarouselSlider carouselOfferData={mockData} />,
    );

    const carousalSliderData = getByTestId(testID?.carousalSlider?.list);

    fireEvent.scroll(carousalSliderData, {
      nativeEvent: {
        contentOffset: {
          x: 200,
          y: 0,
        },
        contentSize: {
          width: 800,
          height: 600,
        },
        layoutMeasurement: {
          width: 400,
          height: 600,
        },
      },
    });
    fireEvent(carousalSliderData, 'onScrollEndDrag', {
      nativeEvent: {
        velocity: {
          x: 1,
          y: 0,
        },
      },
    });
    expect(carousalSliderData)?.toBeTruthy();
  });

  it('render the snapshot of the component FBCarouselSlider', () => {
    const snapshot = render(
      <FBCarouselSlider carouselOfferData={mockData} />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
