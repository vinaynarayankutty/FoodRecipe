import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsive';

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

  servesContainer: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },

  tileTitle: {
    fontSize: 14,
    fontFamily: 'Poppins Bold',
    color: 'black',
    paddingHorizontal: 20,
  },

  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(14),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    backgroundColor: 'white',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
