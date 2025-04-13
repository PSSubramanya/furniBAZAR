import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import styles from './styles';

const FBButton = (props: any) => {
  const {
    onPress,
    enableButton,
    buttonText,
    customStyle,
    buttonType = 'normal',
  } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={enableButton}>
      <View style={[styles?.buttonStyle, customStyle]}>
        <Text
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
