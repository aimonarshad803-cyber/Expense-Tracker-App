import {
  createContext,
  useState,
} from 'react';

export const ThemeContext =
  createContext<any>(null);

export default function ThemeProvider({
  children,
}: any) {

  const [darkMode, setDarkMode] =
    useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}