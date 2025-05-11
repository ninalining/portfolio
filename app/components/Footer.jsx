"use client";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Ensure correct import
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <footer className="bg-[var(--header-footer-bg)] py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left: Copyright information */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Nina's Portfolio. All rights reserved.
        </div>

        {/* Right: Social icons and dark mode toggle */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400 items-center">
          <Link
            href="https://www.linkedin.com/in/nina-li-356b46bb/"
            aria-label="LinkedIn"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </Link>
          <Link
            href="https://github.com/ninalining"
            aria-label="GitHub"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </Link>
          <Link
            href="mailto:nina.lining@gmail.com"
            aria-label="Email"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </Link>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
}