import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {Animated, ViewStyle} from 'react-native';

export interface FBSliderProps {}

export interface ThemeStyleProps {
  sliderWidth: number;
  thumbSize: number;
  translateX: Animated.Value;
}

export interface FBSliderStyleProps {
  sliderLineStyle?: ViewStyle;
  slidingDotStyle?: ViewStyle;
}
