import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  href,
  title,
  description,
  imageSrc,
  techStack,
}) {
  const CardContent = (
    <div className="bg-[var(--background-highlight)] dark:bg-[var(--accent)] rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col group h-full">
      {/* pictures */}
      <div className="relative w-full h-74 overflow-hidden rounded-t-2xl bg-[var(--background-highlight)] dark:bg-[var(--accent)] group-hover:brightness-110 dark:group-hover:brightness-90">
        <Image
          src={imageSrc}
          alt={`Image representing the project: ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 brightness-100 dark:brightness-75"
        />
      </div>
      {/* text */}
      <div className="p-4 text-center flex-1 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:underline">
          {title}
        </h2>
        {techStack && (
          <p className="text-[var(--text-secondary)] text-xs mb-2">
            {techStack.join(", ")}
          </p>
        )}
        <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="h-full">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
