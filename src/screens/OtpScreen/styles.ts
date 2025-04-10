import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet?.create({
  flexContainer: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  topContainer: {
    backgroundColor: colors?.appBackgroundColor2,
    alignItems: 'center',
    height: 350,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  illustrationImageStyle: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  signInInstructionsStyle: {
    alignSelf: 'center',
    fontFamily: fontFamily?.primaryFont?.regular,
  },
});

export default styles;
