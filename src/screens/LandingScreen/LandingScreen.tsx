import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import strings from '../../constants/strings';
import FBButton from '../../components/FBButton/FBButton';
import screenNames from '../../constants/screenNames';

const LandingScreen = (props: any): React.JSX.Element => {
  const {navigation} = props;

  return (
    <View style={styles?.mainContainer}>
      <ScrollView contentContainerStyle={styles?.horizontalCentralAlignment}>
        <FBAppHeaderText
          fontsize={36}
          styleProp={{marginTop: 60}}
          iconSize={50}
        />
        <Image
          source={imagePath?.furnitureImages2}
          height={1}
          width={1}
          style={styles.sofaImageStyle}
        />
        <View style={styles?.posterTextView}>
          <Text style={styles?.posterText}>{strings?.tagLine}</Text>
        </View>
        <FBButton
          onPress={() => {
            navigation?.navigate(screenNames?.LoginScreen);
          }}
          buttonType={'round'}
          buttonText={strings?.letsStart}
          customStyle={styles?.navigationButtonView}
        />
      </ScrollView>
    </View>
  );
};

export default LandingScreen;
/**
 * NOTE:
 * TOPICS COVERED AND TO COVER GENERALLY AND SPECIALLY:
 * Types and interfaces
 * Google fonts
 * Navigation - ALL TYPES
 * Splash Screen and AppIcon
 * Redux
 * Regex
 * Handlebars and Plops
 * Test cases - components, screens, packages, functions, navigations and redux
    - @types/react-test-renderer,
    - render
      - getBytestId
      - getByText
    - fireEvent
    - react-test-renderer, 
    - create
    - describe, 
    - test or it,
    - beforeEach, 
    - afterEach,
    - beforeAll, 
    - afterAll, 
    - jest
      - jest.fn()
      - jest.mock()
    - expect
      - toMatchSnapshot()
      - toBeOnTheScreen()
      - toBe()
      - toEqual()
      - toBeNull()
      - toBeUndefined()
      - toBeDefined()
      - toBeTruthy()
      - toBeFalsy()
      - toHaveBeenCalled()
    - ThemeProvider
 * Story book
 * Hooks
 * Custom Hooks
 * Custom Components
 * API Integration - All
 * Data Fetching
 * Font Scaling
 * JS related course
 * React JS related course
 * test cases related course
 * Animations
 * Ant design type components build
 */
