"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DEFEND_SITE_URL, getBuildSiteUrl } from "@portfolio/config";
import Section from "@/components/Section";
import { HIGHLIGHT_PROJECTS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedProjects() {
  const buildUrl = getBuildSiteUrl();

  return (
    <Section
      id="highlights"
      label="Highlights"
      title="Selected work"
      description="Flagship products — read the full case studies on Build for architecture, challenges, and outcomes."
      className="border-t border-line"
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {HIGHLIGHT_PROJECTS.map((project, index) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
          >
            <Link
              href={`${buildUrl}/work/${project.slug}`}
              className="group block h-full overflow-hidden border border-line bg-canvas/80 hover:border-accent/30 hover:shadow-lift transition-all duration-500 ease-smooth"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/[0.03]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24rem"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-ink/[0.04]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-80" />
              </div>
              <div className="px-6 py-5 md:px-7 md:py-6">
                <p className="font-display text-lg font-medium text-ink group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-muted">{project.context}</p>
                <p className="mt-4 text-sm font-medium text-accent inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-0.5">
                  Case study →
                </p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 text-sm font-medium">
        <Link
          href={buildUrl}
          className="text-accent hover:text-ink transition-colors link-underline w-fit"
        >
          All software projects → Build
        </Link>
        <a
          href={DEFEND_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-ink transition-colors link-underline w-fit"
        >
          Cybersecurity work → Defend
        </a>
      </div>
    </Section>
  );
}
