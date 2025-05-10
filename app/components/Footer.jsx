export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* 左侧：版权信息 */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Nina's Portfolio. All rights reserved.
          </div>
  
          {/* 右侧：社交图标 */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black"
            >
              GitHub
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }