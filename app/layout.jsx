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

export const metadata = {
  title: "Nina Li",
  description: "A portfolio showcasing Nina's work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className="bg-[var(--background-light)] dark:bg-[var(--background)] text-[var(--text)] dark:text-[var(--text)] antialiased"
      >
        <div className="min-h-screen flex flex-col bg-[var(--background-light)] dark:bg-[var(--background)]">
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
          <footer className="bg-[var(--header-footer-bg)] text-[var(--text)] dark:text-[var(--text)] shadow-md">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
