import { caseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import SiteFooter from "@/components/SiteFooter";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-content mx-auto">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
          Work
        </p>
        <h1 className="font-display text-display-lg font-semibold text-ink text-balance">
          Case studies
        </h1>
        <p className="mt-4 text-muted max-w-2xl leading-relaxed">
          In-depth write-ups on products and platforms — from founding
          SchoolOrbit and TailorFlow to shipping enterprise workflow software at
          Descasio.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
