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

const FBToastView = (props: FBToastViewProps) => {
  const {
    fadeAnim,
    animatedValue,
    type,
    headerText,
    descriptionText,
    setShowToastView,
    toastDirectionFromTop = true,
  } = props;

  const {height} = Dimensions.get('window');

  const selectIconType = () => {
    if (type === MessageType?.Success) {
      return imagePath?.circleTickIcon;
    } else if (type === MessageType?.Error) {
      return imagePath?.roundCloseIcon;
    } else if (type === MessageType?.Info) {
      return imagePath?.infoIcon;
    }
    return imagePath?.warningIcon;
  };
  const iconValue = selectIconType();

  return (
    <Animated.View
      style={[
        styles?.toastMainContainerStyle,
        {
          opacity: fadeAnim,
          transform: [{translateY: animatedValue}],
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
        <Image
          source={imagePath?.shiningStarIcon}
          height={1}
          width={1}
          style={styles?.iconStyle}
        />
        <View style={styles?.toastTextView}>
          <Text
            testID={testIdConstants?.toastTitle}
            style={styles?.headerStyle}>
            {headerText}
          </Text>
          <Text
            testID={testIdConstants?.toastDescription}
            style={styles?.descriptionStyle}>
            {descriptionText}
          </Text>
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
