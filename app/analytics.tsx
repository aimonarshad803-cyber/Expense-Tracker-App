import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  useContext,
} from 'react';

import {
  ExpenseContext,
} from '../context/ExpenseContext';

import {
  ThemeContext,
} from '../context/ThemeContext';

export default function Analytics() {

  const { expenses } =
    useContext(ExpenseContext);

    const { darkMode } =
    useContext(ThemeContext);

  const total = expenses.reduce(
    (sum: number, item: any) =>
      sum + Number(item.amount),
    0
  );

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
        Analytics
      </Text>

      <View style={[styles.card,
         {
            backgroundColor:
              darkMode
                ? '#1F2937'
                : 'white',
          },
      ]}>

        <Text style={[styles.label,
             {
              color:
                darkMode
                  ? 'white'
                  : 'gray',
            },
        ]}>
          Total Expenses
        </Text>

        <Text style={styles.amount}>
          Rs {total}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Total Transactions
        </Text>

        <Text style={styles.amount}>
          {expenses.length}
        </Text>

      </View>

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

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: 'gray',
  },

  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
});