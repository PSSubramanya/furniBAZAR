import React from 'react';
import {Animated} from 'react-native';

const useToastAnimation = (fadeAnim: any, animatedValue: any) => {
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const startDecayAnimation = () => {
    Animated.decay(animatedValue, {
      velocity: 0.45, //-1 //0.45 // Initial velocity of the animation
      deceleration: 0.997, // Rate of deceleration (close to 1 for slower decay)
      useNativeDriver: true, // Use native driver for better performance
    }).start(); // Start the animation
  };

  return {fadeIn, startDecayAnimation};
};

export default useToastAnimation;
