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
    const icons: IconInterface[] = [
        { component: <FaReact className="w-full h-full" />, name: "React" },
        { component: <FaCss3Alt className="w-full h-full" />, name: "CSS3" },
        { component: <SiTailwindcss className="w-full h-full" />, name: "TailwindCSS" },
        { component: <SiNextdotjs className="w-full h-full" />, name: "Next.js" },
        { component: <SiTypescript className="w-full h-full" />, name: "TypeScript" },
        { component: <SiNodedotjs className="w-full h-full" />, name: "Node.js" },
        { component: <FaGithub className="w-full h-full" />, name: "GitHub" },
        { component: <SiPostgresql className="w-full h-full" />, name: "PostgreSQL" },
        { component: <SiJest className="w-full h-full" />, name: "Jest" },
      ];

  return (
    <div className="relative flex gap-24 justify-center items-center overflow-hidden h-48 w-full bg-gray-600 group">
      <ul className=" flex  justify-center items-center animate-slide space-x-24 group-hover:animation-paused">
        {icons.map((icon, index) => (
          <li key={index} title={icon.name} className="w-20 h-20">
            {icon.component}
          </li>
        ))}
      </ul>
      <ul className=" flex  justify-center items-center animate-slide2 space-x-24 group-hover:animation-paused">
        {icons.map((icon, index) => (
          <li key={index} title={icon.name} className="w-20 h-20">
            {icon.component}
          </li>
        ))}
      </ul>
    </div>
  );
}
