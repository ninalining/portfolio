import skills from "../../data/skills";

export default function Skills() {
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-[var(--background)] dark:bg-[var(--accent)]"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {skillCategory.category}
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skillCategory.items.map((item, idx) => (
                <li key={idx} className="text-left">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
