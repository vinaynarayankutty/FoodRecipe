import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollviewContainer: {
    flexGrow: 1,
  },

  greeting: {
    fontSize: responsiveFontSize(22),
    color: 'black',
    fontFamily: 'Poppins Bold',
    paddingHorizontal: 20,
  },

  input: {
    height: responsiveHeight(6),
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    padding: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  categoryContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: responsiveFontSize(20),
    fontFamily: 'Poppins Bold',
    color: 'black',
  },

  seeBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAllText: {
    fontFamily: 'Poppins Bold',
    fontSize: 14,
    color: '#00C1CD',
    paddingRight: 10,
  },

  trendingContainer: {flex: 1, marginLeft: 10},

  trendingPostImg: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: responsiveWidth(4),
  },

  mealDescription: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'Poppins Bold',
    color: 'black',
    paddingVertical: 10,
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

  categoryItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  categoryName: {
    fontSize: 16,
  },

  categoryItemContainer: {paddingHorizontal: 20},

  mealItem: {
    backgroundColor: '#e6f9fa',
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 10,
    width: responsiveWidth(35),
    height: responsiveHeight(28),
    justifyContent: 'space-around',
  },

  imageContainer: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  imageLoader: {
    position: 'absolute',
  },

  mealImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(15),
    borderWidth: StyleSheet.hairlineWidth,
  },

  mealName: {
    fontSize: 14,
    fontFamily: 'Poppins Bold',
    marginTop: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  timeTitle: {
    fontSize: 14,
    fontFamily: 'Poppins Regular',
    color: '#C1C1C1',
  },

  timeValue: {
    fontSize: 14,
    fontFamily: 'Poppins Bold',
    color: 'black',
  },

  bookmarkContainer: {justifyContent: 'flex-end'},

  bookmarkBtn: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
