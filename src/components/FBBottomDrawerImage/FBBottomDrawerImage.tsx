import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FBBottomDrawerImageProps} from './typesFile';
import styles from './styles';

const FBBottomDrawerImage = (props: FBBottomDrawerImageProps) => {
  const {icon, selectedIcon, selected, text, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {!selected ? (
        <Image
          source={icon}
          height={30}
          width={30}
          style={styles?.bottomBarIcon}
        />
      ) : (
        <View style={styles?.selectedViewStyle}>
          <Image
            source={selectedIcon}
            height={30}
            width={30}
            style={[styles?.bottomBarIcon]}
          />
        </View>
      )}
      <Text style={styles?.bottomBarText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default FBBottomDrawerImage;
