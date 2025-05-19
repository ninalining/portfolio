"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function SidebarMenu({ currentId }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full lg:w-1/4 pr-0 lg:pr-6 border-b border-gray-300 dark:border-gray-700 lg:border-b-0 lg:border-r">
      <button
        className="w-full flex justify-between items-center py-2 px-4 bg-[var(--accent)] text-[var(--text)] rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="project-list"
      >
        <span className="font-semibold text-xl">Projects</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        id="project-list"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:max-h-full ${
          isOpen ? "max-h-96" : "max-h-0"
        } lg:max-h-full lg:block space-y-2 mt-2 lg:mt-0`}
      >
        {projects.map((p) => (
          <li key={p.id}>
            <Link
              href={`/portfolio/${p.id}`}
              className={`block px-4 py-2 rounded-md break-words text-sm ${
                p.id === currentId
                  ? "bg-[var(--accent)] text-[var(--text)] underline dark:bg-[var(--accent)]"
                  : "bg-[var(--accent)] text-[var(--text)] dark:text-[var(--text)] transform transition-transform duration-200 hover:scale-105 dark:hover:bg-[var(--accent-hover)] hover:underline"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}