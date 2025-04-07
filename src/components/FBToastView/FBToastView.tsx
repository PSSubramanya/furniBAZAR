import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const FBToastView = (props: any) => {
  const {fadeAnim, animatedValue} = props;
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 100,
        marginHorizontal: 10,
        marginVertical: 20,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 5,
        zIndex: 1,
        backgroundColor: colors?.darkGrey,
        opacity: fadeAnim,
        transform: [{translateY: animatedValue}],
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 5}}>
          <Image
            source={imagePath?.roundCloseIcon}
            height={1}
            width={1}
            style={{height: 25, width: 25}}
          />
        </View>
        <Image
          source={imagePath?.shiningStarIcon}
          height={1}
          width={1}
          style={{height: 25, width: 25}}
        />
        <View style={{marginLeft: 0}}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.semiBold,
              color: colors?.white,
              fontSize: 16,
            }}>
            Error Notification
          </Text>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.regular,
              color: colors?.white,
              marginTop: 5,
              maxWidth: 260,
            }}>
            Please enter the credential details. If not create an account to
            proceed ahead.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          animatedValue.setValue(-850); //280
        }}>
        <Image
          source={imagePath?.closeIconWhite}
          height={1}
          width={1}
          style={{
            height: 16,
            width: 16,
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export {FBToastView};
