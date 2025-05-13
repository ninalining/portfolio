"use client";

import { useEffect } from "react";
import { metadata } from "./metadata";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const setThemeBasedOnTime = () => {
      const hour = new Date().getHours();
      const isDarkMode = hour >= 18 || hour < 6;

      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    setThemeBasedOnTime();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className="bg-[var(--background)] text-[var(--text)] antialiased font-sans"
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            <div className="relative">
              {/* Divider effect */}
              <div className="absolute inset-x-0 top-0 h-2 bg-gray-300 dark:bg-gray-500 shadow-md"></div>
              <div className="relative">{children}</div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-[var(--header-footer-bg)] text-[var(--text)] shadow-md">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
