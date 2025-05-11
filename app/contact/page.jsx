import ContactForm from "../components/ContactForm";
import Divider from "../components/Divider";
import { socialMedia } from "../../data/socialMedia";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      {/* social medier */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Get in Contact with Me</h1>
        <SocialMediaLinks socialMedia={socialMedia} />
      </section>

      <Divider />

      {/* email form */}
      <section className="pt-12 max-w-lg mx-auto bg-[var(--background)] p-6 rounded-lg shadow-md my-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Send Me an Email
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}