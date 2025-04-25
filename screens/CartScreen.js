import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = ({ cartItems, removeFromCart, clearCart, navigation }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  // Function to handle the buy all items action
  const handleBuyAll = () => {
    navigation.navigate('Payment', { cartItems, total }); // Pass cartItems and total to PaymentScreen
  };

  // Function to handle individual item purchase (if needed)
  const handleBuyItem = (item) => {
    // You can handle item-specific payment if needed
    navigation.navigate('Payment', { cartItems: [item], total: item.price.toFixed(2) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {/* Show the list of cart items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.title} - ${item.price}</Text>

            {/* Buy Individual Item Button */}
            <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyItem(item)}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>

            {/* Remove Button */}
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Show total price */}
      <Text style={styles.total}>Total: ${total}</Text>

      {/* Action buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.smallButton} onPress={clearCart}>
          <Text style={styles.smallButtonText}>Clear Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={handleBuyAll}>
          <Text style={styles.smallButtonText}>Buy All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.smallButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  removeText: {
    color: '#ff6347', // Tomato color for "Remove"
    marginTop: 5,
    fontSize: 14,
  },
  buyButton: {
    backgroundColor: '#007BFF', // Blue color for "Buy"
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  actions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallButton: {
    backgroundColor: '#28A745', // Green color for buttons (e.g., Buy All)
    paddingVertical: 6, // Smaller vertical padding
    paddingHorizontal: 12, // Smaller horizontal padding
    borderRadius: 25,
    alignItems: 'center',
    width: '30%', // Adjust the button width for a small size
  },
  smallButtonText: {
    color: 'white',
    fontSize: 14, // Smaller font size
  },
});

export default CartScreen;
