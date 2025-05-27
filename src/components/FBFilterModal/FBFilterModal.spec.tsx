import React from 'react';
import {render} from '@testing-library/react-native';
import FBFilterModal from './FBFilterModal';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import imagePath from '../../constants/imagePath';

describe('render FBFilterModal correctly', () => {
  const mockFunction = jest.fn();
  const productName = 'Armchair';
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
