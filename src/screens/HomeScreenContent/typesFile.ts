import {ImageSourcePropType, ViewStyle} from 'react-native';

export interface ThemeStyleProps {
  filterSelect: boolean;
}
export interface HomeScreenContentStyleProps {
  filterIconViewStyle: ViewStyle;
}

export interface ProductListProps {
  id: string;
  name: string;
  image: ImageSourcePropType;
  companyName: string;
  rating: string;
  price: string;
}
