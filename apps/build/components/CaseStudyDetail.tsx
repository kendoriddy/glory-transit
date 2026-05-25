"use client";

import { Footer, Chatbot } from "@portfolio/ui";
import { type CaseStudy, TAG_LABELS } from "@/lib/case-studies";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <article>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30"
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
          {study.status === "coming-soon" && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-500/20 text-amber-200 border border-amber-500/30">
              Documentation coming soon
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {study.title}
        </h1>
        <p className="text-xl text-white/70 mb-8">{study.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {study.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-white/5 rounded-full text-white/80 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <section className="space-y-8 mb-12">
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-3">
              Problem
            </h2>
            <p className="text-white/70 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-3">
              Approach
            </h2>
            <p className="text-white/70 leading-relaxed">{study.approach}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-3">
              Outcome
            </h2>
            <p className="text-white/70 leading-relaxed">{study.outcome}</p>
          </div>
        </section>

        {(study.links?.demo || study.links?.repo) && (
          <div className="flex flex-wrap gap-4">
            {study.links.demo && (
              <a
                href={study.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                Live demo →
              </a>
            )}
            {study.links.repo && (
              <a
                href={study.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 font-medium hover:text-accent-purple"
              >
                Source code →
              </a>
            )}
          </div>
        )}
      </article>
      <Footer site="build" />
      <Chatbot site="build" />
    </>
  );
}
