"use client";

import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/ui/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={null}>
        <CursorFollower />
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Chatbot />
      </Suspense>
    </main>
  );
}

