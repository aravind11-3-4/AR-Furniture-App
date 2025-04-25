import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './screens/HomeScreen';
import FurnitureDetailScreen from './screens/FurnitureDetailScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import AdminScreen from './screens/AdminScreen'; // Admin screen for adding/editing items
import NewItemScreen from './screens/NewItemScreen'; // Screen to add new item
import LoginScreen from './screens/LoginScreen'; // Login screen
import RegisterScreen from './screens/RegisterScreen'; // Register screen

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]); // State for managing cart items

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to handle checkout
  const checkout = () => {
    console.log('Proceeding to checkout with', cartItems);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        
        {/* Register Screen */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />

        {/* Home Screen: Displays the list of items and allows adding to the cart */}
        <Stack.Screen 
          name="Home" 
          children={(props) => <HomeScreen {...props} onAddToCart={addToCart} />} 
        />

        {/* Furniture Detail Screen: Show details of a specific furniture */}
        <Stack.Screen 
          name="FurnitureDetail" 
          component={FurnitureDetailScreen} 
        />

        {/* Cart Screen: Displays items in the cart */}
        <Stack.Screen 
          name="Cart" 
          children={(props) => (
            <CartScreen
              {...props}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          )}
        />

        {/* Payment Screen: Handles payment for the cart items */}
        <Stack.Screen 
          name="Payment" 
          children={(props) => (
            <PaymentScreen
              {...props}
              cartItems={cartItems}
              checkout={checkout}
            />
          )}
        />

        {/* Item Details Screen: Display detailed info about the item */}
        <Stack.Screen 
          name="ItemDetails" 
          component={ItemDetailsScreen} 
        />

        {/* Admin Screen: Admin interface for managing items */}
        <Stack.Screen 
          name="Admin" 
          component={AdminScreen} 
        />

        {/* New Item Screen: Add a new item to the catalog */}
        <Stack.Screen 
          name="NewItemScreen" 
          component={NewItemScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
