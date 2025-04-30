import React from 'react';
import {render} from '@testing-library/react-native';
import FBAppHeaderText from './FBAppHeaderText';

describe('rendering the FBAppHeaderText Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <FBAppHeaderText
        fontsize={12}
        fontColor={'black'}
        iconSize={12}
        styleProp={{backgroundColor: 'white'}}
      />,
    );
    const headerText = getByText('FurniBAZAR');
    expect(headerText)?.toBeTruthy();
  });

  it('rendering the component', () => {
    const appHeaderTextSnapshot = render(
      <FBAppHeaderText
        fontsize={12}
        fontColor={'black'}
        iconSize={12}
        styleProp={{backgroundColor: 'white'}}
      />,
    )?.toJSON();
    expect(appHeaderTextSnapshot)?.toMatchSnapshot();
  });
});
