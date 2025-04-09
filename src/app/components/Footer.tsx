"use client";
import { useApp } from "@/context/appContext";

export default function Footer() {
  const { theme } = useApp();
  return (
    <footer
      className={`${
        theme && "dark"
      } w-full h-[50px] flex items-center justify-center backdrop-blur-[1px] dark:bg-black/30 z-20`}
    >
      <p>© Dreic Leal 2025</p>
    </footer>
  );
}
