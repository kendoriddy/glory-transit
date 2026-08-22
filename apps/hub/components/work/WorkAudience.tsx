import Section from "@/components/Section";
import { WORK_AUDIENCES } from "@/lib/work-content";

export default function WorkAudience() {
  return (
    <Section
      id="who-i-help"
      label="Who I help"
      title="Built for teams that need leverage, not headcount."
      className="border-t border-line"
    >
      <ul className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {WORK_AUDIENCES.map((audience) => (
          <li
            key={audience}
            className="bg-canvas px-6 py-6 md:px-8 md:py-7 text-base md:text-lg text-ink leading-snug"
          >
            {audience}
          </li>
        ))}
      </ul>
    </Section>
  );
}
