import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  href,
  title,
  description,
  imageSrc,
}) {
  const CardContent = (
    <div className="bg-[var(--background)] dark:bg-[var(--accent)] rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col group">
      {/* pictures */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-xl bg-[var(--background)] dark:bg-[var(--accent)] group-hover:brightness-110 dark:group-hover:brightness-90">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 brightness-100 dark:brightness-75"
        />
      </div>
      {/* text */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:underline">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href}>{CardContent}</Link>
  ) : (
    CardContent
  );
}
