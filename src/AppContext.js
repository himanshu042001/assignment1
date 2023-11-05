import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  companyData: {
    companyUEN: 'companyUEN',
    companyName: 'companyName',
    fullname: 'fullname',
    position: ' position',
    email: 'email',
    phone: 'phone',
    isChecked: false,
  },
};

function appReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_COMPANY_DATA':
      return { ...state, companyData: { ...state.companyData, ...action.payload } };
    default:
      return state;
  }
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}

export { useAppContext, AppProvider };
