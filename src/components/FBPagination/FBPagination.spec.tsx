import React from 'react';
import {render} from '@testing-library/react-native';
import FBPagination from './FBPagination';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

const mockData = [
  {
    id: 0,
    header: 'Carousal Header',
    description: 'Carousal Description',
    discount: '10%',
    coverImage: imagePath?.furnitureIcon,
  },
];
describe('render FBPagination correctly', () => {
  it('mock the selected dot style in FBPagination component', () => {
    const {getByTestId} = render(
      <FBPagination carousalIndex={0} carouselOfferData={mockData} />,
    );
    const paginationView = getByTestId(testID?.pagination?.view);
    const selectedDot = getByTestId(testID?.pagination?.selectedDot);
    const selectedDotText = getByTestId(testID?.pagination?.selectedDotText);

    expect(paginationView)?.toBeTruthy();
    expect(selectedDot)?.toBeTruthy();
    expect(selectedDotText)?.toBeTruthy();
  });

  it('mock the non selected dot style in FBPagination component', () => {
    const {getByTestId} = render(
      <FBPagination carousalIndex={1} carouselOfferData={mockData} />,
    );
    const paginationView = getByTestId(testID?.pagination?.view);
    const nonSelectedDot = getByTestId(testID?.pagination?.nonSelectedDot);

    expect(paginationView)?.toBeTruthy();
    expect(nonSelectedDot)?.toBeTruthy();
  });

  it('render the snapshot of the component FBPagination', () => {
    const snapshot = render(
      <FBPagination carousalIndex={0} carouselOfferData={mockData} />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
