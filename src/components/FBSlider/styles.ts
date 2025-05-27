import {StyleSheet} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import {FBSliderStyleProps, ThemeStyleProps} from './typesFile';
const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export const themeStyle = ({
  sliderWidth,
  thumbSize,
  translateX,
}: ThemeStyleProps): FBSliderStyleProps => {
  return {
    sliderLineStyle: {
      width: sliderWidth,
      height: 3,
      backgroundColor: colors?.borderColor,
      borderRadius: 20,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    slidingDotStyle: {
      width: thumbSize,
      height: thumbSize,
      borderRadius: thumbSize / 2,
      backgroundColor: colors?.darkBluegrey4,
      position: 'absolute',
      left: translateX,
    },
  };
};
export default styles;
