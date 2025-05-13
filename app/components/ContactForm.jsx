"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("Missing EmailJS configuration");
      }

      emailjs.init(userId);

      await emailjs.send(serviceId, templateId, formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error?.text || error?.message || error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-300 space-y-4 bg-[var(--background-highlight)] dark:bg-[var(--accent)] p-6 rounded-lg shadow-md"
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
          className="bg-[var(--background)] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200"
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
          className="bg-[var(--background)] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200"
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
          className="bg-[var(--background)] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-2 px-4 bg-[var(--accent)] text-[var(--background-light)] rounded-md shadow-sm hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-[var(--success)]">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-[var(--error)]">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
