import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive';

const Styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: responsiveWidth(5),
    width: responsiveWidth(80),
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(24),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
  },
  input: {
    width: '100%',
    height: responsiveHeight(6),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
  },
  btnsContainer: {
    flexDirection: 'row',
  },
  cancelBtn: {marginRight: 20},
});

export default Styles;
