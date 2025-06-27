import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HomeScreenContent from '../screens/HomeScreenContent/HomeScreenContent';
import FavouriteScreen from '../screens/FavouriteScreen/FavouriteScreen';
import OrdersScreen from '../screens/OrdersScreen/OrdersScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import CartProductsScreen from '../screens/CartProductsScreen/CartProductsScreen';
import ProductViewScreen from '../screens/ProductViewScreen/ProductViewScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="HomeScreenContent" component={HomeScreenContent} />
        <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
        <Stack.Screen name="OrderScreen" component={OrdersScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="CartProductsScreen"
          component={CartProductsScreen}
        />
        <Stack.Screen name="ProductViewScreen" component={ProductViewScreen} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
