import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainerStyle: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },

  headerContainer: {
    marginVertical: 20,
  },

  heading: {
    fontSize: responsiveFontSize(22),
    color: 'black',
    fontFamily: 'Poppins Bold',
  },

  itemsWrapper: {
    marginVertical: 10,
  },

  mealsBanner: {
    width: '100%',
    height: responsiveHeight(20),
    borderRadius: 10,
  },

  mealTitle: {
    fontSize: responsiveFontSize(16),
    color: 'black',
    fontFamily: 'Poppins Bold',
    paddingVertical: 10,
  },

  bookmarkBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  authorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImg: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    resizeMode: 'contain',
    borderRadius: responsiveWidth(10),
    borderWidth: StyleSheet.hairlineWidth,
  },

  author: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'Poppins Regular',
    color: '#A9A9A9',
    paddingHorizontal: 20,
  },

  emptyContainer: {
    flex: 2,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: responsiveFontSize(16),
    color: 'grey',
    fontFamily: 'Poppins Regular',
  },
});

export default Styles;
