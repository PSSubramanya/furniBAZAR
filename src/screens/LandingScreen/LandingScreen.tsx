import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const LandingScreen = (): React.JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors?.appBackgroundColor3,
        alignItems: 'center',
      }}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Image
          source={imagePath?.furnitureImages2}
          height={1}
          width={1}
          style={{
            height: 300,
            width: 300,
            shadowColor: 'black',
            shadowOffset: {height: 10, width: -1},
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }}
        />
        <View style={{width: 200}}>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              fontFamily: fontFamily?.primaryFont?.medium,
            }}>
            We provide quality products just for you
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              backgroundColor: colors?.black,
              width: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fontFamily?.primaryFont?.medium,
                color: colors?.white,
              }}>
              LET'S START
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LandingScreen;
/**
 * TOPICS COVERED AND TO COVER GENERALLY AND SPECIALLY:
 * Google fonts
 * Navigation
 * Splash Screen
 * Redux
 */
