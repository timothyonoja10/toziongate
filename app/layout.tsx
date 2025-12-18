import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import type { ReactNode } from "react";

export default function RootLayout({ children } : {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
