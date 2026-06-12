import {
  createContext,
  useState,
} from 'react';

export const ExpenseContext =
  createContext<any>(null);

export default function ExpenseProvider({
  children,
}: any) {

  const [expenses, setExpenses] =
    useState([
      {
        title: 'Food',
        amount: '500',
      },
    ]);

  const addExpense = (
    title: string,
    amount: string
  ) => {

    setExpenses([
      ...expenses,
      { title, amount },
    ]);
  };

  const deleteExpense = (
    index: number
  ) => {

    const updatedExpenses =
      expenses.filter(
        (_: any, i: number) =>
          i !== index
      );

    setExpenses(updatedExpenses);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}