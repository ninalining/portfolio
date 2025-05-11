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
        <Navbar className="bg-[var(--background)]" />
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <Footer className="bg-[var(--background)]" />
      </body>
    </html>
  );
}
