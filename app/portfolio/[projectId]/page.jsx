import { use } from "react";
import Link from "next/link";
import { projects } from "../../../data/projects";
import Image from "next/image";
import SidebarMenu from "../../components/SidebarMenu";

export default function ProjectPage({ params }) {
  const { projectId } = use(params);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center py-16">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-6 flex flex-col lg:flex-row text-[var(--text)] dark:text-[var(--text)]">
      {/* Sidebar */}
      <SidebarMenu currentId={projectId} />

      {/* Project Content */}
      <main className="w-full lg:w-3/4 pt-6 lg:pt-0 lg:pl-6">
        <div className="mb-6">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={800}
            height={600}
            style={{ height: "auto" }}
            className="rounded-lg shadow-md brightness-100 dark:brightness-75"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        {project.techStack && (
          <p className="text-sm text-[var(--text)] dark:text-[var(--text)] mb-4">
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
        )}
        <div className="text-gray-600 dark:text-gray-300 mb-4 space-y-4">
          {project.shortDescription.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="text-[var(--text)] dark:text-[var(--text)]">{project.details}</p>
        {project.projectLink && (
          <div className="mt-8">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] underline hover:text-[var(--accent-hover)] dark:text-[var(--text)]"
            >
              Visit Project
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
