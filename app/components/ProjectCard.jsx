import Link from "next/link";

export default function ProjectCard({
  href,
  title,
  description,
  imageSrc,
}) {
  const CardContent = (
    <div className="bg-[var(--background)] rounded-lg shadow-md hover:shadow-lg transition-shadow h-[24rem] flex flex-col">
      <div className="h-48 flex items-center justify-center overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href}>{CardContent}</Link>
  ) : (
    CardContent
  );
}
