import {Dispatch, SetStateAction} from 'react';
import {Animated} from 'react-native';

export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export interface FBToastViewProps {
  type: MessageType;
  headerText: string;
  descriptionText: string;
  setShowToastView: Dispatch<SetStateAction<boolean>>;
  toastDirectionFromTop?: boolean;
  fadeAnim?: Animated.Value;
  animatedValue?: Animated.Value;
}
