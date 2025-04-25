// src/screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native'; // For displaying images if added later

const HomeScreen = ({ onAddToCart }) => {
  const navigation = useNavigation();
  const [furnitureItems, setFurnitureItems] = useState([]);

  // Fetch the list of items from AsyncStorage
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('furnitureItems');
        if (storedItems) {
          setFurnitureItems(JSON.parse(storedItems)); // Parse and set the items
        }
      } catch (error) {
        console.error('Error loading items from AsyncStorage:', error);
      }
    };

    fetchItems();
  }, []);

  // Handle View Details button click
  const handleViewDetails = (item) => {
    navigation.navigate('ItemDetails', { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={furnitureItems}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Render card content */}
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>${item.price}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>

            {/* Model or Image Preview */}
            {item.image ? (
              <Image style={styles.cardImage} source={{ uri: item.image }} />
            ) : (
              <Text style={styles.noImage}>No image available</Text>
            )}

            {/* Buttons */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleViewDetails(item)}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.title} // Use item title or other unique ID
      />
    </View>
  );
};

// Styles for HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 16,
    color: '#FF5733',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  noImage: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    backgroundColor: '#1CAAD9',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
