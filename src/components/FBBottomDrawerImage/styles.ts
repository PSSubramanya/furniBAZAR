import {StyleSheet} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet.create({
  bottomBarIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  selectedViewStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: -50,
    backgroundColor: colors?.darkBlueGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fontFamily?.primaryFont?.medium,
  },
});

export default styles;
