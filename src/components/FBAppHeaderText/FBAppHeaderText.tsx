import React from 'react';
import {View, Text, Image} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import strings from '../../constants/strings';
import testID from '../../constants/testIdConstants';
import {HeaderTextProps} from './typesFile';

const FBAppHeaderText = (props: HeaderTextProps) => {
  const {fontsize = 24, styleProp, fontColor = 'black', iconSize} = props;
  return (
    <View
      style={[styles?.headingHeaderStyle, styleProp]}
      testID={testID?.appHeader}>
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
