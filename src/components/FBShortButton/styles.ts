import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet?.create({
  shortbuttonView: {
    height: 65,
    width: 65,
    borderWidth: 1,
    borderColor: colors?.borderColor,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  shortButtonImageStyle: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  shortButtonText: {
    textAlign: 'center',
    fontFamily: fontFamily?.primaryFont?.regular,
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
