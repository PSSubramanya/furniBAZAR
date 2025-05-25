import React, {useRef} from 'react';
import {View, Animated, PanResponder, Dimensions} from 'react-native';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window');
const sliderWidth = width - 30; // Full slider width
const thumbSize = 20; // Width of the draggable circle

const FBSlider = () => {
  const translateX = useRef(new Animated.Value(0)).current;
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
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          width: sliderWidth,
          height: 3,
          backgroundColor: colors?.borderColor,
          borderRadius: 20,
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: colors?.darkBluegrey4,
            position: 'absolute',
            left: translateX,
          }}
        />
      </View>
    </View>
  );
};

export default FBSlider;
