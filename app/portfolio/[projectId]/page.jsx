import Link from "next/link";
import { projects } from "../../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center py-16">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-6 flex text-[var(--text)] dark:text-[var(--text)]">
      {/* Sidebar */}
      <aside className="w-1/4 pr-6 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.id}>
              <Link
                href={`/portfolio/${p.id}`}
                className={`block px-4 py-2 rounded-md ${
                  p.id === projectId
                    ? "bg-[var(--accent)] text-[var(--text)] underline dark:bg-[var(--accent)]"
                    : "bg-[var(--accent)] text-[var(--text)] dark:text-[var(--text)] hover:bg-[var(--accent-hover)] dark:hover:bg-[var(--accent-hover)] hover:underline"
                }`}
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Project Content */}
      <main className="w-3/4 pl-6">
        <div className="mb-6">
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg shadow-md brightness-100 dark:brightness-75"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="text-gray-600 dark:text-gray-300 mb-4 space-y-4">
          {project.shortDescription.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{project.details}</p>
        <div className="flex gap-4">
          {project.links?.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[var(--accent)] hover:underline dark:text-[var(--accent-hover)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline hover:text-[var(--accent-hover)] dark:text-[var(--text)]"
          >
            Visit Project
          </Link>
        </div>
      </main>
    </div>
  );
}
