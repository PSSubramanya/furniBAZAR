import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {AdCarouselDataProps} from '../FBCarouselSlider/typesFile';
import {ImageSourcePropType} from 'react-native';

export interface FBPaginationProps {
  carousalIndex: number;
  carouselOfferData: AdCarouselDataProps[] | ImageSourcePropType | undefined;
}
