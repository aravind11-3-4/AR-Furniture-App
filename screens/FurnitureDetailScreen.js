import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView for 3D model

const ItemDetailsScreen = ({ route }) => {
  const { item } = route.params; // Access item details passed from the HomeScreen
  
  // URL for the 3D model from Sketchfab
  const modelUrl = item.modelUrl || "https://sketchfab.com/models/d6e30b5e17d84e65ae90ce564727487e/embed?ui_theme=dark"; 

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: modelUrl }} // Embedding the Sketchfab model
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});

export default ItemDetailsScreen;
