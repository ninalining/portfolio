import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../data/projects";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <div className="container mx-auto py-16 px-6 text-[var(--text)] dark:text-[var(--text)]">
      {/* introduction */}
      <section className="text-center mb-16">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nina Li!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A passionate developer specializing in building modern web
          applications.
        </p>
      </section>

      <Divider />

      {/* projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Some of My Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              href={`/portfolio/${project.id}`}
              title={project.title}
              description={project.shortDescription}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}