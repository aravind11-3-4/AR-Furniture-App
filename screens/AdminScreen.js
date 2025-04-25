import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { database, storage } from '../firebaseConfig'; // Assuming Firebase configuration is in this file
import { ref, push, set } from 'firebase/database';
import { uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedUserId] = useState('admin');  // Hardcoded admin ID
  const [storedPassword] = useState('123');  // Hardcoded admin password
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [modelUrl, setModelUrl] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Check login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('isLoggedIn');
      if (loginStatus === 'true') {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  // Handle login
  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert('Error', 'Please enter both User ID and Password.');
      return;
    }

    if (userId === storedUserId && password === storedPassword) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } else {
      Alert.alert('Error', 'Invalid credentials. Please try again.');
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  // Handle image picking
  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Handle item submission
  const handleSubmit = async () => {
    if (!title || !price || !description || !modelUrl) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    setLoading(true); // Start loading

    const newItem = {
      title,
      price: parseFloat(price),
      description,
      modelUrl,
      image: '', // Placeholder for image
    };

    try {
      // If there's an image, upload it to Firebase Storage
      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const imageRef = storageRef(storage, `images/${Date.now()}`);
        await uploadBytes(imageRef, blob);
        const imageUrl = await getDownloadURL(imageRef);
        newItem.image = imageUrl; // Add image URL to item data
      }

      // Save to Firebase Realtime Database
      const newItemRef = push(ref(database, 'items'));
      await set(newItemRef, newItem);
      Alert.alert('Success', 'Item added successfully to Firebase.');
      clearFormFields();
    } catch (error) {
      console.error('Error adding item:', error);
      Alert.alert('Error', 'Failed to add item.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Clear form fields after submission
  const clearFormFields = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setModelUrl('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        // Login Form
        <View>
          <Text style={styles.title}>Admin Login</Text>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            value={userId}
            onChangeText={setUserId}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Admin Panel
        <View>
          <Text style={styles.title}>Admin Panel</Text>
          <Text style={styles.userInfo}>Logged in as: {storedUserId}</Text>

          {/* Form to add new item */}
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="3D Model URL"
            value={modelUrl}
            onChangeText={setModelUrl}
          />

          {/* Image Picker Button */}
          <TouchableOpacity style={styles.button} onPress={handleImagePick}>
            <Text style={styles.buttonText}>Pick Image</Text>
          </TouchableOpacity>

          {image && (
            <Text style={styles.imageText}>Image Selected: {image}</Text>
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Add Item</Text>
            )}
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
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
  userInfo: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#1CAAD9',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#D91C1C',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});

export default AdminPage;
