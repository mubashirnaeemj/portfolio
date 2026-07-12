import { Section, Reveal } from "./primitives";
import { TIMELINE } from "./data";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <Section
      id="timeline"
      index="04"
      label="Path"
      title="How I got here."
      intro="The short version — school, a club, an internship, and a growing pile of production systems."
    >
      <ol className="relative border-l border-hairline pl-8 md:pl-12">
        <span className="absolute left-0 top-0 h-full w-px bg-hairline" />
        {TIMELINE.map((t, i) => (
          <Reveal
            key={t.title}
            delay={i * 0.05}
            as="li"
            className="relative mb-14 last:mb-0"
          >
            <span
              className={cn(
                "absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background md:-left-[49px]",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  i === 0 ? "bg-accent" : "bg-primary",
                )}
              />
            </span>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-subtle">
                {t.year}
              </span>
              <span className="rounded-full border border-hairline bg-surface/60 px-2 py-0.5 font-mono-tight text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.tag}
              </span>
            </div>
            <h3 className="mt-3 font-display text-[1.6rem] leading-tight tracking-tight text-foreground md:text-[1.9rem]">
              {t.title}
              <span className="text-muted-foreground"> · {t.place}</span>
            </h3>
            <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground">
              {t.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}