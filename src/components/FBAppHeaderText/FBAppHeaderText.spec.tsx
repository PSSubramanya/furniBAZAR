import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import FBAppHeaderText from './FBAppHeaderText';

// test('rendered FBShortButton Screen perfectly', () => {
//   const tree = renderer.create(<FBAppHeaderText />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('rendering the FBAppHeaderText Component', () => {
  it('renders correctly', () => {
    const {getByTestId, getByText} = render(<FBAppHeaderText />);
    const headerText = getByText('Test Header Title');
    expect(headerText)?.toBeTruthy();
  });
});
