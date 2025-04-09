"use client";

import Project from "./Project";
import palette2 from "../../../../public/palette2.png";
import ecommerce from "../../../../public/ecommerce.png";
import { StaticImageData } from "next/image";
import { useApp } from "@/context/appContext";

export interface IProjectInterface {
  title: string;
  descriptionPt: string;
  descriptionEn: string;
  image: StaticImageData;
  deploy: string;
  gitHub: string;
  tech: number[];
}

export default function ProjectsSection() {
  const { theme, langSpreader } = useApp();
  const projects: IProjectInterface[] = [
    {
      title: "Palette Gen AI ✨",
      descriptionPt: `O web app gera paletas de cores com base em prompts do usuário, considerando a harmonia visual como um todo, os princípios da psicologia das cores e oferecendo explicações detalhadas sobre a escolha de cada tom. A aplicação utiliza a API da OpenAI com respostas estruturadas para garantir a integridade e consistência das sugestões. É uma ferramenta útil tanto para pessoas leigas — que podem descrever seus negócios e receber sugestões de cores adequadas — quanto para profissionais da área, que podem especificar tons e estilos de harmonização desejados.`,
  
      descriptionEn: `The web app generates color palettes based on user prompts, taking into account overall harmony, color psychology principles, and providing detailed explanations for each selected tone. It uses the OpenAI API with structured outputs to ensure consistent and reliable results. This tool is helpful for both non-designers — who can describe their business and receive tailored color suggestions — and design professionals, who can specify preferred tones and harmony styles.`,
      image: palette2,
      deploy: "https://palette-gen-mu.vercel.app/",
      gitHub: "https://github.com/DreicLeal/palette-gen",
      tech: [0, 1, 2, 3, 8],
    },
    {
      title: "E-commerce",
      descriptionPt: `Projeto pessoal de e-commerce que inclui funcionalidades padrão como manipulação de carrinho, sistema de busca e exibição de produtos relacionados. A aplicação também conta com tradução entre Português e Inglês, integração com API de câmbio para exibir cotações atualizadas de moedas, e gerenciamento global de estado para manter esses dados acessíveis por toda a interface.`,

      descriptionEn: `Personal e-commerce project featuring standard functionalities such as cart management, product search, and related items display. The app also includes Portuguese/English translation, integration with a currency exchange API to show real-time rates, and global state management to distribute data consistently across the interface.`,
      image: ecommerce,
      deploy: "https://ecommerce-three-jade-22.vercel.app/about",
      gitHub: "https://github.com/DreicLeal/ecommerce",
      tech: [0, 1, 2, 3],
    },
  ];

  return (
    <div
      className={`${theme && "dark bg-black"} mx-auto justify-items-center p-4 text-zinc-800 bg-[var(--foreground)]`} id="projects"
    >
      <h1 className={`text-2xl font-bold mb-4 dark:text-white`}>
        {langSpreader.projectsSection.title}{" "}
      </h1>
      <ul className="flex flex-col gap-6 justify-center items-center w-[95%]">
        {projects.map((project, i) => (
          <Project
            key={i}
            position={i % 2 === 0 ? true : false}
            project={project}
          />
        ))}
      </ul>
    </div>
  );
}
