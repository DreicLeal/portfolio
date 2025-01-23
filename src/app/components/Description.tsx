"use client";
import { useApp } from "@/context/appContext";
import Carousel from "./Carousel";
import Link from "next/link";
import ProfileImg from "./ProfileImg";

export default function Description() {
  const { theme } = useApp();
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${
        theme && "dark"
      }`}
    >
      <div className="w-full flex items-center justify-center max-[790px]:flex-col bg-white dark:bg-zinc-800 transition ease-in-out duration-300">
        <ProfileImg />
        <div className="p-6 flex flex-col gap-2 w-[100%] max-w-[100%] dark:text-white text-zinc-800">
          <h1 className="font-bold text-2xl">Welcome to my portfolio!</h1>
          <p className="text-justify">
            My name is Dreic Leal, and I’m an aspiring IT professional with a
            passion for technology and a knack for solving problems. After
            transitioning into IT in 2022, I’ve dedicated myself to mastering
            web development and technology tools like React, Next.js, Node.js,
            TypeScript, PostgreSQL, and CSS.
          </p>
          <p className="text-justify my-2">
            I bring a strong foundation in technical skills and interpersonal
            abilities, honed through years of experience in problem-solving,
            data analysis, and teamwork. With a background that includes a
            2,000-hour full-stack development course and real-world experience
            mentoring students in web development, I thrive on turning ideas
            into functional solutions.
          </p>
          <p className="text-justify">
            Here, you’ll find my projects, showcasing my skills in front-end and
            back-end development, integration testing. My portfolio reflects my
            commitment to learning, growing, and creating impactful
            applications. Let’s build the future together!
          </p>
          <Link
            className="bg-sky-600 text-white outline-0 border dark:bg-zinc-800 border-white font-bold rounded-md flex mx-auto my-0 justify-center items-center w-1/2 h-6 p-4 hover:bg-sky-700 dark:hover:bg-white/[10%] dark:active:bg-white/[5%] active:bg-sky-900 transition ease-in-out duration-300"
            href={"/projects"}
          >
            Projects
          </Link>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
