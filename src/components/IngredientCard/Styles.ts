import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(2),
    padding: 10,
    marginVertical: 8,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageContainer: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    resizeMode: 'contain',
  },

  tileTitle: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'Poppins Bold',
    color: 'black',
    paddingHorizontal: 20,
  },

  quantity: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'Poppins Regular',
    color: 'black',
    paddingHorizontal: 20,
  },
});

export default Styles;
