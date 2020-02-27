import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flowers', amount: -21 },
    { id: 2, text: 'Salary', amount: 400 },
    { id: 3, text: 'Dinner', amount: -129 },
    { id: 4, text: 'Loan Repayment', amount: 45 }
  ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>
  )
}