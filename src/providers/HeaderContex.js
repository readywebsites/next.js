"use client";

import { createContext, useContext } from "react";

// Create the context
const HeaderContext = createContext(null);

// Provider Component
const HeaderContextProvider = ({ value, children }) => {
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

// Hook to use the context
export const useHeaderContext = () => {
  const value = useContext(HeaderContext);
  return value;
};

export default HeaderContextProvider;
