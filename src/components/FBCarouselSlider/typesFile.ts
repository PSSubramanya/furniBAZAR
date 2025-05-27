import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {ImageSourcePropType} from 'react-native';

export interface AdCarouselDataProps {
  id: number;
  header: string;
  description: string;
  discount: string;
  coverImage: ImageSourcePropType;
}

export interface FBCarouselSliderProps {
  carouselOfferData: AdCarouselDataProps[];
}
