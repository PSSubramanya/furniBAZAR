import React, {Dispatch, RefObject, SetStateAction} from 'react';

export interface AdCarouselDataProps {
  id: string;
  header: string;
  description: string;
  discount: string;
  coverImage: string;
}

export interface FBCarouselSliderProps {
  carouselOfferData: AdCarouselDataProps[];
}
