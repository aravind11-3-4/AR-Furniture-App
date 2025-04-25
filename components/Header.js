import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing a Material icon

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>FURNITURE APP</Text>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Icon name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6495ED',  // Green background for header
    paddingTop: 40,  // Adjust for status bar space
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,  // Add shadow for Android
    shadowColor: '#000',  // Add shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',  // White color for title to contrast with the green background
  },
  cartButton: {
    backgroundColor: '#00008B',  // Darker green color for cart button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});

export default Header;
