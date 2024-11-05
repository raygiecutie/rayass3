import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <TextInput 
        placeholder="Enter your email" 
        style={styles.input} 
        placeholderTextColor="#888" 
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Reset Password" 
          onPress={() => navigation.navigate('Login')} // Navigate to Login page
        />
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Back to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2C3E50', // Dark background
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#34495E', // Darker input background
    color: 'white', // Input text color
  },
  buttonContainer: {
    marginVertical: 10,
  },
  link: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
