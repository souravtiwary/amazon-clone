// setting the data layer
// we need to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This is data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, intiaState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intiaState)}>
    {children}
  </StateContext.Provider>
);

//now wrap the whole app in <StateContext.Provider />
//chage in index.js

//This is ow we use it inside of a component
export const useStateValue = () => useContext(StateContext);
