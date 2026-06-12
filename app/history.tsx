import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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

export default function History() {

  const {
    expenses,
    deleteExpense,
  } = useContext(ExpenseContext);

  const { darkMode } =
    useContext(ThemeContext);

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
        Expense History
      </Text>

      <FlatList
        data={expenses}

        keyExtractor={(_, index) =>
          index.toString()
        }

        renderItem={({ item, index }) => (

          <View style={[styles.card,
            {
            
             backgroundColor:
                  darkMode
                    ? '#1F2937'
                    : 'white',
              },
          ]}>

            <Text style={[styles.text,
                {
                     color:
                    darkMode
                      ? 'white'
                      : 'black',
                }, 
            ]}>
              {item.title}
            </Text>

            <Text style={styles.amount}>
              Rs {item.amount}
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                deleteExpense(index)
              }
            >

              <Text style={styles.deleteText}>
                Delete
              </Text>

            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#42415c',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#42415c',
  },

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  amount: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },

  deleteText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});