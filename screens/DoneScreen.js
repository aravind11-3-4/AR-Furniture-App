import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DoneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You for Your Purchase!</Text>
      <Text>Your payment has been successfully processed.</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} // Navigate back to the Home screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DoneScreen;
