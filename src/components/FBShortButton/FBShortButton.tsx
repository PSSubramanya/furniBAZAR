import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';

const FBShortButton = (props: any) => {
  const {icon, text, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 65,
          width: 65,
          borderWidth: 1,
          borderColor: colors?.borderColor,
          borderRadius: 5,
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Image
          source={icon}
          height={1}
          width={1}
          style={{height: 30, width: 30, alignSelf: 'center'}}
        />
      </View>
      {text && (
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontFamily?.primaryFont?.regular,
            fontSize: 12,
            marginTop: 5,
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FBShortButton;
