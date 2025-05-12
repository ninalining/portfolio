"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-[var(--background)] dark:bg-[var(--accent)] p-6 rounded-lg shadow-md"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-[var(--background-light)] dark:bg-[var(--background)] text-gray-800 dark:text-gray-200"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-[var(--background-light)] dark:bg-[var(--background)] text-gray-800 dark:text-gray-200"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-[var(--background-light)] dark:bg-[var(--background)] text-gray-800 dark:text-gray-200"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[var(--accent-hover)] text-white py-2 px-4 rounded-md dark:bg-[var(--accent-hover)] dark:rounded-md"
      >
        Send
      </button>
    </form>
  );
}
