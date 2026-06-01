import { SITE_URLS } from "@portfolio/config";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";

export default function Writing() {
  return (
    <Section
      id="writing"
      label="Writing"
      title="Thinking in public"
      description="Technical articles on engineering, product, and security — published on Medium to share what I learn while building."
      className="border-t border-line bg-ink/[0.02]"
    >
      <div className="max-w-xl">
        <p className="text-lg text-muted leading-relaxed">
          Writing forces clarity. I document architecture decisions, lessons
          from production incidents, and perspectives on building in the African
          tech ecosystem.
        </p>
        <div className="mt-8">
          <Button href={SITE_URLS.medium} variant="primary" external>
            Read on Medium →
          </Button>
        </div>
      </div>
    </Section>
  );
}
