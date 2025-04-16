import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import FBShortButton from './FBShortButton';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

describe('rendering the FBAppHeaderText Component', () => {
  it('mocking rendering of custom button with icon and text with test id', () => {
    const buttonText = 'Test Button Text';
    const {getByTestId} = render(
      <FBShortButton
        icon={imagePath?.amazonIcon}
        text={buttonText}
        onPress={() => {}}
        disabled={false}
      />,
    );
    const headerText = getByTestId(testID?.shortButtonText);
    expect(headerText)?.toBeTruthy();
    const buttonWithIcon = getByTestId(testID?.shortButtonImage);
    expect(buttonWithIcon).toBeTruthy();
  });

  it('mocking rendering of button text with button text', () => {
    const buttonText = 'Test Button Text';
    const {getByText} = render(
      <FBShortButton
        icon={imagePath?.amazonIcon}
        text={buttonText}
        onPress={() => {}}
        disabled={false}
      />,
    );
    const headerText = getByText(buttonText);
    expect(headerText)?.toBeTruthy();
  });

  it('mocking rendering of button with icon alone', () => {
    const {getByTestId} = render(
      <FBShortButton icon={imagePath?.amazonIcon} />,
    );
    const buttonWithIcon = getByTestId(testID?.shortButtonImage);
    expect(buttonWithIcon).toBeTruthy();
  });

  it('mocking disability property of the button', () => {
    const {getByTestId} = render(<FBShortButton disability={true} />);
    const buttonDisabled = getByTestId(testID?.shortButton);
    expect(buttonDisabled)?.toBeTruthy();
  });

  it('mocking rendering of button with onPress functionality', async () => {
    const buttonText = 'Test Button Text';
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <FBShortButton
        icon={imagePath?.amazonIcon}
        text={buttonText}
        onPress={onPressMock}
        disabled={false}
      />,
    );
    const shortButton = getByTestId(testID?.shortButton);
    fireEvent.press(shortButton);
    await waitFor(() => {
      expect(onPressMock).toHaveBeenCalled();
    });
  });

  it('rendering FBShortButton Component', () => {
    const buttonText = 'Test Button Text';
    const componentSnapShot = render(
      <FBShortButton
        icon={imagePath?.amazonIcon}
        text={buttonText}
        onPress={() => {}}
        disabled={false}
      />,
    )?.toJSON();
    expect(componentSnapShot)?.toMatchSnapshot();
  });
});
