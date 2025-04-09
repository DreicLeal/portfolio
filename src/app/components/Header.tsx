"use client";
import { useApp } from "@/context/appContext";
import Link from "next/link";
import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import UsefulLinks from "./UsefulLinks";
import enFlag from "../../../public/EN.png";
import ptFlag from "../../../public/PT.png";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme, langSpreader, changingLanguage, language } =
    useApp();
  const translatorAux = langSpreader.header.nav;
  const email = "dreicleal@hotmail.com";
  const [copy, setCopy] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopy(true);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setCopy(false), 400);
    }
  }

  return (
    <header
      className={`w-full ${
        theme && "dark"
      } backdrop-blur-[1px] fixed bg-[var(--overlay)] top-0 z-20`}
    >
      <div className="flex h-16 gap-4 p-6 w-full items-center justify-between transition ease-in-out duration-300">
        {/* Email Copy Feature - Hidden on Small Screens */}
        <div
          onClick={handleCopy}
          className="hidden md:flex justify-center items-center text-[var(--foreground)] hover:bg-[var(--hover)] active:bg-[var(--border)] dark:hover:text-[var(--highlight)] dark:hover:border-[var(--highlight)] border border-[var(--foreground)] group rounded-md cursor-pointer transition ease-in-out duration-300"
        >
          <p className="font-bold pl-4">{email}</p>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center font-bold text-[var(--primary)] rounded-r-md border-none p-2 w-14 h-full active:bg-[var(--border)] transition ease-in-out duration-300"
          >
            {copy ? (
              <LuCopyCheck className="text-[var(--primary)] h-6 w-6" />
            ) : (
              <LuCopy className="text-[var(--primary)] h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* UsefulLinks visível em sm+ */}
          <div className="hidden sm:flex">
            <UsefulLinks />
          </div>

          {/* Hamburger Menu for Useful Links */}
          {/* Ícone de menu e dropdown apenas em sm- */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border dark:bg-[var(--primary)] border-transparent hover:bg-[var(--hover)] dark:hover:border-[var(--highlight)] hover:border-[var(--border)] group duration-300 rounded-full"
            >
              {menuOpen ? (
                <FiX className="text-white dark:group-hover:text-[var(--highlight)]" />
              ) : (
                <FiMenu className="text-white" />
              )}
            </button>

            {menuOpen && (
              <div className="absolute top-16 right-0 bg-[var(--overlay)] p-4 rounded-md shadow-lg z-50">
                <UsefulLinks />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="sm:flex gap-4">
          <Link
            className="font-bold text-[var(--foreground)] hover:bg-[var(--hover)] active:bg-[var(--border)] dark:hover:text-[var(--highlight)] dark:hover:border-[var(--highlight)] border border-transparent px-2 rounded-md transition ease-in-out duration-300"
            href={"#top"}
          >
            {translatorAux.home}
          </Link>
          <Link
            className="font-bold text-[var(--foreground)] hover:bg-[var(--hover)] active:bg-[var(--border)] dark:hover:text-[var(--highlight)] dark:hover:border-[var(--highlight)] border border-transparent px-2 rounded-md transition ease-in-out duration-300"
            href={"#projects"}
          >
            {translatorAux.projects}
          </Link>
        </nav>

        {/* Language Toggle */}
        <button
          onClick={changingLanguage}
          className="font-bold text-[var(--foreground)] min-w-8 rounded-full transition ease-in-out duration-300"
        >
          <Image
            src={language === "EN" ? enFlag : ptFlag}
            className="rounded-full w-8"
            alt="country flag"
          />
        </button>

        {/* Theme Toggle */}
        <button
          className="p-2 border dark:bg-[var(--primary)] border-transparent hover:bg-[var(--hover)] dark:hover:border-[var(--highlight)] hover:border-[var(--border)] group duration-300 rounded-full"
          onClick={() => setTheme(!theme)}
        >
          {theme ? (
            <FiSun className="text-white dark:group-hover:text-[var(--highlight)]" />
          ) : (
            <FiMoon className="text-white" />
          )}
        </button>
      </div>
    </header>
  );
}
