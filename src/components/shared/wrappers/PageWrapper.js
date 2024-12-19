"use client";
import { useEffect } from "react";
import Header from "@/components/layout/headers/Header";
import { HeaderContextProvider } from "@/providers/HeaderContext"; // Change to import the provider
import CartContextProvider from "@/providers/CartContext";
import Footer from "@/components/layout/footers/Footer";
import FooterContexProvider from "@/providers/FooterContext";

import Preloader from "../others/Preloader";
import main from "@/libs/main";
import WishlistContextProvider from "@/providers/WshlistContext";
import ProductContext from "@/providers/ProductContext";

const PageWrapper = ({
  children,
  headerStyle,
  headerSize,
  headerTopStyle,
  isNotHeaderTop,
  headerTopBg,
  isHeaderRight,
  isStickyOnMobile,
  isTextWhite,
  navBg,
  isNotHeaderRight,
  isHeaderSupport,
  isNavbarAppointmentBtn,
  isNotTransparent,
  footerBg,
  isCommingSoon,
}) => {
  useEffect(() => {
    main();
  }, []);
  
  return (
    <div className="body-wrapper">
      {isCommingSoon ? (
        children
      ) : (
        <CartContextProvider>
          <WishlistContextProvider>
            <HeaderContextProvider // Use the provider instead of the context
              value={{
                headerStyle,
                headerSize,
                headerTopStyle,
                isNotHeaderTop,
                headerTopBg,
                isTextWhite,
                isStickyOnMobile,
                navBg,
                isHeaderRight,
                isNotHeaderRight,
                isHeaderSupport,
                isNavbarAppointmentBtn,
                isNotTransparent,
              }}
            >
              <Header />
            </HeaderContextProvider>

            <ProductContext>{children}</ProductContext>
          </WishlistContextProvider>

          <FooterContexProvider value={{ footerBg }}>
            <Footer />
          </FooterContexProvider>
        </CartContextProvider>
      )}

      <Preloader />
    </div>
  );
};

export default PageWrapper;
