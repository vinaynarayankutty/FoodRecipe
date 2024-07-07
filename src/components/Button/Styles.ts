import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../utils/responsive';

const Styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: responsiveFontSize(16),
    fontFamily: 'Poppins Bold',
  },
});

export default Styles;
