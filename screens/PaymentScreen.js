import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const CardPaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCardForm, setShowCardForm] = useState(false);

  // Format card number to show in groups of 4
  const formattedCardNumber = cardNumber
    ? cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ') // Format as 4 groups of 4 digits
    : '#### #### #### ####';

  const handleSubmit = () => {
    Alert.alert('Payment Process 🚀', `Name: ${name}, Card: ${formattedCardNumber}`);
    setShowCardForm(true); // Show card payment form after details
  };

  return (
    <View style={styles.container}>
      {/* Personal Information Form */}
      {!showCardForm ? (
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Enter Your Details</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Next ⏭️</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Card Payment Form
        <View style={styles.cardForm}>
          <Text style={styles.headerText}>Enter Your Payment Details</Text>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>VISA</Text>
              <View style={styles.chip}></View>
              <Text style={styles.cardNumber}>{formattedCardNumber}</Text>
              <Text style={styles.cardDate}>EXP {expiryDate || 'MM/YY'}</Text>
              <Text style={styles.cardHolder}>{cardHolder || 'CARD HOLDER NAME'}</Text>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            maxLength={16}
          />

          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
            keyboardType="numeric"
            maxLength={5}
          />

          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            value={cardHolder}
            onChangeText={setCardHolder}
          />

          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Payment Submitted! ✅')}>
            <Text style={styles.buttonText}>PAY NOW 💸</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#f44336' }]}
            onPress={() => setShowCardForm(false)}
          >
            <Text style={styles.buttonText}>Back ⏪</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',  // Light Blue background for the whole screen
    padding: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    backgroundColor: '#E6E6FA',  // White background for the form
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardForm: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',  // White background for the card form
  },
  cardContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#008080',  // Blue background for the card
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  chip: {
    width: 50,
    height: 35,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 16,
    color: '#fff',
  },

  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,  // Increased vertical padding for a larger button
    paddingHorizontal: 30, // Added horizontal padding for a wider button
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    minWidth: 200, // Ensures a minimum width for a large button
    height: 60, // Increased height for a larger button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size for better visibility
    fontWeight: 'bold',
  },
  
});

export default CardPaymentScreen;
