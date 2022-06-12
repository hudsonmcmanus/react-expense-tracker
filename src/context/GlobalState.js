import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Init state
const initState = {
    transactions: []
}

export const GlobalContext = createContext(initState);

// Provider

export const GlobalProvider = ({ childern }) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {childern}
    </GlobalContext.Provider>);
}