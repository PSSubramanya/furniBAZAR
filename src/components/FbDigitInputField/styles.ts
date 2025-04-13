import {StyleSheet} from 'react-native'; // eslint-disable-next-line no-undef
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const styles = StyleSheet.create({
  textInputStyle: {
    height: 80,
    width: 60,
    borderRadius: 5,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fontFamily?.primaryFont?.regular,
  },
});
export default styles;
