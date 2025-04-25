import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // WebView to display 3D model

const ItemDetailsScreen = ({ route }) => {
  const { item } = route.params; // Access item details passed from the Home screen

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: item.modelUrl }} // Display the 3D model from Sketchfab
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
