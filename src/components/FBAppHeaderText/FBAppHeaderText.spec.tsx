import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import FBAppHeaderText from './FBAppHeaderText';

describe('rendering the FBAppHeaderText Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<FBAppHeaderText />);
    const headerText = getByText('FurniBAZAR');
    expect(headerText)?.toBeTruthy();
  });

  it('rendering the component', () => {
    const appHeaderTextSnapshot = render(<FBAppHeaderText />)?.toJSON();
    expect(appHeaderTextSnapshot)?.toMatchSnapshot();
  });
});
