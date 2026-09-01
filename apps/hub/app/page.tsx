import Hero from "@/components/Hero";
import BuildDirection from "@/components/BuildDirection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <BuildDirection />
      <FeaturedProjects />
      <Process />
      <Services />
      <About />
      <Experience />
      <Writing />
      <Contact />
      <SiteFooter />
    </main>
  );
}
