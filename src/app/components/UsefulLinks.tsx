import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function UsefulLinks() {
  const iconsStyle =
    "hover:text-[var(--border)] dark:hover:text-[var(--highlight)] ease-in-out duration-300";

  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center h-full w-full max-w-xs gap-4">
      <Link
        className="flex items-center justify-center"
        href="https://www.youtube.com/@dreicleal01"
        target="_blank"
        aria-label="YouTube"
      >
        <FaYoutube className={`h-8 w-8 md:h-6 ${iconsStyle}`} title="YouTube" />
      </Link>
      <Link
        className="flex items-center justify-center"
        href="https://www.github.com/dreicleal"
        target="_blank"
        aria-label="GitHub"
      >
        <FaGithub className={`h-8 w-8 md:h-6 ${iconsStyle}`} title="GitHub" />
      </Link>
      <Link
        className="flex items-center justify-center"
        href="https://www.linkedin.com/in/dreicleal"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin
          className={`h-8 w-8 md:h-6 ${iconsStyle}`}
          title="LinkedIn"
        />
      </Link>
      <Link
        className="flex items-center justify-center"
        href="https://drive.google.com/file/d/1okCg9WG8FoEg4CiNj3hGOy6oVG2Fci4Z/view?usp=sharing"
        target="_blank"
        aria-label="CV"
      >
        <PiReadCvLogoBold
          className={`h-8 w-8 md:h-6 ${iconsStyle}`}
          title="CV"
        />
      </Link>
    </div>
  );
}
