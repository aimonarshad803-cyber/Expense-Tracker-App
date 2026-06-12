import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { router } from 'expo-router';

export default function ForgotPassword() {

  const handleReset = () => {
    Alert.alert(
      'Success',
      'Password reset link sent to your email'
    );

    router.back();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Forgot Password
      </Text>

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>
          Send Reset Link
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#42415c',
  },

  input: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#474656',
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});