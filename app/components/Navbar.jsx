import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[var(--header-footer-bg)]">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}