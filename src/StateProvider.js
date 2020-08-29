import React, { useContext, createContext, useReducer } from "react";

export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
