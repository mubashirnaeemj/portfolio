import { Section, Reveal } from "./primitives";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          I&apos;d rather replace a boring process
          <br />
          than demo a clever model.
        </>
      }
      intro={
        <>
          A lot of AI work stops at a prototype in a notebook. What I enjoy is the part after —
          taking a repetitive business process, wrapping it in a queue and a database, and letting
          it run unattended until someone forgets it was ever manual.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-7">
          <div className="space-y-6 text-[15.5px] leading-relaxed text-muted-foreground">
            <p>
              Most of my work sits behind the API — Python services, async workers, integrations
              with the systems businesses already run on. I like the shape of a well-designed
              backend: clear boundaries, honest retries, logs you can trust when something goes
              wrong at 3am.
            </p>
            <p>
              AI is a tool inside that. Voice agents, reasoning loops, and enrichment pipelines
              earn their keep when they replace hours of human work per week — not when they
              generate a nice screenshot. I care about latency, cost per run, idempotency, and how
              the system fails, in that order.
            </p>
            <p>
              I&apos;ve shipped calling platforms doing hundreds of AI conversations a day, desktop
              copilots reps actually keep open, and n8n workflows that quietly outperform
              full-time sourcing teams. That&apos;s the work I&apos;m interested in.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {[
              ["Based in", "Pakistan · Remote"],
              ["Working on", "Voice agents, call platforms, backend"],
              ["Comfortable with", "0→1, production, on-call"],
              ["Not interested in", "Chatbot demos with no path to prod"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="grid grid-cols-[110px_1fr] gap-6 py-4 font-mono-tight text-[12px]"
              >
                <span className="uppercase tracking-[0.16em] text-subtle">{k}</span>
                <span className="text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}