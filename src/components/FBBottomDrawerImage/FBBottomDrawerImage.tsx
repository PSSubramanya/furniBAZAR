import React, {useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {FBBottomDrawerImageProps} from './typesFile';
import styles from './styles';

const FBBottomDrawerImage = (props: FBBottomDrawerImageProps) => {
  const {icon, selectedIcon, selected, text, onPress} = props;

  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    /*
        Animated.timing(translateY, {
        toValue: selected ? -10 : 0, // Move up when selected
        duration: 300,
        useNativeDriver: true,
        }).start();
    */
    Animated.spring(translateY, {
      toValue: selected ? -5 : 0, // just enough movement to notice
      useNativeDriver: true,
      stiffness: 120, // makes it responsive
      damping: 10, // controls how bouncy it is
      mass: 1, // keeps the animation light
    }).start();
  }, [selected]);

  return (
    <Animated.View style={{transform: [{translateY}]}}>
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
    </Animated.View>
  );
};
export default FBBottomDrawerImage;
