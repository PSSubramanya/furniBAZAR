/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import StackNavigator from './src/navigators/StackNavigation';

function App(): React.JSX.Element {
  return (
    <>
      <StackNavigator />
    </>
  );
}

export default App;
