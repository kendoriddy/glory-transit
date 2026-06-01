import Image from "next/image";
import Link from "next/link";
import { type CaseStudy } from "@/lib/case-studies";
import SiteFooter from "@/components/SiteFooter";

function ProjectActions({ study }: { study: CaseStudy }) {
  const { links } = study;
  if (!links?.site && !links?.repo) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.site && (
        <a
          href={links.site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-ink text-canvas border border-ink hover:bg-ink/90 transition-colors"
        >
          Visit {links.siteLabel ?? "site"} →
        </a>
      )}
      {links.repo && (
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-line-strong text-ink hover:border-ink/30 transition-colors"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}

function ProblemSection({ study }: { study: CaseStudy }) {
  const { problem, problemAreas } = study;
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink mb-4">
        The problem
      </h2>
      <p className="text-muted text-lg leading-relaxed">{problem.intro}</p>
      {problem.bullets && problem.bullets.length > 0 && (
        <ul className="mt-6 space-y-2 text-muted leading-relaxed">
          {problem.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {problem.outro && (
        <p className="mt-6 text-muted text-lg leading-relaxed">
          {problem.outro}
        </p>
      )}
      {problemAreas && problemAreas.length > 0 && (
        <div className="mt-10 space-y-8">
          {problemAreas.map((area) => (
            <div key={area.title}>
              <h3 className="font-medium text-ink mb-2">{area.title}</h3>
              <p className="text-muted leading-relaxed">{area.description}</p>
              {area.bullets && (
                <ul className="mt-3 space-y-2 text-muted leading-relaxed">
                  {area.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const heroSrc = study.images?.hero;

  return (
    <>
      <article>
        <header className="mb-12 pb-12 border-b border-line">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {study.category}
            </span>
            {study.flagship && (
              <span className="px-2.5 py-0.5 text-xs font-medium text-accent border border-accent/30">
                Flagship
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-display-lg font-semibold text-ink text-balance">
            {study.title}
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl leading-relaxed">
            {study.tagline}
          </p>
          <p className="mt-4 text-sm text-ink/80">
            <span className="text-muted">Role · </span>
            {study.role}
            {study.timeline && (
              <>
                <span className="text-muted"> · </span>
                <span className="text-muted">{study.timeline}</span>
              </>
            )}
          </p>

          <div className="mt-8">
            <ProjectActions study={study} />
          </div>
        </header>

        {study.overview && (
          <p className="mb-14 text-muted text-lg leading-relaxed max-w-3xl">
            {study.overview}
          </p>
        )}

        {heroSrc && (
          <figure className="mb-14 border border-line bg-ink/[0.02] overflow-hidden">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={heroSrc}
                alt={study.images?.heroAlt ?? `${study.title} screenshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 72rem) 100vw, 72rem"
                priority
              />
            </div>
          </figure>
        )}

        <div className="max-w-3xl space-y-14">
          <ProblemSection study={study} />

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">
              The goal
            </h2>
            <p className="text-muted text-lg leading-relaxed">{study.goal}</p>
            {study.goalBullets && (
              <ul className="mt-6 space-y-2 text-muted leading-relaxed">
                {study.goalBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">
              My role
            </h2>
            <p className="text-ink font-medium mb-4">{study.role}</p>
            <ul className="space-y-2 text-muted leading-relaxed">
              {study.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">
              Solution
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {study.solution.intro}
            </p>
            {study.solution.bullets && (
              <ul className="mt-6 space-y-2 text-muted leading-relaxed">
                {study.solution.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {study.solutionSections && study.solutionSections.length > 0 && (
              <div className="mt-10 space-y-8">
                {study.solutionSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-medium text-ink mb-2">
                      {section.title}
                    </h3>
                    {section.description && (
                      <p className="text-muted leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="mt-3 space-y-2 text-muted leading-relaxed">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {study.features && study.features.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                Core features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="px-3 py-2 text-sm text-ink/85 border border-line"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-6">
              Technical architecture
            </h2>
            <div className="space-y-6">
              {study.architecture.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-medium text-ink mb-2">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 text-sm text-muted border border-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {study.architectureDecisions &&
            study.architectureDecisions.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink mb-6">
                  Architecture decisions
                </h2>
                <div className="space-y-8">
                  {study.architectureDecisions.map((decision) => (
                    <div key={decision.title}>
                      <h3 className="font-medium text-ink mb-2">
                        {decision.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-6">
              Key challenges
            </h2>
            <div className="space-y-8">
              {study.challenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="font-medium text-ink mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {(study.outcomeGroups && study.outcomeGroups.length > 0) ||
          study.outcome.length > 0 ? (
            <section>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                Outcomes
              </h2>
              {study.outcomeGroups && study.outcomeGroups.length > 0 ? (
                <div className="space-y-8">
                  {study.outcomeGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="font-medium text-ink mb-3">
                        {group.title}
                      </h3>
                      <ul className="space-y-3 text-muted text-lg leading-relaxed">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 text-muted text-lg leading-relaxed">
                  {study.outcome.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ) : null}

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">
              Lessons learned
            </h2>
            <ul className="space-y-3 text-muted text-lg leading-relaxed">
              {study.lessons.map((lesson) => (
                <li key={lesson} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          {study.impactStatement && (
            <section className="border-l-2 border-accent pl-6">
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                Impact
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {study.impactStatement}
              </p>
            </section>
          )}
        </div>

        <aside className="mt-16 pt-12 border-t border-line max-w-3xl">
          <p className="text-sm text-muted mb-4">Explore this project</p>
          <ProjectActions study={study} />
        </aside>

        {study.images?.gallery && study.images.gallery.length > 0 && (
          <div className="mt-14 grid sm:grid-cols-2 gap-4">
            {study.images.gallery.map((img) => (
              <figure
                key={img.src}
                className="border border-line overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 40rem) 100vw, 36rem"
                  />
                </div>
                {img.caption && (
                  <figcaption className="px-4 py-3 text-xs text-muted border-t border-line">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </article>
      <SiteFooter />
    </>
  );
}
