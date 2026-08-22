import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { BRAND, SITE_URLS } from "@portfolio/config";
import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ScrollProgress";
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

const title = `${BRAND.shortName} Onifade | Software Engineer · Cybersecurity · Founder`;
const description =
  "Onifade Kehinde Ridwan (Kenny) — software engineer, AI engineer, and cybersecurity practitioner. Founder of SchoolOrbit. Building production systems with depth, trust, and technical excellence.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${BRAND.shortName} Onifade`,
  },
  description,
  metadataBase: new URL(SITE_URLS.hub),
  alternates: { canonical: "/" },
  keywords: [
    "Software Engineer",
    "Cybersecurity",
    "AI Engineer",
    "SchoolOrbit",
    "Next.js",
    "TypeScript",
    "Nigeria",
  ],
  authors: [{ name: BRAND.fullName, url: SITE_URLS.hub }],
  openGraph: {
    title,
    description,
    url: SITE_URLS.hub,
    siteName: `${BRAND.shortName} Onifade`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: BRAND.fullName,
  alternateName: [BRAND.shortName, ...BRAND.aliases],
  url: SITE_URLS.hub,
  jobTitle: ["Software Engineer", "Cybersecurity Practitioner", "Founder"],
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Cybersecurity",
    "School Management Systems",
  ],
  sameAs: [
    "https://github.com/kendoriddy",
    "https://www.linkedin.com/in/kehindeonifade/",
    "https://medium.com/@onifkay",
    SITE_URLS.schoolorbit,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${interTight.variable} font-body overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
