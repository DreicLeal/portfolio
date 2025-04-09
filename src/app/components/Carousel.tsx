"use client";
import { useApp } from "@/context/appContext";
import { ReactNode } from "react";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface IconInterface {
  component: ReactNode;
  name: string;
}

export default function Carousel() {
  const { theme } = useApp();

  const iconsStyle =
  "w-full h-full hover:text-[var(--border)] dark:hover:text-[var(--highlight)] ease-in-out duration-300";

const icons: IconInterface[] = [
  { component: <FaReact className={iconsStyle} />, name: "React" },
  { component: <FaCss3Alt className={iconsStyle} />, name: "CSS3" },
  { component: <SiTailwindcss className={iconsStyle} />, name: "TailwindCSS" },
  { component: <SiNextdotjs className={iconsStyle} />, name: "Next.js" },
  { component: <SiTypescript className={iconsStyle} />, name: "TypeScript" },
  { component: <SiNodedotjs className={iconsStyle} />, name: "Node.js" },
  { component: <FaGithub className={iconsStyle} />, name: "GitHub" },
  { component: <SiPostgresql className={iconsStyle} />, name: "PostgreSQL" },
  { component: <SiJest className={iconsStyle} />, name: "Jest" },
];

return (
  <div
    className={`relative flex ${
      theme && "dark"
    } gap-24 items-center overflow-hidden whitespace-nowrap h-36 w-full backdrop-blur-[1px] bg-[var(--overlay)] group z-10`}
  >
    <ul className="flex justify-center items-center animate-slide space-x-24 group-hover:animation-paused">
      {[...icons, ...icons].map((icon, index) => (
        <li key={index} title={icon.name} className="w-20 h-20">
          {icon.component}
        </li>
      ))}
    </ul>
  </div>
);
}
