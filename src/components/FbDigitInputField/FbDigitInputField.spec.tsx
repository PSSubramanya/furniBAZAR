import React from 'react';
import renderer from 'react-test-renderer';
import FBDigitInputField from './FBDigitInputField';

test('rendered FbDigitInputField Screen perfectly', () => {
  const tree = renderer.create(<FBDigitInputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
