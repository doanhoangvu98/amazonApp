import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import QuantitySelector from '../../../components/quantitySelector/index';
import Button from '../../../components/button/Button';
import Carousel from '../../../components/Carousel/ImageCarousel';
import Header from '../../../components/header/headerMain';
import * as Navigation from '../../../navigation/navigation';

const ProductDetail = props => {
  const params = props.route.params;
  const product = params.data;
  const [option, setOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <React.Fragment>
      <Header />
      <ScrollView
        style={styles.root}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
        <Text style={styles.title}>{product.title}</Text>
        {/* Image carousel */}
        <Carousel images={product.images} />
        {/* Option selector */}
        <View style={styles.picker}>
          <Picker
            selectedValue={option}
            onValueChange={(value, index) => setOption(value)}>
            {product.options.map(option => (
              <Picker.Item label={option} value={option} />
            ))}
          </Picker>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
          )}
        </Text>
        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>
        {/* Quantity */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        {/* Button */}
        <Button
          text="Add To Cart"
          onPress={() => {}}
          containerStyle={{backgroundColor: '#e3c905'}}
        />
        <Button text="Buy Now" onPress={() => {}} />
      </ScrollView>
    </React.Fragment>
  );
};

export default ProductDetail;
