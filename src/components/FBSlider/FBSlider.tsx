import React, {useRef} from 'react';
import {View, Animated, PanResponder, Dimensions} from 'react-native';
import styles, {themeStyle} from './styles';
import testID from '../../constants/testIdConstants';

const {width} = Dimensions.get('window');
const sliderWidth = width - 30; // Full slider width
const thumbSize = 20; // Width of the draggable circle

const FBSlider = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const styleValues = themeStyle({sliderWidth, thumbSize, translateX});
  let lastPosition = useRef(0).current; // Store last position

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.max(
          0,
          Math.min(lastPosition + gestureState.dx, sliderWidth - thumbSize - 5),
        );
        translateX.setValue(newX);
      },
      onPanResponderRelease: (_, gestureState) => {
        lastPosition = Math.max(
          0,
          Math.min(lastPosition + gestureState.dx, sliderWidth - thumbSize - 5),
        );
      },
    }),
  ).current;

  return (
    <View style={styles?.sliderContainer} testID={testID?.slider?.view}>
      <View style={styleValues?.sliderLineStyle} testID={testID?.slider?.line}>
        <Animated.View
          {...panResponder.panHandlers}
          style={styleValues?.slidingDotStyle}
          testID={testID?.slider?.dot}
        />
      </View>
    </View>
  );
};

export default FBSlider;
/**
 * NOTE:
 * Need to make this more better
 * Add a value of array to display in the slider
 * Add functionality to display and return the value of the slider
 * Write appropriate test cases for this then
 */
