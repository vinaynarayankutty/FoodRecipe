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

  emptyContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: responsiveFontSize(16),
    color: 'grey',
    fontFamily: 'Poppins Regular',
  },
});

export default Styles;
