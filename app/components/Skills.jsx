import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[var(--background)] text-gray-800 dark:text-gray-200 rounded-full shadow-md h-32 w-32"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
