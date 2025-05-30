import React from 'react';
import {render} from '@testing-library/react-native';
import FBFilterModal from './FBFilterModal';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

jest.mock('react-native-modal', () => {
  return ({children}: any) => children;
});

describe('render FBFilterModal correctly', () => {
  const mockFunction = jest.fn();
  const productName = 'Armchair';

  it('mocking FBFilterModal Modal View', () => {
    const {getByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );
    const modalViewStatus = getByTestId(testID?.filterModal?.view);
    expect(modalViewStatus)?.toBeTruthy();
  });

  it('render the snapshot of the component FBFilterModal', () => {
    const snapshot = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
