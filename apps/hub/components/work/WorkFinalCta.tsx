import { SOCIAL } from "@portfolio/config";
import Section from "@/components/Section";

export default function WorkFinalCta() {
  return (
    <Section
      id="contact"
      label="Next step"
      title="Have something you need built?"
      description="Tell me what you're trying to build. I'll tell you whether I can help."
      className="border-t border-line"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <a
          href={`mailto:${SOCIAL.email}?subject=Project%20inquiry`}
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-tight bg-ink text-canvas border border-ink hover:bg-ink/90 transition-colors"
        >
          Let&apos;s talk
        </a>
        <p className="text-sm text-muted">
          Or email{" "}
          <a
            href={`mailto:${SOCIAL.email}`}
            className="text-ink underline-offset-4 hover:underline"
          >
            {SOCIAL.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
