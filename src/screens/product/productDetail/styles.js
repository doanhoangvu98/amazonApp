import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  title: {},
});

export default styles;
