import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
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

  it('mocking the remove company from the list functionalty of FBFilterModal component', async () => {
    const {getByTestId, findByTestId, queryByTestId} = render(
      <FBFilterModal
        modalVisible={true}
        setModalVisible={mockFunction}
        selectedProductIcon={imagePath?.armChairIcon}
        selectedProductName={productName}
      />,
    );

    // Simulate typing in the search input
    const searchInput = getByTestId(testID?.filterModal?.companySearchInput);
    fireEvent.changeText(searchInput, 'IKEA');

    // Simulate pressing the search icon
    const searchIcon = getByTestId(testID?.onPressSearchCompany);
    fireEvent.press(searchIcon);

    // Wait for the company to appear in the list
    const selectedCompany = await findByTestId(
      testID?.filterModal?.selectedCompanies + '0',
    );
    expect(selectedCompany).toBeTruthy(); // Ensure it appears

    // Find and press the cross icon to remove the company
    const onRemoveSearchedCompany = await findByTestId(
      testID?.filterModal?.crossIconButton,
    );
    fireEvent.press(onRemoveSearchedCompany);

    // Wait for state update and verify removal
    await waitFor(() => {
      expect(
        queryByTestId(testID?.filterModal?.selectedCompanies + '0'),
      ).toBeNull(); // Should be removed
    });
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
    const onCloseModal = getByTestId(testID?.filterModal?.close);
    fireEvent(onCloseModal, 'onPress');
    expect(onCloseModal)?.toBeTruthy();
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
