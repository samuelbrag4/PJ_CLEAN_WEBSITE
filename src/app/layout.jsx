"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Spinner from "./components/spinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setLoading(true); 
    const timeout = setTimeout(() => setLoading(false), 500); 

    return () => clearTimeout(timeout); 
  }, [pathname]);

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {loading && <Spinner />}
        {children}
      </body>
    </html>
  );
}