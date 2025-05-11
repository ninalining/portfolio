import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaLinks({ socialMedia }) {
  return (
    <div className="flex justify-center space-x-6">
      {socialMedia.map((media) => (
        <a
          key={media.name}
          href={media.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 ${media.color}`}
        >
          <FontAwesomeIcon icon={media.icon} className="text-3xl" />
          <span className="sr-only">{media.name}</span> {/* hidden */}
        </a>
      ))}
    </div>
  );
}
