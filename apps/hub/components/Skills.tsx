import Section from "@/components/Section";
import { SKILL_GROUPS } from "@/lib/content";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Capabilities"
      title="Skills across engineering, AI, and security"
      description="Grouped by practice area — no ratings, no progress bars, just the tools and disciplines I work with daily."
      className="border-t border-line"
    >
      <div className="grid sm:grid-cols-2 gap-12 md:gap-16">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-lg font-semibold text-ink mb-5">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 text-sm text-ink/85 border border-line hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
