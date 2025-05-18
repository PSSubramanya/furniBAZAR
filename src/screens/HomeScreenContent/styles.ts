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
    backgroundColor: colors?.darkBlueGrey,
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
});

export const themeStyle = ({
  filterSelect,
}: ThemeStyleProps): HomeScreenContentStyleProps => {
  return {
    filterIconViewStyle: {
      backgroundColor: filterSelect ? colors?.darkBlueGrey : colors?.white,
    },
  };
};
