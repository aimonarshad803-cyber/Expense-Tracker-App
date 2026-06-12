import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  Alert,
} from 'react-native';

import {
  useContext,
  useState,
} from 'react';

import {
  ThemeContext,
} from '../context/ThemeContext';

import {
  router,
} from 'expo-router';

export default function Profile() {

  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  const [name, setName] =
    useState('Aimon');

  const [email, setEmail] =
    useState('aimon@gmail.com');

  const handleSave = () => {

    Alert.alert(
      'Success',
      'Profile Updated'
    );
  };

  const handleLogout = () => {

    router.replace('/login');
  };

  return (

    <View
      style={[
        styles.container,
        {
          backgroundColor:
            darkMode
              ? '#111827'
              : '#F3F4F6',
        },
      ]}
    >

      <Text
        style={[
          styles.title,
          {
            color:
              darkMode
                ? 'white'
                : '#4F46E5',
          },
        ]}
      >
        Profile
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor:
              darkMode
                ? '#1F2937'
                : 'white',
          },
        ]}
      >

        <Text
          style={[
            styles.label,
            {
              color:
                darkMode
                  ? 'white'
                  : 'black',
            },
          ]}
        >
          Name
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text
          style={[
            styles.label,
            {
              color:
                darkMode
                  ? 'white'
                  : 'black',
            },
          ]}
        >
          Email
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
        >

          <Text style={styles.buttonText}>
            Save Profile
          </Text>

        </TouchableOpacity>

        <View style={styles.darkRow}>

          <Text
            style={{
              color:
                darkMode
                  ? 'white'
                  : 'black',

              fontSize: 18,
            }}
          >
            Dark Mode
          </Text>

          <Switch
            value={darkMode}
            onValueChange={toggleTheme}
          />

        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >

          <Text style={styles.buttonText}>
            Logout
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#a0a9ba',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#474656',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },

  logoutButton: {
    backgroundColor: 'red',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  darkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
});