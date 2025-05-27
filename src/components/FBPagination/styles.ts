import {StyleSheet} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
const styles = StyleSheet.create({
  paginationViewStyle: {
    height: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIndexStyle: {
    backgroundColor: colors?.darkBluegrey4,
    height: 16,
    marginRight: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIndexText: {
    color: colors?.white,
    fontSize: 8,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: fontFamily?.primaryFont?.bold,
  },
  nonSelectedIndexStyle: {
    backgroundColor: colors?.darkBluegrey4,
    height: 5,
    width: 5,
    marginRight: 5,
    borderRadius: 10,
  },
});
export default styles;
