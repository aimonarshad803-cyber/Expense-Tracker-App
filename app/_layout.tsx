import { Stack } from 'expo-router';

import ExpenseProvider
from '../context/ExpenseContext';

import ThemeProvider
from '../context/ThemeContext';

export default function Layout() {

  return (

    <ThemeProvider>

      <ExpenseProvider>

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />

      </ExpenseProvider>

    </ThemeProvider>

  );
}
