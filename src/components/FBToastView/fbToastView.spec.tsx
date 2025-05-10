import {render, fireEvent} from '@testing-library/react-native';
import {FBToastView} from './FBToastView';
import {MessageType} from './typesFile';
import testIdConstants from '../../constants/testIdConstants';
import {Animated} from 'react-native';

describe('Rendering FBToastView Component', () => {
  // beforeEach(() => {});

  const headerText = 'Header';
  const descriptionText = 'Description';
  it('mocking toast icon', () => {
    const {getByTestId} = render(
      <FBToastView
        type={MessageType?.Error}
        headerText={headerText}
        descriptionText={descriptionText}
        setShowToastView={() => {}}
      />,
    );
    const toastIcon = getByTestId(testIdConstants?.toastIcon);
    expect(toastIcon)?.toBeOnTheScreen();
  });

  it('mocking close icon', () => {
    const mockFunction = jest.fn();
    const animatedValue = new Animated.Value(0);
    const {getByTestId} = render(
      <FBToastView
        type={MessageType?.Error}
        animatedValue={animatedValue}
        headerText={headerText}
        descriptionText={descriptionText}
        setShowToastView={mockFunction}
      />,
    );
    const closeIcon = getByTestId(testIdConstants?.toastCloseButton);
    expect(closeIcon)?.toBeOnTheScreen();
    const closeIconPressed = getByTestId(
      testIdConstants?.toastCloseButtonPress,
    );
    fireEvent(closeIconPressed, 'onPress');
    expect(closeIconPressed).toBeTruthy();
  });

  it('mocking setsetShowToastView', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <FBToastView
        type={MessageType?.Error}
        headerText={headerText}
        descriptionText={descriptionText}
        setShowToastView={mockFunction}
      />,
    );
    const toastIcon = getByTestId(testIdConstants?.toastCloseButtonPress);
    expect(toastIcon)?.toBeTruthy();
  });

  it('mocking FBToastView header and description text', () => {
    const {getByTestId} = render(
      <FBToastView
        type={MessageType?.Error}
        headerText={headerText}
        descriptionText={descriptionText}
        setShowToastView={() => {}}
      />,
    );
    const toastHeaderText = getByTestId(testIdConstants?.toastTitle);
    expect(toastHeaderText)?.toBeTruthy();
    const toastDescriptionText = getByTestId(testIdConstants?.toastDescription);
    expect(toastDescriptionText)?.toBeTruthy();
  });

  it('Rendering Snapshot of FBToastView component', () => {
    const fbToastViewSnapshot = render(
      <FBToastView
        type={MessageType?.Error}
        headerText={headerText}
        descriptionText={descriptionText}
        setShowToastView={() => {}}
      />,
    )?.toJSON();

    expect(fbToastViewSnapshot)?.toMatchSnapshot();
  });
});
4;
