import Navbar from "./components/Navbar";
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

export const metadata = {
  title: "Nina Li",
  description: "A portfolio showcasing Nina's work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-800 dark:text-gray-200 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gray-800 shadow-md">
            <Navbar className="bg-[var(--background)]" />
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100">
            <div className="relative">
              {/* 分界效果 */}
              <div className="absolute inset-x-0 top-0 h-2 bg-gray-300 shadow-md"></div>
              <div className="relative z-10">{children}</div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white shadow-md">
            <Footer className="bg-[var(--background)]" />
          </footer>
        </div>
      </body>
    </html>
  );
}
