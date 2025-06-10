import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {DimensionValue, View} from 'react-native';

export interface FBModalViewProps {
  children: () => React.ReactNode;
  modalVisible: boolean;
  modalHeightPercentage?: DimensionValue | undefined;
  modalColor?: string;
}
