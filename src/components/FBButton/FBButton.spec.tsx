import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FBButton from './FBButton';
import testID from '../../constants/testIdConstants';

describe('rendered FBButton Screen perfectly', () => {
  it('render the snapshot for FBButton', () => {
    const buttonText = 'Button Text';
    const mockPress = jest.fn();
    const tree = render(
      <FBButton
        onPress={mockPress}
        enableButton={true}
        buttonText={buttonText}
        customStyle={{}}
        buttonType="normal"
      />,
    )?.toJSON();
    expect(tree)?.toMatchSnapshot();
  });

  it('render the FBButton with onPress', () => {
    const buttonText = 'Button Text';
    const mockPress = jest.fn();
    const {getByTestId} = render(
      <FBButton
        onPress={mockPress}
        enableButton={true}
        buttonText={buttonText}
        customStyle={{}}
        buttonType="normal"
      />,
    );
    const buttonOnPressMocking = getByTestId(testID?.buttonContainer);
    fireEvent(buttonOnPressMocking, 'onPress');
    // expect(buttonOnPressMocking).toHaveBeenCalled();
  });
});
