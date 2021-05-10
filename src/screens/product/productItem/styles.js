import {StyleSheet} from 'react-native';
import font from '../../../constant/fonts';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: font.bold,
  },
  price: {
    fontSize: 16,
    fontFamily: font.bold,
  },
  oldPrice: {
    fontSize: 14,
    fontFamily: font.regular,
    textDecorationLine: 'line-through',
    color: '#565656',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  textRating: {
    fontFamily: font.regular,
    color: '#565656',
  },
  itemSave: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  itemSavePercent: {
    backgroundColor: '#7AD960',
    fontFamily: font.bold,
    color: '#000',
    padding: 4,
    borderRadius: 3,
  },
  itemSaveMethod: {
    backgroundColor: '#fff',
    fontFamily: font.bold,
  },
  itemShipTo: {
    fontFamily: font.regular,
    color: '#828283',
    marginVertical: 5,
  },
});

export default styles;
