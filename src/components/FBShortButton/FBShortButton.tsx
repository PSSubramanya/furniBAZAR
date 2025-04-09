import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const FBShortButton = (props: any) => {
  const {icon, text, onPress, disabled} = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles?.shortbuttonView}>
        <Image
          source={icon}
          height={1}
          width={1}
          style={styles?.shortButtonImageStyle}
        />
      </View>
      {text && <Text style={styles?.shortButtonText}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default FBShortButton;
