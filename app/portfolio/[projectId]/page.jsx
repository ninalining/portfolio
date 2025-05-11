import Link from "next/link";
import { projects } from "../../../data/projects";

export default function ProjectPage({ params }) {
  const { projectId } = params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center py-16">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-6 flex">
      {/* 左侧菜单 */}
      <aside className="w-1/4 pr-6 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.id}>
              <Link
                href={`/portfolio/${p.id}`}
                className={`block px-4 py-2 rounded-md ${
                  p.id === projectId
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* 右侧项目详情 */}
      <main className="w-3/4 pl-6">
        <div className="mb-6">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="rounded-lg shadow-md"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.shortDescription}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{project.details}</p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Project
        </a>
      </main>
    </div>
  );
}
