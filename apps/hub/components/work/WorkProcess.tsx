import Section from "@/components/Section";
import { WORK_PROCESS } from "@/lib/work-content";

export default function WorkProcess() {
  return (
    <Section
      id="how-i-work"
      label="How I work"
      title="A clear path from problem to production."
      description="Concise process. No ceremony — just enough structure to ship the right thing."
      className="border-t border-line"
    >
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
        {WORK_PROCESS.map((item, index) => (
          <li key={item.step} className="bg-canvas px-6 py-8 md:px-7 md:py-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-lg font-semibold text-ink">
              {item.step}
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
