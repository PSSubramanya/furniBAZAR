import React from 'react';
import renderer from 'react-test-renderer';
import FbButton from './FBButton';

test('rendered FbButton Screen perfectly', () => {
  const tree = renderer.create(<FbButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
