import React from 'react';
import {View, Text, Image} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import strings from '../../constants/strings';

const FBAppHeaderText = (props: any) => {
  const {fontsize = 24, styleProp, fontColor = 'black', iconSize} = props;
  return (
    <View style={[styles?.headingHeaderStyle, styleProp]}>
      {iconSize && (
        <Image
          source={imagePath?.furnitureIcon}
          height={1}
          width={1}
          style={{height: iconSize, width: iconSize}}
        />
      )}
      <Text
        style={{
          fontFamily: fontFamily?.secondaryFont?.extraBold,
          fontSize: fontsize,
          color: fontColor,
        }}>
        {strings?.appName}
      </Text>
    </View>
  );
};

export default FBAppHeaderText;
