"use client";

import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { ReactNode } from "react";
import { IProjectInterface } from "./ProjectsSection";
import { useApp } from "@/context/appContext";

interface IconInterface {
  component: ReactNode;
  name: string;
}

const iconsStyle =
  "w-10 h-10 hover:text-[var(--border)] hover:scale-110 dark:hover:text-[var(--highlight)] ease-in-out duration-300";
const icons: IconInterface[] = [
  { component: <FaReact className={iconsStyle} />, name: "React" },
  { component: <SiTailwindcss className={iconsStyle} />, name: "TailwindCSS" },
  { component: <SiNextdotjs className={iconsStyle} />, name: "Next.js" },
  { component: <SiTypescript className={iconsStyle} />, name: "TypeScript" },
  { component: <SiNodedotjs className={iconsStyle} />, name: "Node.js" },
  { component: <FaGithub className={iconsStyle} />, name: "GitHub" },
  { component: <SiPostgresql className={iconsStyle} />, name: "PostgreSQL" },
  { component: <SiJest className={iconsStyle} />, name: "Jest" },
  {
    component: <RiOpenaiFill className={iconsStyle} />,
    name: "Prompt Engineering",
  },
];

export default function Project({
  project,
  position,
}: {
  project: IProjectInterface;
  position: boolean;
}) {
  const { language } = useApp();
  const usedTechs: IconInterface[] = icons.filter((_, i) =>
    project.tech.includes(i)
  );

  return (
    <li
  className={`flex flex-col sm:flex-row ${
    !position ? "sm:flex-row-reverse" : ""
  } items-center gap-6 max-w-[90%] mx-auto`}
>
  <div className="flex flex-col items-start">
    <h2 className="font-semibold dark:text-white text-zinc-800 mb-2">
      {project.title}
    </h2>
    <Image
      src={project.image}
      alt="Palette gen home"
      className="sm:w-[220px] md:w-[360px] lg:w-[450px] rounded-md"
    />
  </div>

  <div className="p-4 dark:text-white text-zinc-800 flex-1">
    <p className="text-justify mb-4">
      {language === "EN" ? project.descriptionEn : project.descriptionPt}
    </p>

    <div className="flex gap-4 mb-4 flex-wrap">
      <Link
        className={`z-50 flex items-center relative ${iconsStyle}`}
        href="https://palette-gen-mu.vercel.app/"
        target="_blank"
      >
        deploy
      </Link>
      <Link
        className={`z-50 flex items-center relative ${iconsStyle}`}
        href="https://github.com/DreicLeal/palette-gen"
        target="_blank"
      >
        github
      </Link>
    </div>

    <ul className="flex flex-wrap gap-4 z-10">
      {usedTechs.map((icon, i) => (
        <li key={i} title={icon.name}>
          {icon.component}
        </li>
      ))}
    </ul>
  </div>
</li>
  );
}
