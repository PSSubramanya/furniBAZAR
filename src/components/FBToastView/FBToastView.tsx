import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const FBToastView = (props: any) => {
  const {
    fadeAnim,
    animatedValue,
    type,
    headerText,
    descriptionText,
    setShowToastView,
    toastDirectionFromTop,
  } = props;

  const {height} = Dimensions.get('window');

  const selectIconType = () => {
    if (type === 'success') {
      return imagePath?.circleTickIcon;
    } else if (type === 'error') {
      return imagePath?.roundCloseIcon;
    } else if (type === 'info') {
      return imagePath?.infoIcon;
    }
    return imagePath?.warningIcon;
  };
  const iconValue = selectIconType();

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 100,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 5,
        zIndex: 1,
        position: 'absolute',
        left: 20,
        backgroundColor: colors?.darkGrey,
        opacity: fadeAnim,
        transform: [{translateY: animatedValue}],
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 5}}>
          <Image
            source={iconValue}
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
            {headerText}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.regular,
              color: colors?.white,
              marginTop: 5,
              maxWidth: 260,
            }}>
            {descriptionText}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          animatedValue.setValue(toastDirectionFromTop ? -height : height);
          setShowToastView(false);
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
