import Image from "next/image";
import Divider from "../components/Divider";
import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      {/* self introduction */}
      <section className="flex flex-col lg:flex-row items-center mb-16">
        {/* introduction */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Nina Li, currently studying Web Programming at BTH. My background as a teacher helped me develop strong communication and collaboration skills, making it natural for me to work effectively with others. I became interested in tech through conversations and experiences with friends and family members who work in the industry, and that inspiration led me to explore this field more deeply. Motivated by curiosity and a desire for new challenges, I transitioned into tech and have gained valuable knowledge in web design, PHP, Python, and databases through this program. I’m excited about continuing to grow as a developer and look forward to new opportunities where I can contribute, learn, and create meaningful digital experiences.
          </p>
        </div>
        {/* picture */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Nina Li"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <Divider />
      {/* skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        {/* Render Skills component */}
        <Skills />
      </section>
    </div>
  );
}
