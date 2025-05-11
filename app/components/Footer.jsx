import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[var(--header-footer-bg)] py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* 左侧：版权信息 */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Nina's Portfolio. All rights reserved.
        </div>

        {/* 右侧：社交图标 */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
          <Link
            href="https://www.linkedin.com/in/nina-li-356b46bb/"
            aria-label="LinkedIn"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </Link>
          <Link
            href="https://github.com"
            aria-label="GitHub"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </Link>
          <Link
            href="mailto:your-email@example.com"
            aria-label="Email"
            className="text-black hover:text-[var(--accent-hover)] transition duration-200"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}