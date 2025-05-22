import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet?.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors?.appBackgroundColor2,
    alignItems: 'center',
  },
  horizontalCentralAlignment: {
    alignItems: 'center',
  },
  sofaImageStyle: {
    height: 300,
    width: 300,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: -1},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  posterTextView: {
    width: 200,
  },
  posterText: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fontFamily?.primaryFont?.medium,
  },
  navigationButtonView: {
    backgroundColor: colors?.darkBluegrey4,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  navigationButtonTextStyle: {
    fontSize: 12,
    fontFamily: fontFamily?.primaryFont?.medium,
    color: colors?.white,
  },
});

export default styles;
