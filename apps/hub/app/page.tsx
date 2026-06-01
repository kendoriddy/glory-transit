import Hero from "@/components/Hero";
import PortfolioPortfolios from "@/components/PortfolioPortfolios";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <PortfolioPortfolios />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Writing />
      <Contact />
      <SiteFooter />
    </main>
  );
}
