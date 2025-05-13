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
  signInInstructionsStyle2: {
    alignSelf: 'center',
    fontFamily: fontFamily?.primaryFont?.semiBold,
  },
  headerText: {
    marginTop: 100,
  },
  otpTimerTextStyle: {
    marginTop: 80,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily?.primaryFont?.regular,
  },
  otpDigitsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  horizontalCentralisedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowStyle: {
    flexDirection: 'row',
  },
  resendOTPTextStyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily?.primaryFont?.regular,
  },
});

export default styles;
