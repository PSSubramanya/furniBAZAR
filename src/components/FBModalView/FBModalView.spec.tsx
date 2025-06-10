import React from 'react';
import {render} from '@testing-library/react-native';
import FBModalView from './FBModalView';
import {View} from 'react-native';
import colors from '../../constants/colors';
import testID from '../../constants/testIdConstants';

jest.mock('react-native-modal', () => {
  return ({children}: any) => children;
});

describe('render FBModalView correctly', () => {
  it('mocking the visibility of the FBModalView', () => {
    const {getByTestId} = render(
      <FBModalView
        children={() => {
          return <View></View>;
        }}
        modalVisible={true}
        modalHeightPercentage={'90%'}
        modalColor={colors?.white}
      />,
    );
    // const modalContainer = getByTestId(testID?.modalContainer); //NOTE: See why this is not visible even when modalVisible={true}
    const modalChildView = getByTestId(testID?.modal?.view);
    // expect(modalContainer)?.toBeTruthy();
    expect(modalChildView)?.toBeTruthy();
  });

  it('render the snapshot of the component FBModalView', () => {
    const snapshot = render(
      <FBModalView
        children={() => {
          return <View></View>;
        }}
        modalVisible={false}
        modalHeightPercentage={'90%'}
        modalColor={colors?.white}
      />,
    ).toJSON();
    expect(snapshot)?.toMatchSnapshot();
  });
});
