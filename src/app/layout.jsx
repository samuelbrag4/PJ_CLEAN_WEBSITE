"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "./components/pageTransition";
import Butterfly from "./components/butterfly";
// Importe o AuthProvider
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Adiciona a borboleta que segue o mouse */}
        {/* <Butterfly /> */}

        {/* Envolve toda a aplicação com o AuthProvider */}
        <AuthProvider>
          {/* Transições de página */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* Transição customizada por cima, tipo loading circular */}
          <PageTransition />
        </AuthProvider>
      </body>
    </html>
  );
}