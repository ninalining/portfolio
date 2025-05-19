import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../data/projects";
import Divider from "./components/Divider";
import { metadata } from "./metadata";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="container mx-auto py-16 px-6 text-[var(--text)] dark:text-[var(--text)]">
      {/* introduction */}
      <section className="text-center mb-16">
        <div className="w-[200px] h-[200px] mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/IMG_6692.JPG"
            alt="Profile Picture"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nina Li!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Passionate web development student focused on building accessible, user-friendly experiences. 
          Always open to new challenges and learning opportunities.
        </p>
      </section>

      <Divider />

      <section className="py-12 px-6] rounded-lg my-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text)] dark:text-[var(--text)]">
          My Skills
        </h2>
        <Skills />
      </section>

      <Divider />

      {/* projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Some of My Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard
                href={`/portfolio/${project.id}`}
                title={project.title}
                description={project.shortDescription}
                imageSrc={project.imageSrc}
                techStack={project.techStack}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}