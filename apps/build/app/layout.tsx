import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { BRAND, SITE_URLS } from "@portfolio/config";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["500", "600", "700"],
});

const title = `Build | ${BRAND.shortName} Onifade — Software & AI Engineering`;
const description =
  "Software and AI engineering portfolio — case studies in full-stack development, agents, RAG, and production AI systems.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | Build · ${BRAND.shortName} Onifade`,
  },
  description,
  metadataBase: new URL(SITE_URLS.build),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URLS.build,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${interTight.variable} font-body overflow-x-hidden`}
      >
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
