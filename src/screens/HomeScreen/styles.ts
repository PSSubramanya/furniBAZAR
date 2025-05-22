import {StyleSheet} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
const styles = StyleSheet.create({
  addedCartItems: {
    fontSize: 8,
    color: colors?.white,
    fontFamily: fontFamily?.primaryFont?.semiBold,
  },
  addedCartItemsContainer: {
    backgroundColor: colors?.lightVermillion,
    height: 14,
    width: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    zIndex: 1,
    position: 'absolute',
    right: 20,
    top: 16,
  },
});
export default styles;
