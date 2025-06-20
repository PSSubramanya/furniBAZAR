/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import type {PropsWithChildren} from 'react';
import StackNavigator from './src/navigators/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView />
      <StackNavigator />
    </Provider>
  );
}

export default App;
