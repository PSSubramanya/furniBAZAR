import React from 'react';
import renderer from 'react-test-renderer';
import OtpScreen from './OtpScreen';

test('rendered OtpScreen Screen perfectly', () => {
  const tree = renderer.create(<OtpScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
