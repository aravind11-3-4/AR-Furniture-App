import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const FurnitureItem = ({ item, onAddToCart }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Rs.{item.price.toFixed(2)}</Text>
        <Button title="Add to Cart 🏷️" onPress={() => onAddToCart(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#ff6347',
  },
});

export default FurnitureItem;
