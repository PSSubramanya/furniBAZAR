import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import FBBottomDrawerImage from './FBBottomDrawerImage';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

const tabName = 'Tabname';
describe('render FBBottomDrawerImage correctly', () => {
  it('mock FBBottomDrawerImage for icon press', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <FBBottomDrawerImage
        selected={false}
        icon={imagePath?.favouriteIcon}
        selectedIcon={imagePath?.favouriteFilledIcon}
        onPress={mockFunction}
        text={tabName}
      />,
    );

    const tabButton = getByTestId(testID?.bottomTabIconOnPress);
    fireEvent(tabButton, 'onPress');
    expect(tabButton)?.toBeTruthy();
  });

  it('mock FBBottomDrawerImage when icon is not selected', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <FBBottomDrawerImage
        selected={false}
        icon={imagePath?.favouriteIcon}
        selectedIcon={imagePath?.favouriteFilledIcon}
        onPress={mockFunction}
        text={tabName}
      />,
    );

    const tabNonSelectedIcon = getByTestId(testID?.bottomTabIconNonSelected);
    expect(tabNonSelectedIcon)?.toBeTruthy();
  });

  it('mock FBBottomDrawerImage when icon is selected', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <FBBottomDrawerImage
        selected={true}
        icon={imagePath?.favouriteIcon}
        selectedIcon={imagePath?.favouriteFilledIcon}
        onPress={mockFunction}
        text={tabName}
      />,
    );

    const tabSelectedIcon = getByTestId(testID?.bottomTabIconSelected);
    expect(tabSelectedIcon)?.toBeTruthy();

    const tabNameText = getByTestId(testID?.bottomTabIconText);
    expect(tabNameText)?.toBeTruthy();
  });

  it('render the snapshot of the component FBBottomDrawerImage', () => {
    const mockFunction = jest.fn();
    const snapshot = render(
      <FBBottomDrawerImage
        selected={false}
        icon={imagePath?.favouriteIcon}
        selectedIcon={imagePath?.favouriteFilledIcon}
        onPress={mockFunction}
        text={tabName}
      />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
