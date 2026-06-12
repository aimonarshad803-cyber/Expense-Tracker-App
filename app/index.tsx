import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

import {
  useEffect,
  useRef,
} from 'react';

import { router } from 'expo-router';

export default function Index() {

  const fadeAnim =
    useRef(
      new Animated.Value(0)
    ).current;

  useEffect(() => {

    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();

    setTimeout(() => {
      router.replace('/login');
    }, 2500);

  }, []);

  return (

    <View style={styles.container}>

      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        Expense Tracker
      </Animated.Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0a9ba',
  },

  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
});