import React, {useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {FBBottomDrawerImageProps} from './typesFile';
import styles from './styles';
import testID from '../../constants/testIdConstants';

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
    /*
        Animated.spring(translateY, {
        toValue: selected ? -5 : 0, // just enough movement to notice
        useNativeDriver: true,
        stiffness: 120, // makes it responsive
        damping: 10, // controls how bouncy it is
        mass: 1, // keeps the animation light
        }).start();
    */
    Animated.spring(translateY, {
      toValue: selected ? -5 : 0,
      useNativeDriver: true,
      stiffness: 250, // Higher = faster movement
      damping: 10, // Higher = less bounce
      mass: 0.5, // Lower = quicker acceleration
    }).start();
  }, [selected]);

  return (
    <Animated.View style={{transform: [{translateY}]}}>
      <TouchableOpacity onPress={onPress} testID={testID?.bottomTabIconOnPress}>
        {!selected ? (
          <Image
            source={icon}
            height={30}
            width={30}
            style={styles?.bottomBarIcon}
            testID={testID?.bottomTabIconNonSelected}
          />
        ) : (
          <View style={styles?.selectedViewStyle}>
            <Image
              source={selectedIcon}
              height={30}
              width={30}
              style={[styles?.bottomBarIcon]}
              testID={testID?.bottomTabIconSelected}
            />
          </View>
        )}
        {selected && (
          <Text
            style={styles?.bottomBarText}
            testID={testID?.bottomTabIconText}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
export default FBBottomDrawerImage;
