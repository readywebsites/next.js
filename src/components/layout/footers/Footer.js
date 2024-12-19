"use client";

import { createContext, useContext } from "react";

// Create the context
const FooterContext = createContext(null);

// Provider Component
export const FooterContextProvider = ({ value, children }) => {
  return (
    <FooterContext.Provider value={value}>
      {children}
    </FooterContext.Provider>
  );
};

// Hook to use the context
export const useFooterContex = () => {  // Ensure the name is correct
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooterContex must be used within a FooterContextProvider");
  }
  return context;
};

export default FooterContextProvider;
