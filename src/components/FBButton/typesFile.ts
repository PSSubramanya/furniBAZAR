import {ViewStyle} from 'react-native';

/* Need to understand more about how to write types */
type ButtonTypes = 'normal' | 'round';

export interface ButtonProps {
  onPress: () => void;
  buttonText: string;
  customStyle: ViewStyle;
  buttonType?: ButtonTypes;
  enableButton?: boolean;
}
