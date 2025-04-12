import React from 'react';
import renderer from 'react-test-renderer';
import FbDigitInputField from './FbDigitInputField';


test('rendered FbDigitInputField Screen perfectly', () => {
  const tree = renderer.create(<FbDigitInputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
