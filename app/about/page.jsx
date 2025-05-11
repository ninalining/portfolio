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
            Hi, I'm Nina Li, originally from China. I used to be a
            teacher, where I honed my communication and interpersonal skills. 
            Now, I am pursuing my passion for technology by studying web programming at BTH. 
            The journey of learning modern technologies like Next.js and Tailwind CSS has been incredibly exciting and fulfilling. 
            I love the challenge of creating innovative solutions and bringing ideas to life through code.
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
