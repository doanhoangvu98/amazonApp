import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Button = ({text, onPress, containerStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyle]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#a15e1b',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
