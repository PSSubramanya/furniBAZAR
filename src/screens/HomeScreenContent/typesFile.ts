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
}
