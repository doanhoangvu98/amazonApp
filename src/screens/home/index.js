import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import ProductItem from '../product/productItem/productItem';
import products from '../../data/products';
import Feather from 'react-native-vector-icons/Feather';
import font from '../../constant/fonts';
import Header from '../../components/header/headerMain';
import FilterBar from '../../components/filterBar/filterBar';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.deliverContainer}>
        <Feather name="map-pin" size={24} color="#000" />
        <Text style={styles.textDeliver}>Deliver to Spain</Text>
      </View>
      <FilterBar />
      <FlatList
        data={products}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <ProductItem item={item} />;
        }}
        ListHeaderComponent={<View></View>}
        style={{paddingHorizontal: 10}}
        contentContainerStyle={{paddingBottom: 160}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  linearGradient: {
    height: 100,
  },
  actionBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B7C8C7',
  },
  searchBar: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0,
    borderRadius: 10,
  },
  iconSearchBarRight: {
    marginHorizontal: 4,
  },
  inputSearchBar: {
    height: 30,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
  },
  placeholderSearch: {
    fontSize: 16,
    alignItems: 'center',
    fontFamily: font.regular,
  },
  deliverContainer: {
    height: 40,
    backgroundColor: '#B9E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textDeliver: {
    fontSize: 15,
    marginLeft: 15,
    fontFamily: font.bold,
  },
});

export default HomeScreen;
