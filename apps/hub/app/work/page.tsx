import type { Metadata } from "next";
import { SITE_URLS } from "@portfolio/config";
import WorkHero from "@/components/work/WorkHero";
import WorkProof from "@/components/work/WorkProof";
import WorkSelected from "@/components/work/WorkSelected";
import WorkProcess from "@/components/work/WorkProcess";
import WorkAudience from "@/components/work/WorkAudience";
import WorkFinalCta from "@/components/work/WorkFinalCta";
import SiteFooter from "@/components/SiteFooter";

const title = "Work with me";
const description =
  "Full-Stack / Product Engineer helping growing companies build internal tools and product features without hiring another full-time engineer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `${title} | Kenny Onifade`,
    description,
    url: `${SITE_URLS.hub}/work`,
    siteName: "Kenny Onifade",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Kenny Onifade`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function WorkPage() {
  return (
    <main id="main">
      <WorkHero />
      <WorkProof />
      <WorkSelected />
      <WorkProcess />
      <WorkAudience />
      <WorkFinalCta />
      <SiteFooter />
    </main>
  );
}
