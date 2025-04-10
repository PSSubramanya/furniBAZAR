import React from 'react';
import renderer from 'react-test-renderer';
import FBShortButton from './FBShortButton';

test('rendered FBShortButton Screen perfectly', () => {
  const tree = renderer.create(<FBShortButton />).toJSON();
  expect(tree).toMatchSnapshot();

  //  NOTE:
  /* create method seems to be depricated */
  /* Hence better to use  @testing-library/react-native package for writing test cases */
});
