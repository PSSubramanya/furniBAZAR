import React from 'react';
import {Animated} from 'react-native';

const useToastAnimation = (
  fadeAnim: any,
  animatedValue: any,
  height: any,
  toastDirectionFromTop: boolean,
) => {
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const startDecayAnimation = () => {
    animatedValue.setValue(toastDirectionFromTop ? -height : height);
    Animated.decay(animatedValue, {
      velocity: toastDirectionFromTop ? 2.8 : -0.4, // Initial velocity of the animation
      deceleration: 0.997, // Rate of deceleration (close to 1 for slower decay)
      useNativeDriver: true, // Use native driver for better performance
    }).start(); // Start the animation
  };

  return {fadeIn, startDecayAnimation};
};

export default useToastAnimation;
