import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (!email || !password) {
      Alert.alert(
        'Error',
        'Please fill all fields'
      );
      return;
    }

    if (
      email === 'admin@gmail.com' &&
      password === '12345'
    ) {
      router.replace('/home');
    }

    else {
      Alert.alert(
        'Invalid',
        'Wrong email or password'
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Login
      </Text>

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.buttonText}>
          Signup
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/forgetpassword')}
      >
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#a0a9ba',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#42415c',
  },

  input: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#474656',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  forgot: {
    textAlign: 'center',
    marginTop: 20,
    color: '#474656',
    fontWeight: 'bold',
  },
});