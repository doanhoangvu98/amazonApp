import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import * as Navigation from '../../../navigation/navigation';

const ProductItem = props => {
  const item = props.item;
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => Navigation.navigate('ProductDetail', {data: item})}>
      <Image
        style={styles.image}
        source={{
          uri: item.images[0],
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((element, index) => (
            <IconAwesome
              name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={16}
              color="#FEA01F"
              style={styles.star}
            />
          ))}
          <Text style={styles.textRating}>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
          )}
        </Text>
        <View style={styles.itemSave}>
          <Text style={styles.itemSavePercent}>Save 10%</Text>
          <Text style={styles.itemSaveMethod}> with coupon</Text>
        </View>

        <Text style={styles.itemShipTo}>Ships to Spain</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
