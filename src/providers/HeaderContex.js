"use client";

import { createContext, useContext } from "react";

// Create the context
const HeaderContext = createContext(null);

// Provider Component
const HeaderContextProvider = ({ value, children }) => {
  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};

// Hook to use the context
export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderContextProvider");
  }
  return context;
};

export default HeaderContextProvider;
