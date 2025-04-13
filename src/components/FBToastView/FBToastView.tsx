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
          <Text style={styles?.headerStyle}>{headerText}</Text>
          <Text style={styles?.descriptionStyle}>{descriptionText}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          animatedValue.setValue(toastDirectionFromTop ? -height : height);
          if (setShowToastView) {
            setShowToastView(false);
          }
        }}>
        <Image
          source={imagePath?.closeIconWhite}
          height={1}
          width={1}
          style={styles?.closeIconStyle}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export {FBToastView};
