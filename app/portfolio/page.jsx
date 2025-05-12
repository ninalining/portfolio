import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/projects";
import Education from "../components/Education";
import Divider from "../components/Divider";

export default function Portfolio() {
  return (
    <div className="container mx-auto py-16 px-6 text-[var(--text)] dark:text-[var(--text)]">
      {/* project */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">My Recent Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <Divider />

      {/* education */}
      <section>
        <h2 className="text-4xl font-bold mb-6 text-center">My Education</h2>
        <Education />
      </section>
    </div>
  );
}
