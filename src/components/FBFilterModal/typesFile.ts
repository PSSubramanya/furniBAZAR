import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {DimensionValue, ImageSourcePropType} from 'react-native';
export interface FBFilterModalProps {
  modalVisible: boolean;
  setModalVisible: any;
  selectedProductIcon: ImageSourcePropType;
  selectedProductName: string;
  modalHeightPercentage?: DimensionValue;
  modalColor?: string;
}
