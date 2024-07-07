import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    height: responsiveHeight(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerBtn: {
    width: responsiveWidth(10),
    height: responsiveHeight(4),
    justifyContent: 'center',
  },

  titleContainer: {
    marginVertical: 4,
  },

  title: {
    fontSize: responsiveFontSize(22),
    color: 'black',
    fontFamily: 'Poppins Bold',
  },

  imageContainer: {
    marginVertical: 10,
    height: responsiveHeight(22),
    borderRadius: responsiveHeight(4),
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: responsiveHeight(4),
  },

  ingredientsTitleWrapper: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ingredientsTitle: {
    fontSize: responsiveFontSize(18),
    color: 'black',
    fontFamily: 'Poppins Bold',
  },

  itemLength: {
    fontSize: responsiveFontSize(18),
    color: 'black',
    fontFamily: 'Poppins Regular',
  },
});

export default Styles;
