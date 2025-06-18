import {ImageSourcePropType, ViewStyle} from 'react-native';

export interface ThemeStyleProps {
  filterSelect: boolean;
}
export interface HomeScreenContentStyleProps {
  filterIconViewStyle: ViewStyle;
}

export interface CommentsProps {
  username: string;
  profileIcon: string;
  comment: string;
}

export interface CommentsDataProps {
  starCount: 5;
  comments: CommentsProps[];
}

export interface RatingDataProp {
  '5Star': number;
  '4Star': number;
  '3Star': number;
  '2Star': number;
  '1Star': number;
}

export interface VarietyDataProps {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
  companyName: string;
  rating: string;
  price: string;
  color?: string;
  commentsData?: CommentsDataProps[];
  ratingData: RatingDataProp;
}

export interface ProductListProps {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
  companyName: string;
  rating: string;
  price: string;
  commentsData?: CommentsDataProps[];
  varieties?: VarietyDataProps[];
  ratingData: RatingDataProp;
}
