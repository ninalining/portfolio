import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../../data/socialMedia";

export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      {/* social medier */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Get in Contact with Me</h1>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((media) => (
            <a
              key={media.name}
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-80 ${media.color}`}
            >
              <FontAwesomeIcon icon={media.icon} className="text-3xl" />
              <span className="sr-only">{media.name}</span> {/* hidden */}
            </a>
          ))}
        </div>
      </section>

      {/* email form */}
      <section className="max-w-lg mx-auto bg-[var(--background)] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Send Me an Email
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
