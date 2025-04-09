"use client";
import { useApp } from "@/context/appContext";
import Carousel from "./Carousel";
import Link from "next/link";
import ProfileImg from "./ProfileImg";

export default function Description() {
  const { theme, langSpreader } = useApp();
  const translateAux = langSpreader.aboutMe;
  return (
<div
  className={`w-full flex bg-[var(--foreground)] flex-col items-center justify-center ${
    theme && "dark bg-black"
  }`}
  id="top"
>
  <div className="w-full p-4 flex bg-[var(--foreground)] dark:bg-[var(--background)] items-center justify-center mt-10 max-[790px]:flex-col h-full transition ease-in-out duration-300">
    <ProfileImg />
    <div className="p-6 flex flex-col gap-2 w-[100%] max-w-[100%] text-[var(--background)] dark:text-[var(--foreground)]">
      <h1 className="font-bold text-2xl">{translateAux.greeting}</h1>
      <p className="text-justify">{translateAux.p1}</p>
      <p className="text-justify my-2">{translateAux.p2}</p>
      <p className="text-justify my-2">{translateAux.p3}</p>
      <p className="text-justify">{translateAux.p4}</p>
      <Link
        className="bg-[var(--foreground)] text-[var(--background)] dark:text-[var(--foreground)] outline-0 border dark:bg-[var(--primary)] border-[var(--background)] dark:border-[var(--foreground)] font-bold rounded-md flex mx-auto my-0 justify-center items-center w-1/2 h-6 p-4 hover:bg-[var(--hover)] hover:scale-105 dark:hover:bg-white/[10%] dark:hover:border-[var(--highlight)] dark:hover:text-[var(--highlight)] dark:active:bg-white/[5%] active:bg-[var(--border)] transition ease-in-out duration-300 z-10"
        href={"#projects"}
      >
        {langSpreader.projectsBtn}
      </Link>
    </div>
  </div>
  <Carousel />
</div>
  );
}
