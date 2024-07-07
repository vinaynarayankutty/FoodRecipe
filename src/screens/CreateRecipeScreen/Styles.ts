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
    flex: 1,
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

  imageHolderContainer: {
    marginVertical: 10,
    height: responsiveHeight(22),
    borderRadius: responsiveHeight(4),
  },

  bg: {backgroundColor: '#F1F1F1'},

  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: responsiveHeight(4),
  },

  placeholderImg: {
    resizeMode: 'center',
    flex: 1,
    alignSelf: 'center',
  },

  editBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: responsiveHeight(6),
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#00c1cd',
    padding: 12,
  },

  ingredientsTitleWrapper: {
    marginVertical: 10,
  },

  ingredientsTitle: {
    fontSize: responsiveFontSize(18),
    color: 'black',
    fontFamily: 'Poppins Bold',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  itemInput: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    height: responsiveHeight(6),
    width: responsiveWidth(40),
    borderRadius: 10,
    padding: 12,
  },

  quantity: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    height: responsiveHeight(6),
    width: responsiveWidth(30),
    borderRadius: 10,
    justifyContent: 'center',
    padding: 12,
  },

  deleteBtnContainer: {
    padding: 2,
  },

  addnewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(50),
    padding: 6,
  },

  addNew: {
    fontSize: responsiveFontSize(16),
    color: 'black',
    fontFamily: 'Poppins Bold',
    paddingLeft: 10,
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },

  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;
