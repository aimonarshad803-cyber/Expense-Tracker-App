import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  useContext,
} from 'react';
import { router } from 'expo-router';

import {
  ThemeContext,
} from '../context/ThemeContext';

export default function Home() {

    const { darkMode } =
    useContext(ThemeContext);

  return (
    <View style={[styles.container,
        {
          backgroundColor:
            darkMode
              ? '#111827'
              : '#F3F4F6',
        },
    ]}>

      <Text style={[styles.title,
         {
            color:
              darkMode
                ? 'white'
                : '#4F46E5',
          },
      ]}>
        Expense Tracker
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/addexpense')}
      >
        <Text style={styles.buttonText}>
          Add Expense
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/history')}
      >
        <Text style={styles.buttonText}>
          History
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/analytics')}
      >
        <Text style={styles.buttonText}>
          Analytics
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/profile')}
      >
        <Text style={styles.buttonText}>
          Profile
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
    color: '#454452',
  },

  button: {
    backgroundColor: '#474656',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});