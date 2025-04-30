import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import styles from './styles';
import testID from '../../constants/testIdConstants';

/* Need to understand more about how to write types */
type ButtonTypes = 'normal' | 'round';

interface ButtonProps {
  onPress: () => {};
  enableButton: boolean;
  buttonText: string;
  customStyle: ViewStyle;
  buttonType: ButtonTypes;
}

const FBButton = (props: ButtonProps) => {
  const {
    onPress,
    enableButton = false,
    buttonText,
    customStyle,
    buttonType = 'normal',
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={enableButton}
      testID={testID?.buttonContainer}>
      <View
        style={[styles?.buttonStyle, customStyle]}
        testID={testID?.buttonView}>
        <Text
          testID={testID?.buttonText}
          style={{
            color: colors?.white,
            fontFamily:
              buttonType === 'round'
                ? fontFamily?.primaryFont?.medium
                : fontFamily?.primaryFont?.regular,
            fontSize: buttonType === 'round' ? 12 : 14,
          }}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default FBButton;
