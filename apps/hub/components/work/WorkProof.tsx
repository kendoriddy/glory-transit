import { WORK_PROOF } from "@/lib/work-content";

export default function WorkProof() {
  return (
    <section
      className="px-6 py-16 md:py-20 border-y border-line"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-content mx-auto">
        <p
          id="proof-heading"
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-10 md:mb-12"
        >
          Results from previous work
        </p>

        <dl className="grid sm:grid-cols-3 gap-px bg-line border border-line">
          {WORK_PROOF.map((stat) => (
            <div
              key={stat.label}
              className="bg-canvas px-6 py-8 md:px-8 md:py-10"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted leading-snug">
                  {stat.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
