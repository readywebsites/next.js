"use client";

import { createContext, useContext } from "react";

// Create the context
const FooterContext = createContext(null);

// Provider Component
const FooterContextProvider = ({ value, children }) => {
  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};

// Hook to use the context
export const useFooterContext = () => {
  const value = useContext(FooterContext);
  return value;
};

export default FooterContextProvider;
