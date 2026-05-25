"use client";

import { Suspense } from "react";
import { Footer, Chatbot, ScrollProgress } from "@portfolio/ui";
import PortalHero from "@/components/PortalHero";
import PillarCards from "@/components/PillarCards";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={null}>
        <ScrollProgress />
        <PortalHero />
        <PillarCards />
        <Bio />
        <Contact />
        <Footer site="hub" />
        <Chatbot site="hub" />
      </Suspense>
    </main>
  );
}
