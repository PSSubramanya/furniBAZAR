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
import styles from './styles';
import testIdConstants from '../../constants/testIdConstants';
import {MessageType, FBToastViewProps} from './typesFile';
import fontFamily from '../../constants/fontFamily';

const FBToastView = (props: FBToastViewProps) => {
  const {
    fadeAnim,
    animatedValue,
    type,
    headerText,
    descriptionText,
    setShowToastView,
    toastDirectionFromTop = true,
    shiningStarIcon = true,
  } = props;

  const {height} = Dimensions.get('window');

  const selectIconType = () => {
    if (type === MessageType?.Success) {
      return imagePath?.circleTickIcon;
    } else if (type === MessageType?.Error) {
      return imagePath?.roundCloseIcon;
    } else if (type === MessageType?.Info) {
      return imagePath?.infoIcon;
    } else if (type === MessageType?.Warning) {
      return imagePath?.warningIcon;
    }
  };
  const iconValue = selectIconType();

  return (
    <Animated.View
      style={[
        styles?.toastMainContainerStyle,
        {
          opacity: fadeAnim,
          transform: [{translateY: animatedValue}],
          paddingBottom: shiningStarIcon ? 15 : 0,
        },
      ]}>
      <View style={styles?.flexRowStyle}>
        <View style={styles?.toastIconTypeStyle}>
          <Image
            source={iconValue}
            testID={testIdConstants?.toastIcon}
            height={1}
            width={1}
            style={styles?.iconStyle}
          />
        </View>
        {shiningStarIcon && (
          <Image
            source={imagePath?.shiningStarIcon}
            height={1}
            width={1}
            style={styles?.iconStyle}
          />
        )}
        <View
          style={[
            styles?.toastTextView,
            {
              width: !shiningStarIcon && 300,
              marginBottom: !shiningStarIcon && 10,
            },
          ]}>
          <Text
            testID={testIdConstants?.toastTitle}
            style={[
              styles?.headerStyle,
              {
                marginLeft: shiningStarIcon ? 0 : 5,
                marginTop: shiningStarIcon ? 0 : 1,
                fontFamily: shiningStarIcon
                  ? fontFamily?.primaryFont?.semiBold
                  : fontFamily?.primaryFont?.regular,
                fontSize: 16,
              },
            ]}>
            {headerText}
          </Text>
          {descriptionText !== '' && (
            <Text
              testID={testIdConstants?.toastDescription}
              style={styles?.descriptionStyle}>
              {descriptionText}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          animatedValue.setValue(toastDirectionFromTop ? -height : height);
          if (setShowToastView) {
            setShowToastView(false);
          }
        }}
        testID={testIdConstants?.toastCloseButtonPress}>
        <Image
          source={imagePath?.closeIconWhite}
          testID={testIdConstants?.toastCloseButton}
          height={1}
          width={1}
          style={styles?.closeIconStyle}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export {FBToastView};
