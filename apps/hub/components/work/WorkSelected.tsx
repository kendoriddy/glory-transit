import Section from "@/components/Section";
import { WORK_CASE_STUDIES } from "@/lib/work-content";

export default function WorkSelected() {
  return (
    <Section
      id="selected-work"
      label="Selected work"
      title="Case studies that show business outcomes."
      description="Real problems, shipped software, measurable impact where it exists."
      className="border-t border-line"
    >
      <ul className="grid gap-6 md:gap-8">
        {WORK_CASE_STUDIES.map((study) => (
          <li
            key={study.name}
            className="border border-line p-8 md:p-10 hover:border-line-strong transition-colors"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              {study.name}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-ink text-balance max-w-3xl">
              {study.title}
            </h3>

            {study.results && (
              <ul className="mt-8 space-y-3">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-3 text-sm md:text-base text-ink/85 leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            )}

            {study.focus && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {study.focus.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm border border-line text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
