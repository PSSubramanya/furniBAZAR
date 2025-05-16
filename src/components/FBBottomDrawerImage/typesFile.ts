import React, {Dispatch, RefObject, SetStateAction} from 'react';

export interface FBBottomDrawerImageProps {
  selected: boolean;
  icon: any;
  selectedIcon: any;
  onPress: () => void;
  text?: string;
}
