import Section from "@/components/Section";

export default function About() {
  return (
    <Section
      id="about"
      label="About"
      title="I build products where engineering meets responsibility."
    >
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
              className="text-ink underline-offset-4 hover:underline"
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
          <p className="text-ink font-medium border-l-2 border-accent/40 pl-4">
            I&apos;m most alive when the problem is hard, the users are real,
            and the solution has to hold up in production.
          </p>
        </div>
      </div>
    </Section>
  );
}
