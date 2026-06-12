import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  useState,
  useContext,
} from 'react';

import { router } from 'expo-router';

import {
  ExpenseContext,
} from '../context/ExpenseContext';

import {
  ThemeContext,
} from '../context/ThemeContext';

export default function AddExpense() {

  const { addExpense } =
    useContext(ExpenseContext);

    const { darkMode } =
    useContext(ThemeContext);

  const [title, setTitle] =
    useState('');

  const [amount, setAmount] =
    useState('');

  const handleSave = () => {

    if (!title || !amount) {

      Alert.alert(
        'Error',
        'Please fill all fields'
      );

      return;
    }

    addExpense(title, amount);

    Alert.alert(
      'Success',
      'Expense Added'
    );

    setTitle('');
    setAmount('');

    router.push('/history');
  };

  return (
    <View style={[styles.container,
         {
          backgroundColor:
            darkMode
              ? '#111827'
              : '#dbe0e9',
        },
    ]}>

      <Text style={[styles.title,
         {
            color:
              darkMode
                ? 'white'
                : '#42415c',
          },
      ]}>
        Add Expense
      </Text>

      <TextInput
        placeholder="Expense Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Expense Amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Save Expense
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
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});