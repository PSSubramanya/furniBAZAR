import React from 'react';
import {Animated, Platform} from 'react-native';

const useToastAnimation = (
  fadeAnim: any,
  animatedValue: any,
  height: any,
  toastDirectionFromTop: boolean,
  onConfirm: any,
) => {
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const startDecayAnimation = () => {
    const baseHeight = Platform.OS === 'ios' ? 770 : 810; // reference screen height
    const baseVelocity = 2.5;

    const velocityValue = (height / baseHeight) * baseVelocity;

    animatedValue.setValue(toastDirectionFromTop ? -height : height);
    console.log('Screen height value', height, -height);
    Animated.decay(animatedValue, {
      velocity: toastDirectionFromTop ? velocityValue : -0.4, //2.8 : -0.4, // Initial velocity of the animation 2.5 or 2.75 or 2.8
      deceleration: 0.997, // Rate of deceleration (close to 1 for slower decay)
      useNativeDriver: true, // Use native driver for better performance
    }).start(); // Start the animation
    /*
    810 - 2.5
    852 - 2.8
    */
    // Animated.timing(animatedValue, {
    //   toValue: onConfirm ? (Platform.OS === 'ios' ? 60 : 8) : 0, // Moves down when selected
    //   duration: 900,
    //   useNativeDriver: true,
    // }).start();
    // NOTE: Timimg animation is temporary, make better use of the above DECAY animation effect itself
    // NOTE: This should be available for both top and bottom sliding in decay and timing animation style
  };

  return {fadeIn, startDecayAnimation};
};

export default useToastAnimation;
