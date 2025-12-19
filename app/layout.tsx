import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import type { ReactNode } from "react";
// import Script from "next/script";

export default function RootLayout({ children } : {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 pb-16">{children}</main>
        <Footer />
        {/* <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
