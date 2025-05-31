import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
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

  it('mocking the search company function of FBFilterModal component', () => {
    const {getByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );
    const onSearchCompany = getByTestId(testID?.onPressSearchCompany);
    fireEvent(onSearchCompany, 'onPress');
    expect(onSearchCompany)?.toBeTruthy();
  });

  it('mocking the rating functionalty of FBFilterModal component', () => {
    const {getByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );
    const rating1 = getByTestId(testID?.filterModal?.rating1);
    const rating2 = getByTestId(testID?.filterModal?.rating2);
    const rating3 = getByTestId(testID?.filterModal?.rating3);
    const rating4 = getByTestId(testID?.filterModal?.rating4);
    const rating5 = getByTestId(testID?.filterModal?.rating5);
    fireEvent(rating1, 'onPress');
    expect(rating1)?.toBeTruthy();
    fireEvent(rating2, 'onPress');
    expect(rating2)?.toBeTruthy();
    fireEvent(rating3, 'onPress');
    expect(rating3)?.toBeTruthy();
    fireEvent(rating4, 'onPress');
    expect(rating4)?.toBeTruthy();
    fireEvent(rating5, 'onPress');
    expect(rating5)?.toBeTruthy();
  });

  it('mocking the search company name input functionalty of FBFilterModal component', () => {
    const {getByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );
    const onSearchCompany = getByTestId(
      testID?.filterModal?.companySearchInput,
    );
    fireEvent(onSearchCompany, 'onBlur');
    fireEvent(onSearchCompany, 'onFocus');
    fireEvent(onSearchCompany, 'onChangeText', 'Company Name');
    expect(onSearchCompany)?.toBeTruthy();
  });

  it('mocking the close Modal functionalty of FBFilterModal component', () => {
    const {getByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );
    const onRemoveSearchedCompany = getByTestId(testID?.filterModal?.close);
    fireEvent(onRemoveSearchedCompany, 'onPress');
    expect(onRemoveSearchedCompany)?.toBeTruthy();
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
