import type { Metadata } from "next";

import "./globals.css";
import AppProvider from "@/context/appContext";
import Particles from "@/Backgrounds/Particles/Particles";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dreic Leal",
  description: "My Portfolio",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <AppProvider>
          <Particles
            className="fixed inset-0 z-[1]"
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
