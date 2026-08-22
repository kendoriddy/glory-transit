import { SOCIAL } from "@portfolio/config";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function WorkFinalCta() {
  return (
    <Section
      id="contact"
      label="Next step"
      title="Have something you need built?"
      description="Tell me what you're trying to build. I'll tell you whether I can help."
      className="border-t border-line"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-6">
          <p className="text-sm text-muted leading-relaxed">
            Share a short note about your project — internal tool, product
            feature, workflow, or idea — and I&apos;ll reply with whether
            I&apos;m a good fit.
          </p>
          <p className="text-sm text-muted">
            Or email{" "}
            <a
              href={`mailto:${SOCIAL.email}?subject=Project%20inquiry`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {SOCIAL.email}
            </a>
          </p>
        </div>
        <ContactForm submitLabel="Let's talk" />
      </div>
    </Section>
  );
}
