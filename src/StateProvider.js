// setup the data layer

import React, { createContext, useContext, useReducer } from "react";

//THIS PREPARES THE DATA LAYER
export const StateContext = createContext();

// THIS WRAPS THE APP AND PROVIDES THE DATA LAYER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// THIS WILL PULL INFORMATION FROM DATA LAYER
export const useStateValue = () => useContext(StateContext);
