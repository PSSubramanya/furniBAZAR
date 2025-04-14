import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet?.create({
  toastMainContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 100,
    width: '95%',
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 5,
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors?.darkGrey,
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
  headerStyle: {
    fontFamily: fontFamily?.primaryFont?.semiBold,
    color: colors?.white,
    fontSize: 16,
  },
  descriptionStyle: {
    fontFamily: fontFamily?.primaryFont?.regular,
    color: colors?.white,
    marginTop: 5,
    maxWidth: 260,
  },
  closeIconStyle: {
    height: 16,
    width: 16,
    marginRight: 10,
  },
  flexRowStyle: {
    flexDirection: 'row',
  },
  toastIconTypeStyle: {
    marginRight: 5,
  },
  toastTextView: {
    marginLeft: 0,
  },
});

export default styles;
