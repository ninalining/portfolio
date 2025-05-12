"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--header-footer-bg)] shadow-md shadow-gray-300 dark:shadow-gray-700">
      <nav className="container mx-auto flex flex-wrap items-center justify-between py-4">
        {/* Logo and toggle button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="Favicon"
              width={24}
              height={24}
              className="mr-2 rounded-full dark:hidden" // Show in light mode only
            />
            <Image
              src="/favicon-white.ico"
              alt="Favicon Dark"
              width={24}
              height={24}
              className="mr-2 rounded-full hidden dark:inline" // Show in dark mode only
            />
            <div className="text-3xl font-bold"> {/* Increased font size */}
              <Link
                href="/"
                className="hover:underline hover:text-[var(--accent-hover)]"
              >
                My portfolio
              </Link>
            </div>
          </div>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 text-3xl p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 mr-6" // Adjusted size, margin, and border
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu items */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:space-x-6 text-lg text-gray-700 dark:text-gray-300 mt-4 md:mt-0 px-4`}
        >
          <li className="mb-2 md:mb-0">
            <Link
              href="/"
              className="block font-semibold hover:underline hover:text-[var(--accent-hover)] py-3 px-4 md:py-2 md:px-3 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link
              href="/about"
              className="block font-semibold hover:underline hover:text-[var(--accent-hover)] py-3 px-4 md:py-2 md:px-3 rounded-lg"
            >
              About
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link
              href="/portfolio"
              className="block font-semibold hover:underline hover:text-[var(--accent-hover)] py-3 px-4 md:py-2 md:px-3 rounded-lg"
            >
              Portfolio
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link
              href="/contact"
              className="block font-semibold hover:underline hover:text-[var(--accent-hover)] py-3 px-4 md:py-2 md:px-3 rounded-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}