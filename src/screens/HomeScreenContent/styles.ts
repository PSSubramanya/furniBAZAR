import {StyleSheet, TextStyle} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import {HomeScreenContentStyleProps, ThemeStyleProps} from './typesFile';
// import

export const styles = StyleSheet.create({
  bottomBarIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  selectedViewStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedViewColor: {
    backgroundColor: colors?.white,
  },
  selectedViewColor: {
    backgroundColor: colors?.darkBluegrey4,
  },
  categoryFilterView: {
    marginTop: 20,
  },
  searchIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  searchInput: {
    fontFamily: fontFamily?.primaryFont?.regular,
    fontSize: 16,
    marginLeft: 16,
    width: 255,
  },
  filterIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  selectedFilterStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedFilterStyle: {
    backgroundColor: colors?.white,
  },
  productNameStyle: {
    fontFamily: fontFamily?.primaryFont?.medium,
    marginLeft: 16,
    marginTop: 10,
    width: 60,
    height: 45,
  },
  companyNameStyle: {
    fontFamily: fontFamily?.primaryFont?.medium,
    color: colors?.greyColor,
    marginLeft: 16,
    width: 80,
    height: 50,
    paddingTop: 5,
  },
  priceStyle: {
    fontFamily: fontFamily?.primaryFont?.medium,
    marginLeft: 16,
    marginTop: 3,
  },
  ratingStyle: {
    fontFamily: fontFamily?.primaryFont?.semiBold,
    marginRight: 16,
  },
  productImageStyle: {
    height: 140,
    width: 150,
  },
  starIcon: {
    height: 20,
    width: 20,
  },
  addIcon: {
    height: 30,
    width: 30,
  },
  addContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: colors?.darkBluegrey4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export const themeStyle = ({
  filterSelect,
}: ThemeStyleProps): HomeScreenContentStyleProps => {
  return {
    filterIconViewStyle: {
      backgroundColor: filterSelect ? colors?.darkBluegrey4 : colors?.white,
    },
  };
};
