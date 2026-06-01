import Link from "next/link";
import { type CaseStudy, TAG_LABELS } from "@/lib/case-studies";
import SiteFooter from "@/components/SiteFooter";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <article className="max-w-3xl">
        <header className="mb-14 pb-12 border-b border-line">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            ← All work
          </Link>
          <div className="flex flex-wrap gap-2 mt-8 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs text-ink/80 border border-line"
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
            {study.status === "coming-soon" && (
              <span className="px-2.5 py-0.5 text-xs text-muted border border-line">
                Documentation in progress
              </span>
            )}
          </div>
          <h1 className="font-display text-display-lg font-semibold text-ink">
            {study.title}
          </h1>
          <p className="mt-4 text-xl text-muted leading-relaxed">
            {study.tagline}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
            {study.tech.map((t) => (
              <li
                key={t}
                className="px-3 py-1 text-xs text-ink/80 border border-line"
              >
                {t}
              </li>
            ))}
          </ul>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="font-display text-lg font-semibold text-ink mb-3">
              Problem
            </h2>
            <p className="text-muted leading-relaxed">{study.problem}</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink mb-3">
              Approach
            </h2>
            <p className="text-muted leading-relaxed">{study.approach}</p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-ink mb-3">
              Outcome
            </h2>
            <p className="text-muted leading-relaxed">{study.outcome}</p>
          </section>
        </div>

        {(study.links?.demo || study.links?.repo) && (
          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium">
            {study.links.demo && (
              <a
                href={study.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink transition-colors"
              >
                Live demo →
              </a>
            )}
            {study.links.repo && (
              <a
                href={study.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                Source code →
              </a>
            )}
          </div>
        )}
      </article>
      <SiteFooter />
    </>
  );
}
