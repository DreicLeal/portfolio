export type LanguageDataType = {
  header: {
    nav: {
      home: string;
      projects: string;
    };
  };
  aboutMe: {
    greeting: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  projectsBtn: string;
  projectsSection: {
    title: string;
    description: string;
  };
};

export type AvailableLanguages = "EN" | "PT";

type LanguageSpreader = Record<AvailableLanguages, LanguageDataType>;

export const languageData: LanguageSpreader = {
  EN: {
    header: {
      nav: {
        home: "Home",
        projects: "Projects",
      },
    },
    aboutMe: {
      greeting: "Welcome to my portfolio!",
      p1: "My name is Dreic Leal, a front-end developer passionate about transforming ideas into impactful digital experiences. Since transitioning into tech in 2022, I’ve immersed myself in web development, mastering tools like React, Next.js, Node.js, TypeScript, PostgreSQL, and Tailwind CSS.",
      p2: "I bring more than just code to the table — my background in management, mentoring, and data analysis sharpened my problem-solving skills, communication, and business awareness. I’ve completed a 2,000-hour Full Stack Development course, and had the opportunity to mentor aspiring devs at Kenzie Academy Brazil, where I supported students and helped them grow.",
      p3: "My portfolio includes personal projects where I integrated AI, multilingual support, and scalable architectures to deliver polished and user-centered applications. Whether it's building e-commerce platforms, AI-driven tools, or educational solutions, I focus on clean code, usability, and real-world value.",
      p4: "Here, you’ll find what I’ve been building — solutions that reflect my curiosity, adaptability, and commitment to growth. Let’s build something meaningful together.",
    },
    projectsBtn: "Projects",
    projectsSection: {
      title: "My projects",
      description: "",
    },
  },
  PT: {
    header: {
      nav: {
        home: "Início",
        projects: "Projetos",
      },
    },
    aboutMe: {
      greeting: "Bem-vindo ao meu portifólio!",
      p1: "Meu nome é Dreic Leal, sou desenvolvedor front-end e apaixonado por transformar ideias em experiências digitais funcionais e impactantes. Desde que fiz a transição para a área de tecnologia, em 2022, mergulhei no desenvolvimento web e venho me especializando em ferramentas como React, Next.js, Node.js, TypeScript, PostgreSQL e Tailwind CSS.",
      p2: "Mais do que código, trago uma bagagem sólida em resolução de problemas, comunicação e análise de dados — habilidades que desenvolvi ao longo da minha trajetória anterior e que aplico diariamente nos projetos que construo. Concluí um curso intensivo de desenvolvimento full stack com mais de 2.000 horas e tive a oportunidade de atuar como mentor na Kenzie Academy Brasil, apoiando o crescimento técnico e profissional de outros devs.",
      p3: "Aqui, você vai encontrar projetos que refletem meu compromisso com a evolução contínua, a qualidade no desenvolvimento e a criação de soluções que realmente fazem a diferença. Seja na construção de plataformas educativas, ferramentas com IA ou sistemas escaláveis, meu foco é unir tecnologia e propósito.",
      p4: "Vamos construir o futuro juntos?",
    },
    projectsBtn: "Projetos",
    projectsSection: {
      title: "Meus projetos",
      description: "",
    },
  },
};
