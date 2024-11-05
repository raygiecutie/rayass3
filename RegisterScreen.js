import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        placeholderTextColor="#888" 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        placeholderTextColor="#888" 
      />
      <TextInput 
        placeholder="Confirm Password" 
        secureTextEntry 
        style={styles.input} 
        placeholderTextColor="#888" 
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Register" 
          onPress={() => navigation.navigate('Login')} 
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

export default RegisterScreen;
