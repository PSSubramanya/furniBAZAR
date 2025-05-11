import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet?.create({
  flexContainer: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: colors?.appBackgroundColor2,
    alignItems: 'center',
    height: 350,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  illustrationImageStyle: {
    height: 150,
    width: 150,
    marginTop: 60,
  },
  signInInstructionsStyle: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 35,
    fontFamily: fontFamily?.primaryFont?.regular,
  },
  signinCardView: {
    backgroundColor: colors?.white,
    marginHorizontal: 23,
    paddingBottom: 20,
    zIndex: 1,
    marginTop: -50,
    shadowColor: colors?.black,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 10,
    borderRadius: 10,
  },
  googleLoginButton: {
    flexDirection: 'row',
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors?.borderColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLoginButtonText: {
    fontFamily: fontFamily?.primaryFont?.regular,
  },
  googleIcon: {
    height: 30,
    width: 30,
  },
  shortButtonsView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  dividerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  dividerStyle: {
    borderWidth: 0.5,
    borderColor: colors?.borderColor,
    height: 1,
    width: 100,
    marginTop: 10,
  },
  dividerTextStyle: {
    fontFamily: fontFamily?.primaryFont?.medium,
    fontSize: 12,
    color: colors?.borderColor,
  },
  textInputImageStyle: {
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
  },
  textInputImage: {
    height: 20,
    width: 20,
  },
  textInputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInputStyle: {
    fontSize: 16,
    fontFamily: fontFamily?.primaryFont?.regular,
    width: 265,
  },
  errorStyle: {
    marginTop: 5,
    marginLeft: 16,
    fontFamily: fontFamily?.primaryFont?.regular,
    color: colors?.errorColor1,
  },
  flexRowStyle: {
    flexDirection: 'row',
  },
  countryCodeStyle: {
    flexDirection: 'row',
    height: 60,
    width: 60,
    marginTop: 10,
    marginLeft: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors?.borderColor,
    borderRadius: 5,
  },
  mobileAuthenticationInputView: {
    flexDirection: 'row',
    height: 60,
    width: 240,
    marginTop: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default styles;
