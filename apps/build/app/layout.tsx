import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SITE_URLS } from "@portfolio/config";
import "./globals.css";
import SiteNav from "@/components/SiteNav";

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
  title: "Build | Production software and intelligent systems",
  description:
    "Software and AI engineering portfolio — case studies in full-stack development, agents, RAG, and production AI systems.",
  metadataBase: new URL(SITE_URLS.build),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased bg-dark-primary text-white overflow-x-hidden`}
      >
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
