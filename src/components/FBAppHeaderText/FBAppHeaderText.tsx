import React from 'react';
import {View, Text, Image} from 'react-native';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';

const FBAppHeaderText = (props: any) => {
  const {fontsize = 24, styleProp, fontColor = 'black', iconSize} = props;
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, styleProp]}>
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
        FurniBAZAR
      </Text>
    </View>
  );
};

export default FBAppHeaderText;
