import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import font from '../../constant/fonts';

const FilterBar = () => {
  return (
    <View>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pickerContainer}>
          <Picker>
            <Picker.Item label="Delivery" value="Delivery" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker>
            <Picker.Item label="PC Gaming Key" value="Delivery" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker>
            <Picker.Item label="Brand" value="Delivery" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker>
            <Picker.Item label="Review" value="Delivery" />
          </Picker>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    maxWidth: 200,
    minWidth: 150,
    marginHorizontal: 5,
  },
});

export default FilterBar;
