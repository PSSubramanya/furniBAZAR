import React, {Dispatch, RefObject, SetStateAction} from 'react';
import {AdCarouselDataProps} from '../FBCarouselSlider/typesFile';

export interface FBPaginationProps {
  carousalIndex: number;
  carouselOfferData: AdCarouselDataProps[];
}
