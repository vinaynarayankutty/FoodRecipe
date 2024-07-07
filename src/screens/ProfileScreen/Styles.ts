import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headerContainer: {
    marginVertical: 20,
  },

  heading: {
    fontSize: responsiveFontSize(22),
    color: 'black',
    fontFamily: 'Poppins Bold',
  },
});

export default Styles;
