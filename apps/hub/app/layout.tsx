import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SITE_URLS, BRAND } from "@portfolio/config";
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
  title: `${BRAND.shortName} Onifade | Software, AI & Cybersecurity`,
  description:
    "Personal hub for Onifade Kehinde Ridwan — software engineering, AI engineering, and cybersecurity portfolios.",
  metadataBase: new URL(SITE_URLS.hub),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${BRAND.fullName} | Portfolio Hub`,
    description: BRAND.tagline,
    url: SITE_URLS.hub,
    siteName: "Kenny Onifade",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
