import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Engineer & AI Enthusiast",
  description:
    "Welcome to my portfolio! I'm a passionate software engineer from Nigeria with over five years of professional experience in full-stack development.",
  keywords: [
    "software engineer",
    "frontend developer",
    "ai enthusiast",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "tailwind css",
    "framer motion",
    "three.js",
    "react three fiber",
    "wordpress",
    "magento",
    "node.js",
    "ruby on rails",
    "python",
    "postgresql",
    "mysql",
    "git",
    "github",
    "docker",
    "prisma",
    "webpack",
    "vite",
    "jest",
    "axios",
    "ci/cd pipelines",
    "neural networks",
    "deep learning",
    "natural language processing",
    "computer vision",
    "tensorflow.js",
  ],
  authors: [
    { name: "Onifade Kehinde Ridwan", url: "https://kennyonifade.com" },
  ],
  creator: "Onifade Kehinde Ridwan",
  publisher: "Onifade Kehinde Ridwan",
  openGraph: {
    title: "Portfolio | Frontend Engineer & AI Enthusiast",
    description:
      "Welcome to my portfolio! I'm a passionate software engineer from Nigeria with over five years of professional experience in full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased bg-dark-primary text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
