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
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-content mx-auto">
        <CaseStudyDetail study={study} />
      </div>
    </main>
  );
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: study.tagline,
  };
}
