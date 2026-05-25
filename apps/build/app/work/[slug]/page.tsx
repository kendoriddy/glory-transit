import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import CaseStudyDetail from "@/components/CaseStudyDetail";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <main className="relative min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/work"
          className="text-accent-blue text-sm hover:underline mb-8 inline-block"
        >
          ← All case studies
        </Link>
        <CaseStudyDetail study={study} />
      </div>
    </main>
  );
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.title} | Build`,
    description: study.tagline,
  };
}
