"use client";
import { useApp } from "@/context/appContext";
import Link from "next/link";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import UsefulLinks from "./UsefulLinks";

export default function Header() {
  const { theme, setTheme } = useApp();

  const email = "dreicleal@hotmail.com";
  const [copy, setCopy] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopy(true);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setCopy(false), 300);
    }
  }

  return (
    <header className={`w-full ${theme && "dark"} border-b-2 `}>
      <div className="flex h-16 gap-4 p-6 w-full bg-sky-600 dark:bg-zinc-800 items-center justify-between transition ease-in-out duration-300">
        <div className="flex justify-center items-center gap-6 border-solid border border-sky-600 dark:border-white rounded-md bg-white dark:bg-zinc-800 max-[700px]:h-8">
          <p className="font-bold text-zinc-700 dark:text-white pl-4">
            {email}
          </p>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center font-bold text-zinc-800 rounded-sm border-none p-2 w-16 h-full dark:hover:bg-white/[10%] dark:active:bg-white/[15%] hover:bg-sky-600/[15%] active:bg-sky-600/[25%] transition ease-in-out duration-300"
          >
            {copy ? (
              "Copied!"
            ) : (
              <FaRegCopy className="text-zinc-800 dark:text-white h-6 w-6" />
            )}
          </button> 
        </div>
        <nav className="flex gap-4">
          <Link className="font-bold text-white hover:bg-white/[10%] px-2 rounded-md transition ease-in-out duration-300" href={"/"}>
            Home
          </Link>
          <Link className="font-bold text-white hover:bg-white/[10%] px-2 rounded-md transition ease-in-out duration-300" href={"/projects"}>
            Projects
          </Link>
        </nav>
        <UsefulLinks/>
        <button
          className="p-2 border bg-white dark:bg-zinc-800 dark:border-white border-sky-600 rounded-full"
          onClick={() => setTheme(!theme)}
        >
          {theme ? (
            <FiSun className="text-white" />
          ) : (
            <FiMoon className="text-zinc-800" />
          )}
        </button>
      </div>
    </header>
  );
}
