"use client";

import { createContext, useContext } from "react";

// Create the context
const HeaderContextt = createContext(null);

// Provider Component
const HeaderContexttProvider = ({ value, children }) => {
  return (
    <HeaderContextt.Provider value={value}>
      {children}
    </HeaderContextt.Provider>
  );
};

// Hook to use the context
export const useHeaderContexttt = () => {
  const context = useContext(HeaderContextt);
  if (!context) {
    throw new Error("useHeaderContexttt must be used within a HeaderContexttProvider");
  }
  return context;
};

export default HeaderContexttProvider;
