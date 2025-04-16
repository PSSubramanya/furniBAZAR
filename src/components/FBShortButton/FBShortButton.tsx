import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import testID from '../../constants/testIdConstants';

const FBShortButton = (props: any) => {
  const {icon, text, onPress, disabled} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      testID={testID?.shortButton}>
      <View style={styles?.shortbuttonView}>
        <Image
          source={icon}
          height={1}
          width={1}
          style={styles?.shortButtonImageStyle}
          testID={testID?.shortButtonImage}
        />
      </View>
      {text && (
        <Text style={styles?.shortButtonText} testID={testID?.shortButtonText}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FBShortButton;
