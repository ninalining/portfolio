"use client";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Automatically apply dark mode based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <footer className="bg-[var(--header-footer-bg)] py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left: Copyright information */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Nina's Portfolio. All rights reserved.
        </div>

        {/* Right: Social icons */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400 items-center">
          <Link
            href="https://www.linkedin.com/in/nina-li-356b46bb/"
            aria-label="LinkedIn"
            className="text-black dark:text-gray-400 hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </Link>
          <Link
            href="https://github.com/ninalining"
            aria-label="GitHub"
            className="text-black dark:text-gray-400 hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </Link>
          <Link
            href="mailto:nina.lining@gmail.com"
            aria-label="Email"
            className="text-black dark:text-gray-400 hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}