import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <View>
      <TouchableOpacity style={styles.tombol} onPress={onSubmit}>
        <Text style={styles.tulisan}> {label} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  tombol: {
    backgroundColor: '#C238CE',
    color: 'white',
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    paddingTop: 10,
    paddingBottom: 9,
  },
  tulisan: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});
