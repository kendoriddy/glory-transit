import Section from "@/components/Section";
import { ABOUT_STATS } from "@/lib/content";

export default function About() {
  return (
    <Section
      id="about"
      label="About me"
      title="I build products where engineering meets responsibility."
      className="border-t border-line"
    >
      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {ABOUT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="glass-card px-6 py-8 text-center md:text-left"
          >
            <p className="font-display text-4xl font-extrabold text-accent tracking-tight">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted uppercase tracking-[0.08em] font-extrabold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-muted text-lg leading-relaxed">
        <div className="space-y-6">
          <p>
            I started in software engineering because I wanted to make things
            that work — not slide decks or prototypes that never ship. Over five
            years, I&apos;ve built across the stack: React and Next.js on the
            front end, Laravel and Node on the back end, Flutter for mobile, and
            PostgreSQL and MySQL where data has to be right.
          </p>
          <p>
            That breadth matters. When you understand how systems connect, you
            make better tradeoffs — what to automate, what to keep human, and
            where security cannot be an afterthought.
          </p>
        </div>
        <div className="space-y-6">
          <p>
            I founded{" "}
            <a
              href="https://schoolorbit.ng"
              className="text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SchoolOrbit
            </a>{" "}
            after seeing how much time schools lose to administrative friction.
            The goal was never to add another dashboard — it was to give
            teachers their time back and give administrators one place to run
            their school.
          </p>
          <p>
            Today I&apos;m deliberately growing into cybersecurity while
            continuing to ship software. I care about GRC, incident response,
            and building secure systems — because the products I launch will
            handle real people&apos;s data and real institutions&apos;
            operations.
          </p>
        </div>
      </div>

      <blockquote className="mt-14 border-l-2 border-accent pl-6 md:pl-8">
        <p className="font-display text-xl md:text-2xl font-extrabold text-ink leading-snug text-balance">
          &ldquo;I&apos;m most alive when the problem is hard, the users are
          real, and the solution has to hold up in production.&rdquo;
        </p>
      </blockquote>
    </Section>
  );
}
