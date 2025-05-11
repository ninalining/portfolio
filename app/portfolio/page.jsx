import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Portfolio() {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      {/* 上半部分：最近的项目 */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">My Recent Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* 下半部分：课程介绍 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Courses I've Taken</h2>
        <div className="text-center text-gray-600 dark:text-gray-300">
          {/* 留空，等待具体内容 */}
          <p>Course details will be added here.</p>
        </div>
      </section>
    </div>
  );
}
