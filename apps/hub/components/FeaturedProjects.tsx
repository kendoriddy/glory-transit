"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getBuildSiteUrl } from "@portfolio/config";
import Section from "@/components/Section";
import { HIGHLIGHT_PROJECTS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedProjects() {
  const buildUrl = getBuildSiteUrl();

  return (
    <Section
      id="work"
      label="Selected projects"
      title="Selected build experience."
      description="Flagship products — read the full case studies on Build for architecture, challenges, and outcomes."
      className="border-t border-line"
      headerExtra={
        <Link href="#contact" className="link-arrow shrink-0">
          Request project details →
        </Link>
      }
    >
      <ol className="divide-y divide-line border-y border-line">
        {HIGHLIGHT_PROJECTS.map((project, index) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease }}
          >
            <Link
              href={`${buildUrl}/work/${project.slug}`}
              className="group grid md:grid-cols-[4rem_1fr_auto] gap-6 md:gap-10 py-10 md:py-12 items-start hover:bg-accent-soft/30 transition-colors px-2 -mx-2"
            >
              <span className="font-display text-3xl md:text-4xl font-extrabold text-accent/60 group-hover:text-accent transition-colors tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <p className="eyebrow text-[11px] mb-3">{project.context}</p>
                <h3 className="font-display text-display-md text-ink group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-muted border border-line"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block relative w-40 h-28 shrink-0 overflow-hidden border border-line gold-ring">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="10rem"
                  />
                ) : (
                  <div className="absolute inset-0 bg-surface" />
                )}
              </div>
            </Link>
          </motion.li>
        ))}
      </ol>

      <div className="mt-10">
        <Link href={buildUrl} className="link-arrow">
          View all software projects → Build
        </Link>
      </div>
    </Section>
  );
}
