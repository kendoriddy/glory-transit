import { DEFEND_SITE_URL, getBuildSiteUrl } from "@portfolio/config";
import Section from "@/components/Section";
import { HIGHLIGHT_PROJECTS } from "@/lib/content";

export default function FeaturedProjects() {
  const buildUrl = getBuildSiteUrl();

  return (
    <Section
      id="highlights"
      label="Highlights"
      title="Work across the stack"
      description="A few names from recent work — full case studies and project detail live on the portfolios below."
      className="border-t border-line"
    >
      <ul className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {HIGHLIGHT_PROJECTS.map((project) => (
          <li
            key={project.name}
            className="bg-canvas px-6 py-5 md:px-8 md:py-6"
          >
            <p className="font-display text-lg font-medium text-ink">
              {project.name}
            </p>
            {project.context && (
              <p className="mt-1 text-sm text-muted">{project.context}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 text-sm font-medium">
        <a
          href={buildUrl}
          className="text-accent hover:text-ink transition-colors"
        >
          All software projects → Build
        </a>
        <a
          href={DEFEND_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-ink transition-colors"
        >
          All cybersecurity work → Defend
        </a>
      </div>
    </Section>
  );
}
