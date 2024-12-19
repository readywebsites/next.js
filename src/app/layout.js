import { Open_Sans, Rajdhani } from "next/font/google";
import "@/assets/css/font-icons.css";
import "@/assets/css/plugins.css";
import "./globals.css";
import "@/assets/css/responsive.css";
import Script from "next/script";
import { Suspense } from "react";
import HeaderContextProvider from "@/providers/HeaderContext"; // Correct file name

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--ltn__body-font",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--ltn__heading-font",
});

export const metadata = {
  title: "Broccoli - Organic Food React Template",
  description: "Broccoli - Organic Food React Template",
};

export default function RootLayout({ children }) {
  const headerValue = {
    title: "My Header Title", // Example value; customize as needed
    // Add other context values here
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${rajdhani.variable} ${open_sans.variable}`}
    >
      <body className={open_sans.className}>
        {/* Provide the HeaderContext values */}
        <HeaderContextProvider value={headerValue}>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
          {/* External scripts */}
          <Script src="/plugins.js" strategy="lazyOnload" />
          <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeHDCOXmUMja1CFg96RbtyKgx381yoBU"
            async
            strategy="lazyOnload"
          />
        </HeaderContextProvider>
      </body>
    </html>
  );
}
