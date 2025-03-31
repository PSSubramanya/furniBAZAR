import React from 'react';
import {View, Text, Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import FBAppHeaderText from '../../components/FBAppHeaderText/FBAppHeaderText';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: colors?.appBackgroundColor2,
          alignItems: 'center',
          height: 350,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}>
        <Image
          source={imagePath?.illustrationIcon1}
          height={1}
          width={1}
          style={{height: 150, width: 150, marginTop: 60}}
        />
        <FBAppHeaderText iconSize={40} />
        <Text
          style={{
            marginTop: 20,
            alignSelf: 'flex-start',
            // textAlign: 'center',
            marginLeft: 35,
            fontFamily: fontFamily?.primaryFont?.regular,
            // maxWidth: 200,
          }}>
          Enter your credentials to Login
        </Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: colors?.white,
            height: 300,
            marginHorizontal: 23,
            zIndex: 1,
            marginTop: -50,
            shadowColor: colors?.black,
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 0.3,
            shadowRadius: 25,
            elevation: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 40,
              marginHorizontal: 20,
              marginTop: 10,
              borderWidth: 1,
              borderColor: colors?.borderColor,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: fontFamily?.primaryFont?.regular}}>
              Continue with Google
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
