import Link from "next/link";
import { DEFEND_SITE_URL, getBuildSiteUrl } from "@portfolio/config";
import Section from "@/components/Section";
import { HIGHLIGHT_PROJECTS } from "@/lib/content";

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
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {HIGHLIGHT_PROJECTS.map((project) => (
          <li key={project.slug} className="bg-canvas">
            <Link
              href={`${buildUrl}/work/${project.slug}`}
              className="block px-6 py-5 md:px-8 md:py-6 hover:bg-ink/[0.02] transition-colors group"
            >
              <p className="font-display text-lg font-medium text-ink group-hover:text-accent transition-colors">
                {project.name}
              </p>
              <p className="mt-1 text-sm text-muted">{project.context}</p>
              <p className="mt-4 text-sm font-medium text-accent group-hover:text-ink transition-colors">
                Case study →
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 text-sm font-medium">
        <Link
          href={buildUrl}
          className="text-accent hover:text-ink transition-colors"
        >
          All software projects → Build
        </Link>
        <a
          href={DEFEND_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-ink transition-colors"
        >
          Cybersecurity work → Defend
        </a>
      </div>
    </Section>
  );
}
