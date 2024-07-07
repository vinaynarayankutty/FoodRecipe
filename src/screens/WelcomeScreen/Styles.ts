import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },

  content: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},

  title: {
    fontSize: responsiveFontSize(50),
    fontFamily: 'Poppins Bold',
    color: 'white',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: responsiveFontSize(18),
    fontFamily: 'Poppins Regular',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Styles;
